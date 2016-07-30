(function() {
    'use strict';

    angular.module('myApp')
        .config(function($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/home");
            //
            // Now set up the states
            $stateProvider
                .state('empanadas', {
                    url: "/empanadas",
                    templateUrl: "menu/empanadas/empanadas.html"
                })
                .state('pizzas', {
                    url: '/pizzas',
                    templateUrl: 'menu/pizzas/pizzas.html'
                })

            ;

        });

})();