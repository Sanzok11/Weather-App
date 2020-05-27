const key = 'S2GEGDfzlx0mIREMDvgqG20L65JXL1j4';

//Code to get city API call
const getCity = async (city) => {

    const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(citySearch + query);
    const data = await response.json();

    return data[0];
};

//Code to get current conditions API call
const getCondition = async (locationcode) => {
    const getCondition = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationcode}?apikey=S2GEGDfzlx0mIREMDvgqG20L65JXL1j4&`;

    const response = await fetch(getCondition + query);
    const data = await response.json();

    return data[0];

}




