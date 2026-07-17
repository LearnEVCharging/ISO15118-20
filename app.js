// ISO15118-20 Website JavaScript - Clean Light Theme Version

// Legal content data
const legalContent = {
  terms: `
    <h2>Terms of Service</h2>
    <p><strong>Last Updated:</strong> January 20, 2025</p>
    
    <h3>1. Acceptance of Terms</h3>
    <p>By accessing and using the ISO15118-20.com website ("the Website"), you agree to be bound by these Terms of Service ("Terms") and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
    
    <h3>2. Use of the Website</h3>
    <p>You may use our Website for lawful purposes only. You agree not to use the Website:</p>
    <ul>
      <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
      <li>To transmit, or procure the sending of, any advertising or promotional material not solicited</li>
      <li>To impersonate or attempt to impersonate the Website, a Website employee, another user, or any other person or entity</li>
      <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website</li>
    </ul>
    
    <h3>3. Intellectual Property Rights</h3>
    <p>The Website and its original content, features, and functionality are and will remain the exclusive property of ISO15118-20.com and its licensors. The Website is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
    
    <h3>4. User Content</h3>
    <p>Our Website may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for Content that you post to the Website, including its legality, reliability, and appropriateness.</p>
    
    <h3>5. Privacy Policy</h3>
    <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Website, to understand our practices.</p>
    
    <h3>6. Disclaimer of Warranties</h3>
    <p>The information on this Website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:</p>
    <ul>
      <li>Disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose</li>
      <li>Does not warrant that the Website will be uninterrupted or error-free</li>
      <li>Makes no warranty as to the accuracy, completeness, or reliability of any information</li>
    </ul>
    
    <h3>7. Limitation of Liability</h3>
    <p>In no event shall ISO15118-20.com, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, punitive, special, or consequential damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Website.</p>
    
    <h3>8. Changes to Terms</h3>
    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
    
    <h3>9. Governing Law</h3>
    <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>
    
    <h3>10. Contact Information</h3>
    <p>If you have any questions about these Terms of Service, please contact us at learnevcharging@gmail.com.</p>
  `,
  privacy: `
    <h2>Privacy Policy</h2>
    <p><strong>Last Updated:</strong> January 20, 2025</p>
    
    <h3>1. Introduction</h3>
    <p>ISO15118-20.com ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by ISO15118-20.com.</p>
    
    <h3>2. Information We Collect</h3>
    
    <h4>Information You Provide to Us</h4>
    <p>We collect information you provide directly to us, such as when you:</p>
    <ul>
      <li>Subscribe to our newsletter</li>
      <li>Contact us through our contact form</li>
      <li>Participate in surveys or promotions</li>
      <li>Create an account or profile</li>
    </ul>
    
    <h4>Information We Collect Automatically</h4>
    <p>When you access or use our Website, we automatically collect information about you, including:</p>
    <ul>
      <li>Log data (IP address, browser type, pages visited, time spent)</li>
      <li>Device information (device type, operating system, unique device identifiers)</li>
      <li>Usage information (features used, preferences, interactions)</li>
    </ul>
    
    <h3>3. How We Use Your Information</h3>
    <p>We use the information we collect to:</p>
    <ul>
      <li>Provide, maintain, and improve our Website and services</li>
      <li>Send you newsletters, updates, and promotional materials</li>
      <li>Respond to your inquiries and provide customer support</li>
      <li>Analyze usage patterns and improve user experience</li>
      <li>Comply with legal obligations and protect our rights</li>
    </ul>
    
    <h3>4. Information Sharing and Disclosure</h3>
    <p>We may share your information in the following circumstances:</p>
    <ul>
      <li>With your consent or at your direction</li>
      <li>With service providers who assist us in operating our Website</li>
      <li>For legal reasons, such as to comply with laws or protect rights</li>
      <li>In connection with a merger, acquisition, or sale of assets</li>
    </ul>
    
    <h3>5. Data Security</h3>
    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
    
    <h3>6. Cookies and Tracking Technologies</h3>
    <p>We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings, but disabling cookies may affect Website functionality.</p>
    
    <h3>7. Your Rights and Choices</h3>
    <p>You have certain rights regarding your personal information:</p>
    <ul>
      <li>Access: Request a copy of your personal information</li>
      <li>Correction: Request correction of inaccurate information</li>
      <li>Deletion: Request deletion of your personal information</li>
      <li>Opt-out: Unsubscribe from marketing communications</li>
    </ul>
    
    <h3>8. International Data Transfers</h3>
    <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.</p>
    
    <h3>9. Children's Privacy</h3>
    <p>Our Website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
    
    <h3>10. Changes to This Privacy Policy</h3>
    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
    
    <h3>11. Contact Us</h3>
    <p>If you have any questions about this Privacy Policy, please contact us at learnevcharging@gmail.com.</p>
  `,
  disclaimer: `
    <h2>Disclaimer</h2>
    <p><strong>Last Updated:</strong> January 20, 2025</p>
    
    <h3>1. General Information</h3>
    <p>The information provided on ISO15118-20.com is for general informational and educational purposes only. It should not be considered as professional advice for specific situations or implementations.</p>
    
    <h3>2. No Warranties</h3>
    <p>All information on this website is provided "as is" without warranty of any kind. We make no representations or warranties of any kind, express or implied, about:</p>
    <ul>
      <li>The accuracy, reliability, or completeness of the information</li>
      <li>The suitability of the information for any particular purpose</li>
      <li>The currency or timeliness of the information</li>
      <li>The absence of errors or omissions in the information</li>
    </ul>
    
    <h3>3. Technical Information Accuracy</h3>
    <p>While we strive to provide accurate and up-to-date information about ISO15118-20 and related technologies, the field is rapidly evolving. Technical specifications, standards, and implementations may change without notice.</p>
    
    <h3>4. Professional Advice Disclaimer</h3>
    <p>The information on this website should not be used as a substitute for professional technical, legal, or business advice. Always consult with qualified professionals for:</p>
    <ul>
      <li>Technical implementation decisions</li>
      <li>Legal and regulatory compliance matters</li>
      <li>Business strategy and investment decisions</li>
      <li>Safety and security assessments</li>
    </ul>
    
    <h3>5. External Links</h3>
    <p>This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on external websites.</p>
    
    <h3>6. Standards and Specifications</h3>
    <p>References to ISO15118-20 and other standards are for informational purposes only. Official standard documents should be obtained from the relevant standards organizations for authoritative information.</p>
    
    <h3>7. Implementation Risks</h3>
    <p>Implementation of ISO15118-20 and related technologies involves technical and business risks. Users should conduct thorough risk assessments and due diligence before making implementation decisions.</p>
    
    <h3>8. Market Information</h3>
    <p>Market data, forecasts, and trend analysis presented on this website are based on available information and should not be considered as investment advice or guarantees of future performance.</p>
    
    <h3>9. Limitation of Liability</h3>
    <p>In no event will we be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage arising from the use of this website or reliance on the information provided.</p>
    
    <h3>10. Indemnification</h3>
    <p>Users agree to indemnify and hold harmless ISO15118-20.com from any claims, damages, or expenses arising from their use of the information provided on this website.</p>
    
    <h3>11. Updates and Modifications</h3>
    <p>This disclaimer may be updated periodically to reflect changes in our policies or legal requirements. Users are responsible for reviewing the disclaimer regularly.</p>
    
    <h3>12. Contact Information</h3>
    <p>If you have questions about this disclaimer or need clarification on any information provided, please contact us at learnevcharging@gmail.com.</p>
  `
};

