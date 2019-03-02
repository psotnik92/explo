
var api_key = '4c074f065b78312844a57933e3e798a6';
$.get('https://api.openweathermap.org/data/2.5/weather?id=703448&appid='+api_key, function (res){
    document.img.src = 'https://drive.google.com/file/d/1-FuNIrkGdJeKGrxXdAw7PT5z9_fdut1A/view';
    var temp2 = (res.main.temp - 273.15).toFixed(1)
    document.querySelector('#text').innerHTML =  res.name + '&nbsp;' + res.weather[0].description +'&nbsp;'+  temp2+'°С' +'&nbsp;'

})

