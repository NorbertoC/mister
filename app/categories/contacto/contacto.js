/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.contacto', [
        'ui-router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.contacto', {
                    url: '/contacto',
                    views: {
                        'content@': {
                            templateUrl: 'categories/contacto/contacto.html'
                        }
                    }
                });
        });
})();