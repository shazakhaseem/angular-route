var app = angular.module('ajaxApp');

app.controller('FirstController', ['$scope', '$http',  function ($scope, $http) {

    $scope.name = 'Shaza';
    $scope.names = ['Shaza', 'Doha', 'Jasmeen'];

    //console.log function
    $scope.show = function () {
        console.log('Hey, how are you?');
    };

    $scope.showData = function () {
 var url = 'http://jsonplaceholder.typicode.com/posts';
 $http.get(url)
 .then(function (data) {
     $scope.data = data;
     
 });
    };

    $scope.showBilder = function () {
        var url = 'http://jsonplaceholder.typicode.com/photos';
        $http.get(url)
        .then(function (bilder) {
            //eftersom vad vi får tillbaka är i data array måste vi skriva så här ...
            $scope.bilder = bilder.data;
        })
    }; 


}]);
app.controller('ResultsController', ['$scope', function ($scope) {
    $scope.results = [
        { name: 'Shaza', score: 4 },
        { name: 'Doha', score: 3 },
        { name: 'Jasmeen', score: 2 },
    ];
}]);