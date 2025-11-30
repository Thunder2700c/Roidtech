/* BASE STYLES */
:root {
    --bg-color: #0d0d0d; /* Deep Black/Gray */
    --text-color: #e0e0e0; /* Light Gray */
    --accent-color: #007aff; /* Classic iOS Blue */
    --accent-dark: #0056b3;
    --glass-bg: rgba(255, 255, 255, 0.08); /* Transparent White for Glass */
    --font-family: 'Inter', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font-family);
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
    /* Optional: If you want a subtle grain effect on the body for texture */
    /* background-image: url('data:image/png;base64,...'); */ 
}

/* Glassmorphism Effect */
.glass-effect {
    background: var(--glass-bg);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px); /* Safari support */
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Stronger shadow for depth */
    transition: transform 0.3s, box-shadow 0.3s;
}

.glass-effect:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
}

a {
    color: var(--accent-color);
    text-decoration: none;
    transition: color 0.3s;
}

a:hover {
    color: var(--accent-dark);
}

.section {
    min-height: 100vh;
    padding: 80px 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 1;
}

/* Optional: Subtle Overlay for Hero */
.background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(0, 122, 255, 0.1), rgba(13, 13, 13, 1) 50%);
    z-index: -1;
}


/* TYPOGRAPHY */
.section-title {
    font-size: 2.5em;
    font-weight: 900;
    margin-bottom: 60px;
    letter-spacing: 2px;
    color: var(--text-color);
}

/* HERO SECTION */
#hero {
    min-height: 100vh;
    padding-top: 0;
}

.hero-content {
    max-width: 900px;
    position: relative;
}

.hero-heading {
    font-size: 5vw;
    line-height: 1.1;
    margin-bottom: 30px;
    font-weight: 900;
}

.hero-heading span {
    display: block;
    overflow: hidden;
}

.hero-heading .line-1 { color: #fff; }
.hero-heading .line-2 { color: var(--accent-color); }
.hero-heading .line-3 { font-size: 0.6em; color: #aaa; }

.hero-subtext {
    font-size: 1.2em;
    margin-bottom: 40px;
    max-width: 600px;
}

/* CTA BUTTONS */
.cta-button {
    display: inline-block;
    padding: 15px 35px;
    background-color: var(--accent-color);
    color: #fff;
    font-weight: 700;
    border-radius: 10px; /* Softer radius */
    transition: background-color 0.3s, transform 0.2s;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cta-button:hover {
    background-color: var(--accent-dark);
    transform: translateY(-3px); /* Deeper lift on hover */
    color: #fff; 
}

.cta-button.small {
    padding: 10px 25px;
    margin-top: 30px;
    border-radius: 8px;
}

/* GUIDE GRID SECTION */
.guide-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1200px;
}

.guide-card {
    padding: 30px;
    border-radius: 15px; /* Rounded corners for glass effect */
    text-align: left;
    border-left: 5px solid var(--accent-color);
    transform-style: preserve-3d; /* For subtle 3D hover effect */
}

.guide-card:hover {
    transform: perspective(1000px) rotateY(1deg) scale(1.02);
}

.guide-card h3 {
    color: var(--accent-color);
    margin-bottom: 10px;
    font-size: 1.5em;
}

/* VIDEO SHOWCASE SECTION */
#video-showcase {
    min-height: auto;
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    width: 100%;
    max-width: 1200px;
}

.video-item {
    border-radius: 15px; /* Rounded corners */
    overflow: hidden;
    text-align: left;
}

.video-embed {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
    height: 0;
}

.video-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.video-info {
    padding: 15px;
    /* Apply glass effect to info area for a layered look */
    background: rgba(255, 255, 255, 0.05); 
}

.video-info h4 {
    font-size: 1.1em;
    margin-bottom: 5px;
    color: #fff;
}

/* FOOTER */
footer {
    padding: 40px 5%;
    /* Footer now uses glass effect */
    border-radius: 0; /* Keep corners sharp if you want it full width */
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9em;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links a {
    margin-left: 20px;
    color: #aaa;
}

.social-links a:hover {
    color: var(--accent-color);
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
    .hero-heading {
        font-size: 10vw;
    }
    .guide-grid {
        grid-template-columns: 1fr;
    }
    footer {
        flex-direction: column;
        text-align: center;
    }
    .social-links {
        margin-top: 15px;
    }
}
