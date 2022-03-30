const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=a22fa08f55a59807a4b7b1e71c3230eb";

fetch(forecastApiURL)
  .then(function (response) {
	return response.json();
  })
  .then(function (jsonObject) {
	// console.table(jsonObject); // temporary checking for valid response and data parsing
	const forescastList = jsonObject["list"].filter((forecast) => {
		if(forecast.dt_txt.includes(" 06:00:00")) {
			return forecast;
		}
	});

	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	for (let i = 0; i < forescastList.length; i++) {
		// Create elements
		let container = document.createElement("div");

        let dayOfTheWeek = document.createElement("span");
        const eachDay = new Date(forescastList[i].dt_txt);

        let image = document.createElement("img");
		let imagesrc = "https://openweathermap.org/img/w/" + forescastList[i].weather[0].icon + ".png";
		let desc = forescastList[i].weather[0].description;

        let span = document.createElement("span");
        let spanTemperature = parseFloat(forescastList[i].main.temp);
		let roundTemp = Math.round(spanTemperature);
        // Set atributes
		container.setAttribute("class", "flex-col");

        dayOfTheWeek.setAttribute("class", "col-head");

        image.setAttribute("class", "image-day");
		image.setAttribute("src", imagesrc);
		image.setAttribute("alt", desc);
        span.setAttribute("class", "data");
		
		//Append elementes
		dayOfTheWeek.textContent = weekday[eachDay.getDay()];
		container.appendChild(dayOfTheWeek)
		container.appendChild(image);
		span.textContent = roundTemp + "°F";
		container.appendChild(span);

		// Add elements to container 
		document.querySelector("div.flex").appendChild(container);
	}
  });



const mytownship = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(mytownship)
    .then(function (respond) {
        return respond.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const towns = jsonObject['towns'].filter((towns) => {
            if(towns.name==="Soda Springs") {
                return towns;
            }
        });
        console.log(towns);
        for(let y=0; y<towns[0].events.length; y++) {
            let card = document.createElement('section');
            card.classList.add('ur');
            let upevent = document.createElement('p');
            upevent.textContent = towns[0].events[y];
            card.appendChild(upevent);
            document.querySelector('div.upcoming').appendChild(card);
        }
    })