// Navigation handling
function initializeNavigation() {
  console.log('🚀 Initializing navigation system...');
  
  const sections = document.querySelectorAll('.section');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  function setActiveSection(sectionId) {
    console.log(`📍 Navigating to section: ${sectionId}`);
    
    // Hide all sections
    sections.forEach((section) => {
      section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
      console.log(`✅ Successfully activated section: ${sectionId}`);
    } else {
      console.error(`❌ Section not found: ${sectionId}`);
      return;
    }
    
    // Update navigation active state
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach((link) => {
      link.classList.remove('active');
    });
    
    // Set active nav link
    const activeNavLink = document.querySelector(`[data-section="${sectionId}"].nav-link`);
    if (activeNavLink) {
      activeNavLink.classList.add('active');
    }
    
    // Close mobile menu if open
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Add click event listeners to all elements with data-section attribute
  const allNavElements = document.querySelectorAll('[data-section]');
  console.log(`🔗 Found ${allNavElements.length} navigation elements`);
  
  allNavElements.forEach((element, index) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const sectionId = element.dataset.section;
      console.log(`🖱️ Navigation element ${index + 1} clicked: ${sectionId}`);
      if (sectionId) {
        setActiveSection(sectionId);
      }
    });
  });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('📱 Mobile menu toggle clicked');
      navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  // Initialize with home section
  setActiveSection('home');
  console.log('✅ Navigation system initialized successfully');
}

