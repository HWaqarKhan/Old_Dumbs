export const HttpPromiseApi = (function(){
    const http = new XMLHttpRequest();
    function getRequest (url) {
        return new Promise(function (resolve, reject) {
            http.open('GET', url, true);
            http.onload = function () {
                resolve(JSON.parse(http.responseText));
            }
            http.send();
        });
    }
    function postRequest (url, data) {
        return new Promise(function (resolve, reject) {
            http.open('POST', url, true);
            http.onload = function () {
                if (http.status === 200 ) {
                    resolve(JSON.parse(http.responseText));
                }
                if (http.status === 500) {
                    reject(JSON.parse(http.responseText));
                }
            }

            http.send(JSON.stringify(data));
        });
    }
    function putRequest (url, data) {
        return new Promise(function (resolve, reject) {
            http.open('PUT', url, true);
            http.onload = function () {
                resolve(JSON.parse(http.responseText));
            }
            http.send(JSON.stringify(data));
        })
    }
    function deleteRequest (url) {
        return new Promise(function (resolve, reject) {
            http.open('DELETE', url, true);
            http.onload = function () {
                resolve(JSON.parse(http.responseText));
            }
            http.send();
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