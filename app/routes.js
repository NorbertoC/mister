(function() {
  'use strict';

  angular.module('myApp')
      .config(function($stateProvider, $urlRouterProvider) {

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
            });
      })



      .controller('ListCtrl', function($scope) {
        $scope.shoppingList = [
          { name: 'Milk' },
          { name: 'Eggs' },
          { name: 'Bread' },
          { name: 'Cheese' },
          { name: 'Ham' }
        ];

        $scope.selectItem = function(selectedItem) {
          _($scope.shoppingList).each(function(item) {
            item.selected = false;
            if (selectedItem === item) {
              selectedItem.selected = true;
            }
          });
        };
      })

})();
