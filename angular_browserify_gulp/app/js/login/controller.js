require('angular');
angular.module('module.login.controller', [])
    .config(function($stateProvider){
        $stateProvider.state('/login', {
            url: '/login',
            templateUrl: '../views/login.html'
        });
    });
