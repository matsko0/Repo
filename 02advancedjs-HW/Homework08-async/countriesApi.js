
document.getElementById("myBtn").addEventListener("click", function () {
    let countryCode = document.getElementById("getCountryData").value.trim();
    if (countryCode) {
        getCountryAndNeighbours(countryCode);
    } else {
        console.error("Please enter a valid country code!");
    }

})

async function getCountryAndNeighbours(countryCode) {

    try {
        let apiUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`
    
        let response = await fetch(apiUrl);

        if (!response.ok) {
            console.log("Failed to fetch country data!");
        }

        let [countryData] = await response.json();
        console.log("Country", countryData);

        if (countryData.borders && countryData.borders.length > 0) {
            console.log("Neighbours:");
            await fetchNeighbours(countryData.borders);
        } else {
            console.log("No bordering countries.");
        }

    } catch (error) {
        console.error("error", error.message);
    }
}

async function fetchNeighbours(borderCountries) {

    try {
        let neighboursUrl = `https://restcountries.com/v3.1/alpha?codes=${borderCountries.join(",")}`
        let neighboursResponse = await fetch(neighboursUrl);

        if (!neighboursResponse.ok) {
            console.log("Failed to fetch country neigbours data!");
        }

        let neighboursData = await neighboursResponse.json();

        for (let doc of neighboursData) {
            console.log("Neighbour:", doc);

        }

    } catch (error) {
        console.log("Error fetching neigbours", error.message);
    }
}