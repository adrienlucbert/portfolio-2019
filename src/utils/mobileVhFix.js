export default function() {
    const setVhSize = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVhSize();
    window.addEventListener('resize', setVhSize);
}