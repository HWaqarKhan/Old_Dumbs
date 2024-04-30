import { UIController } from "./ui-controller.js";
import { CategoryController } from "./category-controller.js";







// App Controller
const App = (function (CategoryController, UIController) {

    const loadEventListener = function () {
        const UISelector = UIController.getSelector();
        document.querySelector(UISelector.addBtn).addEventListener("click", categoryAddSubmit);
        document.querySelector(UISelector.tableBodySelector).addEventListener("click", categoryUpdate);
        document.querySelector(UISelector.updateBtn).addEventListener("click", updateAction);
        document.querySelector(UISelector.backBtn).addEventListener('click', backAction);
        document.querySelector(UISelector.confirmDialog).addEventListener('click', dialogDelete);
        document.querySelector(UISelector.deleteBtn).addEventListener('click', categoryDelete);
    }
    const dialogDelete = function (e) {
        $(UIController.getSelector().modalSelector).modal('show');
        e.preventDefault();
    }

    const categoryAddSubmit = function (e) {
        const input = UIController.getCategoryInput();
        CategoryController.addCategory(input);
        UIController.clearForm();
        UIController.populateCateogryList(CategoryController.getCategories());
        Materialize.toast('Category saved successfully', 2000, 'green accent-4');
        e.preventDefault();
    }
    const categoryUpdate = function (e) {
        if (e.target.classList.contains('edit-category')) {
            const id = e.target.parentElement.parentElement.parentElement.id.split('-')[1];
            UIController.populateForm(CategoryController.findById(id))
            document.querySelector(UIController.getSelector().addBtn).style.display = 'none';
            document.querySelector(UIController.getSelector().deleteBtn).style.display = 'inline';
            document.querySelector(UIController.getSelector().updateBtn).style.display = 'inline';
            document.querySelector(UIController.getSelector().backBtn).style.display = 'inline';
        }
    }
    const updateAction = function (e) {
        const input = UIController.getCategoryInput();
        CategoryController.updateCategory(input);
        UIController.clearForm();
        document.querySelector(UIController.getSelector().addBtn).style.display = 'inline';
        document.querySelector(UIController.getSelector().deleteBtn).style.display = 'none';
        document.querySelector(UIController.getSelector().updateBtn).style.display = 'none';
        document.querySelector(UIController.getSelector().backBtn).style.display = 'none';

        UIController.populateCateogryList(CategoryController.getCategories());
        Materialize.toast('Category updated successfully', 2000, 'green accent-4');
        e.preventDefault();
    }
    const categoryDelete = function(e){
        const input = UIController.getCategoryInput();
        CategoryController.deleteCategory(input.categoryId);
        UIController.clearForm();
        document.querySelector(UIController.getSelector().addBtn).style.display = 'inline';
        document.querySelector(UIController.getSelector().deleteBtn).style.display = 'none';
        document.querySelector(UIController.getSelector().updateBtn).style.display = 'none';
        document.querySelector(UIController.getSelector().backBtn).style.display = 'none';

        UIController.populateCateogryList(CategoryController.getCategories());
        Materialize.toast('Category deleted successfully', 2000, 'green accent-4');

        e.preventDefault();
    }
    const backAction = function(e){
        UIController.clearForm();

        document.querySelector(UIController.getSelector().updateBtn).style.display = "none";
        document.querySelector(UIController.getSelector().deleteBtn).style.display = "none";
        document.querySelector(UIController.getSelector().backBtn).style.display = "none";
        document.querySelector(UIController.getSelector().addBtn).style.display = "inline";


        // Populate list with items
        UIController.populateCateogryList(CategoryController.getCategories());

        e.preventDefault();
    }
    
    // Public methods
    return {
        init: function () {
            UIController.clearForm();
            const categories = CategoryController.getCategories();

            // Populate list with items
            UIController.populateCateogryList(categories);
            loadEventListener();
            document.querySelector(UIController.getSelector().addBtn).style.display = 'inline';
            document.querySelector(UIController.getSelector().deleteBtn).style.display = 'none';
            document.querySelector(UIController.getSelector().updateBtn).style.display = 'none';
            document.querySelector(UIController.getSelector().backBtn).style.display = 'none';
            $('.modal').modal();
        }
    }

})(CategoryController, UIController);

App.init();