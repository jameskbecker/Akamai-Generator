function Location() {
  this.hash = "";
  this.host = "www.supremenewyork.com";
  this.hostname = "www.supremenewyork.com";
  this.href = "https://www.supremenewyork.com/shop/hats/d1a8kze09/uhpv6fgrj";
  this.origin = "https://www.supremenewyork.com";
  this.pathname = "/shop/hats/d1a8kze09/uhpv6fgrj";
  this.port = "";
  this.protocol = "https:";
}

function PluginArray() {
  this.length = 3;
}

function Navigator() {
  this.appCodeName = "Mozilla";
  this.appName = "Netscape";
  this.appVersion = "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36";
  this.cookieEnabled = true;
  this.deviceMemory = 8;
  this.doNotTrack = null;
  this.hardwareConcurrency = 4;
  this.language = "en";
  this.languages = ["en", "en-US"];
  this.maxTouchPoints = 0;
  this.onLine = true;
  this.platform = "Win32";
  this.plugins = new PluginArray();
  this.product = "Gecko"
  this.productSub = "20030107"
  this.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"
  this.vendor = "Google Inc."
  this.vendorSub = ""
}

function document(url) {
  this.URL = url;
  this.adoptedStyleSheets = []
  this.alinkColor = ""
  this.all = ""
  this.baseURI = url;
  this.bgColor = ""
  this.characterSet = "UTF-8"
  this.charset = "UTF-8"
  this.childElementCount = 1
  this.compatMode = "CSS1Compat"
  this.contentType = "text/html"
  this.cookie = ""
  this.currentScript = null
  this.designMode = "off"
  this.dir = ""
  this.documentElement = new HTMLHtmlElement();
  this.documentURI = url;
  this.domain = url.split('://')[1].split('/')[0]
  this.fgColor = ""
  this.fullscreen = false
  this.fullscreenElement = null
  this.fullscreenEnabled = true
  this.hidden = false
  this.inputEncoding = "UTF-8"
  this.isConnected = true
  this.linkColor = ""
  this.location = new Location()
  this.nextSibling = null
  this.ownerDocument = null
  this.parentElement = null
  this.parentNode = null
  this.pictureInPictureElement = null
  this.pictureInPictureEnabled = true
  this.pointerLockElement = null
  this.previousSibling = null
  this.readyState = "complete"
  this.referrer = ""
  this.rootElement = null
  this.textContent = null
  this.visibilityState = "visible"
  this.vlinkColor = ""
  this.wasDiscarded = false
  this.webkitCurrentFullScreenElement = null
  this.webkitFullscreenElement = null
  this.webkitFullscreenEnabled = true
  this.webkitHidden = false
  this.webkitIsFullScreen = false
  this.webkitVisibilityState = "visible",

    this.createElement = createElement,
    this.getElementsByTagName = function () { return [] }
  this.getElementsByName = function () { return [] }
  this.getElementById = function () { return null };
}

