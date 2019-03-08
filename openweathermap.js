navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var api_key = '4c074f065b78312844a57933e3e798a6';

    $.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon +'&appid='+api_key, function (res){
        var temp2 = (res.main.temp - 273.15).toFixed(1)
        var dt2 = new Date(res.dt*1000).toLocaleString();
        document.querySelector('#text1').innerHTML = 'openweather'
        document.querySelector('#text2').innerHTML = res.weather[0].description
        document.querySelector('#text3').innerHTML = temp2+'°С'
        document.querySelector('#text4').innerHTML = res.wind.speed+' m/sec'
        document.querySelector('#City').innerHTML = res.sys.country +"&nbsp"+ res.name
        document.querySelector('#Time').innerHTML = dt2

    })
})


