const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJSonObject) {
    // console.table(myJSonObject); // temporary checking for valid response and data parsing
    const jSonTowns = myJSonObject['towns'].filter((jSonTowns) => {
        if(jSonTowns.name === "Soda Springs" || jSonTowns.name === "Fish Haven" || jSonTowns.name === "Preston") {
            return jSonTowns;
        }
    });

    for (let i = 0; i < jSonTowns.length; i++) {
		//Variables
		let cardElemnt = document.createElement('article');
		let cardElemnt3 = document.createElement('div');
		let Tittle = document.createElement('h1');

		let tittleMotto = document.createElement("h2");

		let year = document.createElement("h3");

		let populationOfTowns = document.createElement("h3");

		let fallRain = document.createElement("h3");

		let imageOfTown = document.createElement("img");

		//append each cild element 

		Tittle.textContent = jSonTowns[i].name;
		cardElemnt.appendChild(Tittle);

		tittleMotto.textContent = jSonTowns[i].motto;
		cardElemnt.appendChild(tittleMotto);

		year.textContent = "Year Founded: " + jSonTowns[i].yearFounded;
		cardElemnt.appendChild(year);

		populationOfTowns.textContent = "Population: " + jSonTowns[i].currentPopulation;
		cardElemnt.appendChild(populationOfTowns);

		fallRain.textContent = "Annual Rain Fall: " + jSonTowns[i].averageRainfall;
		cardElemnt.appendChild(fallRain);

		imageOfTown.setAttribute("src", "home/Images-5/image" + (i + 1) + ".jpg");
		imageOfTown.setAttribute("alt", jSonTowns[i].name + " - " + (i + 1));
		imageOfTown.setAttribute("style","width:400px; height: 400px;");
		cardElemnt3.appendChild(imageOfTown);
		let cardClass = "div.card" + (i + 1);
		document.querySelector(cardClass).appendChild(cardElemnt);
		document.querySelector(cardClass).appendChild(cardElemnt3);
    }
  });

