(function() {
  'use strict';

  angular.module('myApp')
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
        })
      }
    })

})();
