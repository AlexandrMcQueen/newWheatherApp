
let infoCity = document.querySelector('#searchValue');
let button = document.querySelector('.btn');
let valueOfinput = infoCity.value;
let wheather = {
    "Api": 'ab0a9d2f11bdf9e3aa824df29904fae5',
    fetchWheather: function (city = 'Vinnytsia') {
        let apiKey = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=ab0a9d2f11bdf9e3aa824df29904fae5&units=metric&lang=ua';
        fetch(apiKey)
        .then((res) => res.json())
        .then((data) => this.displayWheather(data));
    },
   displayWheather: function (data) {
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        //displaying Data   
        console.log(name,icon,description, temp, humidity, speed);
        document.querySelector('.city').innerHTML ="Погода у " + name;
        document.querySelector('.temp').innerHTML = Math.round(temp) + '°C';
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/`+ icon + `.png`;
        document.querySelector('.description').innerHTML = description+'.';
        document.querySelector('.humidity').innerHTML = `Вологість: ` + humidity + "%.";
        document.querySelector('.wind').innerHTML = 'Швидкість вітру: ' + speed + ' км/год.';   
        checkWheather(temp); 
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
 },     
 
}
wheather.fetchWheather();

button.addEventListener('click',function(){
    let valueOfinput = infoCity.value;
    wheather.fetchWheather(valueOfinput);
    console.log(valueOfinput);
   
    clearButton()
});

infoCity.addEventListener('keyup',function(event){
    
   if(event.key == 'Enter') {
    let valueOfinput = infoCity.value;
    wheather.fetchWheather(valueOfinput);
    console.log(valueOfinput);
   }
  
});

function clearButton(){
    infoCity.value = '';
    infoCity.focus();
  
}



// Preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1500);
  }


// Background of the site

let images = ['images/photo0.jpg','images/photo2.jpg','images/photo3.jpg','images/photo4.jpg','images/photo5.jpg','images/photo6.jpg','images/photo7.jpg','images/photo8.jpg','images/photo9.jpg','images/photo10.jpg','images/photo10.jpg','images/photo11.jpg','images/photo12.jpg','images/photo13.jpg','images/photo14.jpg','images/photo15.jpg','images/photo16.jpg','images/photo17.jpg','images/photo18.jpg','images/photo19.jpg','images/photo20.jpg','images/photo21.jpg','images/photo22.jpg','images/photo23.jpg','images/photo24.jpg','images/photo25.jpg','images/photo26.jpg','images/photo27.jpg','images/photo28.jpg','images/photo29.jpg','images/photo30.jpg','images/photo31.jpg','images/photo32.jpg','images/photo33.jpg','images/photo34.jpg','images/photo35.jpg'];
let randomNumber = Math.floor(Math.random() * images.length);
let bgimg = document.body.style.backgroundImage = 'url(' + images[randomNumber] + ')';


let describingWheather = document.querySelector('.Describing');

function checkWheather(temp) {
    let answer;
   
    if(temp<10){
        answer = `--❤Anastasia одягайся тепленько,бо я можливо не поряд і не зігрію тебе своїми теплими обіймами❤--`;

       
    }
    else if(temp>10 && temp<18){
        answer = 'ну це вже непогано,але всеодно тепленько одягайся';
    } else if(temp>20 && temp<27) {
      answer = `Дуже нагадує наші вечірні,літні вечори,які ми проводили з тобою просто прекрасно.`;
    }

    let template = `<div class="Describing">
                        <p>${answer}</p>                    
                    </div>`
    describingWheather.innerHTML = template;
}

