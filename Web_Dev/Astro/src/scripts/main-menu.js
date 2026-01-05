
// Load immediately after main menu elements are injected in DOM
document.querySelectorAll('.main-menu-tab').forEach((tab) => {
    
    // find menu tabs and respective toggles
    const menu = tab.querySelector('.main-menu-sub-tab');
    const toggle = tab.querySelector('.main-menu-toggle');

    // close at startup
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');

    // setup variables for transition animations
    menu.style.setProperty('--js-calc-max-height', `${menu.scrollHeight}px`);

    // set toggle behavior on (toggles aria-expanded on button and hidden state on sub-tab)
    toggle.addEventListener('click', () => {
        
        menu.style.setProperty('--js-calc-max-height', `${menu.scrollHeight}px`);
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        menu.hidden = isOpen;

    });
});