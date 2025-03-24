document.addEventListener("DOMContentLoaded", function () {
  const mainMenu = document.querySelectorAll(`.main_menu li`);

  for (const menu of mainMenu) {
    menu.addEventListener(`mouseenter`, function () {
      const submenuBox = document.querySelector(`.sub_menu_box`);
      submenuBox.classList.add(`active`);
    });

    menu.addEventListener(`mouseleave`, function () {
      const submenuBox = document.querySelector(`.sub_menu_box`);
      submenuBox.classList.remove(`active`);
    });
  }
  const changeData = mainMenu.getAttribute(`data-tab`);
  const submenuBox = document.querySelector(`.sub_menu_box`);

  for (const box of submenuBox) {
    box.classList.remove(`active`);

    const changeBox = document.querySelector(`#${changeData}`);
    changeBox.classList.add(`active`);
  }
});
