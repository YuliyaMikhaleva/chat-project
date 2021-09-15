(this.webpackJsonphomework1 = this.webpackJsonphomework1 || []).push([
  [0],
  {
    143: function (e, t, n) {
      e.exports = {
        app: "layout_app__2lCLn",
        header: "layout_header__1L9py",
        headerTitle: "layout_headerTitle__2tT3b",
        message: "layout_message__1Obmj",
        buttonMessage: "layout_buttonMessage__24SqE",
      };
    },
    216: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(22),
        s = n(148),
        c = n(2),
        r = n.n(c),
        o = n(28),
        i = n.n(o),
        l = n(26),
        u = n(29),
        b = n(34),
        d = n(137),
        j = n(147).a.initializeApp({
          apiKey: "AIzaSyCishWgMKqs8cs0D_kgmB2GN9GaAi_TMzk",
          authDomain: "gb-chatmy.firebaseapp.com",
          databaseURL: "https://gb-chatmy-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "gb-chatmy",
          storageBucket: "gb-chatmy.appspot.com",
          messagingSenderId: "241893539443",
          appId: "1:241893539443:web:59c95375ff81cb205fb406",
          measurementId: "G-BJEFE7G8GR",
        }),
        h = j.database(),
        p = n(15),
        m = n(21),
        g = n(252),
        O = n(244),
        f = n(245),
        x = n(24),
        v = n(46),
        _ = "@conversations/start handle change value",
        y = "@conversations/success handle change value",
        N = "@conversations/error handle change value",
        w = "@conversations/clear message value",
        k = "@conversations/start add room",
        E = "@conversations/success add room",
        C = "@conversations/error add room",
        T = "@conversations/delete room",
        L = "@conversations/edit name room",
        I = "@gists/start get conversation from fb",
        A = "@gists/success get conversation from fb",
        S = "@gists/error get conversation from fb",
        P = { conversations: [], conversationsPending: !1, conversationsError: null },
        M = function (e, t) {
          return { type: y, payload: { value: e, roomId: t } };
        },
        D = function (e) {
          return { type: w, payload: e };
        },
        B = function (e, t) {
          return { type: L, payload: { oldTitleId: e, newTitle: t } };
        },
        q = n(0),
        V = n.n(q),
        F = n(4),
        W = n(98),
        R = n.n(W),
        G = function () {
          return function (e, t, n) {
            var a = n.getConversationsApi;
            e({ type: I }),
              a()
                .then(function (t) {
                  var n = [];
                  t.forEach(function (e) {
                    n.push(e.val());
                  }),
                    e(
                      (function (e) {
                        return { type: A, payload: e };
                      })(n),
                    );
                })
                .catch(function (t) {
                  e({ type: S, payload: t }), console.log(t);
                });
          };
        },
        U = R()(
          (function () {
            var e = Object(F.a)(
              V.a.mark(function e(t) {
                return V.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          5e3,
        ),
        X = n(6),
        z = "@messages/send message start",
        Q = "@messages/send message success",
        J = "@messages/send message error",
        K = "@messages/edit message",
        Y = "@gists/start get messages from fb",
        Z = "@gists/success get messages from fb",
        H = "@gists/error get messages from fb",
        $ = { messages: {}, messagesPending: !1, messagesError: null },
        ee = function (e, t) {
          return { type: Q, payload: { message: e, roomId: t }, meta: { delay: 500 } };
        },
        te = function () {
          return function (e, t, n) {
            (0, n.getMessagesApi)()
              .then(function (t) {
                e({ type: Y });
                var n = {};
                t.forEach(function (e) {
                  console.log(e), (n[e.key] = Object.values(e.val()));
                }),
                  console.log("messages", n),
                  e(
                    (function (e) {
                      return { type: Z, payload: e };
                    })(n),
                  );
              })
              .catch(function (t) {
                e({ type: H, payload: t }), console.log(t);
              });
          };
        },
        ne = n(42),
        ae = n.n(ne),
        se = n(138),
        ce = n.n(se),
        re = n(47),
        oe = n.n(re),
        ie = n(7);
      function le(e) {
        var t = e.id,
          n = e.author,
          a = e.message,
          s = e.date,
          c = Object(l.b)(),
          r = Object(b.h)().roomId,
          o = function (e, t) {
            var n = prompt(
              "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:",
              t,
            );
            c(
              (function (e, t, n) {
                return { type: K, payload: { oldMessageId: e, roomId: t, newMessage: n } };
              })(e, r, n),
            );
          };
        return Object(ie.jsx)("div", {
          children: Object(ie.jsxs)("div", {
            className: ce()(oe.a.blockMessage, Object(X.a)({}, oe.a.blockMessageBot, "bot" === n)),
            children: [
              Object(ie.jsx)("p", {
                className: oe.a.iconEdit,
                onClick: function () {
                  return o(t, a);
                },
                children: Object(ie.jsx)("i", { className: "fa fa-edit" }),
              }),
              Object(ie.jsxs)("p", {
                className: oe.a.textMessage,
                children: [
                  Object(ie.jsx)("span", { className: oe.a.userName, children: n }),
                  ": ",
                  a,
                  " ",
                ],
              }),
              Object(ie.jsx)("p", { className: oe.a.date, children: "".concat(s) }),
            ],
          }),
        });
      }
      var ue = Object(m.a)({
          root: {
            "& label.Mui-focused": { color: "black" },
            "& .MuiInput-underline:after": { borderBottomColor: "black" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#b2dfee", border: "3 px solid #b2dfee" },
              "&:hover fieldset": {
                borderColor: "#b2dfee",
                backgroundColor: "#b2dfee",
                opacity: "30%",
              },
              "&.Mui-focused fieldset": { borderColor: "#b2dfee" },
            },
          },
        })(g.a),
        be = function (e) {
          e.sendMessageFromBot;
          var t = Object(l.c)(function (e) {
              return e.messages;
            }),
            n = t.messages,
            a = t.messagesPending,
            s = t.messagesError,
            r = Object(l.b)(),
            o = Object(c.useRef)(null),
            i = Object(c.useRef)(null),
            u = Object(b.h)().roomId,
            d = Object(l.c)(function (e) {
              return e.messages.messages[u] || [];
            }),
            j = Object(l.c)(function (e) {
              var t;
              return (
                (null ===
                  (t = e.conversations.conversations.find(function (e) {
                    return e.title === u;
                  })) || void 0 === t
                  ? void 0
                  : t.value) || ""
              );
            });
          console.log(j);
          var h = function () {
            j &&
              r(
                (function (e, t) {
                  return (function () {
                    var n = Object(F.a)(
                      V.a.mark(function n(a, s, c) {
                        var r, o;
                        return V.a.wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    (r = c.sendMessagesApi),
                                    (n.prev = 1),
                                    a({ type: z }),
                                    (n.next = 5),
                                    r(t, e)
                                  );
                                case 5:
                                  (o = n.sent), console.log(o), a(ee(e, t)), a(D(t)), (n.next = 15);
                                  break;
                                case 11:
                                  (n.prev = 11),
                                    (n.t0 = n.catch(1)),
                                    a(((s = n.t0), { type: J, payload: s })),
                                    console.log(
                                      "\u041e\u0428\u0418\u0411\u041a\u0410",
                                      n.t0.message,
                                    );
                                case 15:
                                case "end":
                                  return n.stop();
                              }
                            var s;
                          },
                          n,
                          null,
                          [[1, 11]],
                        );
                      }),
                    );
                    return function (e, t, a) {
                      return n.apply(this, arguments);
                    };
                  })();
                })({ author: "User", message: j }, u),
              );
          };
          return (
            Object(c.useEffect)(
              function () {
                return (
                  o.current.focus(),
                  870 < i.current.scrollHeight && window.scrollTo(0, 9999),
                  function () {
                    clearTimeout(undefined),
                      console.log(
                        "\u0442\u0430\u0439\u043c\u0435\u0440 \u043e\u0447\u0438\u0449\u0435\u043d",
                      );
                  }
                );
              },
              [d],
            ),
            s
              ? Object(ie.jsx)("h1", { children: "ooooopppssss..." })
              : (n && console.log(n),
                Object(ie.jsx)(ie.Fragment, {
                  children: Object(ie.jsxs)("div", {
                    className: oe.a.chat,
                    style: { overflow: scroll },
                    ref: i,
                    children: [
                      Object(ie.jsx)("div", {
                        className: oe.a.message,
                        children: d.map(function (e, t) {
                          return Object(ie.jsx)(
                            le,
                            Object(p.a)(Object(p.a)({}, e), {}, { date: e.date }),
                            t,
                          );
                        }),
                      }),
                      Object(ie.jsx)(ue, {
                        id: "outlined-basic",
                        inputRef: o,
                        onChange: function (e) {
                          return r(
                            (function (e, t) {
                              return (function () {
                                var n = Object(F.a)(
                                  V.a.mark(function n(a, s, c) {
                                    var r;
                                    return V.a.wrap(
                                      function (n) {
                                        for (;;)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              return (
                                                (r = c.handleChangeMessageApi),
                                                (n.prev = 1),
                                                a({ type: _ }),
                                                (n.next = 5),
                                                U(function () {
                                                  return r(e, t);
                                                })
                                              );
                                            case 5:
                                              a(M(e, t)), (n.next = 11);
                                              break;
                                            case 8:
                                              (n.prev = 8),
                                                (n.t0 = n.catch(1)),
                                                a(((s = n.t0), { type: N, payload: s }));
                                            case 11:
                                            case "end":
                                              return n.stop();
                                          }
                                        var s;
                                      },
                                      n,
                                      null,
                                      [[1, 8]],
                                    );
                                  }),
                                );
                                return function (e, t, a) {
                                  return n.apply(this, arguments);
                                };
                              })();
                            })(e.target.value, u),
                          );
                        },
                        autoFocus: !0,
                        label:
                          "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
                        className: oe.a.text,
                        variant: "outlined",
                        fullWidth: !0,
                        value: j,
                        onKeyPress: function (e) {
                          "Enter" === e.code && h();
                        },
                        InputProps: {
                          endAdornment: Object(ie.jsxs)(O.a, {
                            children: [
                              a &&
                                Object(ie.jsx)("div", {
                                  className: ae.a.spinner,
                                  children: Object(ie.jsx)("div", {
                                    className: "spinner-border",
                                    role: "status",
                                  }),
                                }),
                              j &&
                                Object(ie.jsx)(f.a, { style: { cursor: "pointer" }, onClick: h }),
                            ],
                          }),
                        },
                      }),
                    ],
                  }),
                }))
          );
        },
        de = n(243),
        je = n(246),
        he = n(247),
        pe = n(248),
        me = function (e) {
          var t = e.id,
            n = e.title,
            a = e.selected,
            s = Object(l.c)(function (e) {
              return e.messages.messages[n] || [];
            }),
            c = Object(l.b)(),
            r = s[s.length - 1];
          return Object(ie.jsx)(u.b, {
            className: ae.a.listItemLink,
            to: "/chat/".concat(n),
            children: Object(ie.jsxs)(je.a, {
              button: !0,
              selected: a,
              children: [
                Object(ie.jsx)("button", {
                  className: ae.a.iconEdit,
                  onClick: function () {
                    return B(t, n);
                  },
                  children: Object(ie.jsx)("i", { className: "fa fa-edit" }),
                }),
                Object(ie.jsx)("button", {
                  className: ae.a.iconDelete,
                  onClick: function () {
                    return c({ type: T, payload: t });
                  },
                  children: Object(ie.jsx)("i", { className: "fa fa-trash-alt" }),
                }),
                Object(ie.jsx)(he.a, { className: ae.a.chatName, primary: n }),
                r &&
                  Object(ie.jsx)(he.a, {
                    className: ae.a.listItem,
                    primary: "".concat(r.author, ":").concat(r.message),
                  }),
              ],
            }),
          });
        },
        ge = Object(pe.a)(function () {
          return { root: { width: "100%", maxWidth: 360 } };
        });
      var Oe = function () {
          var e = Object(l.c)(function (e) {
              return e.conversations;
            }),
            t = e.conversations,
            n = e.conversationsPending,
            a = e.conversationsError;
          console.log("PENDING", n), console.log("CONVERSATIONS", t);
          var s = Object(l.b)(),
            c = ge(),
            r = Object(b.h)().roomId,
            o = Object(l.c)(function (e) {
              return e.messages.messages;
            });
          return (
            n && console.log("\u0417\u0410\u0413\u0420\u0423\u0417\u041a\u0410"),
            a && console.log("\u041e\u0428\u0418\u0411\u041a\u0410"),
            Object(ie.jsxs)("div", {
              className: c.root,
              children: [
                Object(ie.jsx)(de.a, {
                  component: "nav",
                  "aria-label": "secondary mailbox folder",
                  children: t.map(function (e, t) {
                    var n = o[e.title] || [];
                    n[(null === n || void 0 === n ? void 0 : n.length) - 1];
                    return Object(ie.jsx)(
                      me,
                      { id: e.id, title: e.title, selected: r === e.title },
                      t,
                    );
                  }),
                }),
                n &&
                  Object(ie.jsx)("div", {
                    className: ae.a.spinner,
                    children: Object(ie.jsx)("div", {
                      className: "spinner-border",
                      role: "status",
                    }),
                  }),
                Object(ie.jsx)("button", {
                  className: ae.a.btn,
                  onClick: function () {
                    s(
                      (function () {
                        var e = Object(F.a)(
                          V.a.mark(function e(t, n, a) {
                            var s, c;
                            return V.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (s = a.addConversationApi),
                                        (e.prev = 1),
                                        t({ type: k }),
                                        (e.next = 5),
                                        s()
                                      );
                                    case 5:
                                      (c = e.sent), console.log(c), t({ type: E }), (e.next = 14);
                                      break;
                                    case 10:
                                      (e.prev = 10),
                                        (e.t0 = e.catch(1)),
                                        t(((n = e.t0), { type: C, payload: n })),
                                        console.log(e.t0);
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                                var n;
                              },
                              e,
                              null,
                              [[1, 10]],
                            );
                          }),
                        );
                        return function (t, n, a) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    );
                  },
                  children:
                    "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0431\u0435\u0441\u0435\u0434\u0443",
                }),
              ],
            })
          );
        },
        fe = n(250),
        xe = n(249),
        ve = Object(c.createContext)(),
        _e = function (e) {
          var t = e.children,
            n = e.themes,
            s = e.initialTheme,
            r = Object(c.useState)({ theme: n[s], name: "\u043c\u044f\u0442\u043d\u0430\u044f" }),
            o = Object(a.a)(r, 2),
            i = o[0],
            l = o[1],
            u = Object(c.useCallback)(
              function (e) {
                n[e] && l({ name: e, theme: n[e] });
              },
              [n],
            );
          return Object(ie.jsx)(ve.Provider, {
            value: { theme: i, changeTheme: u },
            children: Object(ie.jsx)(xe.a, { theme: i.theme, children: t }),
          });
        },
        ye = n(143),
        Ne = n.n(ye);
      function we(e) {
        var t = e.chats,
          n = e.children;
        return Object(ie.jsx)(ie.Fragment, {
          children: Object(ie.jsx)(ve.Consumer, {
            children: function (e) {
              var a = e.theme;
              return Object(ie.jsx)("div", {
                children: Object(ie.jsxs)(fe.a, {
                  container: !0,
                  className: Ne.a.app,
                  children: [
                    Object(ie.jsx)(fe.a, {
                      item: !0,
                      xs: 2,
                      className: ae.a.chatList,
                      style: { backgroundColor: a.theme.color },
                      children: t,
                    }),
                    Object(ie.jsx)(fe.a, {
                      item: !0,
                      xs: 10,
                      style: { minWidth: "50px" },
                      className: oe.a.messageList,
                      children: n,
                    }),
                  ],
                }),
              });
            },
          }),
        });
      }
      var ke = n(35),
        Ee = n.n(ke),
        Ce = n(49),
        Te = n.n(Ce);
      function Le(e) {
        var t = e.session,
          n = Object(c.useState)(""),
          s = Object(a.a)(n, 2),
          r = s[0],
          o = s[1],
          i = Object(c.useState)(!1),
          b = Object(a.a)(i, 2),
          d = b[0],
          h = b[1],
          p = Object(c.useState)(null),
          m = Object(a.a)(p, 2),
          g = m[0],
          O = m[1],
          f = (function () {
            var e = Object(F.a)(
              V.a.mark(function e() {
                return V.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), h(!0), (e.next = 4), j.auth().signOut();
                        case 4:
                          h(!1),
                            console.log("\u0417\u0410\u0413\u0420\u0423\u0417\u041a\u0410"),
                            (e.next = 12);
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(0)), O(e.t0.message), console.log(g);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 8]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        Object(c.useEffect)(
          function () {
            t && (o(null === t || void 0 === t ? void 0 : t.email), console.log(r));
          },
          [r, t],
        );
        var x = Object(c.useContext)(ve),
          v = x.theme,
          _ = x.changeTheme,
          y = Object(l.c)(function (e) {
            return e.profile.user;
          });
        return g
          ? Object(ie.jsx)("h1", { children: "ooooppss..." })
          : Object(ie.jsx)(ie.Fragment, {
              children: Object(ie.jsxs)("div", {
                className: Te.a.header,
                style: { backgroundColor: v.theme.color },
                children: [
                  Object(ie.jsxs)("div", {
                    className: Te.a.btn,
                    children: [
                      Object(ie.jsx)("button", {
                        className: "btn btn-secondary dropdown-toggle",
                        href: "#",
                        role: "button",
                        id: "dropdownMenuLink",
                        "data-toggle": "dropdown",
                        "aria-expanded": "false",
                        children: "\u0426\u0432\u0435\u0442 \u0442\u0435\u043c\u044b",
                      }),
                      Object(ie.jsxs)("ul", {
                        className: "dropdown-menu",
                        "aria-labelledby": "dropdownMenuLink",
                        children: [
                          Object(ie.jsx)("li", {
                            children: Object(ie.jsx)("a", {
                              onClick: function () {
                                return _("\u043c\u044f\u0442\u043d\u0430\u044f");
                              },
                              className: "dropdown-item",
                              href: "#",
                              children: "\u041c\u044f\u0442\u043d\u044b\u0439",
                            }),
                          }),
                          Object(ie.jsx)("li", {
                            children: Object(ie.jsx)("a", {
                              onClick: function () {
                                return _("\u0441\u0438\u043d\u044f\u044f");
                              },
                              className: "dropdown-item",
                              href: "#",
                              children: "\u0421\u0438\u043d\u0438\u0439",
                            }),
                          }),
                          Object(ie.jsx)("li", {
                            children: Object(ie.jsx)("a", {
                              onClick: function () {
                                return _("\u0447\u0435\u0440\u043d\u0430\u044f");
                              },
                              className: "dropdown-item",
                              href: "#",
                              children: "\u0427\u0435\u0440\u043d\u044b\u0439",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  " ",
                  Object(ie.jsx)(u.b, {
                    to: "/gists",
                    style: { textDecoration: "none", margin: "auto 8px" },
                    children: Object(ie.jsx)("button", {
                      className: Te.a.btnToCab,
                      children: "Gists",
                    }),
                  }),
                  Object(ie.jsx)(u.b, {
                    to: "/anime",
                    style: { textDecoration: "none", margin: "auto 8px" },
                    children: Object(ie.jsx)("button", {
                      className: Te.a.btnToCab,
                      children: "Gists Anime",
                    }),
                  }),
                  Object(ie.jsx)(u.b, {
                    to: "/chat",
                    style: { textDecoration: "none", margin: "auto 8px" },
                    children: Object(ie.jsx)("button", {
                      className: Te.a.btnToCab,
                      children: "Chat",
                    }),
                  }),
                  Object(ie.jsx)(u.b, {
                    to: "/login",
                    style: { textDecoration: "none", margin: "auto 8px" },
                    children: Object(ie.jsx)("button", {
                      className: Te.a.btnToCab,
                      children: "\u041b\u043e\u0433\u0438\u043d",
                    }),
                  }),
                  Object(ie.jsx)(u.b, {
                    to: "/sign-up",
                    style: { textDecoration: "none", margin: "auto 8px" },
                    children: Object(ie.jsx)("button", {
                      className: Te.a.btnToCab,
                      children:
                        "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
                    }),
                  }),
                  Object(ie.jsxs)("span", {
                    className: Te.a.userName,
                    children: [
                      Object(ie.jsx)("p", {
                        className: Te.a.user,
                        children:
                          "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c:",
                      }),
                      " ",
                      y.firstName,
                      " ",
                      y.soName,
                    ],
                  }),
                  Object(ie.jsx)(u.b, {
                    to: "/profile",
                    style: { textDecoration: "none", margin: "auto 8px" },
                    children: Object(ie.jsx)("button", {
                      className: Te.a.btnToCab,
                      children:
                        "\u0412\u043e\u0439\u0442\u0438 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442",
                    }),
                  }),
                  (null === t || void 0 === t ? void 0 : t.email) &&
                    (d
                      ? Object(ie.jsx)("a", {
                          children: Object(ie.jsxs)("button", {
                            style: {
                              textDecoration: "none",
                              margin: "auto 8px",
                              backgroundColor: "red",
                              color: "white",
                            },
                            className: Te.a.btnToCab,
                            onClick: f,
                            children: [" ", "\u0412\u044b\u0445\u043e\u0434 (", t.email, ")"],
                          }),
                        })
                      : Object(ie.jsx)("a", {
                          style: { textDecoration: "none", margin: "auto 8px" },
                          children: Object(ie.jsxs)("button", {
                            className: Te.a.btnToCab,
                            onClick: f,
                            children: [" ", "\u0412\u044b\u0445\u043e\u0434 (", t.email, ")"],
                          }),
                        })),
                ],
              }),
            });
      }
      var Ie = "@profile/toggle name visible",
        Ae = "@profile/edit data",
        Se = "@profile/save",
        Pe = "@profile/edit user",
        Me = {
          nameVisible: !1,
          user: {
            firstName: "\u0412\u0430\u043d\u044f",
            soName: "\u0418\u0432\u0430\u043d\u043e\u0432",
            age: "28",
            birthDay: "05.01.1993",
          },
          edit: !1,
        },
        De = n(38),
        Be = n.n(De),
        qe = function () {
          var e = Object(l.c)(function (e) {
              return e.profile.user;
            }),
            t = e.firstName,
            n = e.soName,
            s = e.age,
            r = e.birthDay,
            o = Object(l.c)(function (e) {
              return e.profile.user;
            }),
            i = (function (e) {
              var t = Object(c.useState)(e),
                n = Object(a.a)(t, 2),
                s = n[0],
                r = n[1];
              return {
                value: s,
                onChange: function (e) {
                  r(
                    Object(p.a)(
                      Object(p.a)({}, s),
                      {},
                      Object(X.a)({}, e.target.name, e.target.value),
                    ),
                  );
                },
              };
            })({ firstName: o.firstName, soName: o.soName, age: o.age, birthDay: o.birthDay }),
            u = Object(l.c)(function (e) {
              return e.profile.edit;
            }),
            b = Object(l.b)();
          return Object(ie.jsx)("div", {
            children: u
              ? Object(ie.jsxs)("div", {
                  children: [
                    Object(ie.jsx)("label", {
                      className: Be.a.label,
                      htmlFor: "firstName",
                      children: "\u0418\u043c\u044f:",
                    }),
                    Object(ie.jsx)("input", {
                      "data-testid": "firstName",
                      name: "firstName",
                      className: Be.a.input,
                      id: "firstName",
                      defaultValue: t,
                      value: i.value.firstName,
                      onChange: i.onChange,
                      type: "text",
                      disabled: !1,
                    }),
                    Object(ie.jsx)("label", {
                      className: Be.a.label,
                      htmlFor: "soName",
                      children: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f:",
                    }),
                    Object(ie.jsx)("input", {
                      name: "soName",
                      className: Be.a.input,
                      id: "soName",
                      defaultValue: n,
                      type: "text",
                      disabled: !1,
                      value: i.value.soName,
                      onChange: i.onChange,
                    }),
                    Object(ie.jsx)("label", {
                      className: Be.a.label,
                      htmlFor: "age",
                      children: "\u0412\u043e\u0437\u0440\u0430\u0441\u0442, \u043b\u0435\u0442:",
                    }),
                    Object(ie.jsx)("input", {
                      name: "age",
                      className: Be.a.input,
                      id: "age",
                      defaultValue: s,
                      type: "text",
                      disabled: !1,
                      onChange: i.onChange,
                      value: i.value.age,
                    }),
                    Object(ie.jsxs)("label", {
                      className: Be.a.label,
                      htmlFor: "birthDay",
                      children: [
                        "\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:",
                        " ",
                      ],
                    }),
                    Object(ie.jsx)("input", {
                      name: "birthDay",
                      className: Be.a.input,
                      id: "birthDay",
                      defaultValue: r,
                      type: "text",
                      disabled: !1,
                      onChange: i.onChange,
                      value: i.value.birthDay,
                    }),
                    Object(ie.jsx)("button", {
                      className: Be.a.btnEditSave,
                      type: "submit",
                      onClick: function () {
                        var e;
                        b(((e = i.value), { type: Pe, payload: e })), b({ type: Se });
                      },
                      children: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
                    }),
                  ],
                })
              : Object(ie.jsxs)("div", {
                  children: [
                    Object(ie.jsxs)("label", {
                      className: Be.a.label,
                      htmlFor: "firstName",
                      children: ["\u0418\u043c\u044f:", " "],
                    }),
                    Object(ie.jsx)("input", {
                      className: Be.a.input,
                      id: "firstName",
                      defaultValue: t,
                      type: "text",
                      disabled: !0,
                    }),
                    Object(ie.jsxs)("label", {
                      className: Be.a.label,
                      htmlFor: "soName",
                      children: ["\u0424\u0430\u043c\u0438\u043b\u0438\u044f:", " "],
                    }),
                    Object(ie.jsx)("input", {
                      className: Be.a.input,
                      id: "soName",
                      defaultValue: n,
                      type: "text",
                      disabled: !0,
                    }),
                    Object(ie.jsxs)("label", {
                      className: Be.a.label,
                      htmlFor: "age",
                      children: [
                        "\u0412\u043e\u0437\u0440\u0430\u0441\u0442, \u043b\u0435\u0442:",
                        " ",
                      ],
                    }),
                    Object(ie.jsx)("input", {
                      className: Be.a.input,
                      id: "age",
                      defaultValue: s,
                      type: "text",
                      disabled: !0,
                    }),
                    Object(ie.jsxs)("label", {
                      className: Be.a.label,
                      htmlFor: "birthDay",
                      children: [
                        "\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:",
                        " ",
                      ],
                    }),
                    Object(ie.jsx)("input", {
                      className: Be.a.input,
                      id: "birthDay",
                      defaultValue: r,
                      type: "text",
                      disabled: !0,
                    }),
                    Object(ie.jsx)("button", {
                      onClick: function () {
                        b({ type: Ae });
                      },
                      className: Be.a.btnEditSave,
                      children:
                        "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                    }),
                  ],
                }),
          });
        },
        Ve = n(242),
        Fe = n(251),
        We = Object(pe.a)(function () {
          return {
            input: {
              color: "#007cad",
              padding: "10px 15px",
              fontSize: "15px",
              fontWeight: "bold",
              marginBottom: 15,
            },
            root: {
              "& h1": { fontSize: 25, fontWeight: "bold", marginBottom: 50, textAlign: "center" },
            },
          };
        });
      function Re(e) {
        var t = e.title,
          n = e.submitButton,
          s = e.onSubmit,
          r = We(),
          o = Object(c.useState)(""),
          i = Object(a.a)(o, 2),
          l = i[0],
          u = i[1],
          b = Object(c.useState)(""),
          d = Object(a.a)(b, 2),
          j = d[0],
          h = d[1],
          p = Object(c.useState)(""),
          m = Object(a.a)(p, 2),
          g = (m[0], m[1]),
          O = (function () {
            var e = Object(F.a)(
              V.a.mark(function e() {
                return V.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), s(l, j);
                        case 3:
                          e.next = 8;
                          break;
                        case 5:
                          (e.prev = 5), (e.t0 = e.catch(0)), g(e.t0.message);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 5]],
                );
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(ie.jsxs)("div", {
          className: r.root,
          children: [
            Object(ie.jsx)("h1", { children: t }),
            Object(ie.jsx)(Ve.a, {
              value: l,
              onChange: function (e) {
                return u(e.target.value);
              },
              fullWidth: !0,
              placeholder: "Email",
              className: r.input,
            }),
            Object(ie.jsx)(Ve.a, {
              value: j,
              onChange: function (e) {
                return h(e.target.value);
              },
              fullWidth: !0,
              placeholder: "Password",
              className: r.input,
              type: "password",
            }),
            Object(ie.jsx)(Fe.a, { variant: "text", fullWidth: !0, onClick: O, children: n }),
          ],
        });
      }
      var Ge = n(144),
        Ue = n.n(Ge)()(function () {
          return {
            link: { display: "flex", justifyContent: "center", marginTop: 30, color: "#000" },
            root: { width: 500, margin: "0 auto", marginTop: "10%" },
          };
        });
      function Xe(e) {
        var t = e.children,
          n = e.link,
          a = Ue();
        return Object(ie.jsxs)("div", {
          className: a.root,
          children: [t, Object(ie.jsx)("div", { className: a.link, children: n })],
        });
      }
      var ze = n(119),
        Qe = ["isAut"],
        Je = ["isAut"];
      function Ke(e) {
        var t = e.isAut,
          n = Object(ze.a)(e, Qe);
        return t ? Object(ie.jsx)(b.b, Object(p.a)({}, n)) : Object(ie.jsx)(b.a, { to: "/login" });
      }
      function Ye(e) {
        var t = e.isAut,
          n = Object(ze.a)(e, Je);
        return t ? Object(ie.jsx)(b.a, { to: "/chat" }) : Object(ie.jsx)(b.b, Object(p.a)({}, n));
      }
      var Ze = n.p + "static/media/logoDialog.60000589.png";
      function He() {
        var e = Object(b.g)().push;
        Object(c.useEffect)(
          function () {
            var t = function (t) {
              "Escape" === t.code && e("/chat");
            };
            return (
              document.addEventListener("keydown", t),
              function () {
                document.removeEventListener("keydown", t);
              }
            );
          },
          [e],
        );
        var t = Object(l.b)();
        Object(c.useEffect)(
          function () {
            t(G()), t(te());
          },
          [t],
        );
        var n = Object(l.c)(function (e) {
            return e.conversations;
          }),
          a = n.conversations,
          s = n.conversationsPending,
          r = n.conversationsError;
        console.log(a);
        var o = Object(l.c)(function (e) {
            return e.messages;
          }),
          i = o.messages,
          u = o.messagesPending,
          d = o.messagesError;
        return (
          s && console.log("\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),
          a &&
            console.log(
              "\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430",
            ),
          r
            ? Object(ie.jsx)("div", { children: Object(ie.jsx)("h1", { children: "oooppss..." }) })
            : Object(ie.jsxs)(b.d, {
                children: [
                  Object(ie.jsx)(b.b, {
                    exact: !0,
                    path: ["/chat/:roomId", "/chat"],
                    children: Object(ie.jsxs)(we, {
                      chats: Object(ie.jsx)(Oe, { title: s }),
                      children: [
                        Object(ie.jsx)(b.b, {
                          path: "/chat/:roomId",
                          children: Object(ie.jsx)(be, { title1: i, title2: u, title3: d }),
                        }),
                        Object(ie.jsxs)(b.b, {
                          exact: !0,
                          path: "/chat",
                          children: [
                            Object(ie.jsx)("h1", {
                              className: Ee.a.title,
                              children:
                                "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0438\u0430\u043b\u043e\u0433",
                            }),
                            Object(ie.jsx)("img", {
                              className: Ee.a.img,
                              src: Ze,
                              alt: "logo",
                              width: "50",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(ie.jsx)(b.b, {
                    path: "*",
                    children: Object(ie.jsx)("h1", {
                      children:
                        "\u0442\u0430\u043a\u043e\u0433\u043e \u0447\u0430\u0442\u0430 \u043d\u0435\u0442",
                    }),
                  }),
                ],
              })
        );
      }
      function $e() {
        return Object(ie.jsxs)(b.d, {
          children: [
            Object(ie.jsx)(b.b, {
              path: "/",
              children: Object(ie.jsxs)("div", {
                className: Ee.a.pageWelcome,
                children: [
                  Object(ie.jsx)("h1", {
                    className: Ee.a.welcomeText,
                    children:
                      "\u041f\u0440\u0438\u0432\u0435\u0442! \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0430\u0442!",
                  }),
                  Object(ie.jsxs)(u.b, {
                    to: "/chat",
                    style: { textDecoration: "none" },
                    children: [
                      Object(ie.jsx)("button", {
                        className: Ee.a.welcomeBtn,
                        children: "\u0412\u043e\u0439\u0442\u0438 \u0432 \u0447\u0430\u0442",
                      }),
                      Object(ie.jsx)("img", {
                        className: Ee.a.img,
                        src: Ze,
                        alt: "logo",
                        width: "300",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(ie.jsx)(b.b, { exact: !0, path: "/chat", children: Object(ie.jsx)(He, {}) }),
            Object(ie.jsx)(b.b, {
              path: "*",
              children: Object(ie.jsx)("h1", {
                children:
                  "\u0442\u0430\u043a\u043e\u0433\u043e \u0447\u0430\u0442\u0430 \u043d\u0435\u0442",
              }),
            }),
          ],
        });
      }
      function et() {
        return Object(ie.jsx)(b.d, {
          children: Object(ie.jsx)(b.b, {
            path: "*",
            children: Object(ie.jsxs)("div", {
              children: [
                Object(ie.jsx)("img", { className: Ee.a.img, src: "./404.jpg", width: "1024" }),
                Object(ie.jsx)(u.b, {
                  to: "/",
                  style: { textDecoration: "none" },
                  children: Object(ie.jsx)("button", {
                    className: Ee.a.welcomeBtn,
                    children:
                      "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var tt = n(69),
        nt = n.n(tt);
      var at = function () {
          var e = Object(l.c)(function (e) {
              return e.profile.nameVisible;
            }),
            t = Object(l.b)();
          return Object(ie.jsxs)("div", {
            className: nt.a.pageProfile,
            children: [
              Object(ie.jsxs)("div", {
                className: nt.a.profile,
                children: [
                  Object(ie.jsx)("img", {
                    className: nt.a.profileLogo,
                    src: "./logoDialog.png",
                    width: "200",
                  }),
                  Object(ie.jsx)("h1", {
                    className: nt.a.profileTitle,
                    children:
                      "\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442",
                  }),
                  Object(ie.jsx)("button", {
                    className: nt.a.profileBtn,
                    onClick: function () {
                      t({ type: Ie });
                    },
                    children:
                      "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c / \u0421\u043a\u0440\u044b\u0442\u044c",
                  }),
                  e && Object(ie.jsx)(qe, {}),
                ],
              }),
              Object(ie.jsx)(u.b, {
                to: "/chat",
                style: { textDecoration: "none" },
                children: Object(ie.jsx)("button", {
                  className: nt.a.btnToChat,
                  children:
                    "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u0432 \u0447\u0430\u0442",
                }),
              }),
            ],
          });
        },
        st = "@gists/start query",
        ct = "@gists/success query",
        rt = "@gists/error query",
        ot = "@gists/search start query",
        it = "@gists/search success query",
        lt = "@gists/search error query",
        ut = { gists: [], gistsPending: !1, gistsError: null },
        bt = function (e) {
          return { type: ct, payload: e };
        },
        dt = function () {
          return { type: st };
        },
        jt = function (e) {
          return { type: rt, payload: e };
        },
        ht = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          return (function () {
            var t = Object(F.a)(
              V.a.mark(function t(n, a, s) {
                var c, r;
                return V.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), n(dt()), (t.next = 4), s.getGistsApi(e);
                        case 4:
                          (c = t.sent),
                            (r = c.data),
                            n(bt(r)),
                            console.log("data1", r),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10), (t.t0 = t.catch(0)), n(jt(t.t0)), console.log(t.t0);
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]],
                );
              }),
            );
            return function (e, n, a) {
              return t.apply(this, arguments);
            };
          })();
        };
      function pt() {
        var e = Object(c.useRef)(),
          t = Object(l.c)(function (e) {
            return e.gists;
          }),
          n = t.gistsPending,
          s = t.gists,
          r = t.gistsError,
          o = Object(c.useState)(""),
          i = Object(a.a)(o, 2),
          u = i[0],
          b = i[1],
          d = Object(l.b)(),
          j = Object(c.useMemo)(
            function () {
              return R()(function (t) {
                var n = t === e.current;
                d(
                  (function (e, t) {
                    return (function () {
                      var n = Object(F.a)(
                        V.a.mark(function n(a, s, c) {
                          var r, o;
                          return V.a.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (
                                      (n.prev = 0),
                                      a({ type: ot }),
                                      (n.next = 4),
                                      c.searchGistsByUserNameApi(e)
                                    );
                                  case 4:
                                    (r = n.sent),
                                      (o = r.data),
                                      t && (a({ type: it, payload: o }), console.log("data1", o)),
                                      (n.next = 13);
                                    break;
                                  case 9:
                                    (n.prev = 9),
                                      (n.t0 = n.catch(0)),
                                      a(((s = n.t0), { type: lt, payload: s })),
                                      console.log(n.t0);
                                  case 13:
                                  case "end":
                                    return n.stop();
                                }
                              var s;
                            },
                            n,
                            null,
                            [[0, 9]],
                          );
                        }),
                      );
                      return function (e, t, a) {
                        return n.apply(this, arguments);
                      };
                    })();
                  })(t, n),
                );
              }, 1e3);
            },
            [d],
          );
        return (
          Object(c.useEffect)(
            function () {
              s.length || d(ht());
            },
            [d, s],
          ),
          Object(c.useEffect)(
            function () {
              u && j(u, d), (e.current = u);
            },
            [u, d, j],
          ),
          r
            ? Object(ie.jsx)("div", { children: Object(ie.jsx)("h1", { children: "oooppss..." }) })
            : Object(ie.jsxs)("div", {
                children: [
                  Array.from({ length: 10 }).map(function (e, t) {
                    return Object(ie.jsxs)(
                      "button",
                      {
                        className: Ee.a.btnQuery,
                        onClick: function () {
                          return d(ht(t + 1));
                        },
                        children: ["button ", t],
                      },
                      t,
                    );
                  }),
                  Object(ie.jsx)("hr", {}),
                  Object(ie.jsxs)("div", {
                    className: Ee.a.gistsBlock,
                    children: [
                      Object(ie.jsx)("h1", { children: "Search" }),
                      Object(ie.jsx)("input", {
                        value: u,
                        onChange: function (e) {
                          return b(e.target.value);
                        },
                      }),
                      Object(ie.jsx)("hr", {}),
                    ],
                  }),
                  n
                    ? Object(ie.jsx)("div", {
                        children: Object(ie.jsx)("div", {
                          className: Ee.a.spinner,
                          children: Object(ie.jsx)("div", {
                            className: "spinner-border",
                            role: "status",
                          }),
                        }),
                      })
                    : Object(ie.jsx)("div", {
                        children: Object(ie.jsx)("div", {
                          children: s.map(function (e, t) {
                            return Object(ie.jsx)(
                              "p",
                              { className: Ee.a.gistsBlock, children: e.description },
                              t,
                            );
                          }),
                        }),
                      }),
                ],
              })
        );
      }
      var mt = "@gists/start anime query",
        gt = "@gists/success anime query",
        Ot = "@gists/error anime query",
        ft = { gists: [], gistsPending: !1, gistsError: null },
        xt = function (e) {
          return { type: gt, payload: e };
        },
        vt = function () {
          return { type: mt };
        },
        _t = function (e) {
          return { type: Ot, payload: e };
        },
        yt = function (e) {
          return "https://animechan.vercel.app/api/quotes/anime?title=naruto&page=".concat(e);
        },
        Nt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          return (function () {
            var t = Object(F.a)(
              V.a.mark(function t(n) {
                var a, s;
                return V.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), n(vt()), (t.next = 4), fetch(yt(e));
                        case 4:
                          return (a = t.sent), (t.next = 7), a.json();
                        case 7:
                          (s = t.sent), n(xt(s)), (t.next = 15);
                          break;
                        case 11:
                          (t.prev = 11), (t.t0 = t.catch(0)), n(_t(t.t0)), console.log(t.t0);
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]],
                );
              }),
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
      function wt() {
        var e = Object(l.c)(function (e) {
            return e.anime;
          }),
          t = e.gistsPending,
          n = e.gists,
          a = e.gistsError,
          s = Object(l.b)();
        return (
          Object(c.useEffect)(
            function () {
              n.length || (s(Nt()), console.log(n));
            },
            [s, n],
          ),
          t
            ? Object(ie.jsx)("div", {
                children: Object(ie.jsx)("div", {
                  className: Ee.a.spinner,
                  children: Object(ie.jsx)("div", { className: "spinner-border", role: "status" }),
                }),
              })
            : a
            ? Object(ie.jsx)("div", { children: Object(ie.jsx)("h1", { children: "oooppss..." }) })
            : Object(ie.jsxs)("div", {
                children: [
                  Array.from({ length: 10 }).map(function (e, t) {
                    return Object(ie.jsxs)(
                      "button",
                      {
                        className: Ee.a.btnQuery,
                        onClick: function () {
                          return s(Nt(t + 1));
                        },
                        children: ["button ", t],
                      },
                      t,
                    );
                  }),
                  Object(ie.jsx)("div", {
                    children: n.map(function (e, t) {
                      return Object(ie.jsx)(
                        "p",
                        { className: Ee.a.gistsBlock, children: e.character },
                        t,
                      );
                    }),
                  }),
                ],
              })
        );
      }
      var kt = function (e, t) {
        return j.auth().signInWithEmailAndPassword(e, t);
      };
      function Et() {
        return Object(ie.jsx)("div", {
          children: Object(ie.jsx)(Xe, {
            link: Object(ie.jsx)(u.b, {
              to: "sign-up",
              children:
                "\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c",
            }),
            children: Object(ie.jsx)(Re, {
              title: "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",
              submitButton: "\u0412\u043e\u0439\u0442\u0438",
              onSubmit: kt,
            }),
          }),
        });
      }
      var Ct = function (e, t) {
        return console.log(e, t), j.auth().createUserWithEmailAndPassword(e, t);
      };
      function Tt() {
        return Object(ie.jsx)("div", {
          children: Object(ie.jsx)(Xe, {
            link: Object(ie.jsx)(u.b, {
              to: "login",
              children:
                "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0412\u043e\u0439\u0434\u0438\u0442\u0435",
            }),
            children: Object(ie.jsx)(Re, {
              title: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",
              submitButton:
                "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",
              onSubmit: Ct,
            }),
          }),
        });
      }
      var Lt = n(61),
        It = n(117),
        At = n(145),
        St = n.n(At),
        Pt = n(146),
        Mt = n(3),
        Dt = n(113),
        Bt = n.n(Dt),
        qt = new (function e(t) {
          var n = this;
          Object(Mt.a)(this, e),
            (this.requestWithToken = function () {
              return { headers: { "x-token": n.token } };
            }),
            (this.get = function (e, t) {
              var a = {};
              return (
                t && (a = Object(p.a)(Object(p.a)({}, a), n.requestWithToken())),
                n.request.get(e, a)
              );
            }),
            (this.post = function (e, t, a) {
              var s = {};
              return (
                a && (s = Object(p.a)(Object(p.a)({}, s), n.requestWithToken())),
                n.request.post(e, t, s)
              );
            }),
            (this.request = (function (e) {
              return (
                e.interceptors.request.use(function (e) {
                  return (
                    console.log(
                      "%c AXIOS [request] ".concat(e.url, ":"),
                      "color: green; font-weight: bold",
                      e,
                    ),
                    e
                  );
                }),
                e.interceptors.response.use(
                  function (e) {
                    return (
                      console.log(
                        "%c AXIOS [response-success] ".concat(e.config.url, ":"),
                        "color: #b2dfee; font-weight: bold",
                        e,
                      ),
                      e
                    );
                  },
                  function (e) {
                    console.log("%c AXIOS [response-error]", "color: red; font-weight: bold", e);
                  },
                ),
                e
              );
            })(Bt.a.create({ baseURL: "https://api.github.com" }))),
            (this.token = t);
        })("test token"),
        Vt = {
          key: "root",
          storage: St.a,
          blacklist: ["conversations", "messages"],
          whitelist: ["profile"],
        },
        Ft = Object(Lt.b)({
          profile: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ie:
                return Object(p.a)(Object(p.a)({}, e), {}, { nameVisible: !e.nameVisible });
              case Ae:
                return Object(p.a)(Object(p.a)({}, e), {}, { edit: !0 });
              case Se:
                return Object(p.a)(Object(p.a)({}, e), {}, { edit: !1 });
              case Pe:
                return Object(p.a)(Object(p.a)({}, e), {}, { user: t.payload });
              default:
                return e;
            }
          },
          conversations: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case _:
                return Object(p.a)(Object(p.a)({}, e), {}, { conversationsPending: !0 });
              case y:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    conversationsPending: !1,
                    conversations: e.conversations.map(function (e) {
                      return e.title === t.payload.roomId
                        ? Object(p.a)(
                            Object(p.a)({}, e),
                            {},
                            { value: t.payload.value, id: Object(v.a)() },
                          )
                        : e;
                    }),
                  },
                );
              case N:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { conversationsPending: !1, conversationsError: t.payload },
                );
              case w:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    conversations: e.conversations.map(function (e) {
                      return e.title === t.payload
                        ? Object(p.a)(Object(p.a)({}, e), {}, { value: "" })
                        : e;
                    }),
                  },
                );
              case k:
                return Object(p.a)(Object(p.a)({}, e), {}, { conversationsPending: !0 });
              case E:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    conversationsPending: !1,
                    conversations: [].concat(Object(x.a)(e.conversations), [
                      {
                        id: Object(v.a)(),
                        title: "room ".concat(e.conversations.length + 1),
                        value: "test value".concat(e.conversations.length + 1),
                      },
                    ]),
                  },
                );
              case C:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { conversationsPending: !1, conversationsError: t.payload },
                );
              case T:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    conversations: e.conversations.filter(function (e) {
                      return e.id !== t.payload;
                    }),
                  },
                );
              case L:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    conversations: Object(x.a)(e.conversations).map(function (e) {
                      return e.id === t.payload.oldTitleId
                        ? Object(p.a)(Object(p.a)({}, e), {}, { title: t.payload.newTitle })
                        : e;
                    }),
                  },
                );
              case I:
                return Object(p.a)(Object(p.a)({}, e), {}, { conversationsPending: !0 });
              case A:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { conversationsPending: !1, conversations: t.payload },
                );
              case S:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { conversationsPending: !1, conversationsError: t.payload },
                );
              default:
                return e;
            }
          },
          messages: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case z:
                return Object(p.a)(Object(p.a)({}, e), {}, { messagesPending: !0 });
              case Q:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    messagesPending: !1,
                    messages: Object(p.a)(
                      Object(p.a)({}, e.messages),
                      {},
                      Object(X.a)(
                        {},
                        t.payload.roomId,
                        [].concat(Object(x.a)(e.messages[t.payload.roomId] || []), [
                          Object(p.a)(
                            Object(p.a)({}, t.payload.message),
                            {},
                            { date: new Date().toLocaleTimeString(), id: Object(v.a)() },
                          ),
                        ]) || [],
                      ),
                    ),
                  },
                );
              case J:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { messagesPending: !1, messagesError: t.payload },
                );
              case K:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    messages: Object(p.a)(
                      Object(p.a)({}, e.messages),
                      {},
                      Object(X.a)(
                        {},
                        t.payload.roomId,
                        Object(x.a)(
                          (e.messages[t.payload.roomId] || []).map(function (e) {
                            return e.id === t.payload.oldMessageId
                              ? Object(p.a)(
                                  Object(p.a)({}, e),
                                  {},
                                  { message: t.payload.newMessage },
                                )
                              : e;
                          }),
                        ),
                      ),
                    ),
                  },
                );
              case Y:
                return Object(p.a)(Object(p.a)({}, e), {}, { messagesPending: !0 });
              case Z:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { messagesPending: !1, messages: t.payload },
                );
              case H:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { messagesPending: !1, messagesError: t.payload },
                );
              default:
                return e;
            }
          },
          gists: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case st:
              case ot:
                return Object(p.a)(Object(p.a)({}, e), {}, { gistsPending: !0 });
              case ct:
              case it:
                return Object(p.a)(Object(p.a)({}, e), {}, { gistsPending: !1, gists: t.payload });
              case rt:
              case lt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { gistsError: t.payload, gistsPending: !1 },
                );
              default:
                return e;
            }
          },
          anime: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case mt:
                return Object(p.a)(Object(p.a)({}, e), {}, { gistsPending: !0 });
              case gt:
                return Object(p.a)(Object(p.a)({}, e), {}, { gistsPending: !1, gists: t.payload });
              case Ot:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { gistsError: t.payload, gistsPending: !1 },
                );
              default:
                return e;
            }
          },
        }),
        Wt = Object(It.a)(Vt, Ft),
        Rt = Object(Lt.d)(
          Wt,
          Object(Lt.c)(
            Object(Lt.a)(
              function () {
                return function (e) {
                  return function (t) {
                    console.log("report");
                    try {
                      return e(t);
                    } catch (n) {
                      console.error("Some error: ", n);
                    }
                  };
                };
              },
              Pt.a.withExtraArgument({
                getGistsApi: function (e) {
                  return qt.get("/gists/public?page=".concat(e));
                },
                searchGistsByUserNameApi: function (e) {
                  return qt.get("/users/".concat(e, "/gists"));
                },
                getMessagesApi: function () {
                  return h.ref("messages").get();
                },
                sendMessagesApi: function () {
                  return function (e, t) {
                    var n = t.author,
                      a = t.message;
                    return h
                      .ref("messages")
                      .child(e)
                      .push({ id: Object(v.a)(), author: n, message: a });
                  };
                },
                getConversationsApi: function () {
                  return h.ref("conversations").get();
                },
                handleChangeMessageApi: function (e, t) {
                  return h.ref("conversations").child(t).update({ title: t, value: e });
                },
                addConversationApi: function () {
                  return h
                    .ref("conversations")
                    .child("room ".concat(Object(v.a)()))
                    .set({
                      id: Object(v.a)(),
                      title: "room ".concat(Object(v.a)()),
                      value: "test value".concat(Object(v.a)()),
                    });
                },
              }),
              function () {
                return function (e) {
                  return function (t) {
                    console.log("dispatching", t), console.log("prev state", Rt.getState());
                    var n = e(t);
                    return console.log("next state", Rt.getState()), n;
                  };
                };
              },
              function (e) {
                return function (t) {
                  return function (n) {
                    return (
                      n.type === Q &&
                        "User" === n.payload.message.author &&
                        setTimeout(function () {
                          e.dispatch(
                            ee(
                              {
                                author: "bot",
                                message: "Hello from bot middleware",
                                date: new Date().toLocaleTimeString(),
                              },
                              n.payload.roomId,
                            ),
                          );
                        }, 500),
                      t(n)
                    );
                  };
                };
              },
              function () {
                return function (e) {
                  return function (t) {
                    var n,
                      a =
                        null === t || void 0 === t || null === (n = t.meta) || void 0 === n
                          ? void 0
                          : n.delay;
                    if (!a) return e(t);
                    var s = setTimeout(function () {
                      return e(t);
                    }, a);
                    return function () {
                      clearInterval(s);
                    };
                  };
                };
              },
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__
              ? window.__REDUX_DEVTOOLS_EXTENSION__()
              : function (e) {
                  return e;
                },
          ),
        ),
        Gt = Object(It.b)(Rt),
        Ut = {
          "\u043c\u044f\u0442\u043d\u0430\u044f": Object(s.a)({ color: "#b2dfee" }),
          "\u0441\u0438\u043d\u044f\u044f": Object(s.a)({ color: "#007cad" }),
          "\u0447\u0435\u0440\u043d\u0430\u044f": Object(s.a)({ color: "black" }),
        },
        Xt = function () {
          var e = Object(c.useState)(null),
            t = Object(a.a)(e, 2),
            n = t[0],
            s = t[1];
          return (
            Object(c.useEffect)(function () {
              j.auth().onAuthStateChanged(function (e) {
                s(e || null);
              });
            }, []),
            Object(ie.jsx)(l.a, {
              store: Rt,
              children: Object(ie.jsx)(r.a.StrictMode, {
                children: Object(ie.jsx)(d.a, {
                  loading: null,
                  persistor: Gt,
                  children: Object(ie.jsx)(u.a, {
                    children: Object(ie.jsxs)(_e, {
                      themes: Ut,
                      initialTheme: "\u043c\u044f\u0442\u043d\u0430\u044f",
                      children: [
                        Object(ie.jsx)(Le, { session: n }),
                        Object(ie.jsxs)(b.d, {
                          children: [
                            Object(ie.jsx)(Ke, {
                              exact: !0,
                              isAut: n,
                              path: "/chat",
                              component: He,
                            }),
                            Object(ie.jsx)(Ke, {
                              exact: !0,
                              isAut: n,
                              path: "/chat/:roomId",
                              component: He,
                            }),
                            Object(ie.jsx)(b.b, { exact: !0, isAut: n, path: "/", component: $e }),
                            Object(ie.jsx)(Ke, {
                              exact: !0,
                              isAut: n,
                              path: "/profile",
                              component: at,
                            }),
                            Object(ie.jsx)(Ke, {
                              exact: !0,
                              isAut: n,
                              path: "/gists",
                              component: pt,
                            }),
                            Object(ie.jsx)(Ke, {
                              exact: !0,
                              isAut: n,
                              path: "/anime",
                              component: wt,
                            }),
                            Object(ie.jsx)(Ye, {
                              exact: !0,
                              isAut: n,
                              path: "/login",
                              component: Et,
                            }),
                            Object(ie.jsx)(Ye, {
                              exact: !0,
                              isAut: n,
                              path: "/sign-up",
                              component: Tt,
                            }),
                            Object(ie.jsx)(b.b, { path: "*", component: et }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        };
      i.a.render(Object(ie.jsx)(Xt, {}), document.getElementById("root"));
    },
    35: function (e, t, n) {
      e.exports = {
        title: "page_title__1qWnv",
        img: "page_img__3o1Vb",
        main: "page_main__3XQqJ",
        error404: "page_error404__u_VIM",
        pageWelcome: "page_pageWelcome__stwCo",
        welcomeText: "page_welcomeText__3gL81",
        welcomeBtn: "page_welcomeBtn__TzRVt",
        btnQuery: "page_btnQuery__lpqpw",
        hr: "page_hr__3dreI",
        gistsBlock: "page_gistsBlock__3uwQr",
        spinner: "page_spinner__2NbwK",
      };
    },
    38: function (e, t, n) {
      e.exports = {
        input: "profileForm_input__H-xs7",
        label: "profileForm_label__Y8Nmm",
        btnEditSave: "profileForm_btnEditSave__3h9Ea",
      };
    },
    42: function (e, t, n) {
      e.exports = {
        chatList: "chatList_chatList__2qYXd",
        title: "chatList_title__2KDJl",
        listItem: "chatList_listItem__3wqcJ",
        buttonAdd: "chatList_buttonAdd__1QaEu",
        listItemLink: "chatList_listItemLink__2Aeuj",
        chatName: "chatList_chatName__3_y7d",
        chatList_listItem__1mE9X: "chatList_chatList_listItem__1mE9X__1UZJ5",
        btn: "chatList_btn__2SQ1R",
        iconDelete: "chatList_iconDelete__u8xRF",
        iconEdit: "chatList_iconEdit__ORkdM",
        spinner: "chatList_spinner__3zvA7",
      };
    },
    47: function (e, t, n) {
      e.exports = {
        messageList: "messageList_messageList__v5Mz4",
        title: "messageList_title__2SM79",
        text: "messageList_text__3DQsB",
        blockMessage: "messageList_blockMessage__3jzaE",
        blockMessageBot: "messageList_blockMessageBot__EM9aV",
        chat: "messageList_chat__32joP",
        message: "messageList_message__1RGpw",
        userName: "messageList_userName__38sgY",
        date: "messageList_date__nq1_R",
        textMessage: "messageList_textMessage__3ISF5",
        iconEdit: "messageList_iconEdit__1cBMl",
      };
    },
    49: function (e, t, n) {
      e.exports = {
        header: "header_header__2DlrP",
        headerTitle: "header_headerTitle__djwdc",
        btn: "header_btn__3sgOM",
        btnToCab: "header_btnToCab__2YPVE",
        user: "header_user__2pfiB",
        userName: "header_userName__EE5UC",
      };
    },
    69: function (e, t, n) {
      e.exports = {
        pageProfile: "profile_pageProfile__3qyxq",
        profile: "profile_profile__2WkJV",
        profileTitle: "profile_profileTitle__1vZgS",
        profileBtn: "profile_profileBtn__3MKDN",
        profileLogo: "profile_profileLogo__NiflZ",
        btnToChat: "profile_btnToChat__2t_TN",
        btnEditSave: "profile_btnEditSave__2ZTSb",
        input: "profile_input__2B9s6",
      };
    },
  },
  [[216, 1, 2]],
]);
//# sourceMappingURL=main.29f6aa65.chunk.js.map
