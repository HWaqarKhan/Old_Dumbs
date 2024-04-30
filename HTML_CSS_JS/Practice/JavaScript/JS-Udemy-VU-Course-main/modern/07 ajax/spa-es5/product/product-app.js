  // App Controller
const ProductApp = (function(ProductController, ProductUIController){
    const loadEventListeners = function() {
        const UISelectors = ProductUIController.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', productAddSubmit);
        document.querySelector(UISelectors.tableBodySelector).addEventListener('click', productUpdateSubmit);
        document.querySelector(UISelectors.updateBtn).addEventListener('click', updateAction);
        document.querySelector(UISelectors.backBtn).addEventListener('click', backAction);
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', openConfirmation);
        document.querySelector(UISelectors.deleteYesBtn).addEventListener('click', deleteAction);
    }
    const productAddSubmit = function(e){
        // Get form input from UI Controller
        const input = ProductUIController.getProductInput();

        ProductController.addProduct(input).then(resp => {
            ProductUIController.clearForm();
            // Populate list with items
            ProductController.getProducts().then(products => {
                ProductUIController.populateProductList(products);
                Materialize.toast('Product saved successfully', 2000, 'green accent-4');
            });

        });


        e.preventDefault();
    }
    const backAction = function(e){
        ProductUIController.clearForm();

        document.querySelector(ProductUIController.getSelectors().updateBtn).style.display = "none";
        document.querySelector(ProductUIController.getSelectors().deleteBtn).style.display = "none";
        document.querySelector(ProductUIController.getSelectors().backBtn).style.display = "none";
        document.querySelector(ProductUIController.getSelectors().addBtn).style.display = "inline";


        // Populate list with items
        ProductController.getProducts().then(products => {
            ProductUIController.populateProductList(products);

        });

        e.preventDefault();
    }
    const updateAction = function(e){
        // Get form input from UI Controller
        const input = ProductUIController.getProductInput();
        ProductController.updateProduct(input).then(resp => {
            ProductUIController.clearForm();

            document.querySelector(ProductUIController.getSelectors().updateBtn).style.display = "none";
            document.querySelector(ProductUIController.getSelectors().deleteBtn).style.display = "none";
            document.querySelector(ProductUIController.getSelectors().backBtn).style.display = "none";
            document.querySelector(ProductUIController.getSelectors().addBtn).style.display = "inline";
            ProductController.getProducts().then(products => {
                ProductUIController.populateProductList(products);
                Materialize.toast('Product updated successfully', 2000, 'green accent-4');
            });

        });



        // Populate list with items

        e.preventDefault();
    }
    const deleteAction = function(e){

        // Get form input from UI Controller
        const input = ProductUIController.getProductInput();
        ProductController.deleteProduct(input.productId).then(resp => {
            ProductUIController.clearForm();

            document.querySelector(ProductUIController.getSelectors().updateBtn).style.display = "none";
            document.querySelector(ProductUIController.getSelectors().deleteBtn).style.display = "none";
            document.querySelector(ProductUIController.getSelectors().backBtn).style.display = "none";
            document.querySelector(ProductUIController.getSelectors().addBtn).style.display = "inline";

            ProductController.getProducts().then(products => {
                ProductUIController.populateProductList(products);
                Materialize.toast('Product deleted successfully', 2000, 'green accent-4');
            });

        });



        // Populate list with items


        e.preventDefault();
    }

    const openConfirmation = function(e) {
        $(ProductUIController.getSelectors().modalSelector).modal('open');
        e.preventDefault();
    }
    const productUpdateSubmit = function(e){
        if(e.target.classList.contains('edit-product')){


            const id = e.target.parentElement.parentElement.parentElement.id.split("-")[1]


            ProductController.findById(id).then(product => {
                  ProductUIController.populateForm(product);
                  document.querySelector(ProductUIController.getSelectors().updateBtn).style.display = "inline";
                  document.querySelector(ProductUIController.getSelectors().deleteBtn).style.display = "inline";
                  document.querySelector(ProductUIController.getSelectors().backBtn).style.display = "inline";
                  document.querySelector(ProductUIController.getSelectors().addBtn).style.display = "none";
              });



        }

        e.preventDefault();
    }
    // Public methods
    return {
        init: function(){
            ProductController.getProducts().then(products => {
                document.querySelector(ProductUIController.getSelectors().addBtn).style.display = "inline";
                document.querySelector(ProductUIController.getSelectors().updateBtn).style.display = "none";
                document.querySelector(ProductUIController.getSelectors().deleteBtn).style.display = "none";
                document.querySelector(ProductUIController.getSelectors().backBtn).style.display = "none";

                // Populate list with items
                ProductUIController.populateProductList(products);
            });

            loadEventListeners();
            $('.modal').modal();
        }
    }

})(ProductController, ProductUIController);

// Initialize App
ProductApp.init();