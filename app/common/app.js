(function() {
    'use strict';

    angular.module('mister', [
        'ui.router',
        'categories',
        'categories.comidas'
    ])

        .controller('MainCtrl', function ($scope) {
            $scope.categories = [
                {"id": 0, "name": "Comidas"},
                {"id": 1, "name": "Contacto"},
                {"id": 2, "name": "Nosotros"},
                {"id": 3, "name": "Novedades"}
            ];

            $scope.comidas = [
                {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
                {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
                {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
                {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
                {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
                {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
                {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
                {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
                {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
            ];

            $scope.isCreating = false;
            $scope.isEditing = false;
            $scope.currentCategory = null;
            $scope.editedComida = null;

            function isCurrentCategory(category) {
                return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
            }

            function setCurrentCategory(category) {
                $scope.currentCategory = category;

                cancelCreating();
                cancelEditing();
            }

            $scope.isCurrentCategory = isCurrentCategory;
            $scope.setCurrentCategory = setCurrentCategory;

            function setEditedComida(comidas) {
                $scope.editedComida = angular.copy(comidas);
            }

            function isSelectedComida(comidasId) {
                return $scope.editedComida !== null && $scope.editedComida.id === comidasId;
            }

            $scope.setEditedComida = setEditedComida;
            $scope.isSelectedComida = isSelectedComida;

            function resetCreateForm() {
                $scope.newComida = {
                    title: '',
                    url: '',
                    category: $scope.currentCategory
                };
            }

            //-------------------------------------------------------------------------------------------------
            // CRUD
            //-------------------------------------------------------------------------------------------------
            function createComida(comidas) {
                comidas.id = $scope.comidas.length;
                $scope.comidas.push(comidas);

                resetCreateForm();
            }

            function updateComida(comidas) {
                var index = _.findIndex($scope.comidas, function (b) {
                    return b.id == comidas.id
                });
                $scope.comidas[index] = comidas;

                $scope.editedComida = null;
                $scope.isEditing = false;
            }

            $scope.createComida = createComida;
            $scope.updateComida = updateComida;

            //-------------------------------------------------------------------------------------------------
            // CREATING AND EDITING STATES
            //-------------------------------------------------------------------------------------------------
            function shouldShowCreating() {
                return $scope.currentCategory && !$scope.isEditing;
            }

            function startCreating() {
                $scope.isCreating = true;
                $scope.isEditing = false;
                resetCreateForm();
            }

            function cancelCreating() {
                $scope.isCreating = false;
            }

            $scope.shouldShowCreating = shouldShowCreating;
            $scope.startCreating = startCreating;
            $scope.cancelCreating = cancelCreating;

            function shouldShowEditing() {
                return $scope.isEditing && !$scope.isCreating;
            }

            function startEditing() {
                $scope.isCreating = false;
                $scope.isEditing = true;
            }

            function cancelEditing() {
                $scope.isEditing = false;
                $scope.editedComida = null;
            }

            $scope.startEditing = startEditing;
            $scope.cancelEditing = cancelEditing;
            $scope.shouldShowEditing = shouldShowEditing;
        })
    ;

}());
