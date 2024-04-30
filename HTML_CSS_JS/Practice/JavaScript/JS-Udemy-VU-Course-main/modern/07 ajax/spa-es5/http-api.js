const HttpApi = (function(){
    async function getRequest (url, options) {

        let response = await  fetch(url, options);
        let data = await response.text();
        return data;


    }
    async function postRequest (url, data) {

        let response =  await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'applicaiton/json'
            },
            body: JSON.stringify(data)
        });
        let respData = await response.text();
        return respData;

    }

    async function putRequest (url, data) {

        let response = await    fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'applicaiton/json'
            },
            body: JSON.stringify(data)
        }) ;
        let respData = await response.text();
        return respData;
    }
    async function deleteRequest (url, cb) {

        let response = await fetch(url, {
            method: 'DELETE'
        });
        let data = await response.text();
        return data;
    }
    // Public methods
    return {

        get:  getRequest,
        post: postRequest,
        put: putRequest,
        delete: deleteRequest
    }
})();