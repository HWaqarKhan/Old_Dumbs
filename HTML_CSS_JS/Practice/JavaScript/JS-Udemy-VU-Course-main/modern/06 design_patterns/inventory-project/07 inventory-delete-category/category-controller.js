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
        findById: function(id){
            let category = {};
            let categories;
            if(localStorage.getItem('categories') === null) {
                categories = [];
            } else {
                categories = JSON.parse(localStorage.getItem('categories'));
                category = categories.filter(v => v.categoryId === id)[0];
            }
            return category;
        },
        updateCategory: function(data) {
            let categories;
            if(localStorage.getItem('categories') === null){
                categories = [];
            } else {
                categories = JSON.parse(localStorage.getItem('categories'));
            }

            categories.forEach(function(category, index){
                if(category.categoryId === data.categoryId){
                    categories[index] = data;
                }
            });

            localStorage.setItem('categories', JSON.stringify(categories));
        },
        deleteCategory: function(id){
            let categories;
            if(localStorage.getItem('categories') === null){
                categories = [];
            } else {
                categories = JSON.parse(localStorage.getItem('categories'));
            }

            categories.forEach(function(category, index){
                if(category.categoryId === id){
                    categories.splice(index, 1);
                }
            });

            localStorage.setItem('categories', JSON.stringify(categories));
        },
        logData: function(){
            return data;
        }
    }
})();


