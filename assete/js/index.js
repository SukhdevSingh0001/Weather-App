let serachBox=document.getElementById('input-box');
let Api="a4360e980771cadeec548b976cb82684"
serachBox.addEventListener("keypress",(event)=>{
    if (event.keyCode==13) {
         console.log(serachBox.value)
         showreport(serachBox.value)
         document.querySelector(".weatherbody").style.display="block"
        }
    })

function showreport(city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api}&units=metric`)
.then((data)=>{
    return data.json()
}).then(weatherReport)
}


function weatherReport(data){
    console.log(data)
let city=document.getElementById('city');
city.innerText=`${data.name},${data.sys.country}`;
let temp=document.getElementById('temp');
temp.innerHTML=`${Math.round(data.main.temp)}&deg;C`;
let Min_Max=document.getElementById('min-max');
Min_Max.innerHTML=`${Math.floor(data.main.temp_min)}&deg;C / (min) ${Math.ceil(data.main.temp_max)}&deg;C  / (max)`;
let weather=document.getElementById('weather');
weather.innerHTML=`${data.weather[0].main}`

let date=document.getElementById('date');
let todayDate=new Date();
date.innerText=datemange(todayDate)
// console.log(data.weather[0].main)
if (data.weather[0].main=='Clouds') {
    document.body.style.backgroundImage="url('assete/images/clouds.webp')"
}
if (data.weather[0].main=='Haze') {
    document.body.style.backgroundImage="url('assete/images/haze.webp')"
}
if (data.weather[0].main=='Smoke') {
    document.body.style.backgroundImage="url('assete/images/smoke.webp')"
}
if (data.weather[0].main=='Clear') {
    document.body.style.backgroundImage="url('assete/images/clear.jpeg')"
}
if (data.weather[0].main=='Sunny') {
    document.body.style.backgroundImage="url('assete/images/sunny.jpeg')"
}
if (data.weather[0].main=='Rain') {
    document.body.style.backgroundImage="url('assete/images/raining.jpeg')"
}
}

function datemange(datearg) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    let year=datearg.getFullYear();
    let month=months[datearg.getMonth()];
    let date=datearg.getDate();
    let day=days[datearg.getDay()];

    return `${date} ${month} (${day}),${year}`
}
