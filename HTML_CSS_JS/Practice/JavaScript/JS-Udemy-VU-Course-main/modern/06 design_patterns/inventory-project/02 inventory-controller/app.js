import {UIController} from "./ui-controller.js";
import {CategoryController} from "./category-controller.js";


// App Controller
const App = (function(CategoryController, UIController){

    // Public methods
    return {
        init: function(){
            console.log('Initializing App...');
        }
    }

})(CategoryController, UIController);

// Initialize App
App.init();