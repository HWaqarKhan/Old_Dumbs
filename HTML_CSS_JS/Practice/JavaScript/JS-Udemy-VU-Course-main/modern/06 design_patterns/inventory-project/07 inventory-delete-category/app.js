import {UIController} from "./ui-controller.js";
import {CategoryController} from "./category-controller.js";
import {Category} from "./category.js";


  // App Controller
const App = (function(CategoryController, UIController){
    const loadEventListeners = function() {
        const UISelectors = UIController.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', categoryAddSubmit);
        document.querySelector(UISelectors.tableBodySelector).addEventListener('click', categoryUpdateSubmit);
        document.querySelector(UISelectors.updateBtn).addEventListener('click', updateAction);
        document.querySelector(UISelectors.backBtn).addEventListener('click', backAction);
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', deleteAction);
    }
    const categoryAddSubmit = function(e){
        // Get form input from UI Controller
        const input = UIController.getCategoryInput();

        CategoryController.addCategory(input);

        UIController.clearForm();
        // Populate list with items
        UIController.populateCateogryList(CategoryController.getCategories());

        e.preventDefault();
    }
    const backAction = function(e){
        UIController.clearForm();

        document.querySelector(UIController.getSelectors().updateBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().deleteBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().backBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().addBtn).style.display = "inline";


        // Populate list with items
        UIController.populateCateogryList(CategoryController.getCategories());

        e.preventDefault();
    }
    const updateAction = function(e){
        // Get form input from UI Controller
        const input = UIController.getCategoryInput();
        CategoryController.updateCategory(input);
        UIController.clearForm();

        document.querySelector(UIController.getSelectors().updateBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().deleteBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().backBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().addBtn).style.display = "inline";


        // Populate list with items
        UIController.populateCateogryList(CategoryController.getCategories());

        e.preventDefault();
    }
    const deleteAction = function(e){
        // Get form input from UI Controller
        const input = UIController.getCategoryInput();
        CategoryController.deleteCategory(input.categoryId);
        UIController.clearForm();

        document.querySelector(UIController.getSelectors().updateBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().deleteBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().backBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().addBtn).style.display = "inline";


        // Populate list with items
        UIController.populateCateogryList(CategoryController.getCategories());

        e.preventDefault();
    }
    const categoryUpdateSubmit = function(e){
        if(e.target.classList.contains('edit-category')){
            console.log ('hi');

            const id = e.target.parentElement.parentElement.parentElement.id.split("-")[1]


            const category = CategoryController.findById(id);

           UIController.populateForm(category);
            document.querySelector(UIController.getSelectors().updateBtn).style.display = "inline";
            document.querySelector(UIController.getSelectors().deleteBtn).style.display = "inline";
            document.querySelector(UIController.getSelectors().backBtn).style.display = "inline";
            document.querySelector(UIController.getSelectors().addBtn).style.display = "none";
        }

        e.preventDefault();
    }
    // Public methods
    return {
        init: function(){
            const categories = CategoryController.getCategories();
            document.querySelector(UIController.getSelectors().addBtn).style.display = "inline";
            document.querySelector(UIController.getSelectors().updateBtn).style.display = "none";
            document.querySelector(UIController.getSelectors().deleteBtn).style.display = "none";
            document.querySelector(UIController.getSelectors().backBtn).style.display = "none";

            // Populate list with items
            UIController.populateCateogryList(categories);
            loadEventListeners();
        }
    }

})(CategoryController, UIController);

// Initialize App
App.init();