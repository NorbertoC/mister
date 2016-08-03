/**
 * Created by n_car on 30/7/2016.
 */
(function() {
    'use strict';
    angular.module('mister.menu-del-dia', [
        'ui-router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.menu-del-dia', {
                    url: '/menu-del-dia',
                    views: {
                        'content@': {
                            templateUrl: 'categories/comidas/menu-del-dia.html'
                        }
                    }
                });
        });
})();