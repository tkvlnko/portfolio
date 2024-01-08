export const toggleControl = () => {
    const toggle = document.querySelector('.sign')
    console.log(toggle)
    const menu = document.querySelector('.navigation-subblock-menu')
    
    const state = {};
    state.menuOpen = false;
    
    toggle.addEventListener('click', () => {
        if (state.menuOpen) {
            menu.classList.remove('navigation-subblock-menu-out')
            menu.classList.add('navigation-subblock-menu')
        } else {
            menu.classList.remove('navigation-subblock-menu')
            menu.classList.add('navigation-subblock-menu-out');
        }
        state.menuOpen = !state.menuOpen; 
    })
}


