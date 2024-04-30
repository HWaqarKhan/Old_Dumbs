 const Singleton = function() {
  let instance;
  function createInstance() {
    const object = new Object({name: 'Ali'});
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
 }();

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b);