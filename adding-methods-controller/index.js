var app = angular.module('app', []);
app.factory('Data', function () {
    return { message: "I am getting shared between controllers" };
})
app.controller('myctrl1', function ($scope, Data) {
    $scope.data = Data;
})
app.controller('myctrl2', function ($scope, Data) {
    $scope.data = Data;
    $scope.reverseMessage = function () {
        return $scope.data.message.split("").reverse().join("");
    }
}) 