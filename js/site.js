// Each project's details start collapsed (css/style.css hides them once
// the inline script in <head> marks the page "js"); clicking its "Problem
// space" heading slides them open or closed. Without JavaScript they stay
// open.
const SLIDE_MS = 600;
// Sine ease-in-out: the curve of jQuery's default "swing" easing.
const SLIDE_EASING = "cubic-bezier(0.37, 0, 0.63, 1)";
const SLIDE_PROPERTIES = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];

const opened = new WeakSet();

function slideToggle(details) {
  const opening = !opened.has(details);
  if (opening) opened.add(details);
  else opened.delete(details);

  for (const animation of details.getAnimations()) animation.cancel();
  details.style.display = "block";

  const style = getComputedStyle(details);
  const full = {};
  const collapsed = {};
  for (const property of SLIDE_PROPERTIES) {
    full[property] = style[property];
    collapsed[property] = "0px";
  }

  details.style.overflow = "hidden";
  const slide = details.animate(opening ? [collapsed, full] : [full, collapsed], {
    duration: SLIDE_MS,
    easing: SLIDE_EASING,
  });
  slide.onfinish = () => {
    details.style.overflow = "";
    details.style.display = opening ? "block" : "none";
  };
}

for (const heading of document.querySelectorAll(".problem_space")) {
  const details = heading.nextElementSibling;
  if (details?.classList.contains("fulldescription")) {
    heading.addEventListener("click", () => slideToggle(details));
  }
}
