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
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', openConfirmation);
        document.querySelector(UISelectors.deleteYesBtn).addEventListener('click', deleteAction);
    }
    const categoryAddSubmit = function(e){
        // Get form input from UI Controller
        const input = UIController.getCategoryInput();

        CategoryController.addCategory(input).then(resp => {
            UIController.clearForm();
            // Populate list with items
            CategoryController.getCategories().then(categories => {
                UIController.populateCateogryList(categories);
                Materialize.toast('Category saved successfully', 2000, 'green accent-4');
            });

        });


        e.preventDefault();
    }
    const backAction = function(e){
        UIController.clearForm();

        document.querySelector(UIController.getSelectors().updateBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().deleteBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().backBtn).style.display = "none";
        document.querySelector(UIController.getSelectors().addBtn).style.display = "inline";


        // Populate list with items
        CategoryController.getCategories().then(categories => {
            UIController.populateCateogryList(categories);

        });

        e.preventDefault();
    }
    const updateAction = function(e){
        // Get form input from UI Controller
        const input = UIController.getCategoryInput();
        CategoryController.updateCategory(input).then(resp => {
            UIController.clearForm();

            document.querySelector(UIController.getSelectors().updateBtn).style.display = "none";
            document.querySelector(UIController.getSelectors().deleteBtn).style.display = "none";
            document.querySelector(UIController.getSelectors().backBtn).style.display = "none";
            document.querySelector(UIController.getSelectors().addBtn).style.display = "inline";
            CategoryController.getCategories().then(categories => {
                UIController.populateCateogryList(categories);
                Materialize.toast('Category updated successfully', 2000, 'green accent-4');
            });

        });



        // Populate list with items

        e.preventDefault();
    }
    const deleteAction = function(e){

        // Get form input from UI Controller
        const input = UIController.getCategoryInput();
        CategoryController.deleteCategory(input.categoryId).then(resp => {
            UIController.clearForm();

            document.querySelector(UIController.getSelectors().updateBtn).style.display = "none";
            document.querySelector(UIController.getSelectors().deleteBtn).style.display = "none";
            document.querySelector(UIController.getSelectors().backBtn).style.display = "none";
            document.querySelector(UIController.getSelectors().addBtn).style.display = "inline";

            CategoryController.getCategories().then(categories => {
                UIController.populateCateogryList(categories);
                Materialize.toast('Category deleted successfully', 2000, 'green accent-4');
            });

        });



        // Populate list with items


        e.preventDefault();
    }

    const openConfirmation = function(e) {
        $(UIController.getSelectors().modalSelector).modal('open');
        e.preventDefault();
    }
    const categoryUpdateSubmit = function(e){
        if(e.target.classList.contains('edit-category')){
            console.log ('hi');

            const id = e.target.parentElement.parentElement.parentElement.id.split("-")[1]


              CategoryController.findById(id).then(category => {
                  UIController.populateForm(category);
                  document.querySelector(UIController.getSelectors().updateBtn).style.display = "inline";
                  document.querySelector(UIController.getSelectors().deleteBtn).style.display = "inline";
                  document.querySelector(UIController.getSelectors().backBtn).style.display = "inline";
                  document.querySelector(UIController.getSelectors().addBtn).style.display = "none";
              });



        }

        e.preventDefault();
    }
    // Public methods
    return {
        init: function(){
            CategoryController.getCategories().then(categories => {
                document.querySelector(UIController.getSelectors().addBtn).style.display = "inline";
                document.querySelector(UIController.getSelectors().updateBtn).style.display = "none";
                document.querySelector(UIController.getSelectors().deleteBtn).style.display = "none";
                document.querySelector(UIController.getSelectors().backBtn).style.display = "none";

                // Populate list with items
                UIController.populateCateogryList(categories);
            });

            loadEventListeners();
            $('.modal').modal();
        }
    }

})(CategoryController, UIController);

// Initialize App
App.init();