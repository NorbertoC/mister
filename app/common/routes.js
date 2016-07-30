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
                    templateUrl: 'app/categories/categories.html',
                    controller: 'MainCtrl'
                })
                .state('empanadas', {
                    url: "/empanadas",
                    templateUrl: "app/categories/comidas/empanadas/empanadas.html"
                })
                .state('pizzas', {
                    url: '/pizzas',
                    templateUrl: 'app/categories/comidas/pizzas/pizzas.html'
                })
                .state('lomitos', {
                    url: '/lomitos',
                    templateUrl: 'app/categories/comidas/lomitos/lomitos.html'
                })
                .state('menu-del-dia', {
                    url: '/menu-del-dia',
                    templateUrl: 'app/categories/comidas/menu-del-dia/menu-del-dia.html'
                })
                .state('tartas', {
                    url: '/tartas',
                    templateUrl: 'app/categories/comidas/tartas/tartas.html'
                })
                .state('hamburguesas', {
                    url: '/hamburguesas',
                    templateUrl: 'app/categories/comidas/hamburguesas/hamburguesas.html'
                })
                .state('contacto', {
                    url: '/contacto',
                    templateUrl: 'app/categories/contacto/contactanos.html'
                })
                .state('nosotros', {
                    url: '/nosotros',
                    templateUrl: 'app/categories/nosotros/nosotros.html'
                })
                .state('novedades', {
                    url: '/novedades',
                    templateUrl: 'app/categories/novedades/novedades.html'
                })


            ;

        });

})();