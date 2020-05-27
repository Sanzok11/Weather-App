const form = document.querySelector('form');

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
        .then(data => console.log(data))
        .catch(error => console.log(error));
})
