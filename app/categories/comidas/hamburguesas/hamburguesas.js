/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.hamburguesas', [
        'ui-router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.hamburguesas', {
                    url: '/hamburguesas',
                    views: {
                        'content@': {
                            templateUrl: 'categories/comidas/hamburguesas.html'
                        }
                    }
                });
        });
})();