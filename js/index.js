
const weekday = new Array(7);
weekday[0] = "Domingo";
weekday[1] = "Lunes";
weekday[2] = "Martes";
weekday[3] = "Miércoles";
weekday[4] = "Jueves";
weekday[5] = "Viernes";
weekday[6] = "Sábado";

const monthyear = new Array(12);
monthyear[0] = 'Enero';
monthyear[1] = 'Febrero';
monthyear[2] = 'Marzo';
monthyear[3] = 'Abril';
monthyear[4] = 'Mayo';
monthyear[5] = 'Junio';
monthyear[6] = 'Julio';
monthyear[7] = 'Agosto';
monthyear[8] = 'Septiembre';
monthyear[9] = 'Octubre';
monthyear[10] = 'Noviembre';
monthyear[11] = 'Diciembre';



let date = new Date();
let dayOfWeek = weekday[date.getDay()];
let dayNumber = date.getDate() < 10 ? '0' + date.getDate(): date.getDate();
let month = monthyear[date.getMonth()];
let year = date.getFullYear();

let dateString = `${dayOfWeek} ${dayNumber} de ${month} del ${year}`;


document.querySelector('.global__information-date').textContent = dateString;



let menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click',(e) => {
    let menuOpen = document.getElementById('menu-open');
    let menuClose = document.getElementById('menu-close');
    
    menuOpen.classList.toggle('hide');
    menuClose.classList.toggle('hide');

    let navList = document.getElementById('nav-list');
    navList.classList.toggle('show-nav');

});

let navItems = document.querySelectorAll('.nav__item');

//FILTER ONLY ITEMS WHICH HAVE A LIST AND REGISTER AN EVENT LISTENER 
Array.from(navItems)
    .filter(navItem => navItem.children[1] !== undefined)
    .forEach(item => {
        item.addEventListener('click',() => {
            let nestedList = item.children[1];
            nestedList.classList.toggle('show-nested-list');
        })
    });


let widthTransition = 1000;

let thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach((thumbnail,index) => {
    console.log(index,thumbnail);
});