var x = 0;
var y = 1;
async function fetchApi() {
    try  {
    let res = await fetch("https://restcountries.com/v3.1/all");
    let JsonFormat = await res.json();
    for (var i = 0; i < JsonFormat.length; i++) {
        var CountryName = JsonFormat[i].name.common;
        var countrycapital = JsonFormat[i].capital[x];
        var countryflagimage = JsonFormat[i].flags.png;
        var countryregion = JsonFormat[i].region;
        var countrycode = JsonFormat[i].cca3;
        var latitude = JsonFormat[i].latlng[x];
        var longitude = JsonFormat[i].latlng[y];
        if (latitude == undefined || longitude == undefined) {
            throw new Error(`invalid:unable to read the data`);
        }
            div_row.innerHTML += `

            <div class="col-lg-4">
            <div class="card-group">
            <div class="card" class="card border-dark mb-3" style="width: 18rem;">
            <div class="card-header card-title">${CountryName}</div>
            <img src="${countryflagimage}" id="flag-img" class="card-img-top" alt="CountryName:,${CountryName}" />
            <div class="card-body">
              <h5 class="card-title content">CAPITAL : ${countrycapital}</h5>
              <h5 class="card-title content">REGION : ${countryregion}</h5>
              <h5 class="card-title content">CODE : ${countrycode}</h5>
              <button type="button" id="temp-btn" class="btn btn-primary" onclick=openWeather(${latitude},${longitude})>Click for weather</button>
           
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            `;
          }
        } catch (error) {
          //catch-block:-
          console.log(error.message);
        }
      }
      async function openWeather(latitude, longitude) {
        try {
          var res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b9d07e8d66a7c9c78d47685619746207`
          );
          var result = await res.json();
          var ans = result.main.temp;
          var ans2 = document.getElementById("footer");
          ans2.innerHTML = "";
          ans2.innerHTML = `COUNTRY-WEATHER ⏩${ans}⏪`;
        } catch (error) {
          console.log(error.message);
        }
      }      
    fetchApi();
    var div_container = document.createElement("div");
div_container.setAttribute("class", "container");
var div_head = document.createElement("div");
div_head.setAttribute("class", "heading");
div_head.innerHTML = "COUNTRIES - DATA";


var div_row = document.createElement("div");
div_row.setAttribute("class", "row");


document.body.append(div_container);
div_container.append(div_row);
