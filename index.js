var singleApp = angular.module('Single', ['ngRoute']);

singleApp.config(function ($routeProvider) {
    $routeProvider
        .when('form_1', {
            templateUrl: 'form_1.html',
            controller: 'mainController'
        })
        .when('form_2', {
            templateUrl: 'form_2.html',
            controller: 'mainController'
        })
        .when('form_3', {
            templateUrl: 'form_3.html',
            controller: 'mainController'
        })
});

singleApp.controller('mainController', function ($scope) {});