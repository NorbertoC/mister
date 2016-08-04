/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.tartas', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.tartas', {
                    url: '/tartas',
                    views: {
                        'content@': {
                            templateUrl: 'categories/comidas/tartas.html'
                        }
                    }
                });
        });
})();