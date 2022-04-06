const myJSonCuzmelFile = '../../DATA/events.json';
fetch(myJSonCuzmelFile)
    .then(function (reponseFile) {
        return reponseFile.json();
    })
    .then(function (myJSonlocalObject) {
        console.table(myJSonlocalObject); 
        const towns = myJSonlocalObject['cuzmel'].filter((towns) => {
            if(towns.name==="Honda Pioneer ATV") {
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
            document.querySelector('div.upcoming1').appendChild(card);
        }
    })