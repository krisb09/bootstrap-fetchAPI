

const nav = document.querySelector('nav');
      
window.addEventListener('scroll', function() {
  if(window.pageYOffset > 100){
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});

document.querySelector(".title-1").innerHTML = "UTAH";
document.querySelector(".title-2").innerHTML = "Arizona";
document.querySelector(".title-3").innerHTML = "Washington";
document.querySelector(".title-4").innerHTML = "Squamish";
document.querySelector(".title-5").innerHTML = "Whistler Bike Park"
document.querySelector(".title-6").innerHTML = "Oregon"

// document.querySelector("#button").addEventListener('click', () => {
//   window.open("./index");
// });

var nav = document.querySelector('nav');

  window.addEventListener('scroll', function() {
    if(window.pageYOffset > 100){
      nav.classList.add('bg-dark', 'shadow');
    } else {
      nav.classList.remove('bg-dark', 'shadow');
    }
  });


let actionButton = document.querySelector("#button-1");

actionButton.addEventListener('click', () => {
  window.open("./utah.html", "_blank").focus();
});

let actionButtonTwo = document.querySelector("#button-2");

actionButtonTwo.addEventListener('click', () => {
  window.open("./arizona.html", "_blank").focus();
});

let actionButtonThree = document.querySelector("#button-3");

actionButtonThree.addEventListener('click', () => {
  window.open("./washington.html", "_blank").focus();
});

let actionButtonFour = document.querySelector("#button-4");
actionButtonFour.addEventListener('click', () => {
  window.open("./oregon.html", "_blank").focus();
});

let actionButtonFive = document.querySelector("#button-5");
actionButtonFive.addEventListener('click', () => {
  window.open("./squamish.html", "_blank").focus();
});


fetch("https://open-weather13.p.rapidapi.com/city/bellingham", {
  "method": "GET",
  "headers": {
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
      "x-rapidapi-key": "abc125623cmshdecc765bc321b7ep165374jsn1056a8b52d10"
  }
}).then(response => {
  return response.json();
}).then(data => {
  getWeather(data);
})
.catch( () => {
  //catch any errors
});

function getWeather(d) {
  // const celcius = Math.round(parseFloat(d.main.temp)-273.15);
  // const farenheit = Math.round((parseFloat(d.main.temp)*1.8)/32);
  const farenheit = (d.main.temp);
  

  document.querySelector('#description').innerHTML = d.weather[0].description;
  document.querySelector('#temp').innerHTML = farenheit + '&deg;' + 'F';
  document.querySelector('#location').innerHTML = d.name;
}