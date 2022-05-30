// fetch api data
//var searchButtonEl = getElementbyId("submit-button");

const fetchCurrentWeatherData = async () => {
    const apiKey = "cc286f8e96f455b91b7d19b89ed85a1a"
    const apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=36&lon=-115&appid=${apiKey}'
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data)
}

const fetchHistoricalWeatherData = async () => {
    var apiKey = "cc286f8e96f455b91b7d19b89ed85a1a"
}


//event listener for input field



//save input and city data to local storage

//display city data on screen