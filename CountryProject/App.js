//ab hume data fetch karna hai backend aur show karna hai
//Study Fetch
fetch('https://restcountries.com/v3.1/all').then(
    (response) => response.json()
).then((data) => data.forEach((country) => {
    console.log(country)
    const countryCard = document.createElement('a');
    countryCard.classList.add('countries-card');
    const cardHTML = `<img src="${country.flags.svg}" alt="flag">
                    <div class="card-text"> 
                        <h3 class = "card-title">${country.name.common}</h3>
                        <p><b>Population: </b>${country.population.toLocaleString('en-In')}</p>
                        <p><b>Region: </b>${country.region}</p>
                        <p><b>Capital: </b>${country.capital[0]}</p>
                    </div>`
    countryCard.innerHTML = cardHTML;
    countriesContainer.append(countryCard);
}))

const countriesContainer = document.querySelector('.countries-container')


// const cardImage = document.createElement('img');
// cardImage.src = 'https://flagcdn.com/gd.svg';
// countryCard.append(cardImage);

//Agar is method se banayenge to bahut time lag jayega so we can do like this:
// create card in JS 

// const cardHTML = `<img src="https://flagcdn.com/gd.svg" alt="flag">
//                     <div class="card-text"> 
//                         <h3 class = "card-title">Grenada</h3>
//                         <p><b>Population: </b>81,770,900</p>
//                         <p><b>Region: </b>Europe</p>
//                         <p><b>Capital: </b>Berlin</p>
//                     </div>`
// countryCard.innerHTML = cardHTML;
// countriesContainer.append(countryCard);
