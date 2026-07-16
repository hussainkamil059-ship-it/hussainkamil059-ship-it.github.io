// ===== 1. NAVBAR STICKY EFFECT =====
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 50);
});

// ===== 2. ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===== 3. SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ===== 4. SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ===== 5. TYPING EFFECT =====
const text = [
  "Frontend Developer",
  "React Developer",
  "UI Designer",
  "Future Full Stack Developer",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1800);
  } else {
    setTimeout(type, 100);
  }
})();

// ===== 6. 3D PROJECT CARD EFFECT =====
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 15;
    const rotateY = (rect.width / 2 - x) / 15;

    card.style.transform = `perspective(800px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  });
});

// ===== 7. BACK TO TOP BUTTON =====
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show-top");
  } else {
    topBtn.classList.remove("show-top");
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// ===== 8. CONTACT POPUP =====
const contactButtons = document.querySelectorAll(".open-popup");
const popup = document.querySelector("#contactPopup");
const closePopup = document.querySelector("#closePopup");

contactButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "flex";
  });
});

closePopup.onclick = () => {
  popup.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};
