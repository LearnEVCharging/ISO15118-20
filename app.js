// ISO15118-20 Website JavaScript - Clean Light Theme Version

// Legal content data
const legalContent = {
  terms: `
    <h2>Terms of Service</h2>
    <p><strong>Last Updated:</strong> July 17, 2026</p>
    
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
    <p><strong>Last Updated:</strong> July 17, 2026</p>

    <h3>1. Overview</h3>
    <p>ISO15118-20.com is an informational website about the ISO 15118-20 EV charging communication standard. We have deliberately kept it simple: the site does not run analytics or advertising trackers, does not set cookies, and does not ask you to create an account or submit personal information through forms.</p>

    <h3>2. Information We Collect</h3>
    <p>We do not collect personal information through this website. There are no newsletter or contact forms that transmit data to us. If you choose to email us directly, we will receive the information you include in that email (such as your email address and message) and use it only to respond to you.</p>

    <h3>3. Hosting Logs</h3>
    <p>Like most websites, our hosting provider may automatically record standard technical request data (such as IP address and browser type) for security and reliability purposes. We do not use this data to identify individuals.</p>

    <h3>4. Third-Party Links</h3>
    <p>This site links to external websites (for example, learnevcharging.com and standards bodies such as ISO and CharIN). Those sites have their own privacy policies, and we are not responsible for their practices.</p>

    <h3>5. Changes to This Policy</h3>
    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</p>

    <h3>6. Contact Us</h3>
    <p>If you have any questions about this Privacy Policy, please contact us at learnevcharging@gmail.com.</p>
  `,
  disclaimer: `
    <h2>Disclaimer</h2>
    <p><strong>Last Updated:</strong> July 17, 2026</p>
    
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

  // Open the section named in the URL hash (e.g. /#technical from a guide page), else home
  const initialHash = window.location.hash.slice(1);
  if (initialHash && document.getElementById(initialHash)) {
    setActiveSection(initialHash);
  } else if (document.getElementById('home')) {
    setActiveSection('home');
  }

  // React to cross-page hash links like /#faq
  window.addEventListener('hashchange', () => {
    const h = window.location.hash.slice(1);
    if (h && document.getElementById(h)) setActiveSection(h);
  });

  // Keep the footer copyright year current
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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
  initializeNavigation
};