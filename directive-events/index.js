var app = angular.module('app', []);

app.directive('frontend', function () {
    return function (scope, element) {
        element.bind('mouseenter', function () {
            alert("I am inside the custom directive !");
        });
    }
});
app.directive('angularjs', function () {
    return function (scope, element) {
        element.bind('mouseenter', function () {
            element[0].style.border = '1px solid red';
        });
        element.bind('mouseleave', function () {
            element[0].style.border = '';
        });
    }
});
app.controller('myctrl1', function ($scope) {

})