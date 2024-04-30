export const UIController = (function(){
    const UISelectors = {
        categoryList: '#category-list tbody',

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
                <i class="fa fa-pencil"></i>
              </a>
            </td>
          </tr>`;
            });

            // Insert list items
            document.querySelector(UISelectors.categoryList).innerHTML = html;
        }
    }
})();