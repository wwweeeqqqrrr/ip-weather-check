const API_KEY = "ca04839e2b794d87a61182018250304";

const word = document.querySelector(".word");
const weather = document.querySelector('button[data-id="weather"]');
const result_weather = document.querySelector([
  'div[data-id="result_weather"]',
]);

function animateWord(word) {
  let text = word.dataset.text;
  text.split("").forEach((letter, ind) => {
    let div = document.createElement("div");
    div.innerText = letter;
    setTimeout(() => word.append(div), ind * 200);
  });
}

animateWord(word);

const buttonip = document.querySelector(".main_button");
buttonip.addEventListener("click", (event) => {
  const ifPushed = event.target.innerHTML;
  if (ifPushed === "Узнать погоду") {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => data.ip)
      .then((ip) => fetch(`https://api.2ip.io/${ip}?token=eum7v2moo62xduyy`))
      .then((resp) => resp.json())
      .then((data) => middleConnect(data))
      
      
      
       
  }
});

function middleConnect(dataPr){
    const url = `https://api.weatherapi.com/v1/current.json?key=ca04839e2b794d87a61182018250304&q=${dataPr.city}&aqi=no`;
    getWeather(url)
    
}

async function getWeather(url) {
   const response = await fetch(url, {
    headers: {
      "Content-type": "application/json",
      key: API_KEY,
    },
  })
  
  const needData =  await response.json()
  console.log(needData)
  showWeather(needData)

  
}

function showWeather(data) {
  const weatherEl = document.querySelector(".container");

  weatherEl.innerHTML = `
                
                <div id="temp"><p> temp:${data.current.temp_c} </p></div>
                 <div id="country"> ${data.location.name}</div>
                  <div id="text"> ${data.current.condition.text}</div>


                
                 
                
                 
 
         `;
}



