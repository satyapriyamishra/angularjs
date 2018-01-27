var app = angular.module('app', []);

app.controller('myctrl1', function ($scope,$http) {
    $http.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
        $scope.myData = response.data;
    });
})