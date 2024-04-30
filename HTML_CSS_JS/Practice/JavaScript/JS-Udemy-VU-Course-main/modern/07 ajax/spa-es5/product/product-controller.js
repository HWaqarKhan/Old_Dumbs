 const ProductController = (function() {


    // Public methods
    return {
        getProducts: async function(){
            let response =  await HttpApi.get(`${AppConfig.serverUrl}/api/products`);
            return  JSON.parse(response);
        },
        addProduct: async function(product){
            let response =  await HttpApi.post(`${AppConfig.serverUrl}/api/products/` , product);
            return  JSON.parse(response);
        },
        findById: async function(id){
            let response =  await HttpApi.get(`${AppConfig.serverUrl}/api/products/` + id);
            return  JSON.parse(response);

        },
        updateProduct: async function(data) {
            let response =  await HttpApi.put(`${AppConfig.serverUrl}/api/products/` , data);
            return  JSON.parse(response);
        },
        deleteProduct: async function(id){
            let response =  await HttpApi.delete(`${AppConfig.serverUrl}/api/categories/` + id);
            return  JSON.parse(response);
        },
        logData: function(){
            return data;
        }
    }
})();


