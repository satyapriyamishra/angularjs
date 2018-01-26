var app = angular.module('app', []);

app.directive('frontend', function () {
    return function (scope, element) {
        element.bind('mouseenter', function () {
            alert("I am inside the custom directive !");
        });
    }
});
app.controller('myctrl1', function ($scope) {

})