const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const daynight = document.querySelector('img.time');
const logo = document.querySelector('.logo img')

const updateUI = (data) => {
    const cD = data.cityDetails;
    const cC = data.cityCondition;
    //console.log(cD, cC);

    //Changing Details
    details.innerHTML = ` <h5 class="my-3">${cD.EnglishName}</h5>
    <div class="my-3">${cC.WeatherText}</div>
    <div class="display-4">
        <span>${cC.Temperature.Metric.Value}</span>
        <span>&deg;C</span>`

    //Hiding display on default view
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    //Adding daylight pic
    if (cC.IsDayTime) {
        daynight.setAttribute('src', 'img/day.svg');
    }
    else {
        daynight.setAttribute('src', 'img/night.svg');
    }

    //Adding Weather-Icon
    const logoimg = `img/icons/${cC.WeatherIcon}.svg`;
    logo.setAttribute('src', logoimg);
}


const findCity = async (city) => {
    const cityDetails = await getCity(city);
    const cityCondition = await getCondition(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        cityCondition: cityCondition
    };
}

form.addEventListener('submit', e => {
    e.preventDefault();

    //Get City Name
    const city = form.city.value.trim();
    form.reset();

    findCity(city)
        .then(data => updateUI(data))
        .catch(error => console.log(error));
});