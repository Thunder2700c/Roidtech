const featuredVideos = [
  {
    title: "Get iOS Style Depth Effect Clock on Samsung | FREE",
    thumbnail: "assets/thumb1.jpg",  // ← Add your actual thumbnails here
    embedId: "-co1VuiDGCE",
    desc: "Unlimited iOS-style depth effect clocks on any Galaxy phone"
  },
  {
    title: "Samsung S23 / S23 FE / S23 Ultra November Update Review",
    thumbnail: "assets/thumb2.jpg",
    embedId: "JRAHwreGlA0",
    desc: "Battery, Green Line fix, heating & camera changes"
  },
  {
    title: "Samsung Official AppLock is FINALLY Here!",
    thumbnail: "assets/thumb3.jpg",
    embedId: "F01QJDYIN-c",
    desc: "New features added in One UI 8.5"
  }
];

function renderVideos() {
  document.getElementById('video-container').innerHTML = featuredVideos.map(v => `
    <div class="video-item glass-effect anim-card">
      <div class="video-thumb">
        <img src="\( {v.thumbnail}" alt=" \){v.title}">
        <div class="play-button">▶</div>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <p>${v.desc}</p>
      </div>
    </div>
  `).join('');
}

renderVideos();

// Rest of your GSAP code (unchanged – keep exactly as you have it)
gsap.registerPlugin(ScrollTrigger);
gsap.from(".hero-heading span", { y: 120, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
gsap.from(".anim-el", { opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: "power2.out" });

document.querySelectorAll('.anim-card, .section-title').forEach(el => {
  gsap.from(el, { opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
  });
});

gsap.to("#s23fe-model", {
  yPercent: -200, xPercent: 100, rotationY: 720, rotationX: 120, scale: 0.4, opacity: 0,
  ease: "none",
  scrollTrigger: { trigger: "#hero", start: "top top", end: "+=180%", scrub: 1.2 }
});

gsap.to("#s23fe-model", {
  y: "+=20", rotationY: "+=15", rotationX: "-=10",
  duration: 14, repeat: -1, yoyo: true, ease: "sine.inOut"
});
