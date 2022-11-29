Youtube Views to City Population visualizer

this project uses the youtube API along with a JSON Array of city populations to contextualize the amount of views a youtube channel has with  city's population. 

Here are some youtube channels i used to test my website. I realized that there is a difference between the youtube username, and the youtube channel name. Sometimes a youtube channel name is not the same as the username, and sometimes theyr enot clearly listed in the youtube channel page url. 

Channels: 
beyonce
PewDiePie
officialfuturevideos
NastasiaM53
CosmeholicsAnonymous
AshleyMillerTV
mkbhd
tiffanyferg
MichellePhan
hellomayuko

requirments: 
1. PageContents.js is where I am using the youtube API
2. datadict.js is where I am using the data form the json array to find a city population that closely matches the youtube views
3. for user interaction, there is a search bar and a search button, where the user can enter a username of a channel they watch 
4. both of the json data and youtube api data is displayed on the PageContents.js component. and all of this is displayed on the Home.js
5. the ui changes based on the youtube channel views and the youtueb channel entered
5. the styling is located in App.css