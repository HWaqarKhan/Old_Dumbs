import {UIController} from "./ui-controller.js";
import {CategoryController} from "./category-controller.js";







// App Controller
const App = (function(CategoryController, UIController){

    // Public methods
    return {
        init: function(){
            const categories = CategoryController.getCategories();

            // Populate list with items
            UICtrl.populateCateogryList(categories);
        }
    }

})(CategoryController, UIController);

App.init();