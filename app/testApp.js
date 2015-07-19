'use strict';

angular.module('testApp', []);


// used to test scope inheritance
angular.module('testApp').controller('nested-a', function($scope){
    $scope.a = {
        a: 1
    };
});

// used to test scope inheritance
angular.module('testApp').controller('nested-b', function($scope){
    $scope.b = {
        b: 2
    };
});

// used to test scope inheritance
angular.module('testApp').controller('nested-c', function($scope){
    $scope.c = {
        c: 3
    };
});

// used to test multiple mouse events on one element
angular.module('testApp').controller('mouseEvents', function($scope){
    $scope.mouseEvents = [];
    $scope.mouseEvent = function(eventName) {
        $scope.mouseEvents.push(eventName);
    };
});