function CSSStyleDeclaration() {
  this.alignContent = "";
  this.alignItems = "";
  this.alignSelf = "";
  this.alignmentBaseline = "";
  this.all = "";
  this.animation = "";
  this.animationDelay = "";
  this.animationDirection = "";
  this.animationDuration = "";
  this.animationFillMode = "";
  this.animationIterationCount = "";
  this.animationName = "";
  this.animationPlayState = "";
  this.animationTimingFunction = "";
  this.backdropFilter = "";
  this.backfaceVisibility = "";
  this.background = "";
  this.backgroundAttachment = "";
  this.backgroundBlendMode = "";
  this.backgroundClip = "";
  this.backgroundColor = "";
  this.backgroundImage = "";
  this.backgroundOrigin = "";
  this.backgroundPosition = "";
  this.backgroundPositionX = "";
  this.backgroundPositionY = "";
  this.backgroundRepeat = "";
  this.backgroundRepeatX = "";
  this.backgroundRepeatY = "";
  this.backgroundSize = "";
  this.baselineShift = "";
  this.blockSize = "";
  this.border = "";
  this.borderBlockEnd = "";
  this.borderBlockEndColor = "";
  this.borderBlockEndStyle = "";
  this.borderBlockEndWidth = "";
  this.borderBlockStart = "";
  this.borderBlockStartColor = "";
  this.borderBlockStartStyle = "";
  this.borderBlockStartWidth = "";
  this.borderBottom = "";
  this.borderBottomColor = "";
  this.borderBottomLeftRadius = "";
  this.borderBottomRightRadius = "";
  this.borderBottomStyle = "";
  this.borderBottomWidth = "";
  this.borderCollapse = "";
  this.borderColor = "";
  this.borderImage = "";
  this.borderImageOutset = "";
  this.borderImageRepeat = "";
  this.borderImageSlice = "";
  this.borderImageSource = "";
  this.borderImageWidth = "";
  this.borderInlineEnd = "";
  this.borderInlineEndColor = "";
  this.borderInlineEndStyle = "";
  this.borderInlineEndWidth = "";
  this.borderInlineStart = "";
  this.borderInlineStartColor = "";
  this.borderInlineStartStyle = "";
  this.borderInlineStartWidth = "";
  this.borderLeft = "";
  this.borderLeftColor = "";
  this.borderLeftStyle = "";
  this.borderLeftWidth = "";
  this.borderRadius = "";
  this.borderRight = "";
  this.borderRightColor = "";
  this.borderRightStyle = "";
  this.borderRightWidth = "";
  this.borderSpacing = "";
  this.borderStyle = "";
  this.borderTop = "";
  this.borderTopColor = "";
  this.borderTopLeftRadius = "";
  this.borderTopRightRadius = "";
  this.borderTopStyle = "";
  this.borderTopWidth = "";
  this.borderWidth = "";
  this.bottom = "";
  this.boxShadow = "";
  this.boxSizing = "";
  this.breakAfter = "";
  this.breakBefore = "";
  this.breakInside = "";
  this.bufferedRendering = "";
  this.captionSide = "";
  this.caretColor = "";
  this.clear = "";
  this.clip = "";
  this.clipPath = "";
  this.clipRule = "";
  this.color = "";
  this.colorInterpolation = "";
  this.colorInterpolationFilters = "";
  this.colorRendering = "";
  this.colorScheme = "";
  this.columnCount = "";
  this.columnFill = "";
  this.columnGap = "";
  this.columnRule = "";
  this.columnRuleColor = "";
  this.columnRuleStyle = "";
  this.columnRuleWidth = "";
  this.columnSpan = "";
  this.columnWidth = "";
  this.columns = "";
  this.contain = "";
  this.containIntrinsicSize = "";
  this.content = "";
  this.counterIncrement = "";
  this.counterReset = "";
  this.cssFloat = "";
  this.cssText = "";
  this.cursor = "";
  this.cx = "";
  this.cy = "";
  this.d = "";
  this.direction = "";
  this.display = "";
  this.dominantBaseline = "";
  this.emptyCells = "";
  this.fill = "";
  this.fillOpacity = "";
  this.fillRule = "";
  this.filter = "";
  this.flex = "";
  this.flexBasis = "";
  this.flexDirection = "";
  this.flexFlow = "";
  this.flexGrow = "";
  this.flexShrink = "";
  this.flexWrap = "";
  this.float = "";
  this.floodColor = "";
  this.floodOpacity = "";
  this.font = "";
  this.fontDisplay = "";
  this.fontFamily = "";
  this.fontFeatureSettings = "";
  this.fontKerning = "";
  this.fontOpticalSizing = "";
  this.fontSize = "";
  this.fontStretch = "";
  this.fontStyle = "";
  this.fontVariant = "";
  this.fontVariantCaps = "";
  this.fontVariantEastAsian = "";
  this.fontVariantLigatures = "";
  this.fontVariantNumeric = "";
  this.fontVariationSettings = "";
  this.fontWeight = "";
  this.gap = "";
  this.grid = "";
  this.gridArea = "";
  this.gridAutoColumns = "";
  this.gridAutoFlow = "";
  this.gridAutoRows = "";
  this.gridColumn = "";
  this.gridColumnEnd = "";
  this.gridColumnGap = "";
  this.gridColumnStart = "";
  this.gridGap = "";
  this.gridRow = "";
  this.gridRowEnd = "";
  this.gridRowGap = "";
  this.gridRowStart = "";
  this.gridTemplate = "";
  this.gridTemplateAreas = "";
  this.gridTemplateColumns = "";
  this.gridTemplateRows = "";
  this.height = "";
  this.hyphens = "";
  this.imageOrientation = "";
  this.imageRendering = "";
  this.inlineSize = "";
  this.isolation = "";
  this.justifyContent = "";
  this.justifyItems = "";
  this.justifySelf = "";
  this.left = "";
  this.length = 0;
  this.letterSpacing = "";
  this.lightingColor = "";
  this.lineBreak = "";
  this.lineHeight = "";
  this.listStyle = "";
  this.listStyleImage = "";
  this.listStylePosition = "";
  this.listStyleType = "";
  this.margin = "";
  this.marginBlockEnd = "";
  this.marginBlockStart = "";
  this.marginBottom = "";
  this.marginInlineEnd = "";
  this.marginInlineStart = "";
  this.marginLeft = "";
  this.marginRight = "";
  this.marginTop = "";
  this.marker = "";
  this.markerEnd = "";
  this.markerMid = "";
  this.markerStart = "";
  this.mask = "";
  this.maskType = "";
  this.maxBlockSize = "";
  this.maxHeight = "";
  this.maxInlineSize = "";
  this.maxWidth = "";
  this.maxZoom = "";
  this.minBlockSize = "";
  this.minHeight = "";
  this.minInlineSize = "";
  this.minWidth = "";
  this.minZoom = "";
  this.mixBlendMode = "";
  this.objectFit = "";
  this.objectPosition = "";
  this.offset = "";
  this.offsetDistance = "";
  this.offsetPath = "";
  this.offsetRotate = "";
  this.opacity = "";
  this.order = "";
  this.orientation = "";
  this.orphans = "";
  this.outline = "";
  this.outlineColor = "";
  this.outlineOffset = "";
  this.outlineStyle = "";
  this.outlineWidth = "";
  this.overflow = "";
  this.overflowAnchor = "";
  this.overflowWrap = "";
  this.overflowX = "";
  this.overflowY = "";
  this.overscrollBehavior = "";
  this.overscrollBehaviorBlock = "";
  this.overscrollBehaviorInline = "";
  this.overscrollBehaviorX = "";
  this.overscrollBehaviorY = "";
  this.padding = "";
  this.paddingBlockEnd = "";
  this.paddingBlockStart = "";
  this.paddingBottom = "";
  this.paddingInlineEnd = "";
  this.paddingInlineStart = "";
  this.paddingLeft = "";
  this.paddingRight = "";
  this.paddingTop = "";
  this.pageBreakAfter = "";
  this.pageBreakBefore = "";
  this.pageBreakInside = "";
  this.paintOrder = "";
  this.parentRule = null;
  this.perspective = "";
  this.perspectiveOrigin = "";
  this.placeContent = "";
  this.placeItems = "";
  this.placeSelf = "";
  this.pointerEvents = "";
  this.position = "";
  this.quotes = "";
  this.r = "";
  this.resize = "";
  this.right = "";
  this.rowGap = "";
  this.rx = "";
  this.ry = "";
  this.scrollBehavior = "";
  this.scrollMargin = "";
  this.scrollMarginBlock = "";
  this.scrollMarginBlockEnd = "";
  this.scrollMarginBlockStart = "";
  this.scrollMarginBottom = "";
  this.scrollMarginInline = "";
  this.scrollMarginInlineEnd = "";
  this.scrollMarginInlineStart = "";
  this.scrollMarginLeft = "";
  this.scrollMarginRight = "";
  this.scrollMarginTop = "";
  this.scrollPadding = "";
  this.scrollPaddingBlock = "";
  this.scrollPaddingBlockEnd = "";
  this.scrollPaddingBlockStart = "";
  this.scrollPaddingBottom = "";
  this.scrollPaddingInline = "";
  this.scrollPaddingInlineEnd = "";
  this.scrollPaddingInlineStart = "";
  this.scrollPaddingLeft = "";
  this.scrollPaddingRight = "";
  this.scrollPaddingTop = "";
  this.scrollSnapAlign = "";
  this.scrollSnapStop = "";
  this.scrollSnapType = "";
  this.shapeImageThreshold = "";
  this.shapeMargin = "";
  this.shapeOutside = "";
  this.shapeRendering = "";
  this.size = "";
  this.speak = "";
  this.src = "";
  this.stopColor = "";
  this.stopOpacity = "";
  this.stroke = "";
  this.strokeDasharray = "";
  this.strokeDashoffset = "";
  this.strokeLinecap = "";
  this.strokeLinejoin = "";
  this.strokeMiterlimit = "";
  this.strokeOpacity = "";
  this.strokeWidth = "";
  this.tabSize = "";
  this.tableLayout = "";
  this.textAlign = "";
  this.textAlignLast = "";
  this.textAnchor = "";
  this.textCombineUpright = "";
  this.textDecoration = "";
  this.textDecorationColor = "";
  this.textDecorationLine = "";
  this.textDecorationSkipInk = "";
  this.textDecorationStyle = "";
  this.textIndent = "";
  this.textOrientation = "";
  this.textOverflow = "";
  this.textRendering = "";
  this.textShadow = "";
  this.textSizeAdjust = "";
  this.textTransform = "";
  this.textUnderlinePosition = "";
  this.top = "";
  this.touchAction = "";
  this.transform = "";
  this.transformBox = "";
  this.transformOrigin = "";
  this.transformStyle = "";
  this.transition = "";
  this.transitionDelay = "";
  this.transitionDuration = "";
  this.transitionProperty = "";
  this.transitionTimingFunction = "";
  this.unicodeBidi = "";
  this.unicodeRange = "";
  this.userSelect = "";
  this.userZoom = "";
  this.vectorEffect = "";
  this.verticalAlign = "";
  this.visibility = "";
  this.webkitAlignContent = "";
  this.webkitAlignItems = "";
  this.webkitAlignSelf = "";
  this.webkitAnimation = "";
  this.webkitAnimationDelay = "";
  this.webkitAnimationDirection = "";
  this.webkitAnimationDuration = "";
  this.webkitAnimationFillMode = "";
  this.webkitAnimationIterationCount = "";
  this.webkitAnimationName = "";
  this.webkitAnimationPlayState = "";
  this.webkitAnimationTimingFunction = "";
  this.webkitAppRegion = "";
  this.webkitAppearance = "";
  this.webkitBackfaceVisibility = "";
  this.webkitBackgroundClip = "";
  this.webkitBackgroundOrigin = "";
  this.webkitBackgroundSize = "";
  this.webkitBorderAfter = "";
  this.webkitBorderAfterColor = "";
  this.webkitBorderAfterStyle = "";
  this.webkitBorderAfterWidth = "";
  this.webkitBorderBefore = "";
  this.webkitBorderBeforeColor = "";
  this.webkitBorderBeforeStyle = "";
  this.webkitBorderBeforeWidth = "";
  this.webkitBorderBottomLeftRadius = "";
  this.webkitBorderBottomRightRadius = "";
  this.webkitBorderEnd = "";
  this.webkitBorderEndColor = "";
  this.webkitBorderEndStyle = "";
  this.webkitBorderEndWidth = "";
  this.webkitBorderHorizontalSpacing = "";
  this.webkitBorderImage = "";
  this.webkitBorderRadius = "";
  this.webkitBorderStart = "";
  this.webkitBorderStartColor = "";
  this.webkitBorderStartStyle = "";
  this.webkitBorderStartWidth = "";
  this.webkitBorderTopLeftRadius = "";
  this.webkitBorderTopRightRadius = "";
  this.webkitBorderVerticalSpacing = "";
  this.webkitBoxAlign = "";
  this.webkitBoxDecorationBreak = "";
  this.webkitBoxDirection = "";
  this.webkitBoxFlex = "";
  this.webkitBoxOrdinalGroup = "";
  this.webkitBoxOrient = "";
  this.webkitBoxPack = "";
  this.webkitBoxReflect = "";
  this.webkitBoxShadow = "";
  this.webkitBoxSizing = "";
  this.webkitClipPath = "";
  this.webkitColumnBreakAfter = "";
  this.webkitColumnBreakBefore = "";
  this.webkitColumnBreakInside = "";
  this.webkitColumnCount = "";
  this.webkitColumnGap = "";
  this.webkitColumnRule = "";
  this.webkitColumnRuleColor = "";
  this.webkitColumnRuleStyle = "";
  this.webkitColumnRuleWidth = "";
  this.webkitColumnSpan = "";
  this.webkitColumnWidth = "";
  this.webkitColumns = "";
  this.webkitFilter = "";
  this.webkitFlex = "";
  this.webkitFlexBasis = "";
  this.webkitFlexDirection = "";
  this.webkitFlexFlow = "";
  this.webkitFlexGrow = "";
  this.webkitFlexShrink = "";
  this.webkitFlexWrap = "";
  this.webkitFontFeatureSettings = "";
  this.webkitFontSizeDelta = "";
  this.webkitFontSmoothing = "";
  this.webkitHighlight = "";
  this.webkitHyphenateCharacter = "";
  this.webkitJustifyContent = "";
  this.webkitLineBreak = "";
  this.webkitLineClamp = "";
  this.webkitLocale = "";
  this.webkitLogicalHeight = "";
  this.webkitLogicalWidth = "";
  this.webkitMarginAfter = "";
  this.webkitMarginBefore = "";
  this.webkitMarginEnd = "";
  this.webkitMarginStart = "";
  this.webkitMask = "";
  this.webkitMaskBoxImage = "";
  this.webkitMaskBoxImageOutset = "";
  this.webkitMaskBoxImageRepeat = "";
  this.webkitMaskBoxImageSlice = "";
  this.webkitMaskBoxImageSource = "";
  this.webkitMaskBoxImageWidth = "";
  this.webkitMaskClip = "";
  this.webkitMaskComposite = "";
  this.webkitMaskImage = "";
  this.webkitMaskOrigin = "";
  this.webkitMaskPosition = "";
  this.webkitMaskPositionX = "";
  this.webkitMaskPositionY = "";
  this.webkitMaskRepeat = "";
  this.webkitMaskRepeatX = "";
  this.webkitMaskRepeatY = "";
  this.webkitMaskSize = "";
  this.webkitMaxLogicalHeight = "";
  this.webkitMaxLogicalWidth = "";
  this.webkitMinLogicalHeight = "";
  this.webkitMinLogicalWidth = "";
  this.webkitOpacity = "";
  this.webkitOrder = "";
  this.webkitPaddingAfter = "";
  this.webkitPaddingBefore = "";
  this.webkitPaddingEnd = "";
  this.webkitPaddingStart = "";
  this.webkitPerspective = "";
  this.webkitPerspectiveOrigin = "";
  this.webkitPerspectiveOriginX = "";
  this.webkitPerspectiveOriginY = "";
  this.webkitPrintColorAdjust = "";
  this.webkitRtlOrdering = "";
  this.webkitRubyPosition = "";
  this.webkitShapeImageThreshold = "";
  this.webkitShapeMargin = "";
  this.webkitShapeOutside = "";
  this.webkitTapHighlightColor = "";
  this.webkitTextCombine = "";
  this.webkitTextDecorationsInEffect = "";
  this.webkitTextEmphasis = "";
  this.webkitTextEmphasisColor = "";
  this.webkitTextEmphasisPosition = "";
  this.webkitTextEmphasisStyle = "";
  this.webkitTextFillColor = "";
  this.webkitTextOrientation = "";
  this.webkitTextSecurity = "";
  this.webkitTextSizeAdjust = "";
  this.webkitTextStroke = "";
  this.webkitTextStrokeColor = "";
  this.webkitTextStrokeWidth = "";
  this.webkitTransform = "";
  this.webkitTransformOrigin = "";
  this.webkitTransformOriginX = "";
  this.webkitTransformOriginY = "";
  this.webkitTransformOriginZ = "";
  this.webkitTransformStyle = "";
  this.webkitTransition = "";
  this.webkitTransitionDelay = "";
  this.webkitTransitionDuration = "";
  this.webkitTransitionProperty = "";
  this.webkitTransitionTimingFunction = "";
  this.webkitUserDrag = "";
  this.webkitUserModify = "";
  this.webkitUserSelect = "";
  this.webkitWritingMode = "";
  this.whiteSpace = "";
  this.widows = "";
  this.width = "";
  this.willChange = "";
  this.wordBreak = "";
  this.wordSpacing = "";
  this.wordWrap = "";
  this.writingMode = "";
  this.x = "";
  this.y = "";
}

