# Blog Post 1 – ISO 15118-20 Explained: Key Upgrades From ISO 15118-2 

**Published:** 12 July 2025  
**Author:** ISO15118-20 Editorial Team  
**Reading time:** 8 min  

### Overview  
ISO 15118-20 is the long-awaited second generation of the vehicle-to-grid (V2G) communication standard. While ISO 15118-2 laid the foundations for features such as **Plug & Charge** and smart charging, the new “-20” revision radically extends the protocol family to cover true bidirectional energy transfer, wireless power transfer, stronger security, and richer data exchange between the electric vehicle (EV) and the electric vehicle supply equipment (EVSE)[2][16]. This article breaks down the most important upgrades and what they mean for charge-point operators (CPOs), OEMs, and software vendors.

### 1 Bidirectional Power Transfer (BPT)  
• **Dynamic & Scheduled Modes.** ISO 15118-20 introduces both *dynamic* and *scheduled* control modes for V2G cycling, allowing the EVSE to request rapid set-point changes (dynamic) or exchange an entire power schedule in one payload (scheduled)[3][8][13].  
• **AC & DC support.** Unlike ISO 15118-2, which limited BPT to AC, the new standard explicitly supports DC BPT—including control parameters for unified and split-DC architectures[3].  
• **Grid Services Ready.** With fine-grained schedules (up to 12 supporting points) the EV can now participate in frequency regulation and demand-response markets.

### 2 Enhanced Security (TLS 1.3)  
• **Mandatory Mutual Authentication.** Every V2G session must now negotiate TLS 1.3 with certificate-based mutual authentication[4][5].  
• **Larger Keys & Post-Quantum Prep.** 448- and 521-bit ECC curves are permitted, inflating certificate sizes to ≈1.6 kB and forcing OEMs to budget at least 12 kB secure storage for multiple contract chains[5].  
• **Second-Generation PKI.** CharIN’s V2G PKI v2.0 introduces tiered CAs and cross-certification to cope with multi-contract scenarios[6].

### 3 Multi-Contract Handling  
A single EV may now present multiple e-mobility contracts and let the SECC decide which one to use based on tariff, roaming agreements, or user preference[16]. This is a game-changer for fleet operators juggling several EMSP relationships.

### 4 Wireless Power Transfer & ACD-P  
ISO 15118-20 defines message sets for **inductive charging** (WPT) and **automatic connection device-pantograph** systems, paving the way for hands-free depot charging of buses and robo-taxis[17].

### 5 Multiplexed Communication & Renegotiation  
The new multiplexing layer allows multiple logical channels over a single V2G TCP stream so that services can be added or renegotiated without interrupting the high-level communication[17].

### Practical Implications  
Implementers should budget for firmware upgrades on both EVCC and SECC to support TLS 1.3, dramatically larger certificates, and dynamic BPT. Charge-point back-office systems (OCPP 2.1) must also be updated to process bidirectional schedules[21].

### Looking Ahead  
ISO 15118-20 is not backward compatible with “-2”; coexistence strategies (DIN 70121 fallbacks, dual stacks) will dominate product road-maps through 2028. Early movers can, however, unlock premium V2G services and grid-service revenue now.

---

# Blog Post 2 – Demystifying Plug & Charge Under ISO 15118-20: Certificates, PKI & TLS 1.3  

**Published:** 12 July 2025  
**Author:** ISO15118-20 Editorial Team  
**Reading time:** 10 min  

### Why Plug & Charge Matters  
The promise of “plug in, walk away” elevates user experience to Tesla-like convenience. Under ISO 15118-20, Plug & Charge (PnC) becomes more robust thanks to stricter cryptographic rules and multi-contract support[2][4].

### Certificate Hierarchy Refresher  
1. **V2G Root CA** – cross-signed roots forming a global trust anchor.  
2. **Tier-1 CAs** – OEM, CSO, eMSP, CPS and Provisioning CAs[6].  
3. **Leaf Certificates** – Contract, OEM provisioning, and MAC-binding certs provisioned into EV TPM 2.0 modules[6][20].

### Session Flow (ISO 15118-20)  
1. **TLS Handshake** – EV and EVSE mutually authenticate using TLS 1.3 handshake and exchange certificate chains[15].  
2. **Certificate Installation Service** – If the EV needs a new contract certificate, it calls the *CertificateInstallation* service using the OEM provisioning certificate[6].  
3. **Authorization Req/Res** – SECC validates certificate (CRL/OCSP) and queries CSMS for contract status[18].  
4. **Energy Transfer** – Once authorized, billing data is signed with the EV’s private key ensuring non-repudiation.

### eMAID, OEM & TPM  
ISO 15118-20 promotes Trusted Platform Module (TPM 2.0) usage for key isolation; non-TPM fallbacks must implement equivalent secure storage[20].

### Best-Practice Checklist  
• Rotate contract certificates every 3 years or 60,000 kWh—whichever comes first.  
• Enforce OCSP Stapling to cut handshake latency to <150 ms.  
• Pre-load at least 10 V2G Root certs to accommodate roaming growth.  
• Monitor CRL sizes—keep under 64 kB to fit PLC frame budget.

### Common Pitfalls  
• **Clock Skew.** PLC modems without stable RTCs can invalidate certificates; use NTP sync via HomePlug Green PHY management channel.  
• **Cipher Suite Mismatch.** Ensure EV and EVSE support `TLS_AES_128_GCM_SHA256` & `TLS_CHACHA20_POLY1305_SHA256`[5][10].

### Future-Proofing  
Post-quantum hybrid certs (ECDSA-P256 + Dilithium-2) are being prototyped in CharIN Task Force PQC for inclusion in the first Technical Corrigendum (TC) of ISO 15118-20.

---

