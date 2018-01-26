var app = angular.module('app', []);

app.directive('frontend', function () {
    return {
        restrict : 'E',
        template : "<div><h3>I rule the software job world</h3></div>"
    }
});
app.controller ('myctrl1', function ($scope,Data) {
    
})