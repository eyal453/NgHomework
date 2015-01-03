app.controller("mainController", ["$scope", function ($scope) {
    $scope.items = [{ name: "meow", desc: "lalal alalasd" }];

    $scope.newItem = {};

    function clearForm() {
        $scope.newItem = {};
        $scope.theForm.$setPristine();
    }

    $scope.deleteItem = function(item) {
        $scope.items.removeObj(item);
    }

    $scope.addItem = function () {
        $scope.theForm.$setSubmitted();
        if ($scope.theForm.$invalid) return;
        var item = angular.copy($scope.newItem);
        $scope.items.push(item);
        clearForm();
    }

    $scope.cancel = function () {
        clearForm();
    }
}]);