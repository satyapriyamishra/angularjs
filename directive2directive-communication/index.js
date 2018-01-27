var app = angular.module('app', []);


// app.controller ('myctrl1', function ($scope) {
//     // $scope.trigger = function () {
//     //     alert("Alert from controller !");
//     // }
// })
app.directive('superman', function () {
    return {
        restrict : 'E',
        controller: function ($scope,el) {
            $scope.abilities = [];
            $scope.addStrength = function (){
                $scope.abilities.push("Strength");
            }
            $scope.addSpeed = function () {
                $scope.abilities.push("Speed");
            }
        },
        link: function (scope,el,attr) {
            el.bind('mouseenter', function () {
                console.log(scope.abilities);
            });
        }
    }
});
app.directive('enter', function () {
    return {
        require : "superman",
        link : function (scope,el,attr,supermanCtrl) {
            supermanCtrl.addStrength();
        }
    }
});