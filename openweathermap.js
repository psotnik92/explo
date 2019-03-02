
var api_key = '4c074f065b78312844a57933e3e798a6';
$.get('https://api.openweathermap.org/data/2.5/weather?id=703448&appid='+api_key, function (res){
    document.img.src = 'https://psotnik92.github.io/explo/images/0_sun.gif';
    var temp2 = (res.main.temp - 273.15).toFixed(1)
    document.querySelector('#text1').innerHTML = 'openweathermap.org'
    document.querySelector('#text2').innerHTML = res.name
    document.querySelector('#text3').innerHTML = res.weather[0].description
    document.querySelector('#text4').innerHTML = temp2+'°С'
})

