(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{67:function(e,a,t){e.exports=t(96)},72:function(e,a,t){},73:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(25),r=t.n(l),o=(t(72),t(10)),s=(t(73),t(109)),i=t(27),m=t.n(i),u=m.a.initializeApp({apiKey:"AIzaSyATPng7tirgb2LTivwRI4D0-Qjjrdyd--U",authDomain:"slack-clone-project-65b9a.firebaseapp.com",databaseURL:"https://slack-clone-project-65b9a.firebaseio.com",projectId:"slack-clone-project-65b9a",storageBucket:"slack-clone-project-65b9a.appspot.com",messagingSenderId:"384603969365",appId:"1:384603969365:web:f11e453dbf5afd269881dc"}).firestore(),d=m.a.auth(),E=new m.a.auth.GoogleAuthProvider,h=u,p=Object(n.createContext)(),v=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},l)},f=function(){return Object(n.useContext)(p)},g=t(36),b="SET_USER",_=function(e,a){switch(console.log(a),a.type){case b:return Object(g.a)(Object(g.a)({},e),{},{user:a.user});default:return e}},N=function(){var e=f(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg",alt:""}),c.a.createElement("h1",null,"Sign in to Oksana Bibik HQ"),c.a.createElement("p",null,"oksanabibik.slack.com"),c.a.createElement(s.a,{onClick:function(){d.signInWithPopup(E).then((function(e){console.log(e),t({type:b,user:e.user})})).catch((function(e){alert(e.message)}))}},"Sign In with Google")))},j=(t(87),t(88),t(110)),O=t(47),I=t.n(O),S=t(48),k=t.n(S),w=t(49),C=t.n(w),y=function(){var e=f(),a=Object(o.a)(e,1)[0].user;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(j.a,{className:"header__avatar",alt:null===a||void 0===a?void 0:a.displayName,src:null===a||void 0===a?void 0:a.photoURL}),c.a.createElement(I.a,null)),c.a.createElement("div",{className:"header__search"},c.a.createElement(k.a,null),c.a.createElement("input",{type:"text",placeholder:"Search Clever Programmer"})),c.a.createElement("div",{className:"header__right"},c.a.createElement(C.a,null)))},D=(t(90),t(50)),P=t.n(D),A=t(51),R=t.n(A),T=(t(91),t(5)),U=function(e){var a=e.Icon,t=e.title,n=e.id,l=e.addChannelOption,r=Object(T.f)();return c.a.createElement("div",{className:"sidebarOption",onClick:l?function(){var e=prompt("Please enter the channel name");e&&h.collection("rooms").add({name:e})}:function(){n?r.push("/room/".concat(n)):r.push(t)}},a&&c.a.createElement(a,{className:"sidebarOption__icon"}),a?c.a.createElement("h3",null,t):c.a.createElement("h3",{className:"sidebarOption__channel"},c.a.createElement("span",{className:"sidebarOption__hash"},"#"),t))},x=t(52),L=t.n(x),B=t(53),G=t.n(B),M=t(54),W=t.n(M),F=t(55),z=t.n(F),J=t(56),Q=t.n(J),H=t(57),K=t.n(H),V=t(58),$=t.n(V),q=t(59),X=t.n(q),Y=t(60),Z=t.n(Y),ee=t(61),ae=t.n(ee),te=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1],r=f(),s=Object(o.a)(r,1)[0].user;return Object(n.useEffect)((function(){h.collection("rooms").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement("div",{className:"sidebar__info"},c.a.createElement("h2",null,"Clever Programmer"),c.a.createElement("h3",null,c.a.createElement(P.a,null),null===s||void 0===s?void 0:s.displayName)),c.a.createElement(R.a,null)),c.a.createElement(U,{Icon:L.a,title:"Threads"}),c.a.createElement(U,{Icon:G.a,title:"Mentions & reactions"}),c.a.createElement(U,{Icon:W.a,title:"Saved items"}),c.a.createElement(U,{Icon:z.a,title:"Channel browser"}),c.a.createElement(U,{Icon:Q.a,title:"People & user groups"}),c.a.createElement(U,{Icon:K.a,title:"Apps"}),c.a.createElement(U,{Icon:$.a,title:"File browser"}),c.a.createElement(U,{Icon:X.a,title:"Show less"}),c.a.createElement("hr",null),c.a.createElement(U,{Icon:Z.a,title:"Channels"}),c.a.createElement("hr",null),c.a.createElement(U,{Icon:ae.a,addChannelOption:!0,title:"Add Channel"}),t.map((function(e){return c.a.createElement(U,{id:e.id,title:e.name})})))},ne=t(33),ce=(t(93),t(62)),le=t.n(ce),re=t(63),oe=t.n(re),se=(t(94),function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement("div",{className:"message"},c.a.createElement("img",{src:l,alt:""}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n," ",c.a.createElement("span",{className:"message__timestamp"},new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString())),c.a.createElement("p",null,a)))}),ie=(t(95),function(e){var a=e.channelName,t=e.channelId,l=Object(n.useState)(""),r=Object(o.a)(l,2),s=r[0],i=r[1],u=f(),d=Object(o.a)(u,1)[0].user;return c.a.createElement("div",{className:"chatInput"},c.a.createElement("form",null,c.a.createElement("input",{value:s,onChange:function(e){return i(e.target.value)},placeholder:"Message #".concat(null===a||void 0===a?void 0:a.toLowerCase())}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),t&&h.collection("rooms").doc(t).collection("messages").add({message:s,timestamp:m.a.firestore.FieldValue.serverTimestamp(),user:d.displayName,userImage:d.photoURL}),i("")}},"SEND")))}),me=function(){var e=Object(T.g)().roomId,a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){e&&h.collection("rooms").doc(e).onSnapshot((function(e){return r(e.data())})),h.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return u(e.docs.map((function(e){return e.data()})))}))}),[e]),console.log(l),console.log("MESSAGES >>> ",m),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement("div",{className:"chat__headerLeft"},c.a.createElement("h4",{className:"chat__channelName"},c.a.createElement("strong",null,"#",null===l||void 0===l?void 0:l.name),c.a.createElement(le.a,null))),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement("p",null,c.a.createElement(oe.a,null)," Details"))),c.a.createElement("div",{className:"chat__messages"},m.map((function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement(se,{message:a,timestamp:t,user:n,userImage:l})}))),c.a.createElement(ie,{channelName:null===l||void 0===l?void 0:l.name,channelId:e}))};var ue=function(){var e=f(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},c.a.createElement(ne.a,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(te,null),c.a.createElement(T.c,null,c.a.createElement(T.a,{path:"/room/:roomId"},c.a.createElement(me,null)),c.a.createElement(T.a,{path:"/"},c.a.createElement("h1",null,"Welcome"))))):c.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,{initialState:{user:null},reducer:_},c.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.9490123a.chunk.js.map