# Blog Post 3 – Engineering Bidirectional Charging With ISO 15118-20: A Developer’s Playbook  

**Published:** 12 July 2025  
**Author:** ISO15118-20 Editorial Team  
**Reading time:** 9 min  

### Step 1 Select Your BPT Mode  
• **Dynamic Control Mode** – Real-time power set-points every 200 ms, ideal for fast-response frequency regulation[3].  
• **Scheduled Control Mode** – Time-indexed schedules (15 min granularity) for day-ahead energy markets.

### Step 2 Map Message Sequence  
During *ServiceDiscovery*, the SECC advertises ServiceID 6 (Bidirectional Power Transfer). The EV then requests *ServiceDetailReq* and negotiates parameters such as `BPTChannel`, `MobilityNeedsMode`, and `GeneratorMode`[3].

### Step 3 Handle ScheduleExchange  
`ScheduleExchangeReq` includes `DepartureTime`, `EVTargetEnergyRequest` and optional `EVMaximumV2XEnergyRequest` allowing the SECC to optimise SOC targets within grid limits[8].

### Step 4 Implement Charge Control  
The SECC’s PID loop should track the dynamic set-point within ±5 % accuracy to avoid ISO15118‐20 compliance errors (`V2G20-1403`). High-bandwidth DC DC converters (>5 kHz) are recommended.

### Step 5 Back-Office Integration  
OCPP 2.1 adds native “BPT” messages (`SetPowerProfile`, `GetDischargeSchedule`) aligned with the ISO 15118-20 schedule schema[21]. Ensure mapping of `ScheduleID` and proper handling of negative energy values (discharging).

### Lab Tools  
• **Vector CANoe E-Mobility Option** – Pre-built ISO15118-20 & PLC stacks with TLS 1.3 Smart Charging PKI profile[10].  
• **CharIN Testival Harness** – Open-source XML message validator (BPT profile v1.0)[8].

### Field-Test Checklist  
1. EV > 10 kW discharge capability confirmed.  
2. Round-trip efficiency measured; aim for >85 %.[12]  
3. Islanding protection per IEEE 1547 validated.

### Market Drivers  
California’s VGI Roadmap expects 10 GW of EV battery capacity under V2G programs by 2030; early ISO 15118-20 compliance positions CPOs for lucrative grid-service contracts.

---

# Blog Post 4 – TLS 1.3 & Post-Quantum Ready: Securing EV Charging for 2030  

**Published:** 12 July 2025  
**Author:** ISO15118-20 Editorial Team  
**Reading time:** 7 min  

### From TLS 1.2 to 1.3  
TLS 1.3 halves the number of round-trips (2 → 1) and eliminates vulnerable cipher suites (RSA-PKCS#1 v1.5, CBC-SHA256)[4][5]. The mandatory cipher list for ISO 15118-20 EV-EVSE traffic is:

| Cipher | Forward-Secrecy | Notes |
|--------|-----------------|-------|
| `TLS_AES_128_GCM_SHA256` | ✔︎ | Default in most stacks[5] |
| `TLS_CHACHA20_POLY1305_SHA256` | ✔︎ | PLC-friendly on low-power ECUs |
| `TLS_AES_256_GCM_SHA384` | ✔︎ | Optional high-strength |

### Larger Certificates  
ECDSA-P521 keys inflate DER cert size to ≈1.6 kB—3× bigger than ISO 15118-2. Plan for 12 kB secure storage in the EV[5].

### Mutual Authentication Workflow  
1. SECC sends `CertificateChain`, EV verifies against stored V2G Roots.  
2. EV selects valid Contract cert, sends `CertChain` in ClientHello.  
3. Both peers verify chain & OCSP.

### Post-Quantum Cryptography (PQC)  
• NIST Round-3 finalists suggest migrating to Dilithium for signatures.  
• ISO TC22/SC31 has opened a Study Item (ISO/NP 15118-50) to specify hybrid ECDSA + Dilithium certs by 2027.

### Implementation Tips  
• Use a crypto library with fully constant-time ECDSA (e.g., BoringSSL fips-2025 branch).  
• Enable TLS 1.3 early-data only after certificate validation to avoid replay risk.

---

# Blog Post 5 – How to Get ISO 15118-20 Certified: Testing Roadmap & Pitfalls  

**Published:** 12 July 2025  
**Author:** ISO15118-20 Editorial Team  
**Reading time:** 8 min  

### Certification Bodies  
CharIN’s **CCS Certification Program** now covers ISO 15118-20 DC BPT Dynamic Mode with official test cases released in Sept 2024[8][3].

### Step-by-Step Roadmap  
1. **Pre-Compliance Audit.** Perform a gap analysis against CharIN Interop Guide v1.0 and ISO/IEC 61851-23-4 for DC chargers.  
2. **Conformance Testing.** Run XML message validation using official CCS Conformance Test System (CTS).  
3. **Interoperability Testival.** Attend CharIN Testivals to test against ≥20 peer implementations.  
4. **Security Audit.** Verify PKI implementation, OCSP handling, cipher suite compliance, and TPM provisioning[5][6].  
5. **Field Trial.** Minimum 100 h of public operation without critical errors.

### Common Failure Modes  
• Incorrect PLC timing → `V2GTP-1023` violations.  
• EVSE clock drift → certificate validity errors >1 min.  
• Neglecting `EVPresentEnergyLevel` bounds during BPT discharge leading to SOC mis-reports.

### Documentation Checklist  
• Test reports signed by ISO 17025 accredited lab.  
• Security policy describing key storage & revocation.  
• Firmware version & CRC for reproducibility.

### Fast-Track Tips  
Submit a delta report if your charger is based on a certified ISO 15118-2 design—saves ≈30 % test effort.
