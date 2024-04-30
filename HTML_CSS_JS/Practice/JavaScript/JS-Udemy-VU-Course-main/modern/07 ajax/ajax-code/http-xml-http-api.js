export const HttpApi = (function(){
    const http = new XMLHttpRequest();
    function getRequest (url, cb) {

        http.open('GET', url, true);
        http.onload = function () {
            cb(JSON.parse(http.responseText));
        }
        http.send();
    }
    function postRequest (url, data, cb) {

        http.open('POST', url, true);
        http.onload = function () {
            cb(JSON.parse(http.responseText));
        }
        http.send(JSON.stringify(data));
    }
    function putRequest (url, data, cb) {

        http.open('PUT', url, true);
        http.onload = function () {
            cb(JSON.parse(http.responseText));
        }
        http.send(JSON.stringify(data));
    }
    function deleteRequest (url, cb) {

        http.open('DELETE', url, true);
        http.onload = function () {
            cb(JSON.parse(http.responseText));
        }
        http.send();
    }
    // Public methods
    return {

        get:  getRequest,
        post: postRequest,
        put: putRequest,
        delete: deleteRequest
    }
})();