// Initialize accordion sections (technical details)
function initializeAccordions() {
  console.log('🔧 Initializing accordion functionality...');
  
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  console.log(`📋 Found ${accordionHeaders.length} accordion items`);
  
  accordionHeaders.forEach((header, index) => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`🔽 Accordion header ${index + 1} clicked`);
      
      const accordionItem = header.parentElement;
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');
      
      // Toggle active state
      const isActive = accordionItem.classList.contains('active');
      
      if (isActive) {
        // Close this accordion
        accordionItem.classList.remove('active');
        content.classList.remove('active');
        if (icon) icon.textContent = '+';
        console.log(`📤 Accordion ${index + 1} closed`);
      } else {
        // Open this accordion
        accordionItem.classList.add('active');
        content.classList.add('active');
        if (icon) icon.textContent = '−';
        console.log(`📥 Accordion ${index + 1} opened`);
      }
    });
  });
}

// Initialize FAQ accordion
function initializeFAQ() {
  console.log('❓ Initializing FAQ accordion...');
  
  const faqQuestions = document.querySelectorAll('.faq-question');
  console.log(`📝 Found ${faqQuestions.length} FAQ items`);
  
  faqQuestions.forEach((question, index) => {
    question.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`❓ FAQ question ${index + 1} clicked`);
      
      const answer = question.nextElementSibling;
      const isActive = answer.classList.contains('active');
      
      // Close all FAQ answers first
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('active');
      });
      
      // Toggle current answer
      if (!isActive) {
        answer.classList.add('active');
        console.log(`✅ FAQ answer ${index + 1} opened`);
      } else {
        console.log(`❌ FAQ answer ${index + 1} closed`);
      }
    });
  });
}

// Blog search functionality
function initializeBlogSearch() {
  console.log('🔍 Initializing blog search...');
  
  const searchInput = document.getElementById('blogSearch');
  const blogCards = document.querySelectorAll('.blog-card');
  
  if (searchInput && blogCards.length > 0) {
    console.log(`📚 Blog search initialized with ${blogCards.length} posts`);
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      console.log(`🔎 Searching for: "${searchTerm}"`);
      
      let visibleCount = 0;
      
      blogCards.forEach((card, index) => {
        const title = card.querySelector('.blog-card-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
        
        const searchableText = `${title} ${excerpt} ${tags.join(' ')}`;
        
        if (searchTerm === '' || searchableText.includes(searchTerm)) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      console.log(`📊 Search results: ${visibleCount} posts visible`);
    });
  } else {
    console.log('⚠️ Blog search elements not found');
  }
}

// Initialize forms
function initializeForms() {
  console.log('📝 Initializing form handling...');
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    console.log('📧 Newsletter form found');
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (validateEmail(email)) {
        showNotification('✅ Thank you for subscribing! You will receive updates about ISO15118-20 developments and industry trends.', 'success');
        newsletterForm.reset();
        console.log('📧 Newsletter subscription successful');
      } else {
        showNotification('❌ Please enter a valid email address.', 'error');
        console.log('❌ Newsletter subscription failed - invalid email');
      }
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    console.log('📞 Contact form found');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const email = formData.get('email');
      const name = formData.get('name');
      const subject = formData.get('subject');
      const message = formData.get('message');

      // Validation
      if (!name || !email || !subject || !message) {
        showNotification('❌ Please fill out all required fields.', 'error');
        console.log('❌ Contact form validation failed - missing fields');
        return;
      }
      
      if (!validateEmail(email)) {
        showNotification('❌ Please enter a valid email address.', 'error');
        console.log('❌ Contact form validation failed - invalid email');
        return;
      }
      
      // Success
      showNotification(`✅ Thank you ${name}! Your message has been sent to learnevcharging@gmail.com. We will respond within 24 hours.`, 'success');
      contactForm.reset();
      console.log('📞 Contact form submission successful');
    });
  }
}

