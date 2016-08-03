/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.lomitos', [
        'ui-router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.lomitos', {
                    url: '/lomitos',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/comidas/lomitos/lomitos.html'
                        }
                    }
                });
        });
})();