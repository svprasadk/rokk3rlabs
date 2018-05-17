var app = angular.module('rokk3rlabsapp', ['ui.router', 'ngSanitize']);


app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '/views/search.html'

        })
}]);

app.controller('SearchCtrl', ['$scope','$http', function ($scope, $http) {
    $scope.searchText=function () {
        $http({
            url: '/searchText/'+$scope.search,
            method: "get"
        }).then(function (response) {
            $scope.outputText = response.data;
            console.log('response',response);
        });
    }
}]);

