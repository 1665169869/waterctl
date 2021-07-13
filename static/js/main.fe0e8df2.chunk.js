(this.webpackJsonpwaterctl=this.webpackJsonpwaterctl||[]).push([[0],{51:function(e,t,n){"use strict";(function(e){var a=n(28),r=n.n(a),c=n(52),o=n(43),i=n(44),s=n(15),l=n(0),u=n(3),d=n(81),b=n(86),j=n(29),f=n(23),h=n(22),g=n(40),p=n(46),v=n(24),O=n(57),m=n(45),x=n.n(m),w=n(55),k=n.n(w),S=n(85),y=n(82),C=n(87),N=n(83),W=n(53),B=n(4),I=Object(d.a)((function(e){return Object(b.a)({root:{flexGrow:1,paddingTop:"20px",display:"flex",alignItems:"center"},paper:{padding:e.spacing(2),margin:e.spacing(1),width:e.spacing(36)},button:{"& > *":{marginRight:e.spacing(2)}},buttonProgress:{color:j.a.A400,position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},startButtonSuccess:{backgroundColor:f.a[500],"&:hover":{backgroundColor:f.a[700]}},startButtonFailure:{backgroundColor:h.a[500],"&:hover":{backgroundColor:h.a[700]}},quickStartButton:{textTransform:"none"}})})),A=function(e){var t=Object(l.useState)(!0),n=Object(s.a)(t,2),a=n[0],r=n[1],c=function(){r(!1)};return Object(B.jsxs)(S.a,{style:{whiteSpace:"pre-wrap"},open:a,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(y.a,{children:Object(B.jsx)(C.a,{id:"alert-dialog-description",children:e.errorDescription})}),Object(B.jsx)(N.a,{children:Object(B.jsx)(v.a,{onClick:c,color:"primary",autoFocus:!0,children:"\u597d"})})]})};t.a=function(){var t,n=I(),a=Object(l.useState)(!1),d=Object(s.a)(a,2),b=d[0],j=d[1],f=Object(l.useState)(0),h=Object(s.a)(f,2),m=h[0],w=h[1],S=Object(l.useState)(!1),y=Object(s.a)(S,2),C=y[0],N=y[1],D=Object(l.useState)(!1),E=Object(s.a)(D,2),P=E[0],U=E[1],T=Object(l.useState)(""),F=Object(s.a)(T,2),R=F[0],q=F[1],L=Object(l.useState)(!1),Q=Object(s.a)(L,2),z=Q[0],J=Q[1];Object(l.useEffect)((function(){void 0!==navigator.bluetooth.getDevices&&J(!0)}),[]);var V=Object(l.useState)(""),G=Object(s.a)(V,2),M=G[0],$=G[1];Object(l.useEffect)((function(){var e=localStorage.getItem("lastDeviceName");null!=e&&$(e)}),[]);var H=Object(l.useState)(Object),K=Object(s.a)(H,2),X=K[0],Y=K[1],Z=Object(l.useState)(Object),_=Object(s.a)(Z,2),ee=_[0],te=_[1],ne=Object(u.a)((t={},Object(i.a)(t,n.startButtonSuccess,C),Object(i.a)(t,n.startButtonFailure,P),t)),ae=function(e){return console.log("Current:",e),e},re=function(){var t=Object(o.a)(r.a.mark((function t(){var n,a,o,i,s,l,u,d,b,j,f,h,g,p=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==(p.length>0&&void 0!==p[0]?p[0]:void 0)){t.next=7;break}return t.next=4,navigator.bluetooth.requestDevice({filters:[{namePrefix:"Water"}],optionalServices:[61936]});case 4:n=t.sent,t.next=14;break;case 7:return t.next=9,navigator.bluetooth.getDevices();case 9:a=t.sent,o=Object(c.a)(a);try{for(o.s();!(i=o.n()).done;)(s=i.value).name===M&&(n=s)}catch(r){o.e(r)}finally{o.f()}if(void 0!==n){t.next=14;break}throw new Error("Quick start failed");case 14:return ae(n),localStorage.setItem("lastDeviceName",n.name),w(20),t.next=19,n.gatt.connect();case 19:return l=t.sent,Y(l),ae(l),w(40),t.next=25,l.getPrimaryService(61936);case 25:return u=t.sent,ae(u),w(60),t.next=30,u.getCharacteristic(61937);case 30:return d=t.sent,te(d),ae(d),w(80),b=new W.CRC("CRC16",16,32773,59400,0,!0,!0),j=b.compute(e.from(n.name.slice(-5),"ascii")).toString(16),f=parseInt("0x"+j.slice(2,4)),h=parseInt("0x"+j.slice(0,2)),g=new Uint8Array([254,254,9,178,1,f,h,0,112,226,235,32,1,1,0,0,0,108,48,0]),console.log("Writing: ",g),t.next=42,d.writeValue(g);case 42:w(100);case 43:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ce=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Uint8Array([254,254,9,179,0,0]),console.log("Writing: ",t),e.next=4,ee.writeValue(t);case 4:return e.next=6,X.disconnect();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(e){j(!1),e.toString().match(/User cancelled/)||(U(!0),!navigator.bluetooth||e.toString().match(/Bluetooth adapter not available/)?q("\u627e\u4e0d\u5230\u84dd\u7259\u786c\u4ef6\uff0c\u6216\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u3002\n\n\u9650\u4e8e\u7bc7\u5e45\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\u4e0b\u65b9\u201c\u7591\u96be\u89e3\u7b54\u201d\u3002"):e.toString().match(/User denied the browser permission/)?q("\u84dd\u7259\u6743\u9650\u906d\u62d2\u3002\n\n\u8bf7\u524d\u5f80\u624b\u673a\u8bbe\u7f6e\uff0c\u6388\u4e88\u6d4f\u89c8\u5668\u201c\u4f4d\u7f6e\u4fe1\u606f\u201d\u6743\u9650\u3002\n\u6b64\u6743\u9650\u4e0d\u4f1a\u7528\u4e8e\u5b9a\u4f4d\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\u4e0b\u65b9\u201c\u7591\u96be\u89e3\u7b54\u201d\u3002"):e.toString().match(/NetworkError/)?q("\u8fde\u63a5\u4e0d\u7a33\u5b9a\uff0c\u65e0\u6cd5\u4e0e\u6c34\u63a7\u5668\u5efa\u7acb\u8fde\u63a5\u3002\n\u8bf7\u91cd\u8bd5\u3002"):e.toString().match(/Quick start failed/)?q("\u5feb\u901f\u542f\u52a8\u6682\u4e0d\u597d\u4f7f\u3002\n\u8bf7\u4f7f\u7528\u4f20\u7edf\u65b9\u5f0f\u542f\u52a8\u3002"):q("\u672a\u77e5\u9519\u8bef\uff1a\n"+e.toString()+"\n\n\u8fd9\u53ef\u80fd\u662f\u4e00\u4e2aBug\uff0c\u8bf7\u622a\u56fe\u5e76\u53cd\u9988\u7ed9\u5f00\u53d1\u8005\u3002"))};return Object(B.jsxs)("div",{className:n.root,children:[R&&Object(B.jsx)(A,{errorDescription:R}),Object(B.jsxs)(g.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",children:[Object(B.jsx)(g.a,{item:!0,children:Object(B.jsx)(p.a,{className:n.paper,children:Object(B.jsxs)("div",{className:n.button,children:[Object(B.jsxs)(v.a,{variant:"contained",color:"primary",startIcon:Object(B.jsx)(x.a,{}),className:ne,disabled:b,onClick:function(){b||(q(""),N(!1),U(!1),j(!0),w(-1),re().then((function(e){N(!0),j(!1)})).catch((function(e){return oe(e)})))},children:["\u542f\u52a8",b&&m<0&&Object(B.jsx)(O.a,{size:24,className:n.buttonProgress}),b&&m>=0&&Object(B.jsx)(O.a,{size:24,className:n.buttonProgress,variant:"determinate",value:m})]}),Object(B.jsx)(v.a,{variant:"contained",color:"primary",startIcon:Object(B.jsx)(k.a,{}),onClick:function(){ce(),N(!1),U(!1)},children:"\u7ed3\u675f"})]})})}),z&&""!==M&&Object(B.jsx)(g.a,{item:!0,children:Object(B.jsx)(p.a,{className:n.paper,children:Object(B.jsx)("div",{className:n.button,children:Object(B.jsxs)(v.a,{variant:"contained",color:"primary",startIcon:Object(B.jsx)(x.a,{}),className:n.quickStartButton,disabled:b,onClick:function(){b||(q(""),N(!1),U(!1),j(!0),w(-1),re(M).then((function(e){N(!0),j(!1)})).catch((function(e){return oe(e)})))},children:["\u5feb\u901f\u542f\u52a8\uff1a",M]})})})}),Object(B.jsx)(g.a,{item:!0,children:Object(B.jsx)(p.a,{className:n.paper,children:Object(B.jsxs)("div",{className:n.button,children:[Object(B.jsx)(v.a,{variant:"outlined",href:"https://github.com/celesWuff/waterctl/blob/master/FAQ.md",children:"\u7591\u96be\u89e3\u7b54"}),Object(B.jsx)(v.a,{variant:"outlined",href:"https://github.com/celesWuff/waterctl",children:"\u6e90\u4ee3\u7801"})]})})})]})]})}}).call(this,n(47).Buffer)},66:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=(n(66),n(51)),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=n(4);o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):l(t,e)}))}}()}},[[80,1,2]]]);
//# sourceMappingURL=main.fe0e8df2.chunk.js.map