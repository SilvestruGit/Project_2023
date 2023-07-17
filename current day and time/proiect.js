
function dateTime() {
    let today = new Date();

    let day = today.getDay();

    let vectDays = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

    document.getElementById('day').innerHTML = `Today is ${vectDays[day]}`;
 
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let timeOfDay = 'PM';

    hours > 12 ? hours -= 12 : timeOfDay = 'AM'; 

    document.getElementById('time').innerHTML = 
        `Current time is ${hours} ${timeOfDay} : ${minutes} min : ${seconds} sec`;
}

