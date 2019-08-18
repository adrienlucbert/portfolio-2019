/**
 * Trigger an animation when the given element enters viewport
 * 
 * @param {HTMLElement} el element to animate
 * @param {Boolean} force force animation
 */
function triggerAnimation(el = document.documentElement, force = false) {
    const triggerThreshold = 25;
    const { height, top } = el.getBoundingClientRect();
    if (force || top <= height * (100 - triggerThreshold) / 100) {
        el.classList.add('done');
        triggerAnimationsOfChildren(
            el,
            true
        );
    }
}

/**
 * Call triggerAnimation function for every child of the given parent
 * 
 * @param {HTMLElement} parent parent element
 * @param {Boolean} force force animation of children
 */
function triggerAnimationsOfChildren(parent = document.documentElement, force = false) {
    const elements = parent.querySelectorAll('.fade:not(.done), .slide:not(.done)');
    elements.forEach(el => {
        triggerAnimation(
            el,
            force
        );
    });
}

/**
 * Init animation event listeners
 */
const initOnViewAnimationHandlers = () => {
    triggerAnimationsOfChildren();
    document.onscroll = () => {
        triggerAnimationsOfChildren();
    }
}

export default initOnViewAnimationHandlers;