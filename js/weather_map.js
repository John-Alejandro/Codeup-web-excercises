"use strict"
function renderWeather(forecast) {
    var html = "<h2 class='card-title'>" + forecast.dt_txt.split(" ")[0] + "</h2>";
    html += '<p class="card-text">'
    html += "<h4>TEMP  " + forecast.main.temp + "</h4>";
    html += "<h4> DESCRIPTION  " + forecast.weather[0].description + "</h4>";
    html += "<h4> HUMIDITY  " + forecast.main.humidity + "% </h4>";
    html += "<h4> WIND  " + forecast.wind.speed + "</h4>";
    html += "<h4> PRESSURE  " + forecast.main.pressure + "</h4>";
    html += '</p>'

    return html;

}



$.get("http://api.openweathermap.org/data/2.5/forecast",{
    APPID: openWeatherApiKey,
    q: "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log(data);
    var typesHTML = renderWeather(data.list[5])
        console.log(typesHTML);
        // $(".card-body").append(typesHTML)



var fiveDayForecast = [];

for (var i = 4; i < data.list.length; i+=8) {
    console.log(data.list[i])
    fiveDayForecast.push(data.list[i])
}
for(var i = 0; i < fiveDayForecast.length; i++) {
    var oneDayForecast = renderWeather(fiveDayForecast[i]);
    $(".card-body").eq(i).append(oneDayForecast);
}
});

