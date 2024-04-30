import {Category} from "./category.js";
export const CategoryController = (function(){
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
        logData: function(){
            return [];
        }
    }
})();

