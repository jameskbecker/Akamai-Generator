
const useragent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"

var bmak = {
    ab: function(a) {
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
    },
    pi: function (a) {
        return parseInt(a)
    }
}

const window = {
    screen: {
        availWidth: 1920,
        availHeight: 1040,
        width: 1920,
        height: 1080
    },
    innerWidth: 214,
    innerHeight: 937,
    outerWidth: 1920
}

function gd() {
    var a = useragent,
        t = "" + bmak.ab(a),
        e = start_ts / 2,
        n = window.screen ? window.screen.availWidth : -1,
        o = window.screen ? window.screen.availHeight : -1,
        m = window.screen ? window.screen.width : -1,
        r = window.screen ? window.screen.height : -1,
        i = window.innerWidth,
        c = window.innerHeight,
        b = window.outerWidth;
    bmak.z1 = bmak.pi(start_ts / (2016 * 2016));
    var d = Math.random(),
        k = bmak.pi(1e3 * d / 2),
        s = d + "";
    return s = s.slice(0, 11) + k, get_browser(), bc(), bmisc(), a + ",uaend," + bmak.xagg + "," + bmak.psub + "," + bmak.lang + "," + bmak.prod + "," + bmak.plen + "," + bmak.pen + "," + bmak.wen + "," + bmak.den + "," + bmak.z1 + "," + bmak.d3 + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + bd() + "," + t + "," + s + "," + e + ",loc:" + bmak.loc
}

function genrateSensorData() {

    var n = gd()


    return  bmak.ver + "-1,2,-94,-100," + n + 
      "-1,2,-94,-101," + 
      i + 
      "-1,2,-94,-105," + 
      bmak.informinfo + 
      "-1,2,-94,-102," + 
      c + 
      "-1,2,-94,-108," + 
      bmak.kact + 
      "-1,2,-94,-110," + 
      bmak.mact + 
      "-1,2,-94,-117," + 
      bmak.tact + 
      "-1,2,-94,-111," + 
      bmak.doact + 
      "-1,2,-94,-109," + 
      bmak.dmact + 
      "-1,2,-94,-114," + 
      bmak.pact + 
      "-1,2,-94,-103," + 
      bmak.vcact + 
      "-1,2,-94,-112," + 
      b + 
      "-1,2,-94,-115," + 
      f + 
      "-1,2,-94,-106," + 
      d  + 
      "-1,2,-94,-119," + 
      bmak.mr + 
      "-1,2,-94,-122," + 
      v + 
      "-1,2,-94,-123," + 
      g + 
      "-1,2,-94,-124," + 
      w + 
      "-1,2,-94,-126," + 
      y + 
      "-1,2,-94,-127," + 
      bmak.nav_perm;
    var j = 24 ^ bmak.ab(bmak.sensor_data);
    bmak.sensor_data = bmak.sensor_data + 
    "-1,2,-94,-70," + bmak.fpcf.fpValstr + 
    "-1,2,-94,-80," + p + 
    "-1,2,-94,-116," + bmak.o9 + 
    "-1,2,-94,-118," + j + 
    "-1,2,-94,-121,", bmak.sd_debug(",s1:" + bmak.sensor_data.slice(0, 10))
 
}

bmak.ver //version
"-1,2,-94,-100,"
n
"-1,2,-94,-101,"
i
"-1,2,-94,-105,"
bmak.informinfo
"-1,2,-94,-102,"
c
"-1,2,-94,-108,"
bmak.kact
"-1,2,-94,-110,"
bmak.mact
"-1,2,-94,-117,"
bmak.tact
"-1,2,-94,-111,"
bmak.doact
"-1,2,-94,-109,"
bmak.dmact
"-1,2,-94,-114,"
bmak.pact
"-1,2,-94,-103,"
bmak.vcact
"-1,2,-94,-112,"
b
"-1,2,-94,-115,"
f
"-1,2,-94,-106,"
d, bmak.sensor_data = bmak.sensor_data
"-1,2,-94,-119,"
bmak.mr
"-1,2,-94,-122,"
v
"-1,2,-94,-123,"
g
"-1,2,-94,-124,"
w
"-1,2,-94,-126,"
y
"-1,2,-94,-127,"
bmak.nav_perm;
var j = 24 ^ bmak.ab(bmak.sensor_data);
bmak.sensor_data = bmak.sensor_data
"-1,2,-94,-70,"
bmak.fpcf.fpValstr
"-1,2,-94,-80,"
p
"-1,2,-94,-116,"
bmak.o9
"-1,2,-94,-118,"
j
"-1,2,-94,-121,",
