

let CategoryUIController = (function(){
    const UISelectors = {
        categoryList: '#category-list tbody',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        categoryIdInput: '#categoryId',
        categoryNameInput: '#categoryName',
        descriptionInput: '#description',
        tableBodySelector: 'tbody',
        modalSelector: '.modal',
        deleteYesBtn: '.yes-btn'
    }
    // Public methods
    return {
        populateCateogryList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<tr id="row-${item.categoryId}">
            <td>${item.categoryId}</td>
            <td>${item.categoryName}</td>
            <td>${item.description}</td>
            <td>
              <a href="#" class="secondary-content">
                <i class="edit-category fa fa-pencil"></i>
              </a>
            </td>
          </tr>`;
            });
            document.querySelector(UISelectors.categoryList).innerHTML = html;
        },
        getCategoryInput: function(){
            return {
                categoryId: document.querySelector(UISelectors.categoryIdInput).value,
                categoryName: document.querySelector(UISelectors.categoryNameInput).value,
                description: document.querySelector(UISelectors.descriptionInput).value
            }
        },
        getSelectors: function(){
            return UISelectors;
        },
        populateForm: function(category){
            document.querySelector(UISelectors.categoryIdInput).value = category.categoryId;
            document.querySelector(UISelectors.categoryNameInput).value = category.categoryName;
            document.querySelector(UISelectors.descriptionInput).value = category.description;
            document.querySelector(UISelectors.categoryIdInput).focus();
            document.querySelector(UISelectors.categoryNameInput).focus();
            document.querySelector(UISelectors.descriptionInput).focus();
         },

        clearForm: function(){
            document.querySelector(UISelectors.categoryIdInput).value = null;
            document.querySelector(UISelectors.categoryNameInput).value = null;
            document.querySelector(UISelectors.descriptionInput).value = null;
             document.querySelector(UISelectors.categoryIdInput).classList.remove('valid');
              document.querySelector(UISelectors.categoryNameInput).classList.remove('valid');
           document.querySelector(UISelectors.descriptionInput).classList.remove('valid');

        }
    }
})();

