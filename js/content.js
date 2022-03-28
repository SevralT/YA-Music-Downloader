'use strict';
(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports,
                name)) Object.defineProperty(exports, name, {
            configurable: false,
            enumerable: true,
            get: getter
        })
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"]
        } : function getModuleExports() {
            return module
        };
        __webpack_require__.d(getter, "a", getter);
        return getter
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 6)
})({
    6: function(module,
        exports) {
        function injectCode(func, action) {
            const script = document.createElement("script");
            script.textContent = `'use strict';try{(${func})('${action}');}catch(e){console.log('Fisher injected error',e);};`;
            document.head.appendChild(script);
            script.parentNode.removeChild(script)
        }

        function dispatchCurrentTrackUrl(action) {
            let link;
            const track = externalAPI.getCurrentTrack();
            if (track && "link" in track) link = track.link;
            document.dispatchEvent(new CustomEvent("fisher_injected_event", {
                detail: {
                    action,
                    link
                }
            }))
        }
        chrome.runtime.onMessage.addListener((action) => {
            switch (action) {
                case "getCurrentTrackUrl":
                    injectCode(dispatchCurrentTrackUrl, action);
                    break
            }
        });
        document.addEventListener("fisher_injected_event", (e) => chrome.runtime.sendMessage(e.detail))
    }
});
