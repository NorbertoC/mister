/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.novedades', [
        'ui-router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.novedades', {
                    url: '/novedades',
                    views: {
                        'content@': {
                            templateUrl: 'categories/novedades/novedades.html'
                        }
                    }
                });
        });
})();