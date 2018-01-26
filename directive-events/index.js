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
            element.addClass("panel");
        });
        element.bind('mouseleave', function () {
            element.removeClass("panel");
        });
    }
});
app.controller('myctrl1', function ($scope) {

})