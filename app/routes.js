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
        .state('home', {
          url: "/home",
          templateUrl: "shopping-list/home.html"
        })
        .state('list', {
          url: '/list',
          templateUrl: 'shopping-list/list.html',
          controller: 'ListCtrl'
        })
        .state('list.item', {
          url: '/:item',
          templateUrl: 'shopping-list/list.item.html',
          controller: function($scope, $stateParams) {
            $scope.item = $stateParams.item;
          }
        })
        .state('pizzas', {
          url: '/pizzas',
          templateUrl: 'HTML/pizzas.html'
        })
        .state('menu', {
          url:'/menu',
          templateUrl: 'HTML/Menu.html'
        })


      ;

    });

})();
