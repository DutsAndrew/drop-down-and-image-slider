const dropDownSvg = document.querySelector('#drop-down-menu-svg');
dropDownSvg.addEventListener('click', dropDownMenu);

function dropDownMenu() {
    console.log('hey');

    // const dropDownMenu = document.querySelector('#drop-down-menu');
    // const dropDownTopBar = document.querySelector('#drop-down-top-bar');
    // const dropDownSvg = document.querySelector('#drop-down-menu-svg');

  const dropDownNav = document.querySelector('#drop-down-nav');
    if (dropDownNav.classList.contains('drop-down-nav-closed')) {
      dropDownNav.classList.remove('drop-down-nav-closed');
      dropDownNav.classList.add('drop-down-nav-open');
    } else if (dropDownNav.classList.contains('drop-down-nav-open')) {
      dropDownNav.classList.add('drop-down-nav-closed');
      dropDownNav.classList.remove('drop-down-nav-open');
    }
    
    const dropDownItemsContainer = document.querySelector('#drop-down-items-container');
    const dropDownHome = document.querySelector('#drop-down-home');
    const dropDownAbout = document.querySelector('#drop-down-about');
    const dropDownContact = document.querySelector('#drop-down-contact');
}