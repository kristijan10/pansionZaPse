let openMenu = () => {
    let content = document.querySelector('.hamburgerLinks');

    if (content.style.display === 'block') {
            content.style.display = 'none'
    }else {
        content.style.display = 'block';
    }
}