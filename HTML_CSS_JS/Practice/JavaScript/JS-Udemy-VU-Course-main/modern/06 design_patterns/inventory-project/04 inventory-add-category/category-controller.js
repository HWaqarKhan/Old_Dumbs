import {Category} from "./category.js";

export const CategoryController = (function() {


    // Public methods
    return {
        getCategories: function(){
            let categories;
            if(localStorage.getItem('categories') === null) {
                categories = [];
            } else {
                categories = JSON.parse(localStorage.getItem('categories'));
            }
            return categories;
        },
        addCategory: function(category){
            // Create new item
           const newItem = new Category(category.categoryId, category.categoryName, category.description);
            let categories;
            if(localStorage.getItem('categories') === null) {
                categories = [];
            } else {
                categories = JSON.parse(localStorage.getItem('categories'));
            }
            categories.push(newItem);
            localStorage.setItem('categories', JSON.stringify(categories));
        },
               logData: function(){
            return data;
        }
    }
})();


