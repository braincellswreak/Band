// Shery Image Effect
Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.98, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.7702349869451697 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 1.96, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.67, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.09, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 1.37, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.82, range: [0, 1] },
    antialias_threshold: { value: 0.05, range: [0, 0.1] },
    noise_height: { value: 0.31, range: [0, 2] },
    noise_scale: { value: 55.73, range: [0, 100] },
  },
  gooey: true,
});

// Text Animation Lines
const lines = [
  ["REMEMBER", "FORGET", "AWAKEN", "BREATHE", "REMEMBER"],
  ["That You Will", "Discover", "Grow", "POLYPHIA", "shred"],
  ["DIE.", "LIVE.", "RISE.", "FALL.", "DIE."],
];

const elemDivs = document.querySelectorAll("#heroleft .elem");
let currentIndex = 0;

elemDivs.forEach((elem, i) => {
  const h1s = elem.querySelectorAll("h1");
  h1s.forEach((h1, idx) => {
    if (idx > 0) h1.remove();
    else h1.textContent = lines[i][0];
  });
});

function animateTextChange(nextIndex) {
  elemDivs.forEach((elem, i) => {
    const currentH1 = elem.querySelector("h1");

    gsap.to(currentH1, {
      y: -60,
      opacity: 0,
      duration: 0.45,
      ease: "power4.in",
      onComplete: () => {
        currentH1.textContent = lines[i][nextIndex];

        gsap.fromTo(
          currentH1,
          {
            y: 60,
            opacity: 0,
            scale: 1.25,
            rotation: gsap.utils.random(-20, 20),
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.65,
            ease: "elastic.out(1, 0.5)",
            delay: 0.05 * i,
          }
        );
      },
    });
  });

  const btn = document.querySelector("#heroleft button");
  if (btn) {
    gsap.fromTo(
      btn,
      { scale: 1, backgroundColor: "#fff" },
      {
        scale: 1.12,
        backgroundColor: "#d8d8d8",
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      }
    );
  }
}

// Click Event for Text Animation
document.addEventListener("click", function (e) {
  // Don't animate text if clicking on nav links
  if (e.target.tagName === "A" || e.target.tagName === "BUTTON") return;

  currentIndex++;
  if (currentIndex >= lines[0].length) currentIndex = 0;
  animateTextChange(currentIndex);
});

// ================== BACKEND FUNCTIONALITY ==================

// Route Definitions
const routes = {
  explore: {
    title: "EXPLORE POLYPHIA",
    content: `
      <h2>About Polyphia</h2>
      <p>Polyphia is an American progressive instrumental rock band from Plano, Texas. Formed in 2010, the band consists of guitarists Tim Henson and Scott LePage, bassist Clay Gober, and drummer Clay Aeschliman.</p>
      <h2>Latest Album</h2>
      <p>Remember That You Will Die (RTYWD) is the fourth studio album by American instrumental progressive metal band Polyphia, released on October 28, 2022, through Rise Records. The album features collaborations with several artists.</p>
      <h2>Band Members</h2>
      <ul>
        <li>Tim Henson - Guitar</li>
        <li>Scott LePage - Guitar</li>
        <li>Clay Gober - Bass</li>
        <li>Clay Aeschliman - Drums</li>
      </ul>
    `,
  },
  merch: {
    title: "MERCH STORE",
    content: `
      <h2>Official Merchandise</h2>
      <div class="merch-grid">
        <div class="merch-item">
          <h3>T-Shirts</h3>
          <p>Collection of premium band t-shirts</p>
        </div>
        <div class="merch-item">
          <h3>Albums & Vinyl</h3>
          <p>Physical copies and vinyl records</p>
        </div>
        <div class="merch-item">
          <h3>Accessories</h3>
          <p>Posters, stickers, and more</p>
        </div>
      </div>
      <a href="https://merch.polyphia.com" target="_blank" class="merch-link">Shop Now →</a>
    `,
  },
  tabs: {
    title: "GUITAR TABS",
    content: `
      <h2>Official Tab Books</h2>
      <p>Learn to play Polyphia's songs with official guitar tab books and sheet music.</p>
      <div class="tab-list">
        <a href="https://www.ultimate-guitar.com/artist/polyphia_146447" target="_blank" class="tab-item">Ultimate Guitar Tabs</a>
        <a href="https://www.sheetmusicdirect.com/search?q=polyphia" target="_blank" class="tab-item">Sheet Music Direct</a>
        <a href="https://www.guitarworld.com/news/polyphia" target="_blank" class="tab-item">Guitar World</a>
      </div>
    `,
  },
  listen: {
    title: "LISTEN NOW",
    content: `
      <h2>Stream Polyphia</h2>
      <p>Listen to Polyphia on all major streaming platforms.</p>
      <div class="platform-grid">
        <a href="https://open.spotify.com/artist/4vGrte8FDu062Ntj0RsPiZ" target="_blank" class="platform-item">Spotify</a>
        <a href="https://music.apple.com/us/artist/polyphia/1230166897" target="_blank" class="platform-item">Apple Music</a>
        <a href="https://www.youtube.com/c/PolyphiaOfficial" target="_blank" class="platform-item">YouTube Music</a>
        <a href="https://soundcloud.com/polyphia" target="_blank" class="platform-item">SoundCloud</a>
      </div>
    `,
  },
  tour: {
    title: "TOUR DATES",
    content: `
      <h2>Upcoming Shows</h2>
      <div class="tour-dates">
        <div class="tour-item">
          <h3>World Tour 2025</h3>
          <p>Check official website for dates and locations</p>
        </div>
        <div class="tour-item">
          <h3>Festivals</h3>
          <p>Various music festivals worldwide</p>
        </div>
      </div>
      <a href="https://polyphia.com/tour" target="_blank" class="tour-link">View All Dates →</a>
    `,
  },
};

// Modal Functions
function openModal(routeKey) {
  const modal = document.getElementById("contentModal");
  const route = routes[routeKey];

  if (!route || !modal) return;

  modal.querySelector("#modalTitle").textContent = route.title;
  modal.querySelector("#modalContent").innerHTML = route.content;

  // Show modal
  modal.style.display = "block";

  // Animate in
  gsap.fromTo(
    modal,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
  );

  // Animate content
  gsap.fromTo(
    "#modalContent",
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, delay: 0.2 }
  );
}

function closeModal() {
  const modal = document.getElementById("contentModal");
  if (!modal) return;

  // Animate out
  gsap.to(modal, {
    opacity: 0,
    scale: 0.9,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      modal.style.display = "none";
    },
  });
}

// Initialize Backend
function initBackend() {
  // Explore Button
  const exploreBtn = document.querySelector("#heroleft button");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal("explore");
    });
  }

  // Navigation Links
  document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      const text = link.textContent.trim().toLowerCase();
      if (text === "merch") openModal("merch");
      else if (text === "tabs") openModal("tabs");
      else if (text === "listen") openModal("listen");
      else if (text === "tour") openModal("tour");
    });
  });

  // Close button
  const closeBtn = document.getElementById("closeModal");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close on backdrop click
  const modal = document.getElementById("contentModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBackend);
} else {
  initBackend();
}