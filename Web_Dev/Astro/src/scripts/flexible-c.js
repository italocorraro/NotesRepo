const cyan = document.querySelectorAll('p:has(> .flexible-marker-cyan)');

cyan.forEach(function(element) {
    element.querySelector('.flexible-marker-cyan').addEventListener('click', () => {
        element.classList.toggle('code-show-next');
    })
})

