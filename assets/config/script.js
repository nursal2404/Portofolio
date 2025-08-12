// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1200,
  once: true,
  offset: 100,
  easing: "ease-out-cubic",
});

// Particle Effects
function createEnhancedParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleTypes = ["type-1", "type-2", "type-3"];
  const particleCount = 80;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];

    Object.assign(particle.style, {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${4 + Math.random() * 4}s`
    });

    particle.className = `particle ${type}`;
    particlesContainer.appendChild(particle);
  }
}

// Name Animation
function enhancedNameAnimation() {
  const text = "MUHADZIB NURSAID";
  const element = document.getElementById("typewriter");
  let i = 0;

  // Reset element state
  element.textContent = "";
  element.style.opacity = "1";
  element.style.transform = "none";
  element.style.visibility = "visible"; // Ensure element is visible from start

  function addNextChar() {
    if (i < text.length) {
      element.textContent = text.substring(0, i + 1);
      i++;
      setTimeout(addNextChar, 120);
    }
  }

  addNextChar();
}

// Rotating Skills Text
function enhancedRotatingText() {
  const skills = [
    "Backend Development",
    "Database Management",
    "API Development",
    "Machine Learning",
  ];

  const skillElement = document.getElementById("rotating-text");
  const cursor = document.querySelector(".typing-cursor");
  const container = document.querySelector(".skills-input-container");
  let currentIndex = 0;

  // Initial setup
  skillElement.textContent = skills[0];
  skillElement.style.transition = "all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
  cursor.style.display = "inline";
  skillElement.style.opacity = "1"; // Ensure visible from start

  function animateSkillChange() {
    // Fade out current skill
    skillElement.style.opacity = "0";
    skillElement.style.transform = "translateY(-20px) scale(0.9)";
    skillElement.style.filter = "blur(5px)";

    setTimeout(() => {
      // Change to next skill
      currentIndex = (currentIndex + 1) % skills.length;
      skillElement.textContent = skills[currentIndex];

      // Fade in new skill
      setTimeout(() => {
        skillElement.style.opacity = "1";
        skillElement.style.transform = "translateY(0) scale(1)";
        skillElement.style.filter = "blur(0)";
        
        // Accent color highlight
        skillElement.style.color = "var(--accent-color)";
        setTimeout(() => {
          skillElement.style.color = "var(--primary-color)";
        }, 200);
      }, 50);
    }, 300);
  }

  // Container breathing effect
  function breathingAnimation() {
    container.style.transition = "all 2s ease-in-out";
    container.style.boxShadow = "0 0 35px rgba(0, 212, 255, 0.4)";

    setTimeout(() => {
      container.style.boxShadow = "0 0 25px rgba(0, 212, 255, 0.2)";
    }, 1000);
  }

  // Start intervals
  setInterval(breathingAnimation, 2000);
  setInterval(animateSkillChange, 3500);
}

// Scroll Effects
function enhancedScrollEffects() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const isScrolled = scrollY > 50;

    navbar.style.background = isScrolled 
      ? "rgba(10, 10, 10, 0.98)" 
      : "rgba(10, 10, 10, 0.9)";
    navbar.style.boxShadow = isScrolled 
      ? "0 4px 30px rgba(0, 0, 0, 0.5)" 
      : "0 4px 30px rgba(0, 0, 0, 0.3)";

    // Animate floating shapes
    document.querySelectorAll(".shape").forEach((shape, index) => {
      shape.style.transform = `translateY(${scrollY * (0.5 + index * 0.1)}px)`;
    });
  });
}

// Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Form Handling
function initFormHandling() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
      button.style.background = "linear-gradient(45deg, var(--accent-green), var(--accent-green))";

      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        button.style.background = "";
        this.reset();
      }, 2000);
    }, 1500);
  });
}

// Click Effects
function initClickEffects() {
  const interactiveElements = document.querySelectorAll(
    ".btn-custom, .social-link, .tech-tag"
  );

  interactiveElements.forEach((el) => {
    el.addEventListener("click", function(e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      Object.assign(ripple.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
        position: "absolute",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.3)",
        pointerEvents: "none",
        animation: "ripple 0.6s ease-out",
      });

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation styles
  if (!document.querySelector("style[data-ripple]")) {
    const style = document.createElement("style");
    style.setAttribute("data-ripple", "true");
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Data project dengan gambar
const projectsData = {
    "Medical Diagnosis Chatbot": {
        images: [
            "assets/projects/chatbot-1.jpg",
            "assets/projects/chatbot-2.jpg"
        ],
        description: "NLP-powered chatbot using LSTM with 90% diagnostic accuracy. This project involved training a model on medical datasets to provide preliminary diagnoses based on patient symptoms.",
        tech: ["Python", "TensorFlow", "NLTK", "Keras", "Pandas"],
        demoLink: "#",
        codeLink: "#"
    },
    "Agent AI - Flowise": {
        images: [
            "assets/projects/agent-ai-1.png",
        ],
        description: "Custom AI agent built using Flowise, integrating LLM, vector database, and API connectors for automated tasks",
        tech: ["Flowise", "LLM", "Vector DB", "API Connector"],
        demoLink: null,
        codeLink: "https://github.com/nursal2404/Agent_AI_Flowise"
    },
    "Analytics Dashboard": {
        images: [
            "assets/projects/power-bi-1.png",
        ],
        description: "Data visualization dashboard with Power BI integration",
        tech: ["Power BI"],
        demoLink: null,
        codeLink: "https://github.com/nursal2404/Learning/tree/main/PowerBI"
    },
    // Tambahkan data untuk project lainnya
};

// Inisialisasi modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const viewButtons = document.querySelectorAll('.project-links a[href="#"]:first-child');
    
    // Setup event listeners untuk tombol view
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectItem = this.closest('.project-item');
            const projectTitle = projectItem.querySelector('h3').textContent;
            
            openModal(projectTitle);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    });
    
    // Close modal ketika klik di luar konten
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
    
    // Fungsi untuk membuka modal
    function openModal(projectTitle) {
        const projectData = projectsData[projectTitle];
        
        if (projectData) {
            // Set judul
            document.getElementById('modalProjectTitle').textContent = projectTitle;
            
            // Set deskripsi
            document.getElementById('modalProjectDesc').textContent = projectData.description;
            
            // Set teknologi
            const techContainer = document.getElementById('modalProjectTech');
            techContainer.innerHTML = '';
            projectData.tech.forEach(tech => {
                const techSpan = document.createElement('span');
                techSpan.textContent = tech;
                techContainer.appendChild(techSpan);
            });
            
            // Set gambar
            const imagesContainer = document.querySelector('.project-images');
            imagesContainer.innerHTML = '';
            projectData.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = projectTitle;
                imagesContainer.appendChild(img);
            });
            
            // Set link
            document.getElementById('modalProjectDemo').href = projectData.demoLink || 'javascript:void(0)';
            document.getElementById('modalProjectDemo').style.opacity = projectData.demoLink ? '1' : '0.5';
            document.getElementById('modalProjectDemo').style.cursor = projectData.demoLink ? 'pointer' : 'not-allowed';
            document.getElementById('modalProjectDemo').onclick = projectData.demoLink ? null : function(e) { e.preventDefault(); };

            document.getElementById('modalProjectCode').href = projectData.codeLink;
            
            // Tampilkan modal
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Disable scrolling
        }
    }
});


// Performance Optimization
function optimizePerformance() {
  let ticking = false;

  function updateAnimations() {
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateAnimations);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick);
}

// Certificate PDF Modal Handler
function initCertificateModal() {
  const pdfLinks = document.querySelectorAll('.pdf-certificate');
  const modal = document.getElementById('certificateModal');
  const pdfViewer = document.getElementById('pdfViewer');
  const modalTitle = document.getElementById('certificateModalLabel');
  const downloadLink = document.getElementById('downloadPdf');
  
  if (!modal || !pdfViewer) {
    console.log('Modal elements not found');
    return;
  }

  console.log('Found PDF links:', pdfLinks.length);

  pdfLinks.forEach((link, index) => {
    console.log(`Setting up link ${index + 1}:`, link.href);
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const pdfUrl = this.getAttribute('href');
      const certificateTitle = this.getAttribute('data-certificate-title') || 'Certificate';
      
      // Add ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      Object.assign(ripple.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}px`,
        top: `${y}px`,
        position: 'absolute',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.3)',
        pointerEvents: 'none',
        animation: 'ripple 0.6s ease-out',
        zIndex: '1000'
      });

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
      
      // Show loading state
      pdfViewer.innerHTML = `
        <div class="pdf-loading">
          <i class="fas fa-spinner"></i>
          Loading PDF...
        </div>
      `;
      
      // Update modal title
      modalTitle.textContent = certificateTitle;
      
      // Update download link
      downloadLink.href = pdfUrl;
      
      // Show modal
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
      
      // Set PDF source with timeout for better error handling
      setTimeout(() => {
        pdfViewer.src = pdfUrl;
      }, 100);
      
      // Handle PDF load events
      pdfViewer.onload = function() {
        console.log('PDF loaded successfully');
      };
      
      pdfViewer.onerror = function() {
        console.log('PDF load error');
        pdfViewer.innerHTML = `
          <div class="pdf-loading">
            <i class="fas fa-exclamation-triangle"></i>
            <div>
              <p>Unable to load PDF preview.</p>
              <p>Please use the download button below to view the certificate.</p>
            </div>
          </div>
        `;
      };
    });
  });
  
  // Handle modal close
  modal.addEventListener('hidden.bs.modal', function() {
    // Clear PDF viewer when modal is closed
    pdfViewer.src = '';
    pdfViewer.innerHTML = '';
  });
}

// Initialize everything
document.addEventListener("DOMContentLoaded", function() {
  // Set initial styles to prevent FOUC (Flash of Unstyled Content)
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.visibility = "hidden";
  }

  // Initialize functions
  createEnhancedParticles();
  enhancedScrollEffects();
  initSmoothScrolling();
  initFormHandling();
  initClickEffects();
  optimizePerformance();
  initCertificateModal(); // Add certificate modal handler

  // Start animations with proper sequencing
  setTimeout(() => {
    enhancedNameAnimation();
    if (heroContent) {
      heroContent.style.visibility = "visible";
    }
  }, 100);

  setTimeout(enhancedRotatingText, 500);
});

// Make functions available globally if needed
window.addEventListener('load', function() {
  // Any final adjustments after everything loads
});