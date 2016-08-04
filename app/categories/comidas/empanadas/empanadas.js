/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.empanadas', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.empanadas', {
                    url: '/empanadas',
                    views: {
                        'content@': {
                            templateUrl: 'categories/comidas/empanadas.html'
                        }
                    }
                });
        });
})();