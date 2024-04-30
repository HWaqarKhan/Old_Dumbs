
// App Controller
const App = (function(){
    var sequentialFileLoader = (() => {
        var fileLength = 0;
        var scriptListToImport = [];

        function loadScriptAndExecuteCallback(i = 0) {
                let myScript = document.createElement('script');
                myScript.setAttribute('src', scriptListToImport[i]);
                myScript.async = false;
                document.querySelector('#content').appendChild(myScript);
                if (i < (fileLength-1)) {
                    myScript.onload = loadScriptAndExecuteCallback(i + 1);
                }

        }

        function loadScript(scriptList) {
            scriptListToImport = scriptList;
            fileLength = scriptList.length;
            loadScriptAndExecuteCallback();
        }

        return {
            loadScript
        };
    })();
    function loadModule(moduleRoute) {
        document.querySelector('#content').innerHTML = '';

        const modulePath = routes.filter(v => v.path === moduleRoute );
        if( modulePath && modulePath.length > 0){

            HttpApi.get(modulePath[0].url, {method: 'GET',
                headers: {
                    'Content-Type' : 'html/text'
                }
            }).then(resp => {
                document.querySelector('#content').innerHTML = resp;
                history.replaceState(undefined, undefined, `#${moduleRoute}`);
                if (eval('typeof '+modulePath[0].init+' === "undefined"')) {
                    sequentialFileLoader.loadScript(modulePath[0].initScript)
                } else {
                    eval(modulePath[0].init+'.init()');
                }


            });
        }
    }
    const loadEventListeners = function() {
        document.querySelector('#menu').addEventListener('click', function(e) {
            const moduleRoute = e.target.getAttribute('module-route');
            loadModule(moduleRoute);
        });
    }

    // Public methods
    return {
        init: function(){
            loadEventListeners();
             if (location.hash.length > 0 ) {

                 loadModule(location.hash.substr(1));
             }

        }
    }

})();

// Initialize App
App.init();