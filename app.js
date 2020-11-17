let openMenu = () => {
    let content = document.querySelector('.links');

    if (content.style.display === 'block') {
            content.style.display = 'none'
    }else {
        content.style.display = 'block';
    }
}