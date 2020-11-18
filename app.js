const content = document.querySelector('.hamburgerLinks');
const nav = document.querySelector('nav');

function toggleMenu(e) {
    if (e.target.nodeName === 'SPAN' && !content.classList.contains('active'))
        content.classList.add('active');
    else if (content.classList.contains('active')) {
        content.classList.remove('active');
    }
}

document.body.addEventListener('click', toggleMenu);