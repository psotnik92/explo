

navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var api_key = '4c074f065b78312844a57933e3e798a6';
      $.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon +'&appid='+api_key, function (res){

        var temp2 = (res.main.temp - 273.15).toFixed(1)

        var dt2 = new Date().toLocaleString('ru');
        document.querySelector('#text1').innerHTML = 'openweather'
        document.querySelector('#text2').innerHTML = res.weather[0].description
        document.querySelector('#text3').innerHTML = temp2+'°С'
        document.querySelector('#text4').innerHTML = res.wind.speed+' m/sec'
        document.querySelector('#City').innerHTML = res.sys.country +"&nbsp"+ res.name
        document.querySelector('#Time').innerHTML = dt2
      })


    $('#Now').on('click', function(){
      $.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon +'&appid='+api_key, function (res){

        var temp2 = (res.main.temp - 273.15).toFixed(1)

        var dt2 = new Date().toLocaleString('ru');
        document.querySelector('#text1').innerHTML = 'openweather'
        document.querySelector('#text2').innerHTML = res.weather[0].description
        document.querySelector('#text3').innerHTML = temp2+'°С'
        document.querySelector('#text4').innerHTML = res.wind.speed+' m/sec'
        document.querySelector('#City').innerHTML = res.sys.country +"&nbsp"+ res.name
        document.querySelector('#Time').innerHTML = dt2

      })
    })

    $('#bH').on('click', function(){
      $.get ('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+api_key, function (res2){


            var newTable = document.createElement('table');
              $("#tabla").empty();
            for (var x=0; x< res2.list.length; x++) {
                var res = res2.list[x]
                 var temp2 = (res.main.temp - 273.15).toFixed(1)


                 var newRow = newTable.insertRow(x);

                 var newCell1 = newRow.insertCell();
                 newCell1.innerHTML = res.dt_txt

                 var newCell2 = newRow.insertCell();
                 newCell2.innerHTML = res.weather[0].description

                 var newCell3 = newRow.insertCell();
                 newCell3.innerHTML = temp2+'°С'
                 var newCell4 = newRow.insertCell();
                 newCell4.innerHTML = res.wind.speed+' m/sec'

            }
                  $("#tabla").append(newTable);
                  document.body.appendChild(newTable);






      })
    })
})




