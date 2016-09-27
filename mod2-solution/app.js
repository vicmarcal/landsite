(function () {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller ('ToBuyShoppingController', ToBuyShoppingController)
  .controller ('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service ('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  
  function ToBuyShoppingController (ShoppingListCheckOffService){
    var toBuy = this;
    // toBuy.list = [{quantity: 10, name: hello}];
    toBuy.list = ShoppingListCheckOffService.gettoBuyItems();
    toBuy.checkedoffItem = function(index){
        ShoppingListCheckOffService.checkedoffItem(index);
      };
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var bought = this;
    bought.list = ShoppingListCheckOffService.getboughtItems();
  };

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuy = [ {name: "cookies", quantity: "10"},
                  {name: "chocolates", quantity: "2"},
                  {name: "milk", quantity:"1"},
                  {name: "apples", quantity:"14"},
                  {name: "carrots", quantity:"3"}
                ];
    
    var bought = [];
    
    service.gettoBuyItems = function () {
      return toBuy;
    };
    
    service.getboughtItems = function () {
      console.log(bought);
      return bought;      
    };
    
    service.checkedoffItem = function(index){
      //Remove from toBuy list and push into the bought list.
      bought.push(toBuy.splice(index, 1)[0]);
    };
  };

})();
