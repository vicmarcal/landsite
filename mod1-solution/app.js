(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.warning ="I do NOT consider and empty item (',,') nor a item with just spaces, (',   ,') as an item towards to the count";
    $scope.CheckMenu = function(){

      if($scope.menu && $scope.menu.trim())
      {
        //Set Green style
        $scope.inputStyle = {'border': '1px dashed green'};
        $scope.msgStyle = {'color':'green'};

        // Check the number of Non Null items
        var nItems = 0;
        var menuitems = $scope.menu.split(",");
        for (var i = 0; i < menuitems.length; i++)
          if (menuitems[i].trim()) nItems++;

        //Too much?
        if(nItems <= 3)
          $scope.message = "Enjoy!";
        else
          $scope.message = "Too much!";
      }
      else
      {
        //Set Red style
        $scope.inputStyle = {'border': '1px dashed red'};
        $scope.msgStyle = {'color':'red'};
        $scope.message = "Please enter data first ";
      }

    };
  }

})();
