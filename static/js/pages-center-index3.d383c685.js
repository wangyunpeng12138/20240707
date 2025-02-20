(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-center-index3"], {
    "00ff": function(e, t, n) {
        "use strict";
        var i = n("e9c7")
          , o = n.n(i);
        o.a
    },
    "10e8": function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        n("a9e3"),
        n("b64b"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(n("5530"))
          , a = {
            name: "u-mask",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                zIndex: {
                    type: [Number, String],
                    default: ""
                },
                customStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                zoom: {
                    type: Boolean,
                    default: !0
                },
                duration: {
                    type: [Number, String],
                    default: 300
                },
                maskClickAble: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    zoomStyle: {
                        transform: ""
                    },
                    scale: "scale(1.2, 1.2)"
                }
            },
            watch: {
                show: function(e) {
                    e && this.zoom ? this.zoomStyle.transform = "scale(1, 1)" : !e && this.zoom && (this.zoomStyle.transform = this.scale)
                }
            },
            computed: {
                maskStyle: function() {
                    var e = {
                        backgroundColor: "rgba(0, 0, 0, 0.6)"
                    };
                    return this.show ? e.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.mask : e.zIndex = -1,
                    e.transition = "all ".concat(this.duration / 1e3, "s ease-in-out"),
                    Object.keys(this.customStyle).length && (e = (0,
                    o.default)((0,
                    o.default)({}, e), this.customStyle)),
                    e
                }
            },
            methods: {
                click: function() {
                    this.maskClickAble && this.$emit("click")
                }
            }
        };
        t.default = a
    },
    "185c": function(e, t, n) {
        "use strict";
        var i = n("2eb1")
          , o = n.n(i);
        o.a
    },
    "1b16": function(e, t, n) {
        "use strict";
        var i = n("bd4a")
          , o = n.n(i);
        o.a
    },
    2389: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("905f")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(a);
        t["default"] = o.a
    },
    "25f7": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "u-icon",
                class: ["u-icon--" + e.labelPos],
                style: [e.customStyle],
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.click.apply(void 0, arguments)
                    }
                }
            }, [e.isImg ? n("v-uni-image", {
                staticClass: "u-icon__img",
                style: [e.imgStyle],
                attrs: {
                    src: e.name,
                    mode: e.imgMode
                }
            }) : n("v-uni-text", {
                staticClass: "u-icon__icon",
                class: e.customClass,
                style: [e.iconStyle],
                attrs: {
                    "hover-class": e.hoverClass
                },
                on: {
                    touchstart: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.touchstart.apply(void 0, arguments)
                    }
                }
            }, [e.showDecimalIcon ? n("v-uni-text", {
                staticClass: "u-icon__decimal",
                class: e.decimalIconClass,
                style: [e.decimalIconStyle],
                attrs: {
                    "hover-class": e.hoverClass
                }
            }) : e._e()], 1), "" !== e.label ? n("v-uni-text", {
                staticClass: "u-icon__label",
                style: {
                    color: e.labelColor,
                    fontSize: e.$u.addUnit(e.labelSize),
                    marginLeft: "right" == e.labelPos ? e.$u.addUnit(e.marginLeft) : 0,
                    marginTop: "bottom" == e.labelPos ? e.$u.addUnit(e.marginTop) : 0,
                    marginRight: "left" == e.labelPos ? e.$u.addUnit(e.marginRight) : 0,
                    marginBottom: "top" == e.labelPos ? e.$u.addUnit(e.marginBottom) : 0
                }
            }, [e._v(e._s(e.label))]) : e._e()], 1)
        }
          , a = []
    },
    "26e5": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("25f7")
          , o = n("d4c2");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return o[e]
                }
                ))
            }(a);
        n("1b16");
        var c, r = n("f0c5"), s = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "0f4c3eed", null, !1, i["a"], c);
        t["default"] = s.exports
    },
    "2a6e": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("e9bf")
          , o = n("69f8");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return o[e]
                }
                ))
            }(a);
        n("49ae"),
        n("cbda"),
        n("a0bb");
        var c, r = n("f0c5"), s = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "7647d450", null, !1, i["a"], c);
        t["default"] = s.exports
    },
    "2e8f": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-loading-circle[data-v-1b741bef]{display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:u-circle-data-v-1b741bef 1s linear infinite;animation:u-circle-data-v-1b741bef 1s linear infinite}.u-loading-flower[data-v-1b741bef]{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a 1s steps(12) infinite;animation:u-flower-data-v-1b741bef 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes u-flower-data-v-1b741bef{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-flower-data-v-1b741bef{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes u-circle-data-v-1b741bef{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}', ""]),
        e.exports = t
    },
    "2eb1": function(e, t, n) {
        var i = n("3998");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("b1140882", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    3510: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("4d3b")
          , o = n("7c14");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return o[e]
                }
                ))
            }(a);
        n("6722");
        var c, r = n("f0c5"), s = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "1a8cf32e", null, !1, i["a"], c);
        t["default"] = s.exports
    },
    "366d": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-drawer[data-v-5117ac91]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden}.u-drawer-content[data-v-5117ac91]{display:block;position:absolute;z-index:1003;transition:all .25s linear}.u-drawer__scroll-view[data-v-5117ac91]{width:100%;height:100%}.u-drawer-left[data-v-5117ac91]{top:0;bottom:0;left:0;background-color:#fff}.u-drawer-right[data-v-5117ac91]{right:0;top:0;bottom:0;background-color:#fff}.u-drawer-top[data-v-5117ac91]{top:0;left:0;right:0;background-color:#fff}.u-drawer-bottom[data-v-5117ac91]{bottom:0;left:0;right:0;background-color:#fff}.u-drawer-center[data-v-5117ac91]{display:flex;flex-direction:row;flex-direction:column;bottom:0;left:0;right:0;top:0;justify-content:center;align-items:center;opacity:0;z-index:99999}.u-mode-center-box[data-v-5117ac91]{min-width:%?100?%;min-height:%?100?%;display:block;position:relative;background-color:#fff}.u-drawer-content-visible.u-drawer-center[data-v-5117ac91]{-webkit-transform:scale(1);transform:scale(1);opacity:1}.u-animation-zoom[data-v-5117ac91]{-webkit-transform:scale(1.15);transform:scale(1.15)}.u-drawer-content-visible[data-v-5117ac91]{-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important}.u-close[data-v-5117ac91]{position:absolute;z-index:3}.u-close--top-left[data-v-5117ac91]{top:%?30?%;left:%?30?%}.u-close--top-right[data-v-5117ac91]{top:%?30?%;right:%?30?%}.u-close--bottom-left[data-v-5117ac91]{bottom:%?30?%;left:%?30?%}.u-close--bottom-right[data-v-5117ac91]{right:%?30?%;bottom:%?30?%}', ""]),
        e.exports = t
    },
    "37f1": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.show ? n("v-uni-view", {
                staticClass: "u-loading",
                class: "circle" == e.mode ? "u-loading-circle" : "u-loading-flower",
                style: [e.cricleStyle]
            }) : e._e()
        }
          , a = []
    },
    "387b": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("10e8")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(a);
        t["default"] = o.a
    },
    3998: function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-model[data-v-01f03640]{height:auto;overflow:hidden;font-size:%?32?%;background-color:#fff}.u-model__btn--hover[data-v-01f03640]{background-color:#e6e6e6}.u-model__title[data-v-01f03640]{padding-top:%?48?%;font-weight:500;text-align:center;color:#303133}.u-model__content__message[data-v-01f03640]{padding:%?48?%;font-size:%?30?%;text-align:center;color:#606266}.u-model__footer[data-v-01f03640]{display:flex;flex-direction:row}.u-model__footer__button[data-v-01f03640]{flex:1;height:%?100?%;line-height:%?100?%;font-size:%?32?%;box-sizing:border-box;cursor:pointer;text-align:center;border-radius:%?4?%}', ""]),
        e.exports = t
    },
    "408e": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */@-webkit-keyframes heartbeat-data-v-7647d450{0%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(.95);transform:scale(.95)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes heartbeat-data-v-7647d450{0%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(.95);transform:scale(.95)}50%{-webkit-transform:scale(1);transform:scale(1)}}.div_is_open_bg[data-v-7647d450]{width:100vw;display:block;background-color:hsla(0,0%,100%,.95);position:fixed;z-index:669;top:0}.div_is_open_bg .div_is_open_btn[data-v-7647d450]{width:100px;height:54px;margin:200px auto;background-image:url(img/39fb88b665c9f45214b4730889b839c0.jpeg);border-radius:3px;overflow:hidden;-moz-box-shadow:0 0 10px #999;-webkit-box-shadow:0 0 10px #999;box-shadow:0 0 10px #999;-webkit-animation-name:heartbeat-data-v-7647d450;animation-name:heartbeat-data-v-7647d450;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:cubic-bezier(0,0,0,1.74);animation-timing-function:cubic-bezier(0,0,0,1.74);-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-play-state:running;animation-play-state:running}', ""]),
        e.exports = t
    },
    "450d": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            uPopup: n("dba4").default,
            uLoading: n("f59f").default
        }
          , o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", [n("u-popup", {
                attrs: {
                    zoom: e.zoom,
                    mode: "center",
                    popup: !1,
                    "z-index": e.uZIndex,
                    length: e.width,
                    "mask-close-able": e.maskCloseAble,
                    "border-radius": e.borderRadius,
                    "negative-top": e.negativeTop
                },
                on: {
                    close: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.popupClose.apply(void 0, arguments)
                    }
                },
                model: {
                    value: e.value,
                    callback: function(t) {
                        e.value = t
                    },
                    expression: "value"
                }
            }, [n("v-uni-view", {
                staticClass: "u-model"
            }, [e.showTitle ? n("v-uni-view", {
                staticClass: "u-model__title u-line-1",
                style: [e.titleStyle]
            }, [e._v(e._s(e.title))]) : e._e(), n("v-uni-view", {
                staticClass: "u-model__content"
            }, [e.$slots.default || e.$slots.$default ? n("v-uni-view", {
                style: [e.contentStyle]
            }, [e._t("default")], 2) : n("v-uni-view", {
                staticClass: "u-model__content__message",
                style: [e.contentStyle]
            }, [e._v(e._s(e.content))])], 1), e.showCancelButton || e.showConfirmButton ? n("v-uni-view", {
                staticClass: "u-model__footer u-border-top"
            }, [e.showCancelButton ? n("v-uni-view", {
                staticClass: "u-model__footer__button",
                style: [e.cancelBtnStyle],
                attrs: {
                    "hover-stay-time": 100,
                    "hover-class": "u-model__btn--hover"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.cancel.apply(void 0, arguments)
                    }
                }
            }, [e._v(e._s(e.cancelText))]) : e._e(), e.showConfirmButton || e.$slots["confirm-button"] ? n("v-uni-view", {
                staticClass: "u-model__footer__button hairline-left",
                style: [e.confirmBtnStyle],
                attrs: {
                    "hover-stay-time": 100,
                    "hover-class": e.asyncClose ? "none" : "u-model__btn--hover"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.confirm.apply(void 0, arguments)
                    }
                }
            }, [e.$slots["confirm-button"] ? e._t("confirm-button") : [e.loading ? n("u-loading", {
                attrs: {
                    mode: "circle",
                    color: e.confirmColor
                }
            }) : [e._v(e._s(e.confirmText))]]], 2) : e._e()], 1) : e._e()], 1)], 1)], 1)
        }
          , a = []
    },
    "49ae": function(e, t, n) {
        "use strict";
        var i = n("c58a")
          , o = n.n(i);
        o.a
    },
    "4d3b": function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            uModal: n("b7ed").default
        }
          , o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "twopage"
            }, [n("header", {
                ref: "top1",
                staticClass: "header animate__animated animate__fadeInDown"
            }, [n("div", {
                staticClass: "item"
            }, [n("span", {
                ref: "typed_arr"
            }), n("span", {
                staticClass: "typed-cursor",
                staticStyle: {
                    "animation-iteration-count": "infinite"
                }
            }, [e._v("|")])])]), n("u-modal", {
                attrs: {
                    "show-title": !1,
                    content: e.contentK
                },
                on: {
                    confirm: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.modalFnK.apply(void 0, arguments)
                    }
                },
                model: {
                    value: e.showK,
                    callback: function(t) {
                        e.showK = t
                    },
                    expression: "showK"
                }
            })], 1)
        }
          , a = []
    },
    "52d1": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */@keyframes fade-data-v-7647d450{from{opacity:1}50%{opacity:.4}to{opacity:1}}@-webkit-keyframes fade-data-v-7647d450{from{opacity:1}50%{opacity:.4}to{opacity:1}}.page[data-v-7647d450]{background-color:#000;text-align:center;width:100vw;height:100vh;overflow:auto;margin:0;padding:0;position:relative}.page .onePage #c[data-v-7647d450]{position:absolute;display:block;margin:0 auto;z-index:9;top:0;width:100vw;height:100vh}.page .onePage .canvas[data-v-7647d450]{position:absolute;display:block;margin:0 auto;z-index:1;top:0;width:100vw;height:100vh;background:url(img/8210d740c51c1cdbac4922134d8fcdc5.jpeg) no-repeat;background-size:100% 100%}.page .onePage .main .middle[data-v-7647d450],\r\n.page .onePage .main .middle[data-v-7647d450]{position:fixed;width:100vw;left:0;top:0;height:100vh;z-index:9;overflow-y:auto;-webkit-overflow-scrolling:touch;background-color:rgba(0,0,0,.5)}.page .onePage .main .middle .item[data-v-7647d450],\r\n.page .onePage .main .middle .item[data-v-7647d450]{font-weight:300;padding-top:10px;color:#fff;line-height:42.5px;box-sizing:border-box;font-family:Roboto,Lato,sans-serif}.page .onePage .main .middle .item > span[data-v-7647d450],\r\n.page .onePage .main .middle .item > span[data-v-7647d450]{font-size:15px;font-weight:300}.page .onePage .main .middle .item .typed-cursor[data-v-7647d450],\r\n.page .onePage .main .middle .item .typed-cursor[data-v-7647d450]{opacity:1;animation:fade-data-v-7647d450 .7s infinite;-webkit-animation:fade-data-v-7647d450 .7s infinite}', ""]),
        e.exports = t
    },
    5601: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("6215")
          , o = n("387b");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return o[e]
                }
                ))
            }(a);
        n("00ff");
        var c, r = n("f0c5"), s = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "97c7ea6a", null, !1, i["a"], c);
        t["default"] = s.exports
    },
    "5c7a": function(e, t, n) {
        "use strict";
        n("a9e3"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            name: "u-loading",
            props: {
                mode: {
                    type: String,
                    default: "circle"
                },
                color: {
                    type: String,
                    default: "#c7c7c7"
                },
                size: {
                    type: [String, Number],
                    default: "34"
                },
                show: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                cricleStyle: function() {
                    var e = {};
                    return e.width = this.size + "rpx",
                    e.height = this.size + "rpx",
                    "circle" == this.mode && (e.borderColor = "#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color ? this.color : "#c7c7c7")),
                    e
                }
            }
        };
        t.default = i
    },
    6215: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "u-mask",
                class: {
                    "u-mask-zoom": e.zoom,
                    "u-mask-show": e.show
                },
                style: [e.maskStyle, e.zoomStyle],
                attrs: {
                    "hover-stop-propagation": !0
                },
                on: {
                    touchmove: function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        arguments[0] = t = e.$handleEvent(t),
                        function() {}
                        .apply(void 0, arguments)
                    },
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.click.apply(void 0, arguments)
                    }
                }
            }, [e._t("default")], 2)
        }
          , a = []
    },
    "63cf": function(e, t, n) {
        "use strict";
        var i = n("77ee")
          , o = n.n(i);
        o.a
    },
    6722: function(e, t, n) {
        "use strict";
        var i = n("d1ac")
          , o = n.n(i);
        o.a
    },
    "69f8": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("cc3c")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(a);
        t["default"] = o.a
    },
    "73e2": function(e, t, n) {
        "use strict";
        var i = n("ac20")
          , o = n.n(i);
        o.a
    },
    "77ee": function(e, t, n) {
        var i = n("366d");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("4714342c", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "7c14": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("b47c")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(a);
        t["default"] = o.a
    },
    "7e2e": function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */@keyframes fade-data-v-1a8cf32e{from{opacity:1}50%{opacity:.4}to{opacity:1}}@-webkit-keyframes fade-data-v-1a8cf32e{from{opacity:1}50%{opacity:.4}to{opacity:1}}.twopage[data-v-1a8cf32e]{width:100vw;height:100vh;position:absolute;top:0;left:0}.twopage > header[data-v-1a8cf32e]{position:fixed;width:100vw;height:10vh;line-height:10vh;background-color:#e91e63;z-index:9;display:none}.twopage > header .item[data-v-1a8cf32e]{box-sizing:border-box;font-family:Roboto,Lato,sans-serif;width:100vw;text-align:center;color:#fff;height:10vh;line-height:10vh}.twopage > header .item > span[data-v-1a8cf32e]{display:inline-block;-webkit-user-select:none;user-select:none;outline:none;-webkit-appearance:none;appearance:none;background-color:#e91e63;font-size:4vh;font-weight:200;line-height:10vh;font-weight:300;height:10vh}.twopage > header .item .typed-cursor[data-v-1a8cf32e]{opacity:1;animation:fade-data-v-1a8cf32e .7s infinite;-webkit-animation:fade-data-v-1a8cf32e .7s infinite}', ""]),
        e.exports = t
    },
    "8ef1": function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("5c7a")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(a);
        t["default"] = o.a
    },
    "905f": function(e, t, n) {
        "use strict";
        n("a9e3"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            name: "u-modal",
            props: {
                value: {
                    type: Boolean,
                    default: !1
                },
                zIndex: {
                    type: [Number, String],
                    default: ""
                },
                title: {
                    type: [String],
                    default: "提示"
                },
                width: {
                    type: [Number, String],
                    default: 600
                },
                content: {
                    type: String,
                    default: "内容"
                },
                showTitle: {
                    type: Boolean,
                    default: !0
                },
                showConfirmButton: {
                    type: Boolean,
                    default: !0
                },
                showCancelButton: {
                    type: Boolean,
                    default: !1
                },
                confirmText: {
                    type: String,
                    default: "确认"
                },
                cancelText: {
                    type: String,
                    default: "取消"
                },
                confirmColor: {
                    type: String,
                    default: "#2979ff"
                },
                cancelColor: {
                    type: String,
                    default: "#606266"
                },
                borderRadius: {
                    type: [Number, String],
                    default: 16
                },
                titleStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                contentStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                cancelStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                confirmStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                zoom: {
                    type: Boolean,
                    default: !0
                },
                asyncClose: {
                    type: Boolean,
                    default: !1
                },
                maskCloseAble: {
                    type: Boolean,
                    default: !1
                },
                negativeTop: {
                    type: [String, Number],
                    default: 0
                }
            },
            data: function() {
                return {
                    loading: !1
                }
            },
            computed: {
                cancelBtnStyle: function() {
                    return Object.assign({
                        color: this.cancelColor
                    }, this.cancelStyle)
                },
                confirmBtnStyle: function() {
                    return Object.assign({
                        color: this.confirmColor
                    }, this.confirmStyle)
                },
                uZIndex: function() {
                    return this.zIndex ? this.zIndex : this.$u.zIndex.popup
                }
            },
            watch: {
                value: function(e) {
                    !0 === e && (this.loading = !1)
                }
            },
            methods: {
                confirm: function() {
                    this.asyncClose ? this.loading = !0 : this.$emit("input", !1),
                    this.$emit("confirm")
                },
                cancel: function() {
                    var e = this;
                    this.$emit("cancel"),
                    this.$emit("input", !1),
                    setTimeout((function() {
                        e.loading = !1
                    }
                    ), 300)
                },
                popupClose: function() {
                    this.$emit("input", !1)
                },
                clearLoading: function() {
                    this.loading = !1
                }
            }
        };
        t.default = i
    },
    9735: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("a8c0")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(a);
        t["default"] = o.a
    },
    a0bb: function(e, t, n) {
        "use strict";
        var i = n("f150")
          , o = n.n(i);
        o.a
    },
    a8c0: function(e, t, n) {
        "use strict";
        n("99af"),
        n("a9e3"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            name: "u-popup",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                mode: {
                    type: String,
                    default: "left"
                },
                mask: {
                    type: Boolean,
                    default: !0
                },
                length: {
                    type: [Number, String],
                    default: "auto"
                },
                zoom: {
                    type: Boolean,
                    default: !0
                },
                safeAreaInsetBottom: {
                    type: Boolean,
                    default: !1
                },
                maskCloseAble: {
                    type: Boolean,
                    default: !0
                },
                customStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                value: {
                    type: Boolean,
                    default: !1
                },
                popup: {
                    type: Boolean,
                    default: !0
                },
                borderRadius: {
                    type: [Number, String],
                    default: 0
                },
                zIndex: {
                    type: [Number, String],
                    default: ""
                },
                closeable: {
                    type: Boolean,
                    default: !1
                },
                closeIcon: {
                    type: String,
                    default: "close"
                },
                closeIconPos: {
                    type: String,
                    default: "top-right"
                },
                closeIconColor: {
                    type: String,
                    default: "#909399"
                },
                closeIconSize: {
                    type: [String, Number],
                    default: "30"
                },
                width: {
                    type: String,
                    default: ""
                },
                height: {
                    type: String,
                    default: ""
                },
                negativeTop: {
                    type: [String, Number],
                    default: 0
                },
                maskCustomStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                duration: {
                    type: [String, Number],
                    default: 250
                }
            },
            data: function() {
                return {
                    visibleSync: !1,
                    showDrawer: !1,
                    timer: null,
                    closeFromInner: !1
                }
            },
            computed: {
                style: function() {
                    var e = {};
                    if ("left" == this.mode || "right" == this.mode ? e = {
                        width: this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length),
                        height: "100%",
                        transform: "translate3D(".concat("left" == this.mode ? "-100%" : "100%", ",0px,0px)")
                    } : "top" != this.mode && "bottom" != this.mode || (e = {
                        width: "100%",
                        height: this.height ? this.getUnitValue(this.height) : this.getUnitValue(this.length),
                        transform: "translate3D(0px,".concat("top" == this.mode ? "-100%" : "100%", ",0px)")
                    }),
                    e.zIndex = this.uZindex,
                    this.borderRadius) {
                        switch (this.mode) {
                        case "left":
                            e.borderRadius = "0 ".concat(this.borderRadius, "rpx ").concat(this.borderRadius, "rpx 0");
                            break;
                        case "top":
                            e.borderRadius = "0 0 ".concat(this.borderRadius, "rpx ").concat(this.borderRadius, "rpx");
                            break;
                        case "right":
                            e.borderRadius = "".concat(this.borderRadius, "rpx 0 0 ").concat(this.borderRadius, "rpx");
                            break;
                        case "bottom":
                            e.borderRadius = "".concat(this.borderRadius, "rpx ").concat(this.borderRadius, "rpx 0 0");
                            break;
                        default:
                        }
                        e.overflow = "hidden"
                    }
                    return this.duration && (e.transition = "all ".concat(this.duration / 1e3, "s linear")),
                    e
                },
                centerStyle: function() {
                    var e = {};
                    return e.width = this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length),
                    e.height = this.height ? this.getUnitValue(this.height) : "auto",
                    e.zIndex = this.uZindex,
                    e.marginTop = "-".concat(this.$u.addUnit(this.negativeTop)),
                    this.borderRadius && (e.borderRadius = "".concat(this.borderRadius, "rpx"),
                    e.overflow = "hidden"),
                    e
                },
                uZindex: function() {
                    return this.zIndex ? this.zIndex : this.$u.zIndex.popup
                }
            },
            watch: {
                value: function(e) {
                    e ? this.open() : this.closeFromInner || this.close(),
                    this.closeFromInner = !1
                }
            },
            mounted: function() {
                this.value && this.open()
            },
            methods: {
                getUnitValue: function(e) {
                    return /(%|px|rpx|auto)$/.test(e) ? e : e + "rpx"
                },
                maskClick: function() {
                    this.close()
                },
                close: function() {
                    this.closeFromInner = !0,
                    this.change("showDrawer", "visibleSync", !1)
                },
                modeCenterClose: function(e) {
                    "center" == e && this.maskCloseAble && this.close()
                },
                open: function() {
                    this.change("visibleSync", "showDrawer", !0)
                },
                change: function(e, t, n) {
                    var i = this;
                    1 == this.popup && this.$emit("input", n),
                    this[e] = n,
                    this.timer = n ? setTimeout((function() {
                        i[t] = n,
                        i.$emit(n ? "open" : "close")
                    }
                    ), 50) : setTimeout((function() {
                        i[t] = n,
                        i.$emit(n ? "open" : "close")
                    }
                    ), this.duration)
                }
            }
        };
        t.default = i
    },
    ac20: function(e, t, n) {
        var i = n("2e8f");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("73c06c36", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    b47c: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        n("c975"),
        n("a434"),
        n("ac1f"),
        n("1276"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(n("e413"))
          , a = {
            data: function() {},
            mounted: function() {
                var e = this;
                this.showCanvas(),
                this.modalArrK = this.yes_listK.split("#"),
                setTimeout((function(t) {
                    e.$refs.top1.style.display = "block";
                    var n = 0
                      , i = e.$refs.typed_arr
                      , o = setInterval((function() {
                        e.top_data.length !== n ? (i.innerHTML += " " != e.top_data[n] ? e.top_data[n] : "<br>",
                        n++) : (clearInterval(o),
                        setTimeout((function(t) {
                            e.$refs.top1.style.display = "none",
                            i.innerHTML = "",
                            n = 0,
                            setTimeout((function(t) {
                                e.$refs.top1.style.display = "block",
                                e.$refs.top1.classname = "header animate__animated animate__fadeInDown",
                                o = setInterval((function() {
                                    e.top_data1.length !== n ? (i.innerHTML += " " != e.top_data1[n] ? e.top_data1[n] : "<br>",
                                    n++) : (clearInterval(o),
                                    setTimeout((function(t) {
                                        e.$refs.top1.style.display = "none",
                                        setTimeout((function(t) {
                                            e.showModel()
                                        }
                                        ), 5e3)
                                    }
                                    ), 2e3))
                                }
                                ), e.speed)
                            }
                            ), 1500)
                        }
                        ), 2e3))
                    }
                    ), e.speed)
                }
                ), 4e3)
            },
            methods: {
                showModel: function() {
                    this.showK = !0,
                    this.contentK = this.modalArrK[this.indexK]
                },
                modalFnK: function() {
                    var e = this;
                    this.indexK++,
                    setTimeout((function(t) {
                        e.indexK != e.modalArrK.length ? (e.showK = !0,
                        e.contentK = e.modalArrK[e.indexK]) : (e.indexK = 0,
                        e.showK = !1)
                    }
                    ), 300)
                },
                showCanvas: function() {
                    var e = 1
                      , t = new o.default.GameCanvas
                      , n = p("宝 宝", 20, "Anton")
                      , i = p("💗", 20, "Anton")
                      , a = p("我 爱 你", 20, "Anton")
                      , c = []
                      , r = []
                      , s = []
                      , u = .1;
                    setTimeout((function() {
                        setInterval((function() {
                            r.push(new m(Math.random() * width,height,Math.random() - .5,-(7 * Math.random() + 5)))
                        }
                        ), 200)
                    }
                    ), 2e3),
                    r.push(new m(width / 2,height,1.3,-11,10,"gold",!0)),
                    setInterval((function() {
                        r.push(new m(width / 2,height,1.3,-11,10,"gold",!0)),
                        e++
                    }
                    ), 5e3);
                    for (var d = 0; d < 250; d++)
                        circle(Math.random() * width, Math.random() * height, 1, "rgb(200, 200, 200)");
                    var l = canvasToImage();
                    function f() {
                        t.ctx.globalCompositeOperation = "source-over",
                        background("rgba(0, 0, 0, 0.1)"),
                        t.ctx.drawImage(l, 0, 0),
                        t.ctx.globalCompositeOperation = "lighter";
                        for (var e = 0; e < r.length; e++) {
                            var n = r[e];
                            n.update(),
                            n.render()
                        }
                        for (e = 0; e < s.length; e++) {
                            var i = s[e];
                            i.update(),
                            i.render()
                        }
                        for (e = 0; e < c.length; e++) {
                            var o = c[e];
                            o.update(),
                            o.render()
                        }
                        requestAnimationFrame(f)
                    }
                    function h(e, t, n, i) {
                        this.x = e,
                        this.y = t,
                        this.vx = n,
                        this.vy = i,
                        this.ay = .2,
                        this.radius = 4,
                        this.maxHealth = 200,
                        this.health = 200,
                        this.update = function() {
                            this.x += this.vx,
                            this.y += this.vy,
                            this.vx *= .95,
                            this.vy *= .95,
                            this.vy += this.ay,
                            this.ay *= .95,
                            this.radius = this.health / this.maxHealth * 4,
                            this.health--,
                            this.health <= 0 && c.splice(c.indexOf(this), 1)
                        }
                        ,
                        this.render = function() {
                            circle(this.x, this.y, this.radius, "rgba(255, 255, 255, " + this.health / this.maxHealth + ")")
                        }
                    }
                    function m(t, o, d, l) {
                        var f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 5
                          , m = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "white"
                          , p = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                        this.x = t,
                        this.y = o,
                        this.vx = d,
                        this.vy = l,
                        this.radius = f,
                        this.title = p,
                        this.color = m,
                        this.update = function() {
                            if (this.x += this.vx,
                            this.y += this.vy,
                            this.vy += u,
                            this.vy >= 0)
                                if (r.splice(r.indexOf(this), 1),
                                this.title) {
                                    var t = .3
                                      , o = null;
                                    1 === e ? o = n : 2 === e ? o = i : 3 === e && (o = a,
                                    e = 0);
                                    for (var d = 0; d < o.length; d++) {
                                        var l = o[d]
                                          , f = {
                                            x: (l.x - 60) * t + .1 * (Math.random() - .5),
                                            y: (l.y - 20) * t + .1 * (Math.random() - .5)
                                        }
                                          , m = new h(this.x,this.y,f.x,f.y);
                                        c.push(m)
                                    }
                                } else {
                                    var p = [256 * Math.random() >> 0, 256 * Math.random() >> 0, 256 * Math.random() >> 0];
                                    for (d = 0; d < 2 * Math.PI; d += .1) {
                                        var b = 4 * (Math.random() + .5)
                                          , g = Math.cos(d) * b
                                          , w = Math.sin(d) * b;
                                        s.push(new v(this.x,this.y,g,w,Math.random() + 3,p))
                                    }
                                }
                        }
                        ,
                        this.render = function() {
                            circle(this.x, this.y, this.radius, this.color)
                        }
                    }
                    function v(e, t, n, i, o, a) {
                        this.x = e,
                        this.y = t,
                        this.vx = n,
                        this.vy = i,
                        this.life = 100,
                        this.color = a,
                        this.radius = o,
                        this.update = function() {
                            this.x += this.vx,
                            this.y += this.vy,
                            this.vy += u,
                            this.vx *= .95,
                            this.vy *= .95,
                            this.life--,
                            this.life <= 0 && s.splice(s.indexOf(this), 1)
                        }
                        ,
                        this.render = function() {
                            circle(this.x, this.y, this.life / 100 * 3, "rgba(" + this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ", " + this.life / 100 + ")")
                        }
                    }
                    function p(e, t, n) {
                        var i = document.createElement("canvas");
                        i.width = 1024,
                        i.height = 1.3 * t;
                        var o = i.getContext("2d");
                        o.textBaseline = "middle",
                        o.font = t + "px " + n,
                        o.fillText(e, 0, i.height / 2);
                        for (var a = o.getImageData(0, 0, i.width, i.height), c = a.data, r = [], s = function(e, t) {
                            return 4 * (e + i.width * t)
                        }, u = 50, d = 0; d < c.length; d += 4)
                            if (c[d + 3] > u) {
                                var l = {
                                    x: d / 4 % i.width,
                                    y: d / 4 / i.width >> 0
                                };
                                (c[s(l.x + 1, l.y) + 3] < u || c[s(l.x - 1, l.y) + 3] < u || c[s(l.x, l.y + 1) + 3] < u || c[s(l.x, l.y - 1) + 3] < u) && r.push({
                                    x: d / 4 % i.width,
                                    y: d / 4 / i.width >> 0
                                })
                            }
                        return r
                    }
                    background("black"),
                    f()
                }
            }
        };
        t.default = a
    },
    b7ed: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("450d")
          , o = n("2389");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return o[e]
                }
                ))
            }(a);
        n("185c");
        var c, r = n("f0c5"), s = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "01f03640", null, !1, i["a"], c);
        t["default"] = s.exports
    },
    bb3c: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            uMask: n("5601").default,
            uIcon: n("26e5").default
        }
          , o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.visibleSync ? n("v-uni-view", {
                staticClass: "u-drawer",
                style: [e.customStyle, {
                    zIndex: e.uZindex - 1
                }],
                attrs: {
                    "hover-stop-propagation": !0
                }
            }, [n("u-mask", {
                attrs: {
                    duration: e.duration,
                    "custom-style": e.maskCustomStyle,
                    maskClickAble: e.maskCloseAble,
                    "z-index": e.uZindex - 2,
                    show: e.showDrawer && e.mask
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.maskClick.apply(void 0, arguments)
                    }
                }
            }), n("v-uni-view", {
                staticClass: "u-drawer-content",
                class: [e.safeAreaInsetBottom ? "safe-area-inset-bottom" : "", "u-drawer-" + e.mode, e.showDrawer ? "u-drawer-content-visible" : "", e.zoom && "center" == e.mode ? "u-animation-zoom" : ""],
                style: [e.style],
                on: {
                    touchmove: function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        arguments[0] = t = e.$handleEvent(t)
                    },
                    click: [function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.modeCenterClose(e.mode)
                    }
                    , function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        arguments[0] = t = e.$handleEvent(t)
                    }
                    ]
                }
            }, ["center" == e.mode ? n("v-uni-view", {
                staticClass: "u-mode-center-box",
                style: [e.centerStyle],
                on: {
                    touchmove: function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        arguments[0] = t = e.$handleEvent(t)
                    },
                    click: function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        arguments[0] = t = e.$handleEvent(t)
                    }
                }
            }, [e.closeable ? n("u-icon", {
                staticClass: "u-close",
                class: ["u-close--" + e.closeIconPos],
                attrs: {
                    name: e.closeIcon,
                    color: e.closeIconColor,
                    size: e.closeIconSize
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.close.apply(void 0, arguments)
                    }
                }
            }) : e._e(), n("v-uni-scroll-view", {
                staticClass: "u-drawer__scroll-view",
                attrs: {
                    "scroll-y": "true"
                }
            }, [e._t("default")], 2)], 1) : n("v-uni-scroll-view", {
                staticClass: "u-drawer__scroll-view",
                attrs: {
                    "scroll-y": "true"
                }
            }, [e._t("default")], 2), n("v-uni-view", {
                staticClass: "u-close",
                class: ["u-close--" + e.closeIconPos],
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.close.apply(void 0, arguments)
                    }
                }
            }, ["center" != e.mode && e.closeable ? n("u-icon", {
                attrs: {
                    name: e.closeIcon,
                    color: e.closeIconColor,
                    size: e.closeIconSize
                }
            }) : e._e()], 1)], 1)], 1) : e._e()
        }
          , a = []
    },
    bd4a: function(e, t, n) {
        var i = n("e3ad");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("634ef50e", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    bf4f: function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-mask[data-v-97c7ea6a]{position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.u-mask-show[data-v-97c7ea6a]{opacity:1}.u-mask-zoom[data-v-97c7ea6a]{-webkit-transform:scale(1.2);transform:scale(1.2)}', ""]),
        e.exports = t
    },
    c056: function(e, t, n) {
        var i = n("d4dd");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("ba233754", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c58a: function(e, t, n) {
        var i = n("52d1");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("7b26c712", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    cb29: function(e, t, n) {
        var i = n("23e7")
          , o = n("81d5")
          , a = n("44d2");
        i({
            target: "Array",
            proto: !0
        }, {
            fill: o
        }),
        a("fill")
    },
    cbda: function(e, t, n) {
        "use strict";
        var i = n("c056")
          , o = n.n(i);
        o.a
    },
    cc3c: function(e, t, n) {
        "use strict";
        var i = n("4ea4");
        n("cb29"),
        n("c975"),
        n("a434"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = i(n("3510"))
          , a = {
            data: function() {
                return {
                    bgSrc: "img/8210d740c51c1cdbac4922134d8fcdc5.jpeg",
                    playMp3: !1,
                    audioS: null,
                    mp3Src: "mp3/6928693457238444813.mp3",
                    mp3Src2: "mp3/7092260865386285832.mp3",
                    footerBtn: !1,
                    show: !1,
                    content: "公主殿下，七夕快乐！",
                    showPage: !0,
                    typed_arr: "一牵玉手乐无边🫰 三月桃花映碧涟😚 一曲欢歌情切切🎵 四围美景意绵绵🌴 永依相伴观霞彩🌅 远踏同行赏月圆🌝 爱海泛舟波荡漾👬 你侬我侬共流年❤️ 👀带你👇🏻看烟花",
                    speed: 200,
                    loop: !0,
                    goBack: !0
                }
            },
            mounted: function() {
                this.audioS = uni.createInnerAudioContext(),
                this.audioS.src = this.mp3Src,
                this.audioS.loop = this.loop,
                this.t()
            },
            beforeDestroy: function() {
                this.goBack && (location.href = "#"),
                this.audioS.stop()
            },
            methods: {
                openMore: function() {
                    location.href = "#"
                },
                palyMp3Fn: function() {
                    this.playMp3 = !this.playMp3,
                    this.playMp3 ? this.audioS.play() : this.audioS.pause()
                },
                t: function() {
                    var e, t = document.getElementById("c"), n = t.children[0].getContext("2d"), i = t.width = window.innerWidth, o = t.height = window.innerHeight, a = i * o > 75e4 ? 200 : 60, c = [], r = i * o > 5e5 ? 50 : 35, s = 2;
                    function u(e, t) {
                        return Math.random() * (t - e) + e
                    }
                    function d(e, t, n, i) {
                        for (var o = !1, a = n.length - 1; a >= 0; a--)
                            !i || o ? t.splice(e, 0, n[a]) : (t.splice(e, i, n[a]),
                            o = !0)
                    }
                    function l(e, t) {
                        this.x = e || 0,
                        this.y = t || 0
                    }
                    function f(e, t, n, i) {
                        this.position = e,
                        this.velocity = t,
                        this.startSpeed = this.velocity.getMagnitude(),
                        this.radius = n,
                        this.hue = i
                    }
                    function h(e, t, n, i, o, a, c) {
                        this.x = e,
                        this.y = t,
                        this.startX = this.x,
                        this.speed = n,
                        this.radius = i,
                        this.fragments = o,
                        this.swing = a,
                        this.hue = c
                    }
                    function m(e, t, n, i) {
                        this.physicalProperties = e,
                        this.objects = t,
                        this.ctx = n,
                        this.background = i,
                        this.frameID = 0
                    }
                    for (l.prototype.add = function(e) {
                        return this.x += e.x,
                        this.y += e.y,
                        this
                    }
                    ,
                    l.prototype.multiply = function(e) {
                        return this.x *= e,
                        this.y *= e,
                        this
                    }
                    ,
                    l.prototype.getMagnitude = function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y)
                    }
                    ,
                    f.prototype.update = function(e) {
                        this.velocity.multiply(e.physicalProperties.friction),
                        this.position.add(this.velocity),
                        this.radius *= this.velocity.getMagnitude() / this.startSpeed,
                        this.radius < .1 && e.objects.splice(e.objects.indexOf(this), 1)
                    }
                    ,
                    f.prototype.render = function(e) {
                        e.beginPath(),
                        e.fillStyle = "hsl(" + this.hue + ", 100%, 20%)",
                        e.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI),
                        e.fill()
                    }
                    ,
                    h.prototype.update = function(e) {
                        this.x = this.startX + Math.cos(this.y / 80) * this.swing,
                        this.y += this.speed,
                        this.y + this.radius < 0 && (this.y = e.physicalProperties.height + this.radius)
                    }
                    ,
                    h.prototype.render = function(e) {
                        e.beginPath(),
                        e.fillStyle = "hsl(" + this.hue + ", 80%, 50%,0.5)",
                        e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
                        e.fill()
                    }
                    ,
                    h.prototype.pop = function(e) {
                        for (var t = [], n = 0; n < this.fragments; n++)
                            t.push(new f(new l(this.x,this.y),new l(u(-2, 2),u(-2, 2)),u(2, this.radius / 4),this.hue));
                        d(e.objects.indexOf(this), e.objects, t, 1)
                    }
                    ,
                    m.prototype.update = function() {
                        for (var e = 0; e < this.objects.length; e++)
                            this.objects[e].update(this)
                    }
                    ,
                    m.prototype.render = function() {
                        this.ctx.clearRect(0, 0, this.physicalProperties.width, this.physicalProperties.height),
                        this.background && (this.ctx.fillStyle = this.background,
                        this.ctx.fillRect(0, 0, this.physicalProperties.width, this.physicalProperties.height));
                        for (var e = 0; e < this.objects.length; e++)
                            this.objects[e].render(this.ctx)
                    }
                    ,
                    m.prototype.animate = function() {
                        this.update(),
                        this.render(),
                        this.frameID = requestAnimationFrame(this.animate.bind(this))
                    }
                    ,
                    e = 0; e < a; e++)
                        c.push(new h(Math.random() * i,Math.random() * o,-u(.5, s),u(5, r),u(7, 10),u(-40, 40),u(0, 360)));
                    var v = new m({
                        width: t.width,
                        height: t.height,
                        friction: .997
                    },c,n,"rgb(100, 170, 140,0)");
                    n.globalCompositeOperation = "lighter",
                    v.animate(),
                    window.addEventListener("resize", (function() {
                        i = v.physicalProperties.width = t.width = window.innerWidth,
                        o = v.physicalProperties.height = t.height = window.innerHeight,
                        n.globalCompositeOperation = "lighter"
                    }
                    )),
                    window.addEventListener("mousemove", (function(e) {
                        for (var t = 0; t < v.objects.length; t++)
                            v.objects[t]instanceof h && e.clientX > v.objects[t].x - v.objects[t].radius && e.clientX < v.objects[t].x + v.objects[t].radius && e.clientY < v.objects[t].y + v.objects[t].radius && e.clientY > v.objects[t].y - v.objects[t].radius && v.objects[t].pop(v)
                    }
                    )),
                    window.addEventListener("touchmove", (function(e) {
                        for (var t = 0; t < v.objects.length; t++)
                            v.objects[t]instanceof h && e.touches[0].clientX > v.objects[t].x - v.objects[t].radius && e.touches[0].clientX < v.objects[t].x + v.objects[t].radius && e.touches[0].clientY < v.objects[t].y + v.objects[t].radius && e.touches[0].clientY > v.objects[t].y - v.objects[t].radius && v.objects[t].pop(v)
                    }
                    ))
                },
                modalFn: function() {
                    this.showPage = !1,
                    this.mp3Src2 && (this.playMp3 = !1,
                    this.audioS.stop(),
                    this.audioS.src = this.mp3Src2 ? this.mp3Src2 : this.mp3Src,
                    this.palyMp3Fn())
                },
                executeFn: function() {
                    var e = this;
                    document.getElementsByClassName("div_is_open_bg")[0].style.display = "none",
                    this.onePlayMp3();
                    var t = this.$refs.typed_arr
                      , n = 0
                      , i = setInterval((function() {
                        e.typed_arr.length !== n ? (t.innerHTML += " " != e.typed_arr[n] ? e.typed_arr[n] : "<br>",
                        n++) : (clearInterval(i),
                        e.$refs.footerBtn.classname += " animate__animated animate__zoomIn",
                        e.footerBtn = !0)
                    }
                    ), this.speed)
                },
                onePlayMp3: function() {
                    this.playMp3 || (this.playMp3 = !0,
                    this.audioS.play())
                }
            },
            components: {
                yanhua: o.default
            }
        };
        t.default = a
    },
    d1ac: function(e, t, n) {
        var i = n("7e2e");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("4c71fd47", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    d4c2: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("e45a")
          , o = n.n(i);
        for (var a in i)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return i[e]
                }
                ))
            }(a);
        t["default"] = o.a
    },
    d4dd: function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.mu-button[data-v-7647d450]{display:inline-block;overflow:hidden;position:relative;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:cubic-bezier(.23,1,.32,1);transition-timing-function:cubic-bezier(.23,1,.32,1);text-decoration:none;text-align:center;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;text-transform:uppercase;margin:0;padding:0;cursor:pointer;-webkit-box-flex:0;-webkit-flex-shrink:0;-ms-flex:0 0 auto;-ms-flex-negative:0;flex-shrink:0}.mu-inverse[data-v-7647d450]{color:#fff}.mu-fab-button[data-v-7647d450]{line-height:1;width:40px;height:40px;border-radius:50%;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#2196f3;color:#fff;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.2)}.mu-fab-button .mu-button-small[data-v-7647d450]{width:40px;height:40px}.mu-fab-button .mu-button-wrapper[data-v-7647d450]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}@-webkit-keyframes rotation-data-v-7647d450{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}.anS[data-v-7647d450]{-webkit-transform:rotate(1turn);animation:rotation-data-v-7647d450 3s linear infinite;-moz-animation:rotation-data-v-7647d450 3s linear infinite;-webkit-animation:rotation-data-v-7647d450 3s linear infinite;-o-animation:rotation-data-v-7647d450 3s linear infinite}', ""]),
        e.exports = t
    },
    dba4: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("bb3c")
          , o = n("9735");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return o[e]
                }
                ))
            }(a);
        n("63cf");
        var c, r = n("f0c5"), s = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "5117ac91", null, !1, i["a"], c);
        t["default"] = s.exports
    },
    e3ad: function(e, t, n) {
        var i = n("24fb");
        t = i(!1),
        t.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n\r\n\r\n/* 支付宝，百度，头条小程序目前读取大的本地字体文件，导致无法显示图标，故用在线加载的方式-2020-05-12 */\n@font-face{font-family:uicon-iconfont;src:url(//at.alicdn.com/t/font_1529455_k4s6di1d1.eot?t=1596960292384);\r\n\t/* IE9 */src:url(//at.alicdn.com/t/font_1529455_k4s6di1d1.eot?t=1596960292384#iefix) format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2"),url(//at.alicdn.com/t/font_1529455_k4s6di1d1.woff?t=1596960292384) format("woff"),url(//at.alicdn.com/t/font_1529455_k4s6di1d1.ttf?t=1596960292384) format("truetype"),url(//at.alicdn.com/t/font_1529455_k4s6di1d1.svg?t=1596960292384#iconfont) format("svg")}\n.u-iconfont[data-v-0f4c3eed]{position:relative;display:flex;font:normal normal normal 14px/1 uicon-iconfont;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.u-iconfont[data-v-0f4c3eed]::before{display:flex;align-items:center}.uicon-en[data-v-0f4c3eed]:before{content:"\\e70a"}.uicon-zh[data-v-0f4c3eed]:before{content:"\\e692"}.uicon-level[data-v-0f4c3eed]:before{content:"\\e693"}.uicon-woman[data-v-0f4c3eed]:before{content:"\\e69c"}.uicon-man[data-v-0f4c3eed]:before{content:"\\e697"}.uicon-column-line[data-v-0f4c3eed]:before{content:"\\e68e"}.uicon-empty-page[data-v-0f4c3eed]:before{content:"\\e627"}.uicon-empty-data[data-v-0f4c3eed]:before{content:"\\e62f"}.uicon-empty-car[data-v-0f4c3eed]:before{content:"\\e602"}.uicon-empty-order[data-v-0f4c3eed]:before{content:"\\e639"}.uicon-empty-address[data-v-0f4c3eed]:before{content:"\\e646"}.uicon-empty-message[data-v-0f4c3eed]:before{content:"\\e6a9"}.uicon-empty-search[data-v-0f4c3eed]:before{content:"\\e664"}.uicon-empty-favor[data-v-0f4c3eed]:before{content:"\\e67c"}.uicon-empty-coupon[data-v-0f4c3eed]:before{content:"\\e682"}.uicon-empty-history[data-v-0f4c3eed]:before{content:"\\e684"}.uicon-empty-permission[data-v-0f4c3eed]:before{content:"\\e686"}.uicon-empty-news[data-v-0f4c3eed]:before{content:"\\e687"}.uicon-empty-wifi[data-v-0f4c3eed]:before{content:"\\e688"}.uicon-empty-list[data-v-0f4c3eed]:before{content:"\\e68b"}.uicon-arrow-left-double[data-v-0f4c3eed]:before{content:"\\e68c"}.uicon-arrow-right-double[data-v-0f4c3eed]:before{content:"\\e68d"}.uicon-red-packet[data-v-0f4c3eed]:before{content:"\\e691"}.uicon-red-packet-fill[data-v-0f4c3eed]:before{content:"\\e690"}.uicon-order[data-v-0f4c3eed]:before{content:"\\e68f"}.uicon-nav-back-arrow[data-v-0f4c3eed]:before{content:"\\e67f"}.uicon-nav-back[data-v-0f4c3eed]:before{content:"\\e683"}.uicon-checkbox-mark[data-v-0f4c3eed]:before{content:"\\e6a8"}.uicon-arrow-up-fill[data-v-0f4c3eed]:before{content:"\\e6b0"}.uicon-arrow-down-fill[data-v-0f4c3eed]:before{content:"\\e600"}.uicon-backspace[data-v-0f4c3eed]:before{content:"\\e67b"}.uicon-android-circle-fill[data-v-0f4c3eed]:before{content:"\\e67e"}.uicon-android-fill[data-v-0f4c3eed]:before{content:"\\e67d"}.uicon-question[data-v-0f4c3eed]:before{content:"\\e715"}.uicon-pause[data-v-0f4c3eed]:before{content:"\\e8fa"}.uicon-close[data-v-0f4c3eed]:before{content:"\\e685"}.uicon-volume-up[data-v-0f4c3eed]:before{content:"\\e633"}.uicon-volume-off[data-v-0f4c3eed]:before{content:"\\e644"}.uicon-info[data-v-0f4c3eed]:before{content:"\\e653"}.uicon-error[data-v-0f4c3eed]:before{content:"\\e6d3"}.uicon-lock-opened-fill[data-v-0f4c3eed]:before{content:"\\e974"}.uicon-lock-fill[data-v-0f4c3eed]:before{content:"\\e979"}.uicon-lock[data-v-0f4c3eed]:before{content:"\\e97a"}.uicon-photo-fill[data-v-0f4c3eed]:before{content:"\\e98b"}.uicon-photo[data-v-0f4c3eed]:before{content:"\\e98d"}.uicon-account-fill[data-v-0f4c3eed]:before{content:"\\e614"}.uicon-minus-people-fill[data-v-0f4c3eed]:before{content:"\\e615"}.uicon-plus-people-fill[data-v-0f4c3eed]:before{content:"\\e626"}.uicon-account[data-v-0f4c3eed]:before{content:"\\e628"}.uicon-thumb-down-fill[data-v-0f4c3eed]:before{content:"\\e726"}.uicon-thumb-down[data-v-0f4c3eed]:before{content:"\\e727"}.uicon-thumb-up-fill[data-v-0f4c3eed]:before{content:"\\e72f"}.uicon-thumb-up[data-v-0f4c3eed]:before{content:"\\e733"}.uicon-person-delete-fill[data-v-0f4c3eed]:before{content:"\\e66a"}.uicon-cut[data-v-0f4c3eed]:before{content:"\\e948"}.uicon-fingerprint[data-v-0f4c3eed]:before{content:"\\e955"}.uicon-home-fill[data-v-0f4c3eed]:before{content:"\\e964"}.uicon-home[data-v-0f4c3eed]:before{content:"\\e965"}.uicon-hourglass-half-fill[data-v-0f4c3eed]:before{content:"\\e966"}.uicon-hourglass[data-v-0f4c3eed]:before{content:"\\e967"}.uicon-lock-open[data-v-0f4c3eed]:before{content:"\\e973"}.uicon-integral-fill[data-v-0f4c3eed]:before{content:"\\e703"}.uicon-integral[data-v-0f4c3eed]:before{content:"\\e704"}.uicon-coupon[data-v-0f4c3eed]:before{content:"\\e8ae"}.uicon-coupon-fill[data-v-0f4c3eed]:before{content:"\\e8c4"}.uicon-kefu-ermai[data-v-0f4c3eed]:before{content:"\\e656"}.uicon-scan[data-v-0f4c3eed]:before{content:"\\e662"}.uicon-rmb[data-v-0f4c3eed]:before{content:"\\e608"}.uicon-rmb-circle-fill[data-v-0f4c3eed]:before{content:"\\e657"}.uicon-rmb-circle[data-v-0f4c3eed]:before{content:"\\e677"}.uicon-gift[data-v-0f4c3eed]:before{content:"\\e65b"}.uicon-gift-fill[data-v-0f4c3eed]:before{content:"\\e65c"}.uicon-bookmark-fill[data-v-0f4c3eed]:before{content:"\\e63b"}.uicon-zhuanfa[data-v-0f4c3eed]:before{content:"\\e60b"}.uicon-eye-off-outline[data-v-0f4c3eed]:before{content:"\\e62b"}.uicon-eye-off[data-v-0f4c3eed]:before{content:"\\e648"}.uicon-pause-circle[data-v-0f4c3eed]:before{content:"\\e643"}.uicon-play-circle[data-v-0f4c3eed]:before{content:"\\e647"}.uicon-pause-circle-fill[data-v-0f4c3eed]:before{content:"\\e654"}.uicon-play-circle-fill[data-v-0f4c3eed]:before{content:"\\e655"}.uicon-grid[data-v-0f4c3eed]:before{content:"\\e673"}.uicon-play-right[data-v-0f4c3eed]:before{content:"\\e610"}.uicon-play-left[data-v-0f4c3eed]:before{content:"\\e66d"}.uicon-calendar[data-v-0f4c3eed]:before{content:"\\e66e"}.uicon-rewind-right[data-v-0f4c3eed]:before{content:"\\e66f"}.uicon-rewind-left[data-v-0f4c3eed]:before{content:"\\e671"}.uicon-skip-forward-right[data-v-0f4c3eed]:before{content:"\\e672"}.uicon-skip-back-left[data-v-0f4c3eed]:before{content:"\\e674"}.uicon-play-left-fill[data-v-0f4c3eed]:before{content:"\\e675"}.uicon-play-right-fill[data-v-0f4c3eed]:before{content:"\\e676"}.uicon-grid-fill[data-v-0f4c3eed]:before{content:"\\e678"}.uicon-rewind-left-fill[data-v-0f4c3eed]:before{content:"\\e679"}.uicon-rewind-right-fill[data-v-0f4c3eed]:before{content:"\\e67a"}.uicon-pushpin[data-v-0f4c3eed]:before{content:"\\e7e3"}.uicon-star[data-v-0f4c3eed]:before{content:"\\e65f"}.uicon-star-fill[data-v-0f4c3eed]:before{content:"\\e669"}.uicon-server-fill[data-v-0f4c3eed]:before{content:"\\e751"}.uicon-server-man[data-v-0f4c3eed]:before{content:"\\e6bc"}.uicon-edit-pen[data-v-0f4c3eed]:before{content:"\\e612"}.uicon-edit-pen-fill[data-v-0f4c3eed]:before{content:"\\e66b"}.uicon-wifi[data-v-0f4c3eed]:before{content:"\\e667"}.uicon-wifi-off[data-v-0f4c3eed]:before{content:"\\e668"}.uicon-file-text[data-v-0f4c3eed]:before{content:"\\e663"}.uicon-file-text-fill[data-v-0f4c3eed]:before{content:"\\e665"}.uicon-more-dot-fill[data-v-0f4c3eed]:before{content:"\\e630"}.uicon-minus[data-v-0f4c3eed]:before{content:"\\e618"}.uicon-minus-circle[data-v-0f4c3eed]:before{content:"\\e61b"}.uicon-plus[data-v-0f4c3eed]:before{content:"\\e62d"}.uicon-plus-circle[data-v-0f4c3eed]:before{content:"\\e62e"}.uicon-minus-circle-fill[data-v-0f4c3eed]:before{content:"\\e652"}.uicon-plus-circle-fill[data-v-0f4c3eed]:before{content:"\\e661"}.uicon-email[data-v-0f4c3eed]:before{content:"\\e611"}.uicon-email-fill[data-v-0f4c3eed]:before{content:"\\e642"}.uicon-phone[data-v-0f4c3eed]:before{content:"\\e622"}.uicon-phone-fill[data-v-0f4c3eed]:before{content:"\\e64f"}.uicon-clock[data-v-0f4c3eed]:before{content:"\\e60f"}.uicon-car[data-v-0f4c3eed]:before{content:"\\e60c"}.uicon-car-fill[data-v-0f4c3eed]:before{content:"\\e636"}.uicon-warning[data-v-0f4c3eed]:before{content:"\\e694"}.uicon-warning-fill[data-v-0f4c3eed]:before{content:"\\e64d"}.uicon-search[data-v-0f4c3eed]:before{content:"\\e62a"}.uicon-baidu-circle-fill[data-v-0f4c3eed]:before{content:"\\e680"}.uicon-baidu[data-v-0f4c3eed]:before{content:"\\e681"}.uicon-facebook[data-v-0f4c3eed]:before{content:"\\e689"}.uicon-facebook-circle-fill[data-v-0f4c3eed]:before{content:"\\e68a"}.uicon-qzone[data-v-0f4c3eed]:before{content:"\\e695"}.uicon-qzone-circle-fill[data-v-0f4c3eed]:before{content:"\\e696"}.uicon-moments-circel-fill[data-v-0f4c3eed]:before{content:"\\e69a"}.uicon-moments[data-v-0f4c3eed]:before{content:"\\e69b"}.uicon-qq-circle-fill[data-v-0f4c3eed]:before{content:"\\e6a0"}.uicon-qq-fill[data-v-0f4c3eed]:before{content:"\\e6a1"}.uicon-weibo[data-v-0f4c3eed]:before{content:"\\e6a4"}.uicon-weibo-circle-fill[data-v-0f4c3eed]:before{content:"\\e6a5"}.uicon-taobao[data-v-0f4c3eed]:before{content:"\\e6a6"}.uicon-taobao-circle-fill[data-v-0f4c3eed]:before{content:"\\e6a7"}.uicon-twitter[data-v-0f4c3eed]:before{content:"\\e6aa"}.uicon-twitter-circle-fill[data-v-0f4c3eed]:before{content:"\\e6ab"}.uicon-weixin-circle-fill[data-v-0f4c3eed]:before{content:"\\e6b1"}.uicon-weixin-fill[data-v-0f4c3eed]:before{content:"\\e6b2"}.uicon-zhifubao-circle-fill[data-v-0f4c3eed]:before{content:"\\e6b8"}.uicon-zhifubao[data-v-0f4c3eed]:before{content:"\\e6b9"}.uicon-zhihu[data-v-0f4c3eed]:before{content:"\\e6ba"}.uicon-zhihu-circle-fill[data-v-0f4c3eed]:before{content:"\\e709"}.uicon-list[data-v-0f4c3eed]:before{content:"\\e650"}.uicon-list-dot[data-v-0f4c3eed]:before{content:"\\e616"}.uicon-setting[data-v-0f4c3eed]:before{content:"\\e61f"}.uicon-bell[data-v-0f4c3eed]:before{content:"\\e609"}.uicon-bell-fill[data-v-0f4c3eed]:before{content:"\\e640"}.uicon-attach[data-v-0f4c3eed]:before{content:"\\e632"}.uicon-shopping-cart[data-v-0f4c3eed]:before{content:"\\e621"}.uicon-shopping-cart-fill[data-v-0f4c3eed]:before{content:"\\e65d"}.uicon-tags[data-v-0f4c3eed]:before{content:"\\e629"}.uicon-share[data-v-0f4c3eed]:before{content:"\\e631"}.uicon-question-circle-fill[data-v-0f4c3eed]:before{content:"\\e666"}.uicon-question-circle[data-v-0f4c3eed]:before{content:"\\e625"}.uicon-error-circle[data-v-0f4c3eed]:before{content:"\\e624"}.uicon-checkmark-circle[data-v-0f4c3eed]:before{content:"\\e63d"}.uicon-close-circle[data-v-0f4c3eed]:before{content:"\\e63f"}.uicon-info-circle[data-v-0f4c3eed]:before{content:"\\e660"}.uicon-md-person-add[data-v-0f4c3eed]:before{content:"\\e6e4"}.uicon-md-person-fill[data-v-0f4c3eed]:before{content:"\\e6ea"}.uicon-bag-fill[data-v-0f4c3eed]:before{content:"\\e617"}.uicon-bag[data-v-0f4c3eed]:before{content:"\\e619"}.uicon-chat-fill[data-v-0f4c3eed]:before{content:"\\e61e"}.uicon-chat[data-v-0f4c3eed]:before{content:"\\e620"}.uicon-more-circle[data-v-0f4c3eed]:before{content:"\\e63e"}.uicon-more-circle-fill[data-v-0f4c3eed]:before{content:"\\e645"}.uicon-volume[data-v-0f4c3eed]:before{content:"\\e66c"}.uicon-volume-fill[data-v-0f4c3eed]:before{content:"\\e670"}.uicon-reload[data-v-0f4c3eed]:before{content:"\\e788"}.uicon-camera[data-v-0f4c3eed]:before{content:"\\e7d7"}.uicon-heart[data-v-0f4c3eed]:before{content:"\\e7df"}.uicon-heart-fill[data-v-0f4c3eed]:before{content:"\\e851"}.uicon-minus-square-fill[data-v-0f4c3eed]:before{content:"\\e855"}.uicon-plus-square-fill[data-v-0f4c3eed]:before{content:"\\e856"}.uicon-pushpin-fill[data-v-0f4c3eed]:before{content:"\\e86e"}.uicon-camera-fill[data-v-0f4c3eed]:before{content:"\\e870"}.uicon-setting-fill[data-v-0f4c3eed]:before{content:"\\e872"}.uicon-google[data-v-0f4c3eed]:before{content:"\\e87a"}.uicon-ie[data-v-0f4c3eed]:before{content:"\\e87b"}.uicon-apple-fill[data-v-0f4c3eed]:before{content:"\\e881"}.uicon-chrome-circle-fill[data-v-0f4c3eed]:before{content:"\\e885"}.uicon-github-circle-fill[data-v-0f4c3eed]:before{content:"\\e887"}.uicon-IE-circle-fill[data-v-0f4c3eed]:before{content:"\\e889"}.uicon-google-circle-fill[data-v-0f4c3eed]:before{content:"\\e88a"}.uicon-arrow-down[data-v-0f4c3eed]:before{content:"\\e60d"}.uicon-arrow-left[data-v-0f4c3eed]:before{content:"\\e60e"}.uicon-map[data-v-0f4c3eed]:before{content:"\\e61d"}.uicon-man-add-fill[data-v-0f4c3eed]:before{content:"\\e64c"}.uicon-tags-fill[data-v-0f4c3eed]:before{content:"\\e651"}.uicon-arrow-leftward[data-v-0f4c3eed]:before{content:"\\e601"}.uicon-arrow-rightward[data-v-0f4c3eed]:before{content:"\\e603"}.uicon-arrow-downward[data-v-0f4c3eed]:before{content:"\\e604"}.uicon-arrow-right[data-v-0f4c3eed]:before{content:"\\e605"}.uicon-arrow-up[data-v-0f4c3eed]:before{content:"\\e606"}.uicon-arrow-upward[data-v-0f4c3eed]:before{content:"\\e607"}.uicon-bookmark[data-v-0f4c3eed]:before{content:"\\e60a"}.uicon-eye[data-v-0f4c3eed]:before{content:"\\e613"}.uicon-man-delete[data-v-0f4c3eed]:before{content:"\\e61a"}.uicon-man-add[data-v-0f4c3eed]:before{content:"\\e61c"}.uicon-trash[data-v-0f4c3eed]:before{content:"\\e623"}.uicon-error-circle-fill[data-v-0f4c3eed]:before{content:"\\e62c"}.uicon-calendar-fill[data-v-0f4c3eed]:before{content:"\\e634"}.uicon-checkmark-circle-fill[data-v-0f4c3eed]:before{content:"\\e635"}.uicon-close-circle-fill[data-v-0f4c3eed]:before{content:"\\e637"}.uicon-clock-fill[data-v-0f4c3eed]:before{content:"\\e638"}.uicon-checkmark[data-v-0f4c3eed]:before{content:"\\e63a"}.uicon-download[data-v-0f4c3eed]:before{content:"\\e63c"}.uicon-eye-fill[data-v-0f4c3eed]:before{content:"\\e641"}.uicon-mic-off[data-v-0f4c3eed]:before{content:"\\e649"}.uicon-mic[data-v-0f4c3eed]:before{content:"\\e64a"}.uicon-info-circle-fill[data-v-0f4c3eed]:before{content:"\\e64b"}.uicon-map-fill[data-v-0f4c3eed]:before{content:"\\e64e"}.uicon-trash-fill[data-v-0f4c3eed]:before{content:"\\e658"}.uicon-volume-off-fill[data-v-0f4c3eed]:before{content:"\\e659"}.uicon-volume-up-fill[data-v-0f4c3eed]:before{content:"\\e65a"}.uicon-share-fill[data-v-0f4c3eed]:before{content:"\\e65e"}.u-icon[data-v-0f4c3eed]{display:inline-flex;align-items:center}.u-icon--left[data-v-0f4c3eed]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-0f4c3eed]{flex-direction:row;align-items:center}.u-icon--top[data-v-0f4c3eed]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-0f4c3eed]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-0f4c3eed]{position:relative}.u-icon__icon--primary[data-v-0f4c3eed]{color:#2979ff}.u-icon__icon--success[data-v-0f4c3eed]{color:#19be6b}.u-icon__icon--error[data-v-0f4c3eed]{color:#fa3534}.u-icon__icon--warning[data-v-0f4c3eed]{color:#f90}.u-icon__icon--info[data-v-0f4c3eed]{color:#909399}.u-icon__decimal[data-v-0f4c3eed]{position:absolute;top:0;left:0;display:inline-block;overflow:hidden}.u-icon__img[data-v-0f4c3eed]{height:auto;will-change:transform}.u-icon__label[data-v-0f4c3eed]{line-height:1}', ""]),
        e.exports = t
    },
    e413: function(e, t, n) {
        "use strict";
        n("cb29"),
        n("4160"),
        n("c975"),
        n("d3b7"),
        n("ac1f"),
        n("1276"),
        n("159b"),
        n("ddb0"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            GameCanvas: function(e) {
                var t = this;
                console.log(e);
                var n = this;
                this.functions = [],
                this.keys = [],
                this.images = [],
                this.spheres = [],
                this.font = "Arial",
                this.imageData = void 0,
                this.imageDataData = void 0,
                this.lastLoop = performance.now(),
                this.calculateFPS = !0,
                this.fps = -1,
                this.deltaTime = 1;
                var i = ["left", "middle", "right"];
                this.contextMenuDisabled = !1,
                this.disableScrollOnMobile = !1,
                this.eventFunctions = {
                    mousedown: "undefined" !== typeof OnMouseDown,
                    mouseup: "undefined" !== typeof OnMouseUp,
                    mousemove: "undefined" !== typeof OnMouseMove,
                    contextmenu: "undefined" !== typeof OnContextMenu,
                    touchstart: "undefined" !== typeof OnTouchStart,
                    touchend: "undefined" !== typeof OnTouchEnd,
                    touchmove: "undefined" !== typeof OnTouchMove
                },
                this.audioContext = new (window.AudioContext || window.webkitAudioContext),
                this.createCanvas = function() {
                    var e = document.createElement("canvas");
                    return document.body.appendChild(e),
                    e
                }
                ,
                this.setSize = function(e, t) {
                    n.canvas ? (n.canvas.width = n.width = e,
                    n.canvas.height = n.height = t,
                    window.width = this.width,
                    window.height = this.height) : console.error("There is no canvas!")
                }
                ,
                this.fillPageWithCanvas = function() {
                    n.canvas.style.position = "fixed",
                    n.canvas.style.top = "0px",
                    n.canvas.style.left = "0px",
                    n.setSize(window.innerWidth, window.innerHeight),
                    n.disableScrollOnMobile = !0,
                    n.contextMenuDisabled = !0,
                    this.updateSizeOnResize = !0
                }
                ,
                this.requestFullscreen = function() {
                    n.canvas.requestFullscreen ? n.canvas.requestFullscreen() : n.canvas.mozRequestFullScreen ? n.canvas.mozRequestFullScreen() : n.canvas.webkitRequestFullscreen ? n.canvas.webkitRequestFullscreen() : n.canvas.msRequestFullscreen && n.canvas.msRequestFullscreen()
                }
                ,
                this.exitFullscreen = function() {
                    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                }
                ,
                this.lockPointer = function() {
                    n.canvas.requestPointerLock = n.canvas.requestPointerLock || n.canvas.mozRequestPointerLock,
                    n.canvas.requestPointerLock()
                }
                ,
                this.unlockPointer = function() {
                    document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock,
                    document.exitPointerLock()
                }
                ,
                this.disableContextMenu = function() {
                    n.contextMenuDisabled = !0
                }
                ,
                this.enableContextMenu = function() {
                    n.contextMenuDisabled = !1
                }
                ,
                this.key = function(e) {
                    return n.keys[e]
                }
                ,
                this.update = function() {
                    if (n.calculateFPS) {
                        var e = performance.now();
                        n.fps = 1e3 / (e - n.lastLoop),
                        n.deltaTime = 60 / n.fps,
                        n.lastLoop = e,
                        n.globalFunctions && (window.fps = n.fps,
                        window.deltaTime = n.deltaTime)
                    }
                    n.mouse.movementX = 0,
                    n.mouse.movementY = 0,
                    n.mouse.lastX = n.mouse.x,
                    n.mouse.lastY = n.mouse.y
                }
                ,
                this.clearScreen = function() {
                    n.ctx.clearRect(0, 0, n.width, n.height)
                }
                ,
                this.background = function(e) {
                    n.ctx.fillStyle = e,
                    n.ctx.fillRect(0, 0, n.width, n.height)
                }
                ,
                this.circle = function(e, t, i, o, a, c) {
                    n.ctx.beginPath(),
                    n.ctx.arc(e, t, i, 0, 2 * Math.PI),
                    n.ctx.fillStyle = o,
                    a && (n.ctx.strokeStyle = a),
                    c && (n.ctx.lineWidth = c),
                    n.ctx.fill(),
                    a && n.ctx.stroke()
                }
                ,
                this.ring = function(e, t, i, o, a) {
                    n.ctx.beginPath(),
                    n.ctx.arc(e, t, i, 0, 2 * Math.PI),
                    n.ctx.strokeStyle = o,
                    a && (n.ctx.lineWidth = a),
                    n.ctx.stroke()
                }
                ,
                this.ellipse = function(e, t, i, o, a) {
                    var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0
                      , r = arguments.length > 6 ? arguments[6] : void 0
                      , s = arguments.length > 7 ? arguments[7] : void 0;
                    n.ctx.beginPath(),
                    n.ctx.ellipse(e, t, i, o, c, 0, 2 * Math.PI),
                    n.ctx.fillStyle = a,
                    r && (n.ctx.strokeStyle = r),
                    s && (n.ctx.lineWidth = s),
                    n.ctx.fill(),
                    r && n.ctx.stroke()
                }
                ,
                this.rectangle = function(e, t, i, o, a, c, r) {
                    n.ctx.fillStyle = a,
                    r && (n.ctx.lineWidth = r),
                    c ? (n.ctx.beginPath(),
                    n.ctx.strokeStyle = c,
                    n.ctx.rect(e, t, i, o),
                    n.ctx.fill(),
                    n.ctx.stroke()) : n.ctx.fillRect(e, t, i, o)
                }
                ,
                this.triangle = function(e, t, i, o, a, c, r, s, u) {
                    n.ctx.beginPath(),
                    n.ctx.moveTo(e, t),
                    n.ctx.lineTo(i, o),
                    n.ctx.lineTo(a, c),
                    n.ctx.closePath(),
                    n.ctx.fillStyle = r,
                    u && (n.ctx.lineWidth = u),
                    n.ctx.fill(),
                    s && (n.ctx.strokeStyle = s,
                    n.ctx.stroke())
                }
                ,
                this.setLineCap = function(e) {
                    n.ctx.lineCap = e
                }
                ,
                this.resetLineCap = function() {
                    n.ctx.lineCap = "butt"
                }
                ,
                this.line = function(e, t, i, o, a, c) {
                    n.ctx.beginPath(),
                    n.ctx.moveTo(e, t),
                    n.ctx.lineTo(i, o),
                    c && (n.ctx.strokeStyle = c),
                    a && (n.ctx.lineWidth = a),
                    n.ctx.stroke()
                }
                ,
                this.picture = function(e, t, i, o, a) {
                    var c = n.images[e];
                    if (c)
                        c.complete && n.ctx.drawImage(c, t, i, o, a);
                    else {
                        var r = new Image;
                        r.src = e,
                        r.onload = function() {
                            n.ctx.drawImage(r, t, i, o, a)
                        }
                        ,
                        n.images[e] = r
                    }
                }
                ,
                this.setFont = function(e) {
                    n.font = e
                }
                ,
                this.setTextAlign = function(e) {
                    n.ctx.textAlign = e
                }
                ,
                this.setTextXAlign = function(e) {
                    n.ctx.textAlign = e
                }
                ,
                this.setTextYAlign = function(e) {
                    n.ctx.textBaseline = e
                }
                ,
                this.resetTextXAlign = function() {
                    n.ctx.textAlign = "left"
                }
                ,
                this.resetTextYAlign = function() {
                    n.ctx.textBaseline = "alphabetic"
                }
                ,
                this.text = function(e, t, i, o, a, c, r) {
                    n.ctx.beginPath(),
                    n.ctx.font = o + "px " + n.font,
                    n.ctx.fillStyle = a,
                    r && (n.ctx.lineWidth = r),
                    n.ctx.fillText(e, t, i),
                    c && (n.ctx.strokeStyle = c,
                    n.ctx.strokeText(e, t, i))
                }
                ,
                this.getPixelData = function() {
                    n.imageData = n.ctx.getImageData(0, 0, n.width, n.height),
                    n.imageDataData = n.imageData.data
                }
                ,
                this.updatePixel = function(e, t, i, o, a) {
                    var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 255
                      , r = 4 * (e + t * n.width);
                    n.imageDataData[r] = i,
                    n.imageDataData[r + 1] = o,
                    n.imageDataData[r + 2] = a,
                    n.imageDataData[r + 3] = c
                }
                ,
                this.updatePixelIndex = function(e, t, i, o) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 255
                      , c = 4 * e;
                    n.imageDataData[c] = t,
                    n.imageDataData[c + 1] = i,
                    n.imageDataData[c + 2] = o,
                    n.imageDataData[c + 3] = a
                }
                ,
                this.getPixel = function(e, t) {
                    var i = 4 * (e + t * n.width);
                    return [n.imageDataData[i], n.imageDataData[i + 1], n.imageDataData[i + 2], n.imageDataData[i + 3]]
                }
                ,
                this.getPixelIndex = function(e) {
                    var t = 4 * e;
                    return [n.imageDataData[t], n.imageDataData[t + 1], n.imageDataData[t + 2], n.imageDataData[t + 3]]
                }
                ,
                this.renderPixelData = function() {
                    n.ctx.putImageData(n.imageData, 0, 0)
                }
                ,
                this.save = function() {
                    n.ctx.save()
                }
                ,
                this.restore = function() {
                    n.ctx.restore()
                }
                ,
                this.rotate = function(e) {
                    n.ctx.rotate(e)
                }
                ,
                this.translate = function(e, t) {
                    n.ctx.translate(e, t)
                }
                ,
                this.beginPath = function() {
                    n.ctx.beginPath()
                }
                ,
                this.closePath = function() {
                    n.ctx.closePath()
                }
                ,
                this.moveTo = function(e, t) {
                    n.ctx.moveTo(e, t)
                }
                ,
                this.lineTo = function(e, t) {
                    n.ctx.lineTo(e, t)
                }
                ,
                this.fill = function() {
                    n.ctx.fill()
                }
                ,
                this.stroke = function() {
                    n.ctx.stroke()
                }
                ,
                this.fillStyle = function(e) {
                    n.ctx.fillStyle = e
                }
                ,
                this.strokeStyle = function(e) {
                    n.ctx.strokeStyle = e
                }
                ,
                this.setLineWidth = function(e) {
                    n.ctx.lineWidth = e
                }
                ,
                this.drawSphere = function(e, t, i, o) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        x: 0,
                        y: 0,
                        z: 1
                    }
                      , c = (e + t) * i * (o[0] + 1) * (o[1] + 1) * (o[2] + 1) * (a.x + 1) * (a.y + 1) * (a.z + 1);
                    if (n.spheres[c])
                        n.spheres[c].imageData ? n.ctx.putImageData(n.spheres[c].imageData, e - i, t - i) : n.spheres[c].image && n.ctx.drawImage(n.spheres[c].image, e - i, t - i);
                    else {
                        for (var r = n.ctx.createImageData(2 * i, 2 * i), s = 0; s < 2 * i; s++)
                            for (var u = 0; u < 2 * i; u++) {
                                var d = {
                                    origin: {
                                        x: u,
                                        y: s,
                                        z: 0
                                    },
                                    direction: {
                                        x: 0,
                                        y: 0,
                                        z: 1
                                    }
                                }
                                  , l = {
                                    position: {
                                        x: i,
                                        y: i,
                                        z: 2 * i
                                    }
                                }
                                  , f = {
                                    x: d.origin.x - l.position.x,
                                    y: d.origin.y - l.position.y,
                                    z: d.origin.z - l.position.z
                                }
                                  , h = n.dot3D(d.direction, f)
                                  , m = n.getLength(f.x, f.y, f.z)
                                  , v = h * h - (m * m - i * i);
                                if (v >= 0) {
                                    var p = -h - Math.sqrt(v);
                                    if (p > 0) {
                                        var b = {
                                            x: d.origin.x + d.direction.x * p,
                                            y: d.origin.y + d.direction.y * p,
                                            z: d.origin.z + d.direction.z * p
                                        }
                                          , g = n.normalize3DVector({
                                            x: l.position.x - b.x,
                                            y: l.position.y - b.y,
                                            z: l.position.z - b.z
                                        })
                                          , w = n.dot3D(a, g)
                                          , y = 4 * (u + s * i * 2);
                                        r.data[y] = o[0] * w,
                                        r.data[y + 1] = o[1] * w,
                                        r.data[y + 2] = o[2] * w,
                                        r.data[y + 3] = 255
                                    }
                                }
                            }
                        window.createImageBitmap ? (n.spheres[c] = {
                            imageData: void 0,
                            image: void 0
                        },
                        createImageBitmap(r).then((function(o) {
                            n.ctx.drawImage(o, e - i, t - i),
                            n.spheres[c] = {
                                imageData: void 0,
                                image: o
                            }
                        }
                        ))) : (n.ctx.putImageData(r, e - i, t - i),
                        n.spheres[c] = {
                            imageData: r,
                            image: void 0
                        })
                    }
                }
                ,
                this.createSound = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , o = new Audio(e);
                    return o.loop = i,
                    o.currentTime = n,
                    o.volume = t,
                    {
                        volume: t,
                        startTime: n,
                        audio: o
                    }
                }
                ,
                this.playSound = function(e) {
                    e.audio.currentTime = e.startTime,
                    e.audio.volume = e.volume,
                    e.audio.play()
                }
                ,
                this.stopSound = function(e) {
                    e.audio.stop()
                }
                ,
                this.pauseSound = function(e) {
                    e.audio.pause()
                }
                ,
                this.backgroundMusic = function(e) {
                    var t = new Audio(e);
                    return t.loop = !0,
                    t.play(),
                    t
                }
                ,
                this.fadeOutSound = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                      , n = e.volume
                      , i = 0
                      , o = setInterval((function() {
                        e.audio.volume = n / (20 * t) * (20 * t - i),
                        i++,
                        i > 20 * t && (e.audio.pause(),
                        clearInterval(o))
                    }
                    ), 50)
                }
                ,
                this.playTone = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 440
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "sine"
                      , a = n.audioContext.createOscillator()
                      , c = n.audioContext.createGain();
                    c.gain.value = i,
                    c.connect(n.audioContext.destination),
                    a.type = o,
                    a.frequency.value = e,
                    a.connect(c),
                    a.start(),
                    setTimeout((function() {
                        a.stop()
                    }
                    ), 1e3 * t)
                }
                ,
                this.DegToRad = Math.PI / 180,
                this.RadToDeg = 180 / Math.PI,
                this.PI = Math.PI,
                this.TWO_PI = 2 * Math.PI,
                this.TAU = this.TWO_PI,
                this.getDistanceSqr = function(e, t, n, i) {
                    var o = e - n
                      , a = t - i;
                    return o * o + a * a
                }
                ,
                this.getDistanceSqr3D = function(e, t, n, i, o, a) {
                    var c = e - n
                      , r = t - i
                      , s = o - a;
                    return c * c + r * r + s * s
                }
                ,
                this.getDistance = function(e, t, i, o) {
                    return Math.sqrt(n.getDistanceSqr(e, t, i, o))
                }
                ,
                this.getDistance3D = function(e, t, i, o, a, c) {
                    return Math.sqrt(n.getDistanceSqr3D(e, t, i, o, a, c))
                }
                ,
                this.getAngle = function(e, t, n, i) {
                    return Math.atan2(i - t, n - e)
                }
                ,
                this.normalize = function(e, t) {
                    var n = Math.sqrt(e * e + t * t);
                    return {
                        x: e / n,
                        y: t / n
                    }
                }
                ,
                this.normalize3D = function(e, t, n) {
                    var i = Math.sqrt(e * e + t * t + n * n);
                    return {
                        x: e / i,
                        y: t / i,
                        z: n / i
                    }
                }
                ,
                this.normalize3DVector = function(e) {
                    var t = Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
                    return {
                        x: e.x / t,
                        y: e.y / t,
                        z: e.z / t
                    }
                }
                ,
                this.lengthVector = function(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y)
                }
                ,
                this.length3DVector = function(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z)
                }
                ,
                this.getLength = function() {
                    for (var e = 0, t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        e += n * n
                    }
                    return Math.sqrt(e)
                }
                ,
                this.dot = function(e, t) {
                    return e.x * t.x + e.y * t.y
                }
                ,
                this.dot3D = function(e, t) {
                    return e.x * t.x + e.y * t.y + e.z * t.z
                }
                ,
                this.crossProduct3D = function(e, t) {
                    return {
                        x: e.y * t.z - e.z * t.y,
                        y: e.z * t.x - e.x * t.z,
                        z: e.x * t.y - e.y * t.x
                    }
                }
                ,
                this.rectanglesIntersect = function(e, t, n, i, o, a, c, r) {
                    return e + n > o && e < o + c && t + i > a && t < a + r
                }
                ,
                this.circlesIntersect = function(e, t, i, o, a, c) {
                    return n.getDistance(e, t, o, a) < i + c
                }
                ,
                this.circleRectangleIntersect = function(e, t, n, i, o, a, c) {
                    var r = Math.abs(e - (i + a / 2))
                      , s = Math.abs(t - (o + c / 2));
                    if (r > a / 2 + n)
                        return !1;
                    if (s > c / 2 + n)
                        return !1;
                    if (r <= a / 2)
                        return !0;
                    if (s <= c / 2)
                        return !0;
                    var u = r - a / 2
                      , d = s - c / 2
                      , l = u * u + d * d;
                    return l <= n * n
                }
                ,
                this.random = function(e) {
                    return Math.random() * e
                }
                ,
                this.randomInt = function(e) {
                    return Math.random() * e >> 0
                }
                ,
                this.randomArray = function(e) {
                    return e[Math.random() * e.length >> 0]
                }
                ,
                this.randomColor = function(e) {
                    if (e) {
                        var t = 256 / e
                          , n = Math.ceil((256 * Math.random() >> 0) / t) * t
                          , i = Math.ceil((256 * Math.random() >> 0) / t) * t
                          , o = Math.ceil((256 * Math.random() >> 0) / t) * t;
                        return "rgb(" + n + "," + i + "," + o + ")"
                    }
                    return "rgb(" + (256 * Math.random() >> 0) + "," + (256 * Math.random() >> 0) + "," + (256 * Math.random() >> 0) + ")"
                }
                ,
                this.create2DArray = function(e, t) {
                    for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
                        return 0
                    }
                    , i = new Array(e), o = 0; o < e; o++) {
                        i[o] = new Array(t);
                        for (var a = 0; a < t; a++)
                            i[o][a] = n(o, a)
                    }
                    return i
                }
                ,
                this.canvasToURL = function() {
                    return n.canvas.toDataURL()
                }
                ,
                this.canvasToImage = function() {
                    var e = new Image;
                    return e.src = n.canvas.toDataURL(),
                    e
                }
                ,
                this.saveToFile = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "canvas.png"
                      , t = document.createElement("a");
                    t.download = e,
                    t.href = n.canvas.toDataURL(),
                    t.click()
                }
                ,
                this.setCookie = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 36500
                      , i = new Date;
                    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                    var o = "expires=" + i.toUTCString();
                    document.cookie = e + "=" + t + ";" + o + ";path=/"
                }
                ,
                this.getCookie = function(e) {
                    if (0 == e.length)
                        return !1;
                    for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                        var o = n[i]
                          , a = o.indexOf(t);
                        if (a > 0)
                            return o.substr(a + t.length)
                    }
                    return !1
                }
                ,
                this.deleteCookie = function(e) {
                    document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"
                }
                ,
                navigator.getBattery && navigator.getBattery().then((function(e) {
                    e.addEventListener("levelchange", (function() {
                        n.batteryLevel = 100 * e.level
                    }
                    )),
                    n.batteryLevel = 100 * e.level
                }
                )),
                this.getBatteryLevel = function() {
                    return n.batteryLevel
                }
                ,
                this.functions = [{
                    func: this.createCanvas,
                    name: "createCanvas"
                }, {
                    func: this.setSize,
                    name: "setSize"
                }, {
                    func: this.fillPageWithCanvas,
                    name: "fillPageWithCanvas"
                }, {
                    func: this.requestFullscreen,
                    name: "requestFullscreen"
                }, {
                    func: this.exitFullscreen,
                    name: "exitFullscreen"
                }, {
                    func: this.lockPointer,
                    name: "lockPointer"
                }, {
                    func: this.unlockPointer,
                    name: "unlockPointer"
                }, {
                    func: this.disableContextMenu,
                    name: "disableContextMenu"
                }, {
                    func: this.enableContextMenu,
                    name: "enableContextMenu"
                }, {
                    func: this.key,
                    name: "key"
                }, {
                    func: this.update,
                    name: "update"
                }, {
                    func: this.clearScreen,
                    name: "clearScreen"
                }, {
                    func: this.background,
                    name: "background"
                }, {
                    func: this.circle,
                    name: "circle"
                }, {
                    func: this.ring,
                    name: "ring"
                }, {
                    func: this.ellipse,
                    name: "ellipse"
                }, {
                    func: this.rectangle,
                    name: "rectangle"
                }, {
                    func: this.triangle,
                    name: "triangle"
                }, {
                    func: this.picture,
                    name: "picture"
                }, {
                    func: this.setLineCap,
                    name: "setLineCap"
                }, {
                    func: this.resetLineCap,
                    name: "resetLineCap"
                }, {
                    func: this.line,
                    name: "line"
                }, {
                    func: this.setFont,
                    name: "setFont"
                }, {
                    func: this.setTextAlign,
                    name: "setTextAlign"
                }, {
                    func: this.setTextXAlign,
                    name: "setTextXAlign"
                }, {
                    func: this.setTextYAlign,
                    name: "setTextYAlign"
                }, {
                    func: this.resetTextXAlign,
                    name: "resetTextXAlign"
                }, {
                    func: this.resetTextYAlign,
                    name: "resetTextYAlign"
                }, {
                    func: this.text,
                    name: "text"
                }, {
                    func: this.getPixelData,
                    name: "getPixelData"
                }, {
                    func: this.updatePixel,
                    name: "updatePixel"
                }, {
                    func: this.updatePixelIndex,
                    name: "updatePixelIndex"
                }, {
                    func: this.getPixel,
                    name: "getPixel"
                }, {
                    func: this.getPixelIndex,
                    name: "getPixelIndex"
                }, {
                    func: this.renderPixelData,
                    name: "renderPixelData"
                }, {
                    func: this.save,
                    name: "save"
                }, {
                    func: this.restore,
                    name: "restore"
                }, {
                    func: this.rotate,
                    name: "rotate"
                }, {
                    func: this.translate,
                    name: "translate"
                }, {
                    func: this.beginPath,
                    name: "beginPath"
                }, {
                    func: this.closePath,
                    name: "closePath"
                }, {
                    func: this.moveTo,
                    name: "moveTo"
                }, {
                    func: this.lineTo,
                    name: "lineTo"
                }, {
                    func: this.fill,
                    name: "fill"
                }, {
                    func: this.stroke,
                    name: "stroke"
                }, {
                    func: this.fillStyle,
                    name: "fillStyle"
                }, {
                    func: this.strokeStyle,
                    name: "strokeStyle"
                }, {
                    func: this.setLineWidth,
                    name: "setLineWidth"
                }, {
                    func: this.drawSphere,
                    name: "drawSphere"
                }, {
                    func: this.createSound,
                    name: "createSound"
                }, {
                    func: this.playSound,
                    name: "playSound"
                }, {
                    func: this.stopSound,
                    name: "stopSound"
                }, {
                    func: this.pauseSound,
                    name: "pauseSound"
                }, {
                    func: this.fadeOutSound,
                    name: "fadeOutSound"
                }, {
                    func: this.playTone,
                    name: "playTone"
                }, {
                    func: this.getDistanceSqr,
                    name: "getDistanceSqr"
                }, {
                    func: this.getDistance,
                    name: "getDistance"
                }, {
                    func: this.getDistanceSqr3D,
                    name: "getDistanceSqr3D"
                }, {
                    func: this.getDistance3D,
                    name: "getDistance3D"
                }, {
                    func: this.getAngle,
                    name: "getAngle"
                }, {
                    func: this.normalize,
                    name: "normalize"
                }, {
                    func: this.normalize3D,
                    name: "normalize3D"
                }, {
                    func: this.normalize3D,
                    name: "normalize3DVector"
                }, {
                    func: this.getLength,
                    name: "getLength"
                }, {
                    func: this.dot,
                    name: "dot"
                }, {
                    func: this.dot3D,
                    name: "dot3D"
                }, {
                    func: this.crossProduct3D,
                    name: "crossProduct3D"
                }, {
                    func: this.lengthVector,
                    name: "lengthVector"
                }, {
                    func: this.length3DVector,
                    name: "length3DVector"
                }, {
                    func: this.rectanglesIntersect,
                    name: "rectanglesIntersect"
                }, {
                    func: this.circlesIntersect,
                    name: "circlesIntersect"
                }, {
                    func: this.circleRectangleIntersect,
                    name: "circleRectangleIntersect"
                }, {
                    func: this.random,
                    name: "random"
                }, {
                    func: this.randomInt,
                    name: "randomInt"
                }, {
                    func: this.randomArray,
                    name: "randomArray"
                }, {
                    func: this.randomColor,
                    name: "randomColor"
                }, {
                    func: this.create2DArray,
                    name: "create2DArray"
                }, {
                    func: this.canvasToURL,
                    name: "canvasToURL"
                }, {
                    func: this.canvasToImage,
                    name: "canvasToImage"
                }, {
                    func: this.saveToFile,
                    name: "saveToFile"
                }, {
                    func: this.setCookie,
                    name: "setCookie"
                }, {
                    func: this.getCookie,
                    name: "getCookie"
                }, {
                    func: this.deleteCookie,
                    name: "deleteCookie"
                }, {
                    func: this.getBatteryLevel,
                    name: "getBatteryLevel"
                }],
                this.variables = [{
                    variable: this.RadToDeg,
                    name: "RadToDeg"
                }, {
                    variable: this.DegToRad,
                    name: "DegToRad"
                }, {
                    variable: this.PI,
                    name: "PI"
                }, {
                    variable: this.TWO_PI,
                    name: "TWO_PI"
                }, {
                    variable: this.TAU,
                    name: "TAU"
                }],
                this.makeFunctionsGlobal = function() {
                    this.globalFunctions = !0,
                    this.functions.forEach((function(e) {
                        window[e.name] = e.func
                    }
                    )),
                    this.variables.forEach((function(e) {
                        window[e.name] = e.variable
                    }
                    )),
                    window.fps = this.fps,
                    window.deltaTime = this.deltaTime
                }
                ,
                this.settings = e,
                "undefined" === typeof this.settings ? (this.canvas = this.createCanvas(),
                this.fillPageWithCanvas(),
                this.makeFunctionsGlobal()) : ("undefined" !== typeof this.settings.canvas ? this.canvas = this.settings.canvas : (this.canvas = this.createCanvas(),
                "undefined" === typeof this.settings.width && "undefined" === typeof this.settings.height && this.fillPageWithCanvas(),
                ("undefined" === typeof this.settings.globalFunctions || "undefined" !== typeof this.settings.globalFunctions && this.settings.globalFunctions) && this.makeFunctionsGlobal()),
                "undefined" !== typeof this.settings.width && (this.width = this.settings.width,
                this.canvas.width = window.width = this.width),
                "undefined" !== typeof this.settings.height && (this.height = this.settings.height,
                this.canvas.height = window.height = this.height),
                "undefined" !== typeof this.settings.updateSizeOnResize && (this.updateSizeOnResize = this.settings.updateSizeOnResize)),
                document.addEventListener("keydown", (function(e) {
                    t.keys[e.key] = t.keys[e.keyCode] = !0
                }
                )),
                document.addEventListener("keyup", (function(e) {
                    t.keys[e.key] = t.keys[e.keyCode] = !1
                }
                )),
                this.canvas && (this.ctx = this.canvas.getContext("2d"),
                this.updateSizeOnResize && window.addEventListener("resize", (function() {
                    t.setSize(window.innerWidth, window.innerHeight)
                }
                )),
                this.mouse = {
                    x: 0,
                    y: 0,
                    lastX: 0,
                    lastY: 0,
                    movementX: 0,
                    movementY: 0,
                    left: !1,
                    middle: !1,
                    right: !1,
                    down: !1
                },
                this.touches = [],
                this.globalFunctions && (window.mouse = this.mouse,
                window.touches = this.touches),
                this.canvas.addEventListener("mousemove", (function(e) {
                    var n = t.canvas.getBoundingClientRect();
                    t.mouse.x = (e.clientX - n.left) / (n.width / t.width),
                    t.mouse.y = (e.clientY - n.top) / (n.height / t.height),
                    t.mouse.movementX = e.movementX,
                    t.mouse.movementY = e.movementY,
                    t.eventFunctions["mousemove"] && OnMouseMove(e)
                }
                )),
                this.canvas.addEventListener("mousedown", (function(e) {
                    var n = e.button;
                    n < 3 && (t.mouse[i[n]] = !0),
                    t.audioContext || (t.audioContext = new (window.AudioContext || window.webkitAudioContext)),
                    t.eventFunctions["mousedown"] && OnMouseDown(e)
                }
                )),
                this.canvas.addEventListener("mouseup", (function(e) {
                    var n = e.button;
                    n < 3 && (t.mouse[i[n]] = !1),
                    t.eventFunctions["mouseup"] && OnMouseUp(e)
                }
                )),
                this.canvas.addEventListener("contextmenu", (function(e) {
                    return t.eventFunctions["contextmenu"] && OnContextMenu(e),
                    !t.contextMenuDisabled || (e.preventDefault(),
                    !1)
                }
                )),
                this.updateTouches = function() {
                    var e = this.canvas.getBoundingClientRect();
                    this.touches = [];
                    for (var t = 0; t < event.touches.length; t++) {
                        var n = event.touches[t]
                          , i = (n.pageX - e.left) / (e.width / this.width)
                          , o = (n.pageY - e.top) / (e.height / this.height);
                        this.touches[t] = {
                            x: i,
                            y: o,
                            id: n.identifier,
                            force: n.force
                        }
                    }
                    this.globalFunctions && (window.touches = this.touches)
                }
                ,
                this.canvas.addEventListener("touchmove", (function(e) {
                    t.disableScrollOnMobile && e.preventDefault(),
                    t.updateTouches(),
                    t.mouse.x = t.touches[0].x,
                    t.mouse.y = t.touches[0].y,
                    t.eventFunctions["touchmove"] && OnTouchMove(e)
                }
                )),
                this.canvas.addEventListener("touchend", (function(e) {
                    t.disableScrollOnMobile && e.preventDefault(),
                    t.touches = [],
                    t.globalFunctions && (window.touches = t.touches),
                    t.mouse.left = !1,
                    t.eventFunctions["touchend"] && OnTouchEnd(e)
                }
                )),
                this.canvas.addEventListener("touchstart", (function(e) {
                    t.disableScrollOnMobile && e.preventDefault(),
                    t.updateTouches(),
                    t.mouse.x = t.touches[0].x,
                    t.mouse.y = t.touches[0].y,
                    t.mouse.left = !0,
                    t.audioContext || (t.audioContext = new (window.AudioContext || window.webkitAudioContext)),
                    t.eventFunctions["touchstart"] && OnTouchStart(e)
                }
                )))
            }
        };
        t.default = i
    },
    e45a: function(e, t, n) {
        "use strict";
        n("caad"),
        n("c975"),
        n("a9e3"),
        n("2532"),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = {
            name: "u-icon",
            props: {
                name: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: ""
                },
                size: {
                    type: [Number, String],
                    default: "inherit"
                },
                bold: {
                    type: Boolean,
                    default: !1
                },
                index: {
                    type: [Number, String],
                    default: ""
                },
                hoverClass: {
                    type: String,
                    default: ""
                },
                customPrefix: {
                    type: String,
                    default: "uicon"
                },
                label: {
                    type: [String, Number],
                    default: ""
                },
                labelPos: {
                    type: String,
                    default: "right"
                },
                labelSize: {
                    type: [String, Number],
                    default: "28"
                },
                labelColor: {
                    type: String,
                    default: "#606266"
                },
                marginLeft: {
                    type: [String, Number],
                    default: "6"
                },
                marginTop: {
                    type: [String, Number],
                    default: "6"
                },
                marginRight: {
                    type: [String, Number],
                    default: "6"
                },
                marginBottom: {
                    type: [String, Number],
                    default: "6"
                },
                imgMode: {
                    type: String,
                    default: "widthFix"
                },
                customStyle: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                width: {
                    type: [String, Number],
                    default: ""
                },
                height: {
                    type: [String, Number],
                    default: ""
                },
                top: {
                    type: [String, Number],
                    default: 0
                },
                showDecimalIcon: {
                    type: Boolean,
                    default: !1
                },
                inactiveColor: {
                    type: String,
                    default: "#ececec"
                },
                percent: {
                    type: [Number, String],
                    default: "50"
                }
            },
            computed: {
                customClass: function() {
                    var e = [];
                    return e.push(this.customPrefix + "-" + this.name),
                    "uicon" == this.customPrefix ? e.push("u-iconfont") : e.push(this.customPrefix),
                    this.showDecimalIcon && this.inactiveColor && this.$u.config.type.includes(this.inactiveColor) ? e.push("u-icon__icon--" + this.inactiveColor) : this.color && this.$u.config.type.includes(this.color) && e.push("u-icon__icon--" + this.color),
                    e
                },
                iconStyle: function() {
                    var e = {};
                    return e = {
                        fontSize: "inherit" == this.size ? "inherit" : this.$u.addUnit(this.size),
                        fontWeight: this.bold ? "bold" : "normal",
                        top: this.$u.addUnit(this.top)
                    },
                    this.showDecimalIcon && this.inactiveColor && !this.$u.config.type.includes(this.inactiveColor) ? e.color = this.inactiveColor : this.color && !this.$u.config.type.includes(this.color) && (e.color = this.color),
                    e
                },
                isImg: function() {
                    return -1 !== this.name.indexOf("/")
                },
                imgStyle: function() {
                    var e = {};
                    return e.width = this.width ? this.$u.addUnit(this.width) : this.$u.addUnit(this.size),
                    e.height = this.height ? this.$u.addUnit(this.height) : this.$u.addUnit(this.size),
                    e
                },
                decimalIconStyle: function() {
                    var e = {};
                    return e = {
                        fontSize: "inherit" == this.size ? "inherit" : this.$u.addUnit(this.size),
                        fontWeight: this.bold ? "bold" : "normal",
                        top: this.$u.addUnit(this.top),
                        width: this.percent + "%"
                    },
                    this.color && !this.$u.config.type.includes(this.color) && (e.color = this.color),
                    e
                },
                decimalIconClass: function() {
                    var e = [];
                    return e.push(this.customPrefix + "-" + this.name),
                    "uicon" == this.customPrefix ? e.push("u-iconfont") : e.push(this.customPrefix),
                    this.color && this.$u.config.type.includes(this.color) ? e.push("u-icon__icon--" + this.color) : e.push("u-icon__icon--primary"),
                    e
                }
            },
            methods: {
                click: function() {
                    this.$emit("click", this.index)
                },
                touchstart: function() {
                    this.$emit("touchstart", this.index)
                }
            }
        };
        t.default = i
    },
    e9bf: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        ));
        var i = {
            uModal: n("b7ed").default
        }
          , o = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("v-uni-view", {
                staticClass: "page"
            }, [e.showPage ? n("div", {
                staticClass: "onePage"
            }, [n("div", {
                staticClass: "canvas"
            }), n("v-uni-canvas", {
                attrs: {
                    id: "c",
                    width: "100vw",
                    height: "100vh"
                }
            }), n("div", {
                staticClass: "main"
            }, [n("div", {
                staticClass: "middle",
                attrs: {
                    id: "middle"
                }
            }, [n("div", {
                staticStyle: {
                    margin: "20px 0px 0px auto"
                }
            }), n("div", {
                staticClass: "item"
            }, [n("span", {
                ref: "typed_arr"
            }), n("span", {
                staticClass: "typed-cursor",
                staticStyle: {
                    "animation-iteration-count": "infinite"
                }
            }, [e._v("|")])]), n("div", {
                staticStyle: {
                    "margin-top": "30px"
                }
            }, [n("v-uni-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.footerBtn,
                    expression: "footerBtn"
                }],
                ref: "footerBtn",
                staticClass: "mu-button mu-fab-button mu-button-small mu-inverse",
                staticStyle: {
                    "user-select": "none",
                    outline: "none",
                    appearance: "none",
                    "background-color": "rgb(244, 67, 54)"
                },
                attrs: {
                    tabindex: "0",
                    type: "button"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.show = !0
                    }
                }
            }, [n("div", {
                staticClass: "mu-button-wrapper"
            }, [n("div", {
                staticClass: "mu-ripple-wrapper"
            }), e._v("💥")])])], 1), n("div", {
                staticStyle: {
                    height: "10vh"
                }
            })])]), n("u-modal", {
                attrs: {
                    "show-title": !1,
                    content: e.content
                },
                on: {
                    confirm: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.modalFn.apply(void 0, arguments)
                    }
                },
                model: {
                    value: e.show,
                    callback: function(t) {
                        e.show = t
                    },
                    expression: "show"
                }
            })], 1) : n("yanhua"), n("div", {
                staticStyle: {
                    position: "fixed",
                    top: "2vh",
                    right: "2vh",
                    "z-index": "100000"
                }
            }, [n("v-uni-button", {
                staticClass: "mu-button mu-fab-button mu-button-small mu-inverse ",
                staticStyle: {
                    "user-select": "none",
                    outline: "none",
                    appearance: "none",
                    "background-color": "rgb(244, 67, 54)"
                },
                attrs: {
                    tabindex: "0",
                    type: "button"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.palyMp3Fn.apply(void 0, arguments)
                    }
                }
            }, [n("div", {
                staticClass: "mu-button-wrapper"
            }, [n("div", {
                staticClass: "mu-ripple-wrapper"
            }), e.playMp3 ? n("span", {
                staticClass: "anS"
            }, [e._v("🔔")]) : n("span", [e._v("🔕")])])])], 1),  n("div", {
                staticClass: "div_is_open_bg",
                staticStyle: {
                    height: "1082px"
                },
                on: {
                    click: function(t) {
                        arguments[0] = t = e.$handleEvent(t),
                        e.onePlayMp3.apply(void 0, arguments)
                    }
                }
            }, [n("div", {
                staticClass: "div_is_open_btn",
                on: {
                    click: function(t) {
                        t.stopPropagation(),
                        arguments[0] = t = e.$handleEvent(t),
                        e.executeFn.apply(void 0, arguments)
                    }
                }
            })])], 1)
        }
          , a = []
    },
    e9c7: function(e, t, n) {
        var i = n("bf4f");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("3fecc52e", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    f150: function(e, t, n) {
        var i = n("408e");
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
        var o = n("4f06").default;
        o("f91fa796", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    f59f: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("37f1")
          , o = n("8ef1");
        for (var a in o)
            "default" !== a && function(e) {
                n.d(t, e, (function() {
                    return o[e]
                }
                ))
            }(a);
        n("73e2");
        var c, r = n("f0c5"), s = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "1b741bef", null, !1, i["a"], c);
        t["default"] = s.exports
    }
}]);
