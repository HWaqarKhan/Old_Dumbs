export const HttpApi = (function(){

    function getRequest (url) {
        return new Promise (function(resolve, reject){
            fetch(url)
                .then(response => response.text())
                .then(data => resolve(JSON.parse(data)))
                .catch(error => reject(JSON.parse(data)));
        });
    }
    function postRequest (url, data) {
        return new Promise (function(resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'applicaiton/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.text())
                .then(data => resolve(JSON.parse(data)))
                .catch(error => reject(JSON.parse(data)));
        });
    }
    function putRequest (url, data, cb) {
        return new Promise (function(resolve, reject) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'applicaiton/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.text())
                .then(data => resolve(JSON.parse(data)))
                .catch(error => reject(JSON.parse(data)));
        });
    }
    function deleteRequest (url, cb) {
        return new Promise (function(resolve, reject) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.text())
                .then(data => resolve(JSON.parse(data)))
                .catch(error => reject(JSON.parse(data)));
        });
    }
    // Public methods
    return {

        get:  getRequest,
        post: postRequest,
        put: putRequest,
        delete: deleteRequest
    }
})();