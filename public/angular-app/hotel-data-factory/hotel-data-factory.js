angular.module('meanHotel').factory('hotelDataFactory', hotelDataFactory);

function hotelDataFactory($http) {
    return {
        hotelList: hotelList,
        hotelDisplay: hotelDisplay,
        postReview: postReview
    };

    function hotelList() {
        return $http.get('/api/hotels?count=10').then(complete).catch(failed);
    }

    function hotelDisplay(id) {
        return $http.get('/api/hotels/' + id).then(complete).catch(failed);
    }

    function complete(response) {
        return response;
    }


    function postReview(id, review) {
        return $http.post('/api/hotels/' + id + '/reviews', review).then(complete).catch(failed);
    }


    function failed(error) {
        console.log(error.statusText);
    }
}