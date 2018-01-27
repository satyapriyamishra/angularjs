var app = angular.module('app', []);

app.directive('enter', function () {
   return function (scope,el,attr) {
       el.bind('mouseenter', function () {
           scope.trigger();
       });
   }
});
app.controller ('myctrl1', function ($scope) {
    $scope.trigger = function () {
        alert("Alert from controller !");
    }
})