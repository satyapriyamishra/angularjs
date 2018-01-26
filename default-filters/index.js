var app = angular.module('app', []);
app.factory ('Data', function () {
    var name =  [
       'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
    return name;
})
app.controller ('myctrl1', function ($scope,Data) {
    $scope.name = Data;
    $scope.firstname = "satyaPriya MiSHRa";
    $scope.price = 20;
})