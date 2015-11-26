angular.module('personalWebsiteApp', [])
    .controller('ProjectController', '$scope', function($scope){
        $scope.show_tech = function(){
            if($scope.show) {
                $scope.show = false;
            } else {
                $scope.show = true;
            }
        }
    });