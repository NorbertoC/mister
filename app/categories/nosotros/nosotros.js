/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.nosotros', [
        'ui-router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.nosotros', {
                    url: '/nosotros',
                    views: {
                        'content@': {
                            templateUrl: 'categories/nosotros/nosotros.html'
                        }
                    }
                });
        });
})();