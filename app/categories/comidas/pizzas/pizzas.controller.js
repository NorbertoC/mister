/**
 * Created by n.carosella on 05/08/2016.
 */
(function(angular) {
    'use strict';

    angular.module('mister.pizzas', [])
    .controller('PizzasListCtrl', PizzasListaCtrl);

    PizzasListaCtrl.$inject = ['PizzasModel'];

    function PizzasListaCtrl(PizzasModel) {
        var pizzasListCtrl = this;
        pizzasListCtrl.pizzas = PizzasModel.getPizzas()
            .then(function (result) {
                pizzasListCtrl.pizzas = result.data;
            })
    }


})(window.angular);