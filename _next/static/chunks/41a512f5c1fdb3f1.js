(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  45189,
  (e) => {
    "use strict";
    var t = e.i(87433),
      r = e.i(44440);
    function n() {
      let [e, n] = (0, r.useState)([]);
      return (
        (0, r.useEffect)(() => {
          let e = [];
          for (let t = 0; t < 150; t++)
            e.push({
              id: t,
              x: 100 * Math.random(),
              y: 100 * Math.random(),
              size: 3 * Math.random() + 1,
              opacity: 0.7 * Math.random() + 0.3,
              animationDuration: 3 * Math.random() + 2,
            });
          n(e);
        }, []),
        (0, t.jsxs)("div", {
          className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
          children: [
            e.map((e) =>
              (0, t.jsx)(
                "div",
                {
                  className: "absolute rounded-full bg-white animate-twinkle",
                  style: {
                    left: `${e.x}%`,
                    top: `${e.y}%`,
                    width: `${e.size}px`,
                    height: `${e.size}px`,
                    opacity: e.opacity,
                    animationDuration: `${e.animationDuration}s`,
                    animationDelay: `${2 * Math.random()}s`,
                  },
                },
                e.id
              )
            ),
            (0, t.jsx)("div", {
              className:
                "absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl",
            }),
            (0, t.jsx)("div", {
              className:
                "absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl",
            }),
            (0, t.jsx)("div", {
              className:
                "absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl",
            }),
          ],
        })
      );
    }
    e.s(["StarField", () => n]);
  },
  12601,
  (e) => {
    "use strict";
    var t = e.i(87433);
    let r = Array.from({ length: 30 }, (e, t) => ({
      id: t,
      top: `${(37 * t) % 100}%`,
      size: t % 3 == 0 ? "text-lg" : "text-sm",
      delay: `${(0.1 * t) % 1.5}s`,
      duration: `${4 + (t % 4)}s`,
    }));
    function n() {
      return (0, t.jsxs)("div", {
        className:
          "relative h-16 flex items-center justify-center overflow-hidden my-8",
        children: [
          (0, t.jsx)("div", {
            className: "absolute inset-0 flex items-center",
            style: { animation: "scrollStars 5s linear infinite" },
            children: r
              .slice(0, 15)
              .map((e) =>
                (0, t.jsx)(
                  "span",
                  {
                    className: `absolute text-primary/50 ${e.size}`,
                    style: { left: `${7 * e.id}%`, top: e.top },
                    children: "✦",
                  },
                  `a-${e.id}`
                )
              ),
          }),
          (0, t.jsx)("div", {
            className: "absolute inset-0 flex items-center",
            style: {
              animation: "scrollStars 8s linear infinite",
              animationDelay: "-3s",
            },
            children: r
              .slice(15)
              .map((e) =>
                (0, t.jsx)(
                  "span",
                  {
                    className: `absolute text-blue-300/40 ${e.size}`,
                    style: { left: `${(e.id - 15) * 7}%`, top: e.top },
                    children: "★",
                  },
                  `b-${e.id}`
                )
              ),
          }),
          (0, t.jsx)("div", {
            className:
              "relative z-10 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent",
          }),
          (0, t.jsx)("style", {
            children: `
        @keyframes scrollStars {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%);  }
        }
      `,
          }),
        ],
      });
    }
    e.s(["StarBand", () => n]);
  },
  41567,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: n,
      blurDataURL: i,
      objectFit: o,
    }) {
      let a = r ? 40 * r : e,
        s = n ? 40 * n : t,
        l = a && s ? `viewBox='0 0 ${a} ${s}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        l
          ? "none"
          : "contain" === o
          ? "xMidYMid"
          : "cover" === o
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  9560,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return o;
      },
      imageConfigDefault: function () {
        return a;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
      a = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  35070,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      e.r(45694);
    let n = e.r(75527),
      i = e.r(41567),
      o = e.r(9560),
      a = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function c(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: u = !1,
        loading: d,
        className: f,
        quality: m,
        width: p,
        height: h,
        fill: g = !1,
        style: x,
        overrideSrc: b,
        onLoad: y,
        onLoadingComplete: v,
        placeholder: j = "empty",
        blurDataURL: w,
        fetchPriority: N,
        decoding: _ = "async",
        layout: k,
        objectFit: E,
        objectPosition: P,
        lazyBoundary: S,
        lazyRoot: C,
        ...O
      },
      M
    ) {
      var T;
      let R,
        $,
        A,
        { imgConf: z, showAltText: I, blurComplete: L, defaultLoader: D } = M,
        U = z || o.imageConfigDefault;
      if ("allSizes" in U) R = U;
      else {
        let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
          t = U.deviceSizes.sort((e, t) => e - t),
          r = U.qualities?.sort((e, t) => e - t);
        R = { ...U, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === D)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let F = O.loader || D;
      delete O.loader, delete O.srcSet;
      let q = "__next_img_default" in F;
      if (q) {
        if ("custom" === R.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = F;
        F = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (k) {
        "fill" === k && (g = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[k];
        e && (x = { ...x, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[k];
        r && !t && (t = r);
      }
      let B = "",
        X = l(p),
        G = l(h);
      if ((T = e) && "object" == typeof T && (s(T) || void 0 !== T.src)) {
        let t = s(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          (($ = t.blurWidth),
          (A = t.blurHeight),
          (w = w || t.blurDataURL),
          (B = t.src),
          !g)
        )
          if (X || G) {
            if (X && !G) {
              let e = X / t.width;
              G = Math.round(t.height * e);
            } else if (!X && G) {
              let e = G / t.height;
              X = Math.round(t.width * e);
            }
          } else (X = t.width), (G = t.height);
      }
      let W = !c && !u && ("lazy" === d || void 0 === d);
      (!(e = "string" == typeof e ? e : B) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (W = !1)),
        R.unoptimized && (r = !0),
        q &&
          !R.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let V = l(m),
        K = Object.assign(
          g
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: E,
                objectPosition: P,
              }
            : {},
          I ? {} : { color: "transparent" },
          x
        ),
        H =
          L || "empty" === j
            ? null
            : "blur" === j
            ? `url("data:image/svg+xml;charset=utf-8,${(0, i.getImageBlurSvg)({
                widthInt: X,
                heightInt: G,
                blurWidth: $,
                blurHeight: A,
                blurDataURL: w || "",
                objectFit: K.objectFit,
              })}")`
            : `url("${j}")`,
        J = a.includes(K.objectFit)
          ? "fill" === K.objectFit
            ? "100% 100%"
            : "cover"
          : K.objectFit,
        Q = H
          ? {
              backgroundSize: J,
              backgroundPosition: K.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: H,
            }
          : {},
        Y = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: i,
          quality: o,
          sizes: a,
          loader: s,
        }) {
          if (r) {
            let e = (0, n.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//") && e) {
              let r = t.includes("?") ? "&" : "?";
              t = `${t}${r}dpl=${e}`;
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: l, kind: c } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              n
            ) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  i = [];
                for (let e; (e = r.exec(n)); ) i.push(parseInt(e[2]));
                if (i.length) {
                  let r = 0.01 * Math.min(...i);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, i, a),
            u = l.length - 1;
          return {
            sizes: a || "w" !== c ? a : "100vw",
            srcSet: l
              .map(
                (r, n) =>
                  `${s({ config: e, src: t, quality: o, width: r })} ${
                    "w" === c ? r : n + 1
                  }${c}`
              )
              .join(", "),
            src: s({ config: e, src: t, quality: o, width: l[u] }),
          };
        })({
          config: R,
          src: e,
          unoptimized: r,
          width: X,
          quality: V,
          sizes: t,
          loader: F,
        }),
        Z = W ? "lazy" : d;
      return {
        props: {
          ...O,
          loading: Z,
          fetchPriority: N,
          width: X,
          height: G,
          decoding: _,
          className: f,
          style: { ...K, ...Q },
          sizes: Y.sizes,
          srcSet: Y.srcSet,
          src: b || Y.src,
        },
        meta: { unoptimized: r, preload: u || c, placeholder: j, fill: g },
      };
    }
  },
  34038,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let n = e.r(44440),
      i = "u" < typeof window,
      o = i ? () => {} : n.useLayoutEffect,
      a = i ? () => {} : n.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        i && (t?.mountedInstances?.add(e.children), s()),
        o(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        o(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          )
        ),
        a(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  90080,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return h;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = e.r(81258),
      a = e.r(44066),
      s = e.r(87433),
      l = a._(e.r(44440)),
      c = o._(e.r(34038)),
      u = e.r(75648);
    function d() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function f(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
        ? e.concat(
            l.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(45694);
    let m = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
      let t, r, n, i;
      return e
        .reduce(f, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (i = {}),
          (e) => {
            let o = !0,
              a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              a = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (o = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (o = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = m.length; t < r; t++) {
                  let r = m[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (o = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = i[r] || new Set();
                      ("name" !== r || !a) && n.has(t)
                        ? (o = !1)
                        : (n.add(t), (i[r] = n));
                    }
                }
            }
            return o;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let h = function ({ children: e }) {
      let t = (0, l.useContext)(u.HeadManagerContext);
      return (0, s.jsx)(c.default, {
        reduceComponentsToState: p,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  19335,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(81258)._(e.r(44440)),
      i = e.r(9560),
      o = n.default.createContext(i.imageConfigDefault);
  },
  96318,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(81258)._(e.r(44440)).default.createContext(null);
  },
  886,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            0
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  97689,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(886),
      i = e.r(75527);
    function o({ config: e, src: t, width: r, quality: o }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let a = (0, n.findClosestQuality)(o, e),
        s = (0, i.getDeploymentId)();
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${
        t.startsWith("/") && s ? `&dpl=${s}` : ""
      }`;
    }
    o.__next_img_default = !0;
    let a = o;
  },
  36770,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(44440);
    function i(e, t) {
      let r = (0, n.useRef)(null),
        i = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = i.current;
            t && ((i.current = null), t());
          } else e && (r.current = o(e, n)), t && (i.current = o(t, n));
        },
        [e, t]
      );
    }
    function o(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  89315,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      });
    let n = e.r(81258),
      i = e.r(44066),
      o = e.r(87433),
      a = i._(e.r(44440)),
      s = n._(e.r(65596)),
      l = n._(e.r(90080)),
      c = e.r(35070),
      u = e.r(9560),
      d = e.r(19335);
    e.r(45694);
    let f = e.r(96318),
      m = n._(e.r(97689)),
      p = e.r(36770),
      h = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0,
      };
    function g(e, t, r, n, i, o, a) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && i(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  i = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (i = !0), t.stopPropagation();
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function x(e) {
      return a.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, a.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: n,
          width: i,
          decoding: s,
          className: l,
          style: c,
          fetchPriority: u,
          placeholder: d,
          loading: f,
          unoptimized: m,
          fill: h,
          onLoadRef: b,
          onLoadingCompleteRef: y,
          setBlurComplete: v,
          setShowAltText: j,
          sizesInput: w,
          onLoad: N,
          onError: _,
          ...k
        },
        E
      ) => {
        let P = (0, a.useCallback)(
            (e) => {
              e && (_ && (e.src = e.src), e.complete && g(e, d, b, y, v, m, w));
            },
            [e, d, b, y, v, _, m, w]
          ),
          S = (0, p.useMergedRef)(E, P);
        return (0, o.jsx)("img", {
          ...k,
          ...x(u),
          loading: f,
          width: i,
          height: n,
          decoding: s,
          "data-nimg": h ? "fill" : "1",
          className: l,
          style: c,
          sizes: r,
          srcSet: t,
          src: e,
          ref: S,
          onLoad: (e) => {
            g(e.currentTarget, d, b, y, v, m, w);
          },
          onError: (e) => {
            j(!0), "empty" !== d && v(!0), _ && _(e);
          },
        });
      }
    );
    function y({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...x(t.fetchPriority),
      };
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, o.jsx)(l.default, {
            children: (0, o.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let v = (0, a.forwardRef)((e, t) => {
      let r = (0, a.useContext)(f.RouterContext),
        n = (0, a.useContext)(d.ImageConfigContext),
        i = (0, a.useMemo)(() => {
          let e = h || n || u.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            i = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: i,
            localPatterns:
              "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: s, onLoadingComplete: l } = e,
        p = (0, a.useRef)(s);
      (0, a.useEffect)(() => {
        p.current = s;
      }, [s]);
      let g = (0, a.useRef)(l);
      (0, a.useEffect)(() => {
        g.current = l;
      }, [l]);
      let [x, v] = (0, a.useState)(!1),
        [j, w] = (0, a.useState)(!1),
        { props: N, meta: _ } = (0, c.getImgProps)(e, {
          defaultLoader: m.default,
          imgConf: i,
          blurComplete: x,
          showAltText: j,
        });
      return (0, o.jsxs)(o.Fragment, {
        children: [
          (0, o.jsx)(b, {
            ...N,
            unoptimized: _.unoptimized,
            placeholder: _.placeholder,
            fill: _.fill,
            onLoadRef: p,
            onLoadingCompleteRef: g,
            setBlurComplete: v,
            setShowAltText: w,
            sizesInput: e.sizes,
            ref: t,
          }),
          _.preload
            ? (0, o.jsx)(y, { isAppRouter: !r, imgAttributes: N })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  32419,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return u;
      },
      getImageProps: function () {
        return c;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = e.r(81258),
      a = e.r(35070),
      s = e.r(89315),
      l = o._(e.r(97689));
    function c(e) {
      let { props: t } = (0, a.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let u = s.Image;
  },
  96027,
  (e, t, r) => {
    t.exports = e.r(32419);
  },
  22173,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return o;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    function o(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function a(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function s(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
        else t.set(r, a(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  48077,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = e.r(44066)._(e.r(22173)),
      a = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        i = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        c = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r &&
            ((c = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (c += ":" + e.port)),
        l && "object" == typeof l && (l = String(o.urlQueryToSearchParams(l)));
      let u = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || a.test(n)) && !1 !== c)
          ? ((c = "//" + (c || "")), i && "/" !== i[0] && (i = "/" + i))
          : c || (c = ""),
        s && "#" !== s[0] && (s = "#" + s),
        u && "?" !== u[0] && (u = "?" + u),
        (i = i.replace(/[?#]/g, encodeURIComponent)),
        (u = u.replace("#", "%23")),
        `${n}${c}${i}${u}${s}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function c(e) {
      return s(e);
    }
  },
  98334,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return x;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return y;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return a;
      },
      getDisplayName: function () {
        return d;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return u;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return m;
      },
      stringifyError: function () {
        return w;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => s.test(e);
    function c() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function u() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function m(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function p(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await p(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${d(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let h = "u" > typeof performance,
      g =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class x extends Error {}
    class b extends Error {}
    class y extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class j extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function w(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  32192,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(98334),
      i = e.r(32957);
    function o(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, i.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  92364,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  70065,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return x;
      },
      useLinkStatus: function () {
        return y;
      },
    };
    for (var i in n) Object.defineProperty(r, i, { enumerable: !0, get: n[i] });
    let o = e.r(44066),
      a = e.r(87433),
      s = o._(e.r(44440)),
      l = e.r(48077),
      c = e.r(31270),
      u = e.r(36770),
      d = e.r(98334),
      f = e.r(39468);
    e.r(45694);
    let m = e.r(49629),
      p = e.r(32192),
      h = e.r(95130);
    function g(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function x(t) {
      var r;
      let n,
        i,
        o,
        [l, x] = (0, s.useOptimistic)(m.IDLE_LINK_STATUS),
        y = (0, s.useRef)(null),
        {
          href: v,
          as: j,
          children: w,
          prefetch: N = null,
          passHref: _,
          replace: k,
          shallow: E,
          scroll: P,
          onClick: S,
          onMouseEnter: C,
          onTouchStart: O,
          legacyBehavior: M = !1,
          onNavigate: T,
          ref: R,
          unstable_dynamicOnHover: $,
          ...A
        } = t;
      (n = w),
        M &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, a.jsx)("a", { children: n }));
      let z = s.default.useContext(c.AppRouterContext),
        I = !1 !== N,
        L =
          !1 !== N
            ? null === (r = N) || "auto" === r
              ? h.FetchStrategy.PPR
              : h.FetchStrategy.Full
            : h.FetchStrategy.PPR,
        { href: D, as: U } = s.default.useMemo(() => {
          let e = g(v);
          return { href: e, as: j ? g(j) : e };
        }, [v, j]);
      if (M) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        i = s.default.Children.only(n);
      }
      let F = M ? i && "object" == typeof i && i.ref : R,
        q = s.default.useCallback(
          (e) => (
            null !== z &&
              (y.current = (0, m.mountLinkInstance)(e, D, z, L, I, x)),
            () => {
              y.current &&
                ((0, m.unmountLinkForCurrentNavigation)(y.current),
                (y.current = null)),
                (0, m.unmountPrefetchableInstance)(e);
            }
          ),
          [I, D, z, L, x]
        ),
        B = {
          ref: (0, u.useMergedRef)(q, F),
          onClick(t) {
            M || "function" != typeof S || S(t),
              M &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(t),
              !z ||
                t.defaultPrevented ||
                (function (t, r, n, i, o, a, l) {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: u } = t.currentTarget;
                    if (
                      ("A" === u.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, p.isLocalURL)(r)) {
                      o && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), l)) {
                      let e = !1;
                      if (
                        (l({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(70701);
                    s.default.startTransition(() => {
                      d(n || r, o ? "replace" : "push", a ?? !0, i.current);
                    });
                  }
                })(t, D, U, y, k, P, T);
          },
          onMouseEnter(e) {
            M || "function" != typeof C || C(e),
              M &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              z && I && (0, m.onNavigationIntent)(e.currentTarget, !0 === $);
          },
          onTouchStart: function (e) {
            M || "function" != typeof O || O(e),
              M &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              z && I && (0, m.onNavigationIntent)(e.currentTarget, !0 === $);
          },
        };
      return (
        (0, d.isAbsoluteUrl)(U)
          ? (B.href = U)
          : (M && !_ && ("a" !== i.type || "href" in i.props)) ||
            (B.href = (0, f.addBasePath)(U)),
        (o = M
          ? s.default.cloneElement(i, B)
          : (0, a.jsx)("a", { ...A, ...B, children: n })),
        (0, a.jsx)(b.Provider, { value: l, children: o })
      );
    }
    e.r(92364);
    let b = (0, s.createContext)(m.IDLE_LINK_STATUS),
      y = () => (0, s.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  63780,
  (e) => {
    "use strict";
    var t = e.i(87433),
      r = e.i(96027),
      n = e.i(70065);
    function i() {
      return (0, t.jsx)("nav", {
        className:
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-2xl",
        children: (0, t.jsxs)("div", {
          className:
            "flex items-center justify-between px-10 py-5 bg-card/80 backdrop-blur-md border border-border rounded-full shadow-lg shadow-blue-500/10",
          children: [
            (0, t.jsx)(n.default, {
              href: "/",
              className: "flex items-center",
              children: (0, t.jsx)("div", {
                className:
                  "relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/50 animate-pulse-glow",
                children: (0, t.jsx)(r.default, {
                  src: "/logo.png",
                  alt: "42 Logo",
                  fill: !0,
                  className: "object-cover",
                }),
              }),
            }),
            (0, t.jsxs)("div", {
              className: "flex items-center gap-12",
              children: [
                (0, t.jsx)(n.default, {
                  href: "#socials",
                  className:
                    "text-base font-mono text-muted-foreground hover:text-primary transition-colors duration-300",
                  children: "Socials",
                }),
              ],
            }),
          ],
        }),
      });
    }
    e.s(["Navbar", () => i]);
  },
  98924,
  (e) => {
    "use strict";
    var t = e.i(87433),
      r = e.i(96027);
    function n() {
      return (0, t.jsxs)("section", {
        className:
          "relative min-h-screen flex flex-col items-center justify-center px-4 pt-20",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full animate-orbit opacity-30",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute w-[500px] h-[500px] border border-cyan-500/10 rounded-full animate-orbit opacity-20",
            style: { animationDuration: "30s" },
          }),
          (0, t.jsx)("div", {
            className: "relative z-10 mb-8 animate-float",
            children: (0, t.jsx)("div", {
              className:
                "relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/50 animate-pulse-glow",
              children: (0, t.jsx)(r.default, {
                src: "/logo.png",
                alt: "42 - The Answer to Angel Dust OG",
                fill: !0,
                className: "object-cover",
                priority: !0,
              }),
            }),
          }),
          (0, t.jsx)("h1", {
            className:
              "font-sans text-4xl sm:text-6xl font-bold text-center mb-4 text-foreground",
            children: (0, t.jsx)("span", {
              className: "text-primary",
              children: "Dust",
            }),
          }),
          (0, t.jsx)("p", {
            className:
              "font-mono text-lg sm:text-xl text-muted-foreground text-center mb-12",
            children: "Angel Dust OG - Crazy lore here involving Omar and CZ. Apparently Aster stole his idea called Angel Dust.",
          }),
          (0, t.jsx)("img", {
            alt: "42 Logo",
            loading: "lazy",
            decoding: "async",
            className: "object-cover mx-auto rounded-lg border-2 border-muted-foreground/50",
            style: {
              width: "500px",
              height: "500px",
              color: "transparent",
            },
            src: "/logo.png",
          }),
        ],
      });
    }
    e.s(["HeroSection", () => n]);
  },
  31763,
  (e) => {
    "use strict";
    var t = e.i(44440);
    let r = (...e) =>
        e
          .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
          .join(" ")
          .trim(),
      n = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
          r ? r.toUpperCase() : t.toLowerCase()
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
    var i = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let o = (0, t.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: n = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: a,
            className: s = "",
            children: l,
            iconNode: c,
            ...u
          },
          d
        ) =>
          (0, t.createElement)(
            "svg",
            {
              ref: d,
              ...i,
              width: n,
              height: n,
              stroke: e,
              strokeWidth: a ? (24 * Number(o)) / Number(n) : o,
              className: r("lucide", s),
              ...(!l &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                  return !1;
                })(u) && { "aria-hidden": "true" }),
              ...u,
            },
            [
              ...c.map(([e, r]) => (0, t.createElement)(e, r)),
              ...(Array.isArray(l) ? l : [l]),
            ]
          )
      ),
      a = (e, i) => {
        let a = (0, t.forwardRef)(({ className: a, ...s }, l) =>
          (0, t.createElement)(o, {
            ref: l,
            iconNode: i,
            className: r(
              `lucide-${n(e)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${e}`,
              a
            ),
            ...s,
          })
        );
        return (a.displayName = n(e)), a;
      };
    e.s(["default", () => a], 31763);
  },
  90043,
  (e) => {
    "use strict";
    var t = e.i(87433),
      r = e.i(44440),
      n = e.i(31763);
    let i = (0, n.default)("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]),
      o = (0, n.default)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]),
      a = "ComingSoon";
    function s() {
      let [e, n] = (0, r.useState)(!1),
        s = async () => {
          try {
            await navigator.clipboard.writeText(a),
              n(!0),
              setTimeout(() => n(!1), 2e3);
          } catch (e) {
            console.error("Failed to copy:", e);
          }
        };
      return (0, t.jsx)("section", {
        className: "relative py-16 px-4",
        children: (0, t.jsx)("div", {
          className: "max-w-2xl mx-auto",
          children: (0, t.jsxs)("div", {
            className: "relative group",
            children: [
              (0, t.jsx)("div", {
                className:
                  "absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75 group-hover:opacity-100",
              }),
              (0, t.jsxs)("div", {
                className:
                  "relative bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8",
                children: [
                  (0, t.jsx)("h3", {
                    className:
                      "font-sans text-lg sm:text-xl font-bold text-foreground mb-4 text-center",
                    children: "Contract Address",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col sm:flex-row items-center gap-3",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "flex-1 w-full bg-secondary/50 rounded-xl px-4 py-3 border border-border",
                        children: (0, t.jsx)("p", {
                          className:
                            "font-mono text-xs sm:text-sm text-muted-foreground break-all text-center sm:text-left",
                          children: a,
                        }),
                      }),
                      (0, t.jsx)("button", {
                        onClick: s,
                        className:
                          "flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-bold rounded-xl hover:bg-primary/80 transition-all duration-300 hover:scale-105 active:scale-95",
                        children: e
                          ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(o, { className: "w-4 h-4" }),
                                "Copied!",
                              ],
                            })
                          : (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(i, { className: "w-4 h-4" }),
                                "Copy CA",
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    e.s(["ContactAddress", () => s], 90043);
  },
  94094,
  (e) => {
    "use strict";
    var t = e.i(87433),
      r = e.i(31763);
    let n = [
      {
        icon: (0, r.default)("rocket", [
          [
            "path",
            {
              d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
              key: "m3kijz",
            },
          ],
          [
            "path",
            {
              d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
              key: "1fmvmk",
            },
          ],
          [
            "path",
            { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" },
          ],
          [
            "path",
            { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" },
          ],
        ]),
        title: "SpaceX Starship - 42 Engines",
        description:
          "SpaceX Starship will ultimately have 42 engines (33 on the booster + 9 on the ship)",
        link: "https://x.com/i/grok/share/e6d936b71fe547afbddabb01be473622",
        linkText: "View Grok Share",
      },
      {
        icon: (0, r.default)("mouse-pointer", [
          ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
          [
            "path",
            {
              d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
              key: "277e5u",
            },
          ],
        ]),
        title: "x.ai Grokathon Easter Egg",
        description:
          "If you go to x.ai/grokathon website and click on the 'grokathon' key 42 times, a meme of Elon Musk's face will appear on the screen.",
        link: "https://x.ai/grokathon",
        linkText: "Try it yourself",
      },
      {
        icon: (0, r.default)("dollar-sign", [
          ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
          [
            "path",
            {
              d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
              key: "1b0p4s",
            },
          ],
        ]),
        title: "#xmoney Launch",
        description:
          "Elon's recent #xmoney launch began with a $42 transaction to @WilliamShatner. Additionally, 42 winners would be selected to win a single dollar of this to own a piece of history.",
        link: null,
        linkText: null,
      },
      {
        icon: (0, r.default)("message-circle", [
          [
            "path",
            {
              d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
              key: "1sd12s",
            },
          ],
        ]),
        title: "Elon's Tweets",
        description:
          "Multiple tweets from Elon talking about 'Life, The Universe, and Everything'",
        link: "https://x.com/elonmusk/status/1336825121223434241?s=20",
        linkText: "View Tweet",
      },
      {
        icon: (0, r.default)("image", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              ry: "2",
              key: "1m3agn",
            },
          ],
          ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
          [
            "path",
            { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" },
          ],
        ]),
        title: "SpaceX Starship 42",
        description:
          "A picture of the SpaceX starship with the number 42 painted onto the exterior.",
        link: "https://x.com/elonmusk/status/1336825121223434241?s=20",
        linkText: "View Image",
      },
      {
        icon: (0, r.default)("bot", [
          ["path", { d: "M12 8V4H8", key: "hb8ula" }],
          [
            "rect",
            {
              width: "16",
              height: "12",
              x: "4",
              y: "8",
              rx: "2",
              key: "enze0r",
            },
          ],
          ["path", { d: "M2 14h2", key: "vft8re" }],
          ["path", { d: "M20 14h2", key: "4cs60a" }],
          ["path", { d: "M15 13v2", key: "1xurst" }],
          ["path", { d: "M9 13v2", key: "rq6x2g" }],
        ]),
        title: "AI Confirms 42",
        description:
          "Even AI's such as ChatGPT will say 42 is the meaning of life when asked.",
        link: "https://chatgpt.com/c/69a9a265-297c-839d-ad6b-11d4fcbf899f",
        linkText: "View ChatGPT",
      },
      {
        icon: (0, r.default)("youtube", [
          [
            "path",
            {
              d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
              key: "1q2vi4",
            },
          ],
          ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
        ]),
        title: "The Significance of 42",
        description:
          "42 is an extremely important number both to Elon and to pop culture. Douglas Adams wrote a simple line, yet it has resonated for so long. 42. Life, The Universe, And Everything.",
        link: "https://youtube.com/watch?v=D6tINlNluuY",
        linkText: "Watch Video",
      },
    ];
    function i() {
      
    }
    e.s(["AboutTimeline", () => i], 94094);
  },
  32310,
  (e) => {
    "use strict";
    var t = e.i(87433),
      r = e.i(96027);
    let n = [
      {
        name: "Telegram",
        description: "Join the Dust",
        icon: "/telegram.png",
        link: "https://t.me/dustsolchat",
        color: "hover:border-white/50",
        glow: "from-white/20 to-gray-500/20",
      },
      {
        name: "X Community",
        description: "Join the Dust",
        icon: "/x.png",
        link: "https://x.com/Dustsol_X",
        color: "hover:border-white/50",
        glow: "from-white/20 to-gray-500/20",
      },
      {
        name: "Dexscreener",
        description: "Track the charts",
        icon: "/dex.png",
        link: "https://dexscreener.com/solana/ComingSoon",
        color: "hover:border-emerald-500/50",
        glow: "from-emerald-500/20 to-green-500/20",
      },
      {
        name: "Pump.fun",
        description: "Join the pump",
        icon: "/pump.png",
        link: "https://pump.fun/coin/ComingSoon",
        color: "hover:border-green-400/50",
        glow: "from-green-400/20 to-emerald-500/20",
      },
    ];
    function i() {
      return (0, t.jsx)("section", {
        id: "socials",
        className: "relative py-20 px-4",
        children: (0, t.jsxs)("div", {
          className: "max-w-4xl mx-auto",
          children: [
            (0, t.jsxs)("div", {
              className: "text-center mb-16",
              children: [
                (0, t.jsxs)("h2", {
                  className:
                    "font-sans text-3xl sm:text-4xl font-bold text-foreground mb-4",
                  children: [
                    "Connect Across the ",
                    (0, t.jsx)("span", {
                      className: "text-primary",
                      children: "Universe",
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "font-mono text-muted-foreground",
                  children: "Angel Dust OG",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "flex flex-row gap-6 w-full",
              children: n.map((e, n) =>
                (0, t.jsxs)(
                  "a",
                  {
                    href: e.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group relative flex-1",
                    children: [
                      (0, t.jsx)("div", {
                        className: `absolute -inset-0.5 bg-gradient-to-r ${e.glow} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500`,
                      }),
                      (0, t.jsxs)("div", {
                        className: `relative flex flex-col items-center p-8 bg-card/80 backdrop-blur-sm border border-border rounded-2xl transition-all duration-300 ${e.color} group-hover:scale-105`,
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "relative w-20 h-20 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors duration-300 mb-4",
                            children: (0, t.jsx)(r.default, {
                              src: e.icon,
                              alt: e.name,
                              fill: !0,
                              className: "object-cover",
                            }),
                          }),
                          (0, t.jsx)("h3", {
                            className:
                              "font-sans text-lg font-bold text-foreground mb-1",
                            children: e.name,
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "font-mono text-xs text-muted-foreground",
                            children: e.description,
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: (0, t.jsx)("span", {
                              className: "font-mono text-sm",
                              children: "Visit →",
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
          ],
        }),
      });
    }
    e.s(["SocialsSection", () => i]);
  },
  76841,
  (e) => {
    "use strict";
    var t = e.i(87433),
      r = e.i(96027);
    function n() {
      return (0, t.jsx)("footer", {
        className: "relative py-12 px-4 border-t border-border",
        children: (0, t.jsxs)("div", {
          className: "max-w-4xl mx-auto flex flex-col items-center gap-4",
          children: [
            (0, t.jsx)("div", {
              className:
                "relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30",
              children: (0, t.jsx)(r.default, {
                src: "/logo.png",
                alt: "42 Logo",
                fill: !0,
                className: "object-cover",
              }),
            }),
            (0, t.jsx)("p", {
              className: "font-mono text-sm text-muted-foreground text-center",
              children: "Angel Dust OG",
            }),
            
          ],
        }),
      });
    }
    e.s(["Footer", () => n]);
  },
]);
