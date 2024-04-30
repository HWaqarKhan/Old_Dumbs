

  const ProductUIController = (function(){
    const UISelectors = {
        productList: '#product-list tbody',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        productIdInput: '#productId',
        productNameInput: '#productName',
        categoryIdInput: '#categoryId',
        unitPriceInput: '#unitPrice',
        tableBodySelector: 'tbody',
        modalSelector: '.modal',
        deleteYesBtn: '.yes-btn'
    }
    // Public methods
    return {
        populateProductList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<tr id="row-${item.productId}">
            <td>${item.productId}</td>
            <td>${item.productName}</td>
            <td>${item.categoryId}</td>
            <td>${item.unitPrice}</td>
            <td>
              <a href="#" class="secondary-content">
                <i class="edit-product fa fa-pencil"></i>
              </a>
            </td>
          </tr>`;
            });
            document.querySelector(UISelectors.productList).innerHTML = html;
        },
        getProductInput: function(){
            return {
                productId: document.querySelector(UISelectors.productIdInput).value,
                productName: document.querySelector(UISelectors.productNameInput).value,
                categoryId: document.querySelector(UISelectors.categoryIdInput).value,
                unitPrice: document.querySelector(UISelectors.unitPriceInput).value
            }
        },
        getSelectors: function(){
            return UISelectors;
        },
        populateForm: function(product){
            document.querySelector(UISelectors.productIdInput).value = product.productId;
            document.querySelector(UISelectors.productNameInput).value = product.productName;
            document.querySelector(UISelectors.categoryIdInput).value = product.categoryId;
            document.querySelector(UISelectors.unitPriceInput).value = product.unitPrice;
            document.querySelector(UISelectors.productIdInput).focus();
            document.querySelector(UISelectors.productNameInput).focus();
            document.querySelector(UISelectors.categoryIdInput).focus();
            document.querySelector(UISelectors.unitPriceInput).focus();
         },

        clearForm: function(){
            document.querySelector(UISelectors.productIdInput).value = null
            document.querySelector(UISelectors.productNameInput).value = null;
            document.querySelector(UISelectors.categoryIdInput).value = null;
            document.querySelector(UISelectors.unitPriceInput).value = null;
             document.querySelector(UISelectors.productIdInput).classList.remove('valid');
              document.querySelector(UISelectors.productNameInput).classList.remove('valid');
            document.querySelector(UISelectors.categoryIdInput).classList.remove('valid');
           document.querySelector(UISelectors.unitPriceInput).classList.remove('valid');

        }
    }
})();

