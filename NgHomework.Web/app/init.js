var app = angular.module("app", ["ui.router", "ui.bootstrap"]);
app.config([
    "$stateProvider", "$urlRouterProvider", "$httpProvider",
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "/app/views/main.html",
                controller: "mainController"
            });
    }]);