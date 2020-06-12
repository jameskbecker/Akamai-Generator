const window = {
    navigator: {}
}
const document = {
    URL: "https://www.footlocker.de/de/startseite",
    location: {
        hash: "",
        host: "www.footlocker.de",
        hostname: "www.footlocker.de",
        href: "https://www.footlocker.de/de/startseite",
        origin: "https://www.footlocker.de",
        pathname: "/de/startseite",
        port: "",
        protocol: "https:",
    }
}
const bmak = {
    sd_debug: function (message) { console.log(message) },
    updatet: function () {
        return Date.now() - bmak.start_ts
      },
      userAgentReturn: function () {
        return window.navigator.userAgent.replace(/\\|"/g, "")
      },
    ver: 1.54,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
    keyEvent_count_limit: 150,
    mouseMoveEvent_count_limit: 100, mouseDownUpClickEvent_count_limit: 75,
    pointerMoveEvent_count_limit: 25, pointerDownUpClickEvent_count_limit: 25,
    tme_cnt_lmt: 25, touchDownUpClickEvent_count_limit: 25,
    doe_cnt_lmt: 10, dme_cnt_lmt: 10,
    vc_cnt_lmt: 100,
    doa_throttle: 0, dma_throttle: 0,
    session_id: "default_session",
    js_post: false,
    loc: "",
    cf_url: ("https:" === document.location.protocol ? "https://" : "http://") + "apid.cformanalytics.com/api/v1/attempt",
    params_url: ("https:" === document.location.protocol ? "https://" : "http://") + document.location.hostname + "/get_params",
    auth: "",
    api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
    aj_lmt_doact: 1,
    aj_lmt_dmact: 1,
    aj_lmt_tact: 1,
    ce_js_post: 0,
    init_time: 0,
    informinfo: "",
    prevfid: -1,
    fidcnt: 0,
    sensor_data: 0,
    ins: null,
    cns: null,
    enGetLoc: 0,
    enReadDocUrl: 1,
    disFpCalOnTimeout: 0,
    xagg: -1,
    den: 0, // domAutomation enabled
    pen: 0, // phantom enabled
    wen: 0, // webdriver enabled
    brow: "",
    browver: "",
    psub: "-",
    lang: "-",
    prod: "-",
    plen: -1,
    doadma_en: 0,
    sdfn: [],
    d2: 0,
    d3: 0,
    thr: 0,
    cs: "0a46G5m17Vrp4o4c",
    hn: "unk",
    z1: 0,
    o9: 0,
    vc: "",
    y1: 2016,
    ta: 0,
    tst: -1,
    t_tst: 0,
    ckie: "_abck",
    n_ck: "0",
    ckurl: 0,
    bm: false,
    mr: "-1",
    altFonts: false,
    rst: false,
    runFonts: false,
    fsp: false,
    firstLoad: true,
    pstate: false,
    mn_mc_lmt: 10,
    mn_state: 0,
    mn_mc_indx: 0,
    mn_sen: 0,
    mn_tout: 100,
    mn_stout: 1e3,
    mn_ct: 1,
    mn_cc: "",
    mn_cd: 1e4,
    mn_lc: [],
    mn_ld: [],
    mn_lcl: 0,
    mn_al: [],
    mn_il: [],
    mn_tcl: [],
    mn_r: [],
    mn_abck: "",
    mn_psn: "",
    mn_ts: "",
    mn_lg: []
}

var t = {};
  bmak.fpcf = t;
  t.sf4 = function () {
    var a = bmak.userAgentReturn();
    return !
    (!~a.indexOf("Version/4.0") || !(~a.indexOf("iPad;") || ~a.indexOf("iPhone") || ~a.indexOf("Mac OS X 10_5")))
  }; 
  t.fpValstr = "-1";
  t.fpValCalculated = false;
  t.rVal = "-1";
  t.rCFP = "-1";
  t.cache = {};
  t.td = -999999;

  t.clearCache = function () {
    t.cache = {}
  };
  t.fpVal = function () {
    t.fpValCalculated = true;
    try {
      var a = 0;
      a = Date.now ? Date.now() : +new Date;
      var e = t.data();
      t.fpValstr = e.replace(/\"/g, '\\\\"');
      var n = 0;
      n = Date.now ? Date.now() : +new Date, t.td = n - a
    } catch (a) { }
  };
  t.timezoneOffsetKey = function () {
    return (new Date).getTimezoneOffset()
  };
  t.data = function () {
    var a = screen.colorDepth ? screen.colorDepth : -1,
      e = screen.pixelDepth ? screen.pixelDepth : -1,
      n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
      o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
      m = navigator.doNotTrack ? navigator.doNotTrack : -1,
      r = "default";
    return r = bmak.runFonts ? bmak.altFonts ? t.fonts_optm() : t.fonts() : "dis", [t.canvas("<@nv45. F1n63r,Pr1n71n6!"), t.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, t.pluginInfo(), t.sessionStorageKey(), t.localStorageKey(), t.indexedDbKey(), t.timezoneOffsetKey(), t.webrtcKey(), a, e, n, o, m].join(";")
  };
  t.PLUGINS = [
    "WebEx64 General Plugin Container", 
    "YouTube Plug-in", 
    "Java Applet Plug-in", 
    "Shockwave Flash", 
    "iPhotoPhotocast", 
    "SharePoint Browser Plug-in", 
    "Chrome Remote Desktop Viewer", 
    "Chrome PDF Viewer", 
    "Native Client", 
    "Unity Player", 
    "WebKit-integrierte PDF", 
    "QuickTime Plug-in", 
    "RealPlayer Version Plugin", 
    "RealPlayer\(tm\) G2 LiveConnect-Enabled Plug-In \(32-bit\)", 
    "Mozilla Default Plug-in", 
    "Adobe Acrobat", 
    "AdobeAAMDetect", 
    "Google Earth Plug-in", 
    "Java Plug-in 2 for NPAPI Browsers", 
    "Widevine Content Decryption Module", 
    "Microsoft Office Live Plug-in", 
    "Windows Media Player Plug-in Dynamic Link Library", 
    "Google Talk Plugin Video Renderer", 
    "Edge PDF Viewer", 
    "Shockwave for Director", 
    "Default Browser Helper", 
    "Silverlight Plug-In"
  ];
  t.pluginInfo = function () {
    if (void 0 === navigator.plugins) return null;
    for (var a = t.PLUGINS.length, e = "", n = 0; n < a; n++) {
      var o = t.PLUGINS[n];
      void 0 !== navigator.plugins[o] && (e = e + "," + n)
    }
    return e
  };
  t.canvas = function (a) {
    try {
      if (void 0 !== t.cache.canvas) return t.cache.canvas;
      var e = -1;
      if (!t.sf4()) {
        var n = document.createElement("canvas");
        if (n.width = 280, n.height = 60, n.style.display = "none", "function" == typeof n.getContext) {
          var o = n.getContext("2d");
          o.fillStyle = "rgb\(102, 204, 0\)", o.fillRect(100, 5, 80, 50), o.fillStyle = "#f60", o.font = "16pt Arial", o.fillText(a, 10, 40), o.strokeStyle = "rgb\(120, 186, 176\)", o.arc(80, 10, 20, 0, Math.PI, false), o.stroke();
          var m = n.toDataURL();
          e = 0;
          for (var r = 0; r < m.length; r++) {
            e = (e << 5) - e + m.charCodeAt(r), e &= e
          }
          e = e.toString();
          var i = document.createElement("canvas");
          i.width = 16, i.height = 16;
          var c = i.getContext("2d");
          c.font = "6pt Arial", t.rVal = Math.floor(1e3 * Math.random()).toString(), c.fillText(t.rVal, 1, 12);
          for (var b = i.toDataURL(), d = 0, k = 0; k < b.length; k++) {
            d = (d << 5) - d + b.charCodeAt(k), d &= d
          }
          t.rCFP = d.toString()
        }
      }
      return e
    } catch (a) {
      return "exception"
    }
  };
  t.fonts_optm = function () {
    var a = 200,
      e = bmak.get_currentFixed_date(),
      n = [];
    if (!t.sf4()) {
      var o = ["sans-serif", "monospace"],
        m = [0, 0],
        r = [0, 0],
        i = document.createElement("div");
      i.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
      var c;
      for (c = 0; c < o.length; c++) {
        var b = document.createElement("span");
        b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;\+-.", b.style.fontSize = "90px", b.style.fontFamily = o[c], i.appendChild(b)
      }
      for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) b = i.childNodes[c], m[c] = b.offsetWidth, r[c] = b.offsetHeight;
      if (document.body.removeChild(i), bmak.get_currentFixed_date() - e > a) return "";
      var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"],
        k = document.createElement("div");
      k.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
      for (var s = [], l = 0; l < d.length; l++) {
        var u = document.createElement("div");
        for (c = 0; c < o.length; c++) {
          var b = document.createElement("span");
          b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;\+-.", b.style.fontSize = "90px", b.style.fontFamily = d[l] + "," + o[c], u.appendChild(b)
        }
        k.appendChild(u)
      }
      if (bmak.get_currentFixed_date() - e > a) return "";
      document.body.appendChild(k);
      for (var l = 0; l < k.childNodes.length; l++) {
        var _ = false,
          u = k.childNodes[l];
        for (c = 0; c < u.childNodes.length; c++) {
          var b = u.childNodes[c];
          if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
            _ = true;
            break
          }
        }
        if (_ && s.push(l), bmak.get_currentFixed_date() - e > a) break
      }
      document.body.removeChild(k), n = s.sort()
    }
    return n.join(",")
  };
  t.fonts = function () {
    var a = [];
    if (!t.sf4()) {
      var e = ["serif", "sans-serif", "monospace"],
        n = [0, 0, 0],
        o = [0, 0, 0],
        m = document.createElement("span");
      m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;\+-.", m.style.fontSize = "90px";
      var r;
      for (r = 0; r < e.length; r++) m.style.fontFamily = e[r], document.body.appendChild(m), n[r] = m.offsetWidth, o[r] = m.offsetHeight, document.body.removeChild(m);
      for (var i = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"], c = [], b = 0; b < i.length; b++) {
        var d = false;
        for (r = 0; r < e.length; r++)
          if (m.style.fontFamily = i[b] + "," + e[r], document.body.appendChild(m), m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = true), document.body.removeChild(m), d) {
            c.push(b);
            break
          }
      }
      a = c.sort()
    }
    return a.join(",")
  };
  t.webrtcKey = function () {
    return "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection
  };
  t.indexedDbKey = function () {
    return !!t.hasIndexedDB()
  };
  t.sessionStorageKey = function () {
    return !!t.hasSessionStorage()
  };
  t.localStorageKey = function () {
    return !!t.hasLocalStorage()
  };
  t.hasSessionStorage = function () {
    try {
      return !!window.sessionStorage
    } catch (a) {
      return false
    }
  };
  t.hasLocalStorage = function () {
    try {
      return !!window.localStorage
    } catch (a) {
      return false
    }
  };
  t.hasIndexedDB = function () {
    return !!window.indexedDB
  };

