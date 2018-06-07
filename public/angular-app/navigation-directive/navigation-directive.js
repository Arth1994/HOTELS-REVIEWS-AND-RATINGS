angular.module('meanHotel').directive('mhNavigation', mhNavigation);

function mhNavigation(){
    return {
        restrict: 'E',
        templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
    };
}