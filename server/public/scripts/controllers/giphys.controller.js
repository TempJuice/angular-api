app.controller('GiphyController', ['GiphyService', function (GiphyService) {
    console.log('Controller is loaded');

    var self = this;
    self.giphys = GiphyService.giphys;
    console.log('controller giphy object: ',self.giphys);
    

    self.getRandomGiphy = function (){
        GiphyService.getRandomGiphy();
    }
    
}]);