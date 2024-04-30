import {Category} from "./category.js";
import {HttpApi} from "./http-api.js";

export const CategoryController = (function() {


    // Public methods
    return {
        getCategories: async function(){
            let response =  await HttpApi.get('http://192.168.120.100/northwind-php/api/categories');
            return  JSON.parse(response);
        },
        addCategory: async function(category){
            let response =  await HttpApi.post('http://192.168.120.100/northwind-php/api/categories/' , category);
            return  JSON.parse(response);
        },
        findById: async function(id){
            let response =  await HttpApi.get('http://192.168.120.100/northwind-php/api/categories/' + id);
            return  JSON.parse(response);

        },
        updateCategory: async function(data) {
            let response =  await HttpApi.put('http://192.168.120.100/northwind-php/api/categories/' , data);
            return  JSON.parse(response);
        },
        deleteCategory: async function(id){
            let response =  await HttpApi.delete('http://192.168.120.100/northwind-php/api/categories/' + id);
            return  JSON.parse(response);
        },
        logData: function(){
            return data;
        }
    }
})();


