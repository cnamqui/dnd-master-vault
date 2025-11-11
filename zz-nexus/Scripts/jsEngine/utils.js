 
function getNamespace(ns) {
    return window.jsEngineUtils._namespaces[ns]
}
 
function createNamespace(ns, overwrite = false) {
    if(!overwrite && getNamespace(ns)) {
        return  window.jsEngineUtils._namespaces[ns];
    } 
    const register = (name, obj, ow=false) => {
        if (name ==='register') {
            throw "Can't overwrite register"
        } else if (window.jsEngineUtils._namespaces[ns][name] && !ow){
            return window.jsEngineUtils._namespaces[ns][name];
        };
        window.jsEngineUtils._namespaces[ns][name] = obj
    }

    const nmspc = window.jsEngineUtils._namespaces[ns] = {
        register,
    }
    return nmspc
}

const init = () => {
    window.jsEngineUtils = {
        createNamespace,
        getNamespace,
        _namespaces:{}
    }
    console.log('js-engine utils live')
}
init();
