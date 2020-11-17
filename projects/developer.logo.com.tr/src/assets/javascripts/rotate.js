var window_height = window.innerHeight;
var window_width = window.innerWidth;

var screen_dpr = window.devicePixelRatio || 1,
  is_android = !!/(android)/i.test(navigator.userAgent),
  is_mobile = !!(
    is_android ||
    (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
  ),
  has_vibrate = !(!is_mobile || !navigator.vibrate),
  has_passivelistener = !1;

var passivelistener = !0 === has_passivelistener && {
  passive: !0,
};

function limit_abs(e, t) {
  return Math.abs(e) > Math.abs(t) ? (e > 0 ? t : -t) : e;
}

function debounce(e, t) {
  var n, o, i, r;
  return function () {
    (i = this), (o = [].slice.call(arguments, 0)), (r = new Date());
    var s = function () {
      var a = new Date() - r;
      a < t ? (n = setTimeout(s, t - a)) : ((n = null), e.apply(i, o));
    };
    n || (n = setTimeout(s, t));
  };
}

var e = document.querySelector("[data-follow-cursor]"),
  t = e.getAttribute("data-follow-cursor").split(","),
  n = +t[0],
  o = +t[1],
  i = 0,
  r = 0,
  s = 0,
  a = !0,
  c = !1;
var l = debounce(function () {
  e.style.transform = "rotateX(0) rotateY(0)";
}, 1250);

function d(t) {
  c ||
  (window.requestAnimationFrame(function () {
    !(function (t) {
      var c = e.getBoundingClientRect();
      c.top <= window_height && c.bottom >= 0
        ? (void 0 !== t.pageX
        ? ((i = limit_abs(
          -(t.pageY - (c.top + c.height) / 2) *
          (n / window_height),
          n,
        )),
          (r = limit_abs(
            (t.pageX - (c.left + c.width) / 2) *
            (o / window_width),
            o,
          )))
        : void 0 !== t.beta &&
        (a && ((s = t.beta), (a = !1)),
          (i = limit_abs(-8 * (t.beta - s) * (n / 180), n)),
          (r = limit_abs(6 * t.gamma * (o / 90), o))),
          (e.style.transform =
            "rotateX(" + i + "deg) rotateY(" + r + "deg)"))
        : void 0 !== t.beta && (a = !0);
    })(t),
    !1 === is_mobile && l(),
      (c = !1);
  }),
    (c = !0));
}

!0 === is_mobile
  ? (window.addEventListener("deviceorientation", d, passivelistener),
    document.addEventListener(
      "visibilitychange",
      function () {
        this.hidden && (a = !0);
      },
      passivelistener,
    ))
  : document.addEventListener("mousemove", d, passivelistener);
