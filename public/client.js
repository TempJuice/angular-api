var app = angular.module('myApp', []);

app.controller('SwapiController', ['$http', function ($http) {
    // console.log('controller loaded');

    var self = this;
    var giphyAPIKey = '58ba8edb1dd74cafb62fbc3510b667ce';

    self.getSpecies = function (id) {
        $http.get('https://swapi.co/api/species/' + id).then(function (response) {
            // console.log('response.data: ', response.data);
            self.speciesResult = response.data;

            $http.get(self.speciesResult.films[0]).then(function (response) {
                // console.log('film data: ', response.data);

                self.filmResult = response.data;
            });
        });
    };

    self.getRandomGiphy = function() {
        var baseUrl = 'http://api.giphy.com/v1/gifs/random?';
        baseUrl += 'api_key=' + giphyAPIKey;
        baseUrl += '&limit=5';
        baseUrl += '&rating=g';

        // console.log('baseUrl: ', baseUrl);
        
        $http.get(baseUrl).then(function (response){
            // console.log('random giphys: ', response.data.data);
            self.giphys = response.data;
            
        }
    )};

    self.searchGiphy = function (searchInput) {
        // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
        var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
        baseUrl += 'q=' + searchInput;
        baseUrl += '&api_key=' + giphyAPIKey;
        baseUrl += '&limit=5';
        // baseUrl += '&rating=g';

        // console.log('baseUrl: ', baseUrl);

        $http.get(baseUrl).then(function (response) {
            console.log('searched giphys: ', response.data.data);
            self.searchGif = response.data.data;

        }
        )
    };
    

}]);

