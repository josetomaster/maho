
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