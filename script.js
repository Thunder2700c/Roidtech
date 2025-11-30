// --- 1. DATA ARRAY: ALL THREE VIDEOS ARE CORRECT AND FINAL ---

const featuredVideos = [
    {
        title: "🔥 Enable Depth Effect Clock on Samsung Lock Screen | FREEE",
        embedId: "-co1VuiDGCE", 
        description: "A quick guide on how to get the awesome iOS-style Depth Effect clock on your Samsung Galaxy phone."
    },
    {
        title: "Samsung S23/23fe S23 Ultra November Update Review",
        embedId: "JRAHwreGlA0", 
        description: "A detailed review of the November security update for the S23 series, covering battery, heat, and camera quality."
    },
    {
        title: "Samsung Official AppLock App is Here🔒",
        embedId: "F01QJDYIN-c", 
        description: "The official AppLock is finally here! How to enable it and its impact on performance and security."
    },
];


// --- 2. DYNAMIC CONTENT INJECTION ---

function renderVideos() {
    const container = document.getElementById('video-container');
    container.innerHTML = featuredVideos.map(video => `
        <div class="video-item glass-effect anim-card">
            <div class="video-embed">
                <iframe 
                    src="https://www.youtube.com/embed/${video.embedId}?rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-info">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
            </div>
        </div>
    `).join('');
}

renderVideos(); // Run the function on page load


// --- 3. GSAP ANIMATIONS (Initialization) ---

gsap.registerPlugin(ScrollTrigger);

// A. Hero Content Animation
const heroTL = gsap.timeline();

heroTL.from(".hero-heading span", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.15
})
.from(".anim-el", {
    duration: 0.6,
    opacity: 0,
    y: 20,
    ease: "power2.out"
}, "-=0.3"); 


// B. Card Scroll Animation
document.querySelectorAll('.anim-card, .anim-el:not(.cta-button)').forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });
});

// --- C. S23 FE FLOATING SCROLLTRIGGER ANIMATION ---

const s23fe = document.getElementById('s23fe-model');

if (s23fe) {
    // 1. Initial State: Set the phone to its starting position (Right side, slightly rotated)
    gsap.set(s23fe, {
        opacity: 0.9,
        rotationX: 10,  // Initial 3D tilt
        rotationY: -15, // Initial side rotation
    });
    
    // 2. ScrollTrigger: Define the motion that happens when scrolling
    gsap.to(s23fe, {
        y: "-150%",          // Moves the phone up relative to the viewport
        x: "50%",            // Moves it further right during the scroll
        rotationX: 80,       // Tumbles on the X-axis (more dynamic)
        rotationY: 180,      // Flips halfway around the Y-axis
        rotationZ: 30,       // Tilts the screen slightly
        scale: 0.8,          // Shrinks slightly
        opacity: 0,          // Fades out as the scroll ends

        ease: "power1.inOut",
        
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",     
            end: "bottom top",    
            scrub: true,         
        }
    });
    
    // 3. Floating Effect: Add a subtle, continuous background float 
    gsap.to(s23fe, {
        y: "+=20", // Move up and down 20px
        rotation: 2, // Subtle continuous rotation
        ease: "sine.inOut",
        repeat: -1, // Infinite loop
        yoyo: true, // Go back and forth
        duration: 8,
    });
}
