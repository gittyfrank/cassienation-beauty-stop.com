! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 12)
}({
    12: function(e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var i;
        i = jQuery, window.wpzInstaFrontendInit = function() {
            i('.zoom-instagram-widget__items[data-lightbox="1"]').each((function() {
                var e = i(this).parent().parent().find(".wpz-insta-lightbox-wrapper > .swiper-container");
                if (e.length > 0) {
                    var t = e.find(".image-wrapper > .swiper-container");
                    new Swiper(e.get(0), {
                        direction: "horizontal",
                        loop: !1,
                        spaceBetween: 20,
                        autoHeight: !0,
                        watchOverflow: !0,
                        navigation: {
                            nextEl: e.find("> .swiper-button-next").get(0),
                            prevEl: e.find("> .swiper-button-prev").get(0)
                        },
                        keyboard: {
                            enabled: !0,
                            onlyInViewport: !0
                        }
                    }), t.each((function() {
                        new Swiper(i(this).get(0), {
                            direction: "horizontal",
                            loop: !1,
                            spaceBetween: 20,
                            nested: !0,
                            watchOverflow: !0,
                            pagination: {
                                el: i(this).find("> .swiper-pagination").get(0),
                                type: "bullets",
                                clickable: !0,
                                hideOnClick: !1
                            },
                            navigation: {
                                nextEl: i(this).find("> .swiper-button-next").get(0),
                                prevEl: i(this).find("> .swiper-button-prev").get(0)
                            },
                            keyboard: {
                                enabled: !0,
                                onlyInViewport: !0
                            }
                        })
                    })), i(this).find(".zoom-instagram-link").magnificPopup({
                        items: {
                            type: "inline",
                            src: i(this).parent().parent().find(".wpz-insta-lightbox-wrapper")
                        },
                        closeBtnInside: !1,
                        mainClass: "wpzoom-lightbox",
                        midClick: !0,
                        callbacks: {
                            open: function() {
                                var e = i.magnificPopup.instance.st.el,
                                    t = this.content.find("> .swiper-container").get(0).swiper;
                                "object" === n(t) && t.slideTo(this.content.find('> .swiper-container > .swiper-wrapper > .swiper-slide[data-uid="' + e.data("mfp-src") + '"]').index())
                            }
                        }
                    }), i(this).find(".zoom-instagram-link").addClass("magnific-active")
                }
            }))
        }, i(window).on("load", window.wpzInstaFrontendInit)
    }
});