function createElement(tagName) {
  switch (tagName) {
    case 'div': return new HTMLDivElement();
    case 'span': return new HTMLSpanElement();
    case 'canvas': return new HTMLCanvasElement();
    default: return new HTMLUnknownElement();
  }
}

function HTMLSpanElement() {
  this.innerHTML = '';
  this.style = new CSSStyleDeclaration();
}

function HTMLDivElement() {
  this.innerHTML = '';
  this.style = new CSSStyleDeclaration();
}

function CanvasRenderingContext2D(canvas) {
  this.canvas = canvas;
  this.direction = "ltr";
  this.fillStyle = "#000000";
  this.filter = "none";
  this.font = "10px sans-serif";
  this.globalAlpha = 1;
  this.globalCompositeOperation = "source-over";
  this.imageSmoothingEnabled = true;
  this.imageSmoothingQuality = "low";
  this.lineCap = "butt";
  this.lineDashOffset = 0;
  this.lineJoin = "miter";
  this.lineWidth = 1;
  this.miterLimit = 10;
  this.shadowBlur = 0;
  this.shadowColor = "rgba(0, 0, 0, 0)";
  this.shadowOffsetX = 0;
  this.shadowOffsetY = 0;
  this.strokeStyle = "#000000";
  this.textAlign = "start";
  this.textBaseline = "alphabetic";

  this.fillRect = function(x, y, width, height) {
    
  }
}

