var app = angular.module('app', []);
app.factory ('Data', function () {
    return {message : "The second controller reverses the string by a filter"};
})
app.filter('reverse', function () {
    return function (message) {
        return message.split('').reverse().join('');
    }
})
app.controller ('myctrl1', function ($scope,Data) {
    $scope.data = Data;
}) 
app.controller ('myctrl2', function ($scope,Data) {
    $scope.data = Data;
}) 