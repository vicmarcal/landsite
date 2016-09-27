Creation of "check off" shopping List application in AngularJS.
=======

Think of being in a store with a shopping list that allows you to "check off" the items you've already bought, except instead of checking them off, the bought item simply moves to the "Already Bought" list.

The HTML page displays 2 lists, one titled "To Buy" and the other "Already Bought".

## Controllers

### ToBuyShoppingController
* Manages the ToBuy list showing a list items to be bought with a Button next to it. The list of items are *hardcoded* in the Controller(Tip: Use a JSON call if you want to retrieve the list from the server).
* As "toBuy": Using own scope.
  * toBuy.remove : Calls the service Remove method.


### AlreadyBoughtShoppingController
* Manages the AlreadyBought list showing a list of items already bought.
* As "bought": Using own scope.
  * bought.list : A 2-way binding variable to show the list in HTML.

## Services
### ShoppingListCheckOffService
Since both Controllers are independent, it is needed a Service to share variables and to perform the business logic. Since a simple Service is more than enough we don't approach it with a Factory.
* Aux vars:
  * var toBuy: Array. Contains all the elements of the "To buy" list.
  * var bought: Array. Contains all the elements of the "Bought" list.
* Service.remove(): The core of the app.
  * Called by: ToBuyShoppingController
  * Objectives:
    * Remove an item of the toBuy array
    * Add the item to the bought array
