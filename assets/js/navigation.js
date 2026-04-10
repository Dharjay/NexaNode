gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar");

  ScrollTrigger.create({
    onUpdate: (self) => {
      if (self.direction === 1 && window.scrollY > 100) {
        gsap.to(navbar, { yPercent: -100, duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(navbar, { yPercent: 0, duration: 0.3, ease: "power2.out" });
      }
    },
  });
});

// let scrollSpeed = 2.5; // lower = slower

// window.addEventListener(
//   "wheel",
//   function (e) {
//     e.preventDefault();

//     window.scrollBy({
//       top: e.deltaY * scrollSpeed,
//       behavior: "smooth",
//     });
//   },
//   { passive: false },
// );
