(function () {
    angular.module('app')
        .controller('AppCtrl', AppController);

    AppController.$inject = ['$log', '$state', '$rootScope', '$scope', '$location'];

    function AppController($log, $state, $rootScope, $scope, $location) {

        vm = this;
        vm.pageTitle ='brand new app';
    };
})();
