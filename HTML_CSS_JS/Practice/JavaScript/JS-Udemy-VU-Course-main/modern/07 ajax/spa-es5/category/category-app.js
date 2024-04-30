
let CategoryApp = (function(CategoryController, CategoryUIController){
    const loadEventListeners = function() {
        const UISelectors = CategoryUIController.getSelectors();

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
        const input = CategoryUIController.getCategoryInput();

        CategoryController.addCategory(input).then(resp => {
            CategoryUIController.clearForm();
            // Populate list with items
            CategoryController.getCategories().then(categories => {
                CategoryUIController.populateCateogryList(categories);
                Materialize.toast('Category saved successfully', 2000, 'green accent-4');
            });

        });


        e.preventDefault();
    }
    const backAction = function(e){
        CategoryUIController.clearForm();

        document.querySelector(CategoryUIController.getSelectors().updateBtn).style.display = "none";
        document.querySelector(CategoryUIController.getSelectors().deleteBtn).style.display = "none";
        document.querySelector(CategoryUIController.getSelectors().backBtn).style.display = "none";
        document.querySelector(CategoryUIController.getSelectors().addBtn).style.display = "inline";


        // Populate list with items
        CategoryController.getCategories().then(categories => {
            CategoryUIController.populateCateogryList(categories);

        });

        e.preventDefault();
    }
    const updateAction = function(e){
        // Get form input from UI Controller
        const input = CategoryUIController.getCategoryInput();
        CategoryController.updateCategory(input).then(resp => {
            CategoryUIController.clearForm();

            document.querySelector(CategoryUIController.getSelectors().updateBtn).style.display = "none";
            document.querySelector(CategoryUIController.getSelectors().deleteBtn).style.display = "none";
            document.querySelector(CategoryUIController.getSelectors().backBtn).style.display = "none";
            document.querySelector(CategoryUIController.getSelectors().addBtn).style.display = "inline";
            CategoryController.getCategories().then(categories => {
                CategoryUIController.populateCateogryList(categories);
                Materialize.toast('Category updated successfully', 2000, 'green accent-4');
            });

        });



        // Populate list with items

        e.preventDefault();
    }
    const deleteAction = function(e){

        // Get form input from UI Controller
        const input = CategoryUIController.getCategoryInput();
        CategoryController.deleteCategory(input.categoryId).then(resp => {
            if (resp.message) {
                Materialize.toast(resp.message, 2000, 'red accent-4');
            } else {
                CategoryUIController.clearForm();

                document.querySelector(CategoryUIController.getSelectors().updateBtn).style.display = "none";
                document.querySelector(CategoryUIController.getSelectors().deleteBtn).style.display = "none";
                document.querySelector(CategoryUIController.getSelectors().backBtn).style.display = "none";
                document.querySelector(CategoryUIController.getSelectors().addBtn).style.display = "inline";

                CategoryController.getCategories().then(categories => {
                    CategoryUIController.populateCateogryList(categories);
                    Materialize.toast('Category deleted successfully', 2000, 'green accent-4');
                });
            }

        });



        // Populate list with items


        e.preventDefault();
    }

    const openConfirmation = function(e) {
        $(CategoryUIController.getSelectors().modalSelector).modal('open');
        e.preventDefault();
    }
    const categoryUpdateSubmit = function(e){
        if(e.target.classList.contains('edit-category')){


            const id = e.target.parentElement.parentElement.parentElement.id.split("-")[1]


              CategoryController.findById(id).then(category => {
                  CategoryUIController.populateForm(category);
                  document.querySelector(CategoryUIController.getSelectors().updateBtn).style.display = "inline";
                  document.querySelector(CategoryUIController.getSelectors().deleteBtn).style.display = "inline";
                  document.querySelector(CategoryUIController.getSelectors().backBtn).style.display = "inline";
                  document.querySelector(CategoryUIController.getSelectors().addBtn).style.display = "none";
              });



        }

        e.preventDefault();
    }
    // Public methods
    return {
        init: function(){
            CategoryController.getCategories().then(categories => {
                document.querySelector(CategoryUIController.getSelectors().addBtn).style.display = "inline";
                document.querySelector(CategoryUIController.getSelectors().updateBtn).style.display = "none";
                document.querySelector(CategoryUIController.getSelectors().deleteBtn).style.display = "none";
                document.querySelector(CategoryUIController.getSelectors().backBtn).style.display = "none";

                // Populate list with items
                CategoryUIController.populateCateogryList(categories);
            });

            loadEventListeners();
            $('.modal').modal();
        }
    }

})(CategoryController, CategoryUIController);

// Initialize App
CategoryApp.init();