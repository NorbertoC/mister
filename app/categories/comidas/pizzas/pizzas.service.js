/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.pizzas')
        .service('PizzasModel', PizzasModel);

    PizzasModel.$inject = ['$http'];

    function PizzasModel($http) {
        var model = this,
            URLS = {
                FETCH: 'data/pizzas.json'
            };

        model.getPizzas = function () {
            return $http.get(URLS.FETCH);
        };
    };
})();