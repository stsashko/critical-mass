/**
 * Get the current time of the city
 *
 * @param {string} timeZone
 * @returns {string} Returns the current time of the city
 */
function getCurrentTimeInCity(timeZone) {
  const options = {
    timeZone: timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const date = new Date();
  const timeFormatter = new Intl.DateTimeFormat("en-US", options);
  const currentTime = timeFormatter.format(date);

  return currentTime;
}

/************************ Navigation bar **********************/
(function () {
  const menuItems = document.querySelectorAll(".menu__item");
  const tabSections = document.querySelectorAll(".tab__section");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      tabSections.forEach((item) => item.classList.remove("active"));
      menuItems.forEach((item) => item.classList.remove("active"));

      document
        .querySelector(`.tab__section[id="${item.dataset.tab}"]`)
        .classList.add("active");

      let bubble = item.querySelector(".menu__bubble");
      bubble.textContent = getCurrentTimeInCity(bubble.dataset.timezone);
      this.classList.add("active");
    });
  });

  const menu = document.querySelector(".menu__list");
  menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("menu__link")) {
      menu.style.setProperty(
        "--underline-width",
        `${event.target.offsetWidth}px`
      );

      menu.style.setProperty(
        "--underline-height",
        `${event.target.offsetHeight}px`
      );

      menu.style.setProperty(
        "--underline-offset-x",
        `${event.target.offsetLeft}px`
      );

      menu.style.setProperty(
        "--underline-offset-y",
        `${event.target.offsetTop}px`
      );
    }
  });
})();
/************************ Navigation bar END **********************/
