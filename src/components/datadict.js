import citydata from "./citydata";

function GetCity({viewCount}) {
    var populationDictionary = {};

    // var data = JSON.parse(citydata);
    // console.log(data);
    
    // for (var i = 0; i<data.length; i++) {
    
    // }
    var roundedViewCount = roundNumber(viewCount);
    var rouundedViewCountAsInt = parseInt(roundedViewCount);
    citydata.map((selectedCity) => (
        populationDictionary[roundNumber(selectedCity.population)] = selectedCity.city+", "+selectedCity.state
    ));
    console.log("inside get city"+viewCount);
    console.log(roundedViewCount);
    console.log(getNearestPopulation(56000, populationDictionary));
    return viewCount;
}
function roundNumber(population) {
    var lenOfString = population.length;
    var populationAsInt = parseInt(population);
    if (lenOfString === 5) {
        return Math.round(populationAsInt/1000)*1000;
    } else if (lenOfString === 6) {
        return Math.round(populationAsInt/10000)*10000;
    } else if (lenOfString === 7) {
        return Math.round(populationAsInt/100000)*100000;
    } else if (lenOfString === 8) {
        return Math.round(populationAsInt/1000000)*1000000;
    } else if (lenOfString === 9) {
        return Math.round(populationAsInt/10000000)*10000000;
    } else if (lenOfString === 10) {
        return Math.round(populationAsInt/100000000)*100000000;
    } else if (lenOfString === 11) {
        return Math.round(populationAsInt/1000000000)*1000000000;
    } else if (lenOfString === 12) {
        return Math.round(populationAsInt/10000000000)*10000000000;
    }
}
function getNearestPopulation(youtubeView, populationDict) {
    if (youtubeView > 8000000000) {
        var division = youtubeView/8000000000;
        return "That's like everyone on Earth watched 1 video their channel " + division+ " times!"
    } else{
        var previousKey = populationDict[0];
        var previousValue = populationDict[previousKey];
        for(var key in populationDict) {
            if (youtubeView == key){
                return "Thats as if almost everyone in "+ populationDict[key]+" watched a video!";
            } else if (youtubeView > key){
                previousKey = key;
                previousValue = populationDict[key];
            } else if (youtubeView < key) {
                return "Thats as if almost everyone in "+ previousValue + " watched a video!";
            }
        }
    }
}

export default GetCity;