// Initialize advertising tier interactions
function initializeAdvertisingTiers() {
  console.log('💰 Initializing advertising tiers...');
  
  const tierButtons = document.querySelectorAll('[data-tier]');
  console.log(`🎯 Found ${tierButtons.length} advertising tier buttons`);
  
  tierButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const tier = e.target.dataset.tier;
      let message = '';
      
      switch(tier) {
        case 'header':
          message = '✅ Thank you for your interest in Header Banner sponsorship ($2,500/month). We will contact you at learnevcharging@gmail.com with details and next steps.';
          break;
        case 'content':
          message = '✅ Thank you for your interest in Mid-Content sponsorship ($1,500/month). We will contact you at learnevcharging@gmail.com with details and next steps.';
          break;
        case 'footer':
          message = '✅ Thank you for your interest in Footer sponsorship ($750/month). We will contact you at learnevcharging@gmail.com with details and next steps.';
          break;
        default:
          message = '✅ Thank you for your interest in our advertising opportunities. We will contact you at learnevcharging@gmail.com with details.';
      }
      
      showNotification(message, 'success');
      console.log(`💰 Advertising tier selected: ${tier}`);
    });
  });
}

// Utility functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <p>${message}</p>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  // Add styles if not already present
  if (!document.querySelector('#notification-styles')) {
    const styles = document.createElement('style');
    styles.id = 'notification-styles';
    styles.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 16px 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        z-index: 1000;
        border-left: 4px solid #3B82F6;
        animation: slideIn 0.3s ease-out;
      }
      .notification--success {
        border-left-color: #10B981;
      }
      .notification--error {
        border-left-color: #F59E0B;
      }
      .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }
      .notification-content p {
        margin: 0;
        color: #1F2937;
        font-size: 14px;
        line-height: 1.5;
      }
      .notification-close {
        background: none;
        border: none;
        font-size: 20px;
        color: #6B7280;
        cursor: pointer;
        padding: 0;
        line-height: 1;
      }
      .notification-close:hover {
        color: #374151;
      }
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @media (max-width: 480px) {
        .notification {
          left: 20px;
          right: 20px;
          max-width: none;
        }
      }
    `;
    document.head.appendChild(styles);
  }
  
  // Add to page
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Initialize legal modals
function initializeLegalModals() {
  console.log('⚖️ Initializing legal modals...');
  
  const legalModal = document.getElementById('legalModal');
  const legalContentDiv = document.getElementById('legalContent');

  // Make functions globally available
  window.showLegalContent = function(type) {
    console.log(`⚖️ Showing legal content: ${type}`);
    if (legalContent[type] && legalContentDiv && legalModal) {
      legalContentDiv.innerHTML = legalContent[type];
      legalModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      console.log(`✅ Legal modal opened for: ${type}`);
    } else {
      console.error('❌ Legal content or modal elements not found');
    }
  };

  window.closeLegalModal = function() {
    console.log('❌ Closing legal modal');
    if (legalModal) {
      legalModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };
}

// Initialize modal event handlers
function initializeModalHandlers() {
  console.log('🖼️ Initializing modal event handlers...');
  
  // Close modals when clicking outside content
  window.onclick = function(event) {
    const legalModal = document.getElementById('legalModal');
    
    if (event.target === legalModal || event.target.classList.contains('modal-overlay')) {
      window.closeLegalModal();
    }
  };

  // Close modals with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      window.closeLegalModal();
    }
  });
}

// Performance monitoring
function initializePerformanceMonitoring() {
  console.log('📊 Initializing performance monitoring...');
  
  // Log page load performance
  window.addEventListener('load', function() {
    const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
    
    // Log any images that failed to load
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      img.addEventListener('error', () => {
        console.warn(`🖼️ Image ${index + 1} failed to load: ${img.src}`);
      });
    });
  });
  
  // Log JavaScript errors
  window.addEventListener('error', function(event) {
    console.error('❌ JavaScript error:', event.error);
  });
  
  // Log unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    console.error('❌ Unhandled promise rejection:', event.reason);
  });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  console.log('🔄 Initializing smooth scrolling...');
  
  // Handle any anchor links that might be added
  document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      const targetId = target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
}

// Initialize accessibility features
function initializeAccessibility() {
  console.log('♿ Initializing accessibility features...');
  
  // Add keyboard navigation for interactive elements
  const interactiveElements = document.querySelectorAll('.btn, .nav-link, .faq-question, .accordion-header');
  
  interactiveElements.forEach(element => {
    element.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });
  
  // Ensure proper focus management for modals
  document.addEventListener('focusin', function(e) {
    const legalModal = document.getElementById('legalModal');
    if (legalModal && legalModal.style.display === 'block' && !legalModal.contains(e.target)) {
      const firstFocusable = legalModal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  });
}

// Main initialization function
function initializeWebsite() {
  console.log('🌟 ISO15118-20.com - Starting website initialization...');
  console.log('🎨 Theme: Clean Light Design');
  
  try {
    // Core functionality
    initializeNavigation();
    initializeAccordions();
    initializeFAQ();
    initializeBlogSearch();
    initializeForms();
    initializeAdvertisingTiers();
    initializeLegalModals();
    initializeModalHandlers();
    
    // Enhanced features
    initializePerformanceMonitoring();
    initializeSmoothScrolling();
    initializeAccessibility();
    
    console.log('✅ ISO15118-20.com - Website initialization complete');
    console.log('🚀 All systems operational');
    
    // Show welcome message in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setTimeout(() => {
        console.log('👋 Welcome to ISO15118-20.com! Development mode detected.');
        console.log('💡 Pro tip: Check the console for detailed activity logs.');
      }, 1000);
    }
    
  } catch (error) {
    console.error('❌ Error during website initialization:', error);
    
    // Show user-friendly error message
    showNotification('⚠️ Some features may not work properly. Please refresh the page.', 'error');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeWebsite);

// Additional initialization when page is fully loaded
window.addEventListener('load', function() {
  console.log('📈 ISO15118-20.com - Page fully loaded and ready');
  console.log('🎯 All resources loaded successfully');
  
  // Log final statistics
  const sections = document.querySelectorAll('.section').length;
  const navLinks = document.querySelectorAll('.nav-link').length;
  const blogPosts = document.querySelectorAll('.blog-card').length;
  const faqItems = document.querySelectorAll('.faq-item').length;
  
  console.log(`📊 Website statistics:`);
  console.log(`   • Sections: ${sections}`);
  console.log(`   • Navigation links: ${navLinks}`);
  console.log(`   • Blog posts: ${blogPosts}`);
  console.log(`   • FAQ items: ${faqItems}`);
  console.log('🎉 Ready for user interaction!');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    console.log('👁️ Page hidden - user switched tabs');
  } else {
    console.log('👁️ Page visible - user returned');
  }
});

// Export functions for potential external use
window.ISO15118Website = {
  showNotification,
  validateEmail,
  initializeNavigation,
  initializeForms
};