/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.pizzas', [
        'ui-router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.pizzas', {
                    url: '/pizzas',
                    views: {
                        'content@': {
                            templateUrl: 'categories/comidas/pizzas.html'
                        }
                    }
                });
        });
})();