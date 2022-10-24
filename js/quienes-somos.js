var url =
  "https://api.weatherapi.com/v1/current.json?key=8cfc6c2306fc442192a235534222310&q=6.0206,-74.9291&aqi=no";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let weather = data;
    console.log(weather.current.temp_c);
    document.getElementById("temperature").innerHTML = weather.current.temp_c+" °C";
    document.getElementById("imgClima").src  = "http:"+ weather.current.condition.icon;
    console.log(weather);
    
  });



  