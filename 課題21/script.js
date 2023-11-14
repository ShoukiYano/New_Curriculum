document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d0cf7ebb3324c62e006185e38c4d09d7`)
        .then(response => response.json())
        .then(data => {
            const tempInCelsius = (data.main.temp - 273.15).toFixed(2); // ケルビンを摂氏に変換
            const result = `都市: ${data.name}, 気温: ${tempInCelsius}°C`;
            document.getElementById('weather-result').textContent = result;
        })
        .catch(error => console.error('天気情報の取得に失敗しました', error));
});



