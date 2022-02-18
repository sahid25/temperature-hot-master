function thisWeather(city) {

    let apiKey = `e4b5d39f369c8be3de76bb2c897cfbd2`;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp } = data.main;
            let appCity = document.getElementById('city').innerText = name;
            let appTemp = document.getElementById('temp').innerText = temp;
            let appLead = document.querySelector('.lead').innerText = description;
            let appImg = document.querySelector('.weatherImg').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

        })

};

// search Button calling 
document.getElementById('searchBtn').addEventListener('click', function () {
    let cityName = document.getElementById('typeCity').value;
    thisWeather(cityName);
});

// features added
document.getElementById('typeCity').addEventListener('keyup', function (event) {
    document.getElementById("searchBtn").click();
});
