let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("touchstart", (e) => {
    timeout = setTimeout(() => {
      e.preventDefault();
    }, 500);
  });

  img.addEventListener("touchend", () => {
    clearTimeout(timeout);
  });

  img.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
});

document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.key === "U") ||
    (e.ctrlKey && e.shiftKey && e.key === "J")
  ) {
    e.preventDefault();
    alert("Inspect Element is disabled on this site.");
  }
});
