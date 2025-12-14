const accordionClass = 'after-h2';
const collapsedAccordionClass = 'collapsed';
const transitionTime = 300;
const sections = document.querySelectorAll(`section:has(>h2):has(>.${accordionClass})`);

sections.forEach((section) => {
    const title = section.querySelector('h2');
    const content = section.querySelector(`.${accordionClass}`);
    let isOpen = true;
    let currentHeight = content.offsetHeight + 5;

    content.style.transition = `max-height ${transitionTime}ms`;
    content.style.overflowY = 'hidden';
    title.addEventListener('click', () => {
        if(isOpen) {
            currentHeight = content.offsetHeight + 5;
            content.style.maxHeight = `${currentHeight.toString()}px`;
            console.log(currentHeight.toString());
            setTimeout(() => {
                content.style.maxHeight = '0';
            },0);
            isOpen = false;
        } else {
            content.style.maxHeight = `${currentHeight.toString()}px`;
            setTimeout(() => {
                content.style.maxHeight = 'none';
            },transitionTime);
            isOpen = true;
        }
    })
})