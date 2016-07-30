(function() {
    'use strict';

    angular.module('mister')
        .config(function($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/home");
            //
            // Now set up the states
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/categories/categories.html'
                })
                .state('empanadas', {
                    url: "/empanadas",
                    templateUrl: "app/categories/comidas/empanadas/empanadas.html"
                })
                .state('pizzas', {
                    url: '/pizzas',
                    templateUrl: 'app/categories/comidas/pizzas/pizzas.html'
                })

            ;

        });

})();