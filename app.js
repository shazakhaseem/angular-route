var app = angular.module('ajaxApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'FirstController'
        })
        .when('/results', {
            templateUrl: 'templates/results.html',
            controller: 'ResultsController'
        });
}]);