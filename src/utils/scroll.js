/**
 * Smooth-scroll window view until it reaches the given HTML element
 * 
 * @param {HTMLElement} el HTML element to scroll to
 */
const scrollToElement = (el) => {
    if (!el) return;
    const {
        top
    } = el.getBoundingClientRect();

    window.scrollBy({
        top: top,
        behavior: 'smooth'
    });
}

/**
 * Apply a click-event handler on every anchor in the page
 */
const initScrollHandlers = () => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((link) => {
        link.onclick = function (e) {
            // don't use default scroll
            e.preventDefault();
            const anchor = link.getAttribute('href');
            if (!anchor) return;
            const target = document.querySelector(anchor);
            if (!target) return;
            scrollToElement(target);
            // write anchor in url (for url-sharing)
            history.pushState(null, "", anchor);
        }
    });
}

export default initScrollHandlers;