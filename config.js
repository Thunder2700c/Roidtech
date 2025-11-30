// --- 1. FEATURED YOUTUBE VIDEOS ---
// To update a video: 
// 1. Change the title. 
// 2. Change the description (desc).
// 3. MOST IMPORTANT: Change the embedId to the 11-character code from the YouTube URL.
const featuredVideos = [
  { 
    title: "🔥 Enable Depth Effect Clock on Samsung Lock Screen | FREE", 
    embedId: "-co1VuiDGCE", 
    desc: "iOS-style Depth Effect clock on any Galaxy." 
  },
  { 
    title: "Samsung S23/23FE/S23 Ultra November Update Review", 
    embedId: "JRAHwreGlA0", 
    desc: "Battery, heat & camera changes." 
  },
  { 
    title: "Samsung Official AppLock App is Here 🔒", 
    embedId: "F01QJDYIN-c", 
    desc: "Official AppLock finally released!" 
  }
];

// --- 2. DOWNLOAD HUB LINKS ---
// To add new download sections, create a new entry below like "otherApps: []"
// To add a new download, copy and paste an existing entry, then update the name and the URL.
const downloadLinks = {
  // ORIGINAL CATEGORY 1: Good Lock Modules
  goodLockModules: [
    { name: "Theme Park (APK)", url: "https://www.youtube.com/watch?v=_dsiIOwzhcs9" }, 
    { name: "Keys Cafe (APK)", url: "https://www.youtube.com/watch?v=eN7VawUXD-00" }, 
    { name: "Home Up (APK)", url: "https://www.youtube.com/watch?v=eN7VawUXD-01" }
  ],
  
  // ORIGINAL CATEGORY 2: System Apps
  systemApps: [
    { name: "Samsung AppLock (Latest)", url: "https://www.youtube.com/watch?v=eN7VawUXD-02" }, 
    { name: "Good Guardians", url: "https://www.youtube.com/watch?v=eN7VawUXD-03" }       
  ],

  // NEW CATEGORY 3: Other Essential Apps
  otherEssentialApps: [
    { name: "Bixby Routines Plus", url: "https://link.to/routines-plus" },
    { name: "Samsung Expert RAW", url: "https://link.to/expert-raw" },
    { name: "Vanish Mode App", url: "https://link.to/vanish-mode" }
  ],
  
  // NEW CATEGORY 4: Archive & Older Links
  archiveLinks: [
    { name: "Old Good Lock 2023", url: "https://link.to/old-lock-23" },
    { name: "Obscure One UI Tool", url: "https://link.to/obscure-tool" }
  ]
};

// Remember to ensure commas separate all categories!
