// Hamburger menu
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


// Funkcija za animaciju
// Kada je visina browsera na elementu, zamene se klase
(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0 && element.classList.contains('animate__animated')) {
                element.className = element.className.replace('hidden', 'animate__slideInLeft');
                //element.classList.add('animate__slideInLeft');
                //element.classList.remove('hidden');
            } else if (positionFromTop - windowHeight <= 0) {
                element.className = element.className.replace('hidden', 'fade-in');
                //element.classList.add('fade-in');
                //element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})()




//GALERIJA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let previousPicture = document.querySelector('#prev');
let nextPicture = document.querySelector('#next');

previousPicture.addEventListener('click', () => {
    console.log("1");
})

nextPicture.addEventListener('click', () => {
    console.log("2");
})


// KONTAKT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 44.758663360782144,
            lng: 20.26395009829545
        },
        zoom: 15,
        mapTypeId: 'hybrid'
    });

    marker = new google.maps.Marker({
        position: {
            lat: 44.758663360782144,
            lng: 20.26395009829545
        },
        map: map
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<h2>Pansion "Simba"</h2>'
    });

    marker.addListener('mouseover', function () {
        infoWindow.open(map, marker);
    });
}

let mapa = document.querySelector('.mapHolder');
mapa.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'black';
})