function HTMLCanvasElement() {
  this.title = '';
  this.innerHTML = '';
  this.height = 0;
  this.width = 0;
  this.style = {}

  this.getContext = function (contextType) {
    switch (contextType) {
      case '2d': return new CanvasRenderingContext2D(this);
      
      case 'webgl': break;
      case 'webgl2': break;
      case 'bitmaprenderer': break;

      default: return null;
    }
  };
  
  this.toDataURL = function () { };
}

function HTMLUnknownElement() { }

function HTMLHtmlElement() {
  this.getAttribute = function (name) {
    return this.hasOwnProperty(name) ? this.name : null;
  }
}

function ScreenOrientation() {
  this.angle = 0;
  this.type = "landscape-primary";
  this.onchange = null;
}

function Storage() {
  this.length = 0;
}

function IDBFactory() { }


function Screen() {
  this.availHeight = 728,
    this.availLeft = 0,
    this.availTop = 0,
    this.availWidth = 1366,
    this.colorDepth = 24,
    this.height = 768,
    this.orientation = new ScreenOrientation(),
    this.pixelDepth = 24,
    this.width = 1366
}

function Window(url) {
  this.globalThis = this;
  this.navigator = new Navigator();
  this.document = new document(url);
  this.screen = new Screen();
  this.innerWidth = 389;
  this.innerHeight = 1009;
  this.outerWidth = 402;

  this.chrome = {
    loadTimes: function () { },
    csi: function () { }
  }
  this.sessionStorrage = new Storage();
  this.localStorage = new Storage();

  this.DeviceOrientationEvent = function () { };
  this.DeviceMotionEvent = function () { };
  this.TouchEvent = function () { };

  this.RTCPeerConnection = function () { };
  this.webkitRTCPeerConnection = function () { };
  this.addEventListener = function () { };
  this.XMLHttpRequest = function () { };
  this.DeviceOrientationEvent = function () { };
  this.DeviceMotionEvent = function () { };
  this.TouchEvent = function () { };
  //this.Buffer = undefined;
  this.PointerEvent = function () { };

  this.HTMLElement = function () { };
  this.XPathResult = function () { };

  return this;
}


// window.global = global;
// global = window;
// global.window = window;
// window.global = global;

const akamai = require('./akamai.1_56');
const got = require('got');
const fetch = require('node-fetch');
const request = require('request');
//setTimeout(() => {console.log(bmak)}, 10000);

(async () => {
  let site = "https://www.footlocker.de/de/startseite";

  let window = Window.bind(global)(site);
  let sensorData = akamai.generate(window, window.document);
  
  try {
    let options = {
      method: 'POST',
      gzip: true,
      json: true,
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
        "content-type": "text/plain;charset=UTF-8",
        "accept": "*/*",
        "origin": "https://www.footlocker.de",
        "referer": "https://www.footlocker.de/de/startseite",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en,en-US;q=0.9",
      },
      body: { sensor_data: sensorData },

    }; return;
console.log(options); return;
    request.post('https://www.footlocker.de/resources/b8c260a2f6216ff823d44b9fe818b0', 
    (error, response, callback) => {
      if (error) {
        console.log(error)
      }
      else {
        //console.log(response.body);
        console.log(response.body)
      }
    })

  }
  catch (err) {
    console.log(err)
  }

  //=> {hello: 'world'}
})();