function initialise() {
    bmak.start_ts = Date.now()
    bmak.kact = "";
    bmak.ke_cnt = 0;
    bmak.ke_vel = 0;
    bmak.mact = "";
    bmak.mme_cnt = 0;
    bmak.mduce_cnt = 0;
    bmak.me_vel = 0;
    bmak.pact = "";
    bmak.pme_cnt = 0;
    bmak.pduce_cnt = 0;
    bmak.pe_vel = 0;
    bmak.tact = "";
    bmak.tme_cnt = 0;
    bmak.tduce_cnt = 0;
    bmak.te_vel = 0;
    bmak.doact = "";
    bmak.doe_cnt = 0;
    bmak.doe_vel = 0;
    bmak.dmact = "";
    bmak.dme_cnt = 0;
    bmak.dme_vel = 0;
    bmak.vcact = "";
    bmak.vc_cnt = 0;
    bmak.aj_indx = 0;
    bmak.aj_ss = 0;
    bmak.aj_type = -1;
    bmak.aj_indx_doact = 0;
    bmak.aj_indx_dmact = 0;
    bmak.aj_indx_tact = 0;
    bmak.me_cnt = 0;
    bmak.pe_cnt = 0;
    bmak.te_cnt = 0;
    bmak.nav_perm = "";
}

