// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll(".skill-progress");

const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
};

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector(".skills");
  const sectionTop = skillsSection.offsetTop;
  const sectionHeight = skillsSection.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > sectionTop - window.innerHeight + sectionHeight / 2) {
    animateSkillBars();
  }
});
