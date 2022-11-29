! function(t, e) {
    "use strict";

    function r(r, a, i, l, u) {
        function f() {
            B = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout((function() {
                s(!0)
            }), a.delay), (a.delay < 0 || a.combined) && (l.e = function(t, e) {
                var n, i = 0;
                return function(o, l) {
                    function u() {
                        i = +new Date, e.call(r, o)
                    }
                    var f = +new Date - i;
                    n && clearTimeout(n), f > t || !a.enableThrottle || l ? u() : n = setTimeout(u, t - f)
                }
            }(a.throttle, (function(t) {
                "resize" === t.type && (z = w = -1), s(t.all)
            })), l.a = function(t) {
                t = c(t), i.push.apply(i, t)
            }, l.g = function() {
                return i = n(i).filter((function() {
                    return !n(this).data(a.loadedName)
                }))
            }, l.f = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = i.filter((function() {
                        return this === t[e]
                    }));
                    r.length && s(!1, r)
                }
            }, s(), n(a.appendScroll).on("scroll." + u + " resize." + u, l.e))
        }

        function c(t) {
            for (var i = a.defaultImage, o = a.placeholder, l = a.imageBase, u = a.srcsetAttribute, f = a.loaderAttribute, c = a._f || {}, s = 0, d = (t = n(t).filter((function() {
                    var t = n(this),
                        r = m(this);
                    return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(u) || t.attr(f) || c[r] !== e)
                })).data("plugin_" + a.name, r)).length; s < d; s++) {
                var A = n(t[s]),
                    g = m(t[s]),
                    h = A.attr(a.imageBaseAttribute) || l;
                g === I && h && A.attr(u) && A.attr(u, b(A.attr(u), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === I && i && !A.attr(N) ? A.attr(N, i) : g === I || !o || A.css(C) && "none" !== A.css(C) || A.css(C, "url('" + o + "')")
            }
            return t
        }

        function s(t, e) {
            if (i.length) {
                for (var o = e || i, l = !1, u = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
                    if (t || e || A(o[s])) {
                        var g = n(o[s]),
                            h = m(o[s]),
                            b = g.attr(a.attribute),
                            v = g.attr(a.imageBaseAttribute) || u,
                            p = g.attr(a.loaderAttribute);
                        g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === I && (v + b !== g.attr(N) || g.attr(f) !== g.attr(E)) || h !== I && v + b !== g.css(C)) || p) || (l = !0, g.data(c, !0), d(g, h, v, p))
                    }
                l && (i = n(i).filter((function() {
                    return !n(this).data(c)
                })))
            } else a.autoDestroy && r.destroy()
        }

        function d(t, e, r, i) {
            ++y;
            var o = function() {
                p("onError", t), v(), o = n.noop
            };
            p("beforeLoad", t);
            var l = a.attribute,
                u = a.srcsetAttribute,
                f = a.sizesAttribute,
                c = a.retinaAttribute,
                s = a.removeAttribute,
                d = a.loadedName,
                A = t.attr(c);
            if (i) {
                var g = function() {
                    s && t.removeAttr(a.loaderAttribute), t.data(d, !0), p(L, t), setTimeout(v, 1), g = n.noop
                };
                t.off(D).one(D, o).one(T, g), p(i, t, (function(e) {
                    e ? (t.off(T), g()) : (t.off(D), o())
                })) || t.trigger(D)
            } else {
                var h = n(new Image);
                h.one(D, o).one(T, (function() {
                    t.hide(), e === I ? t.attr(F, h.attr(F)).attr(E, h.attr(E)).attr(N, h.attr(N)) : t.css(C, "url('" + h.attr(N) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(l + " " + u + " " + c + " " + a.imageBaseAttribute), f !== F && t.removeAttr(f)), t.data(d, !0), p(L, t), h.remove(), v()
                }));
                var m = (B && A ? A : t.attr(l)) || "";
                h.attr(F, t.attr(f)).attr(E, t.attr(u)).attr(N, m ? r + m : null), h.complete && h.trigger(T)
            }
        }

        function A(t) {
            var e = t.getBoundingClientRect(),
                r = a.scrollDirection,
                n = a.threshold,
                i = h() + n > e.top && -n < e.bottom,
                o = g() + n > e.left && -n < e.right;
            return "vertical" === r ? i : ("horizontal" === r || i) && o
        }

        function g() {
            return z >= 0 ? z : z = n(t).width()
        }

        function h() {
            return w >= 0 ? w : w = n(t).height()
        }

        function m(t) {
            return t.tagName.toLowerCase()
        }

        function b(t, e) {
            if (e) {
                var r = t.split(",");
                t = "";
                for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
            }
            return t
        }

        function v() {
            --y, i.length || y || p("onFinishedAll")
        }

        function p(t, e, n) {
            return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
        }
        var y = 0,
            z = -1,
            w = -1,
            B = !1,
            L = "afterLoad",
            T = "load",
            D = "error",
            I = "img",
            N = "src",
            E = "srcset",
            F = "sizes",
            C = "background-image";
        "event" === a.bind || o ? f() : n(t).on(T + "." + u, f)
    }

    function a(a, o) {
        var l = this,
            u = n.extend({}, l.config, o),
            f = {},
            c = u.name + "-" + ++i;
        return l.config = function(t, r) {
            return r === e ? u[t] : (u[t] = r, l)
        }, l.addItems = function(t) {
            return f.a && f.a("string" === n.type(t) ? n(t) : t), l
        }, l.getItems = function() {
            return f.g ? f.g() : {}
        }, l.update = function(t) {
            return f.e && f.e({}, !t), l
        }, l.force = function(t) {
            return f.f && f.f("string" === n.type(t) ? n(t) : t), l
        }, l.loadAll = function() {
            return f.e && f.e({
                all: !0
            }, !0), l
        }, l.destroy = function() {
            return n(u.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
        }, r(l, u, a, f, c), u.chainable ? a : l
    }
    var n = t.jQuery || t.Zepto,
        i = 0,
        o = !1;
    n.fn.Lazy = n.fn.lazy = function(t) {
        return new a(this, t)
    }, n.Lazy = n.lazy = function(t, r, i) {
        if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
            t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
            for (var o = a.prototype.config, l = o._f || (o._f = {}), u = 0, f = t.length; u < f; u++)(o[t[u]] === e || n.isFunction(o[t[u]])) && (o[t[u]] = i);
            for (var c = 0, s = r.length; c < s; c++) l[r[c]] = t[0]
        }
    }, a.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    }, n(t).on("load", (function() {
        o = !0
    }))
}(window);