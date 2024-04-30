let CategoryController = (function() {


    // Public methods
    return {
        getCategories: async function(){
            let response =  await HttpApi.get(`${AppConfig.serverUrl}/api/categories`);
            return  JSON.parse(response);
        },
        addCategory: async function(category){
            let response =  await HttpApi.post(`${AppConfig.serverUrl}/api/categories/` , category);
            return  JSON.parse(response);
        },
        findById: async function(id){
            let response =  await HttpApi.get(`${AppConfig.serverUrl}/api/categories/` + id);
            return  JSON.parse(response);

        },
        updateCategory: async function(data) {
            let response =  await HttpApi.put(`${AppConfig.serverUrl}/api/categories/` , data);
            return  JSON.parse(response);
        },
        deleteCategory: async function(id){
            let response =  await HttpApi.delete(`${AppConfig.serverUrl}/api/categories/` + id);
            return  JSON.parse(response);
        },
        logData: function(){
            return data;
        }
    }
})();


