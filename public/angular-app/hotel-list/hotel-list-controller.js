angular.module('meanHotel').controller('HotelsController', HotelsController);

function HotelsController(hotelDataFactory) {
    var vm = this;
    vm.title = "Arth Shah's Hotel";
    hotelDataFactory.hotelList().then(function (response) {
        vm.hotels = response.data;
    });
}