function generateBotData() {
    var botData = [];

    var t = 0; //window.callPhantom ? 1 : 0
    botData.push(",cpen:" + t);

    var e = 0;
    botData.push("i1:" + e);

    var n = 0; //"number" == typeof document.documentMode ? 1 : 0
    botData.push("dm:" + n);

    var o = 0; //window.chrome && window.chrome.webstore ? 1 : 0
    botData.push("cwen:" + o);

    var m = 1; //navigator.onLine ? 1 : 0
    botData.push("non:" + m);

    var r = 0; //window.opera ? 1 : 0
    botData.push("opc:" + r);

    var i = 0; //"undefined" != typeof InstallTrigger ? 1 : 0
    botData.push("fc:" + i);

    var c = 0; //window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0
    botData.push("sc:" + c);

    var b = 1; //"function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0
    botData.push("wrc:" + b);

    var d = 0; //"mozInnerScreenY" in window ? window.mozInnerScreenY : 0
    botData.push("isc:" + d);

    bmak.d2 = parseInt(bmak.z1 / 23);

    var k = 1; //"function" == typeof navigator.vibrate ? 1 : 0
    botData.push("vib:" + k);

    var s = 1; //"function" == typeof navigator.getBattery ? 1 : 0
    botData.push("bat:" + s);

    var l = 0; //Array.prototype.forEach ? 0 : 1
    botData.push("x11:" + l);

    var u = 1; //"FileReader" in window ? 1 : 0
    botData.push("x12:" + u);

    return botData.join(",")
}

function ab(a) {
    if (null == a) return -1;
    try {
        for (var t = 0, e = 0; e < a.length; e++) {
            var n = a.charCodeAt(e);
            n < 128 && (t += n)
        }
        return t
    } catch (a) {
        return -2
    }
}

function generateGeneralData() {
    var t = "" + ab(bmak.userAgent.replace(/\\|"/g, ""));
    var e = bmak.start_ts / 2;
    var availableWidth = -1; //window.screen ? window.screen.availWidth : -1
    var availableHeight = -1; //window.screen ? window.screen.availHeight : -1
    var width = -1; //window.screen ? window.screen.width : -1
    var height = -1; //window.screen ? window.screen.height : -1
    var clientWidth = -1; //window.innerWidth || document.body.clientWidth
    var clientHeight = -1; //window.innerHeight || document.body.clientHeight
    var outerWidth = -1; //window.outerWidth || document.body.outerWidth

    bmak.z1 = parseInt(bmak.start_ts / (bmak.y1 * bmak.y1));

    var d = Math.random();
    var k = parseInt(1e3 * d / 2);
    var s = d + "";
    s = s.slice(0, 11) + k;

    bmak.psub = "20030107"; //navigator.productSub
    bmak.lang = "en" //navigator.language ---> could be varied?
    bmak.prod = "Gecko";//navigator.product
    bmak.plen = 3;//void 0 !== navigator.plugins ? navigator.plugins.length : -1


    var xagg0 = 1; //window.addEventListener ? 1 : 0
    var xagg1 = 1; //window.XMLHttpRequest ? 1 : 0
    var xagg2 = 0; //window.XDomainRequest ? 1 : 0
    var xagg3 = 0; //window.emit ? 1 : 0
    var xagg4 = 1; //window.DeviceOrientationEvent ? 1 : 0
    var xagg5 = 1; //window.DeviceMotionEvent ? 1 : 0
    var xagg6 = 1; //window.TouchEvent ? 1 : 0
    var xagg7 = 0; //window.spawn ? 1 : 0
    var xagg8 = 1; //window.innerWidth ? 1 : 0
    var xagg9 = 1; //window.outerWidth ? 1 : 0
    var xagg10 = 1; //window.chrome ? 1 : 0
    var xagg11 = 1; //Function.prototype.bind ? 1 : 0
    var xagg12 = 0; //window.Buffer ? 1 : 0
    var xagg13 = 1; //window.PointerEvent ? 1 : 0

    bmak.xagg = xagg0 +
        (xagg1 << 1) +
        (xagg2 << 2) +
        (xagg3 << 3) +
        (xagg4 << 4) +
        (xagg5 << 5) +
        (xagg6 << 6) +
        (xagg7 << 7) +
        (xagg8 << 8) +
        (xagg9 << 9) +
        (xagg10 << 10) +
        (xagg11 << 11) +
        (xagg12 << 12) +
        (xagg13 << 13)


    return [
        bmak.userAgent.replace(/\\|"/g, ""), "uaend",
        bmak.xagg,
        bmak.psub,
        bmak.lang,
        bmak.prod,
        bmak.plen,
        bmak.pen,
        bmak.wen,
        bmak.den,
        bmak.z1,
        bmak.d3,
        availableWidth,
        availableHeight,
        width,
        height,
        clientWidth,
        clientHeight,
        outerWidth,
        generateBotData(),
        t,
        s,
        e,
        `loc:${bmak.loc}`
    ].join(',')

}


function buildSensorData() {
    bmak.sd_debug("<bpd>");
    var a = 0;
    try {
        a = Date.now();
        var t = bmak.updatet();
        var e = "3";
        
        //bmak.ckie && (e = bmak.get_cookie());
        
        var n = generateGeneralData();
        var o = "do_en"; //window.DeviceOrientationEvent ? "do_en" : "do_dis"
        var m = "dm_en"; //window.DeviceMotionEvent ? "dm_en" : "dm_dis"
        var r = "t_en"; //window.TouchEvent ? "t_en" : "t_dis"
        var i = o + "," + m + "," + r;
        var c = ""; //bmak.getforminfo()
        var b = document.URL.replace(/\\|"/g, "");
        var d = bmak.aj_type + "," + bmak.aj_indx;

        !bmak.fpcf.fpValCalculated && (0 == bmak.js_post || bmak.aj_indx > 0) && bmak.fpcf.fpVal();

        var k = bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel;
        var s = Date.now() - bmak.start_ts;
        var l = parseInt(bmak.d2 / 6);
        var u = bmak.fas();
        var _ = [
            bmak.ke_vel + 1,
            bmak.me_vel + 32,
            bmak.te_vel + 32,
            bmak.doe_vel,
            bmak.dme_vel,
            bmak.pe_vel,
            k,
            t,
            bmak.init_time,
            bmak.start_ts,
            bmak.fpcf.td,
            bmak.d2,
            bmak.ke_cnt,
            bmak.me_cnt,
            l,
            bmak.pe_cnt,
            bmak.te_cnt,
            s,
            bmak.ta,
            bmak.n_ck,
            e,
            bmak.ab(e),
            bmak.fpcf.rVal,
            bmak.fpcf.rCFP,
            u
        ];
        var f = _.join(",");
        var p = "" + bmak.ab(bmak.fpcf.fpValstr);
        bmak.np();

        var v = bmak.sed();
        var h = bmak.mn_get_current_challenges();
        var g = "";
        var w = "";
        var y = "";

        if (void 0 !== h[1]) {
            var C = h[1];
            void 0 !== bmak.mn_r[C] && (g = bmak.mn_r[C])
        }
        if (void 0 !== h[2]) {
            var E = h[2];
            void 0 !== bmak.mn_r[E] && (w = bmak.mn_r[E])
        }
        if (void 0 !== h[3]) {
            var S = h[3];
            void 0 !== bmak.mn_r[S] && (y = bmak.mn_r[S])
        }

        bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmak.informinfo + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmak.kact + "-1,2,-94,-110," + bmak.mact + "-1,2,-94,-117," + bmak.tact + "-1,2,-94,-111," + bmak.doact + "-1,2,-94,-109," + bmak.dmact + "-1,2,-94,-114," + bmak.pact + "-1,2,-94,-103," + bmak.vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + f + "-1,2,-94,-106," + d, bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-119," + bmak.mr + "-1,2,-94,-122," + v + "-1,2,-94,-123," + g + "-1,2,-94,-124," + w + "-1,2,-94,-126," + y + "-1,2,-94,-127," + bmak.nav_perm;
        
        var j = 24 ^ bmak.ab(bmak.sensor_data);
        
        bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-70," + bmak.fpcf.fpValstr + "-1,2,-94,-80," + p + "-1,2,-94,-116," + bmak.o9 + "-1,2,-94,-118," + j + "-1,2,-94,-121,", bmak.sd_debug(",s1:" + bmak.sensor_data.slice(0, 10))
    
    } catch (a) {
        console.log(a)
        try {
            bmak.sd_debug(",s2:" + a);
            bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + bmak.userAgent.replace(/\\|"/g, "") + "-1,2,-94,-120," + a.replace(/\"/g, "\\'")
        } catch (a) {
            bmak.sd_debug(",s3:" + a)
        }
    }
    try {
        var M = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16);
        var x = Math.floor(Date.now() / 36e5);
        var A = Date.now();
        var L = M + bmak.od(x, M) + bmak.sensor_data;
        bmak.sensor_data = L + ";" + (Date.now() - a) + ";" + bmak.tst + ";" + (Date.now() - A)
    } catch (a) { }
    bmak.sd_debug("</bpd>")
}

initialise();
setTimeout(buildSensorData, 1000);
