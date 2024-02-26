/* const search_input = async()=>{
    let city_name = search.value
    console.log(city_name);
    if(city_name){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=3446cd65ac913d4e14a1e57155dd7587`)
        response.json().then((data)=>{
            console.log(data);


        })
    }
} */

const search_input = async () => {
  const city_name = search.value;
  const time = new Date();
  console.log(time);
  console.log(city_name);
  if (city_name) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=3446cd65ac913d4e14a1e57155dd7587`
      );
      response.json().then((data) => {
        let name = data.name;
        console.log(name);
        let temp = parseInt(data.main.temp - 273);
        console.log(temp);
        let pressure = data.main.pressure;
        console.log(pressure);
        let humidity = data.main.humidity;
        console.log(humidity);
        let country = data.sys.country;
        console.log(country);
        let wind = data.wind.speed;
        console.log(wind);

        result.innerHTML = `<div class="container">
          <h3 class="m-5">The Weather</h3>   
          <div class="weath">
              <div class="weth">
                  <h1 class="temp">${temp}&deg;C</h1>
                  <div class="cityTime">
                      <h2 class="name">${name}</h2>
                      <small>
                          <span class="time">05:10</span>     
                          <span class="date">Monday Oct 10</span>
                      </small>
                  </div>
              </div>
              
          </div>
      </div>
      <div class="cityDetails">
          <form id="locationInput">
              <input id="search" class="search p-1" type="text" placeholder="Search location" name="" id="search">
              <button onclick="search_input()" class="submit rounded p-1" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
              <button class="reset rounded p-1" wi type="reset"><i class="fa-solid fa-rotate-right"></i></button>
          </form>
          <div class="weatherDetails">
              <h3>Weather Details</h3>
              <ul class="cityDetail">
                  <li class="head"><h4>country</h4></li>
                  <li class="body">${country}</li>
                  <li class="head"><h4>Humidity</h4></li>
                  <li class="body">${humidity}%</li>
                  <li class="head"><h4>Wind</h4></li>
                  <li class="body">${wind} kmph</li>
                  <li class="head"><h4>Pressure</h4></li>
                  <li class="body">${pressure} mb</li>
              </ul>
          </div>
      </div>`;
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  } else {
    console.error("City name is empty.");
  }
};
