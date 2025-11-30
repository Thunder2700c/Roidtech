// --- 1. DYNAMIC CONTENT INJECTION (USES DATA FROM config.js) ---

function renderVideos() {
  // Checks if featuredVideos array from config.js is loaded
  if (typeof featuredVideos === 'undefined') return; 

  document.getElementById('video-container').innerHTML = featuredVideos.map(v => `
    <div class="video-item glass-effect anim-card">
      <div class="video-embed"><iframe 
        src="https://www.youtube.com/embed/${v.embedId}?rel=0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </div>
      <div class="video-info">
          <h4>${v.title}</h4>
          <p>${v.desc}</p>
      </div>
    </div>
  `).join('');
}
renderVideos();

// --- 2. GSAP ANIMATIONS ---

gsap.registerPlugin(ScrollTrigger);

// Hero text
gsap.from(".hero-heading span", { y: 120, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
gsap.from(".anim-el", { opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: "power2.out" });

// Cards
document.querySelectorAll('.anim-card, .section-title').forEach(el => {
  gsap.from(el, { opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
  });
});

// 3D Phone – Epic scroll magic
gsap.to("#s23fe-model", {
  "camera-orbit": "360deg 90deg 2.5m", 
  "field-of-view": "50deg",             
  opacity: 0,                          
  ease: "none",
  scrollTrigger: { 
    trigger: "#hero", 
    start: "top top", 
    end: "bottom top", 
    scrub: 1.2 
  }
});

// Gentle idle float
gsap.to("#s23fe-model", {
  "camera-orbit": "+=10deg -=5deg", 
  duration: 14, 
  repeat: -1, 
  yoyo: true, 
  ease: "sine.inOut"
});
