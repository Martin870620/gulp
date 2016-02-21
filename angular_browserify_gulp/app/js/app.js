require('angular');
var app = angular.module('app', []);

app.controller('MainController', function($scope){
    $scope.message = 'Two birds killed with one stone!';
});
