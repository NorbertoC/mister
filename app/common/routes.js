(function() {
    'use strict';

    angular.module('mister')
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('app', {
                    abstract: true,
                    views: {
                        'header': {
                            templateUrl: 'app/common/header.tmpl.html'
                        },
                        'footer': {
                            templateUrl: 'app/common/footer.tmpl.html'
                        }
                    }
                })
                .state('app.home', {
                    url: '/home',
                    views: {
                        'content@': {
                            templateUrl: 'app/common/content.tmpl.html'
                        }
                    }
                })
                .state('app.pizzas', {
                    url: '/pizzas',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/comidas/pizzas/pizzas.html'
                        }
                    }
                })
                .state('app.lomitos', {
                    url: '/lomitos',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/comidas/lomitos/lomitos.html'
                        }
                    }
                })
                .state('app.hamburguesas', {
                    url: '/hamburguesas',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/comidas/hamburguesas/hamburguesas.html'
                        }
                    }
                })
                .state('app.tartas', {
                    url: '/tartas',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/comidas/tartas/tartas.html'
                        }
                    }
                })
                .state('app.menu-del-dia', {
                    url: '/menu-del-dia',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/comidas/menu-del-dia/menu-del-dia.html'
                        }
                    }
                })
                .state('app.empanadas', {
                    url: '/empanadas',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/comidas/empanadas/empanadas.html'
                        }
                    }
                })
                .state('app.contacto', {
                    url: '/contacto',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/contacto/contacto.html'
                        }
                    }
                })
                .state('app.novedades', {
                    url: '/novedades',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/novedades/novedades.html'
                        }
                    }
                })
                .state('app.nosotros', {
                    url: '/nosotros',
                    views: {
                        'content@': {
                            templateUrl: 'app/categories/nosotros/nosotros.html'
                        }
                    }
                })

        })

    ;

})();