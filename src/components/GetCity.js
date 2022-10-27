import citydata from "./citydata";
// takees the youtube view count and returns a city that is closes in population 
function GetCity({viewCount}) {
    var populationDictionary = {};
    var roundedViewCount = roundNumber(viewCount);
    var rouundedViewCountAsInt = parseInt(roundedViewCount);
    citydata.map((selectedCity) => (
        populationDictionary[roundNumber(selectedCity.population)] = selectedCity.city+", "+selectedCity.state
    ));
    return getNearestPopulation(rouundedViewCountAsInt, populationDictionary);
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
        return "That's as if everyone on Earth watched 1 video their channel " + Math.floor(division)+ " times!"
    } else if(youtubeView > 38000000) {
        var division = youtubeView/38000000;
        return "That's as if everyone on Tokyo, Japan watched 1 video their channel more than " + Math.round(division * 100) / 100 + " times!"
    } else{
        var previousKey = populationDict[0];
        var previousValue = populationDict[previousKey];
        for(var key in populationDict) {
            if (youtubeView == key){
                return "Thats as if almost everyone in "+ populationDict[key]+" watched a video!";
            } else if (youtubeView < key) {
                return "Thats as if almost everyone in "+ previousValue + " watched a video!";
            } 
            previousKey = key;
            previousValue = populationDict[key];
        }
    }
}

export default GetCity;