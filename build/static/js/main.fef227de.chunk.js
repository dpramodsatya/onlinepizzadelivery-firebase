(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(27)},21:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a,r,i,o,c,l,u=t(0),p=t.n(u),d=t(11),m=t.n(d),s=(t(21),t(4)),g=t(1),b=t(2),h=b.b.div(a||(a=Object(g.a)(["\n  font-family: 'Righteous', cursive; \n"]))),f=b.b.div(r||(r=Object(g.a)(["\n  background-color: ",";\n  padding: 10px;\n  position: fixed;\n  width: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: space-between;  \n"])),"#f44336"),x=Object(b.b)(h)(i||(i=Object(g.a)(["\n  font-size: 20px;\n  color: white;\n  text-shadow: 1px 1px 4px #380502;\n"]))),v=b.b.div(o||(o=Object(g.a)(["\n  color: white; \n  font-size: 12px; \n  margin-right: 30px; \n"]))),E=b.b.span(c||(c=Object(g.a)(["\n  cursor: pointer; \n"])));function O(e){var n=e.login,t=e.loggedIn,a=e.logout;return p.a.createElement(f,null,p.a.createElement(x,null,"Sliceline"," ",p.a.createElement("span",{role:"img","aria-label":"pizza slice"},"\ud83c\udf55")),p.a.createElement(v,null,"loading"!==t?p.a.createElement(p.a.Fragment,null,"\ud83d\udc64 ",t?"Logged in.":"",t?p.a.createElement(E,{onClick:a}," Log out "):p.a.createElement(E,{onClick:n}," Log in / Sign up ")):"loading..."))}var j=b.b.div(l||(l=Object(g.a)(["\n  height: 200px;\n  background-image: url(img/banner.jpeg);\n  background-position: center;\n  background-size: cover;\n  filter: contrast(75%);\n"]))),k=t(3);function y(e){return e.toLocaleString("en-IN",{style:"currency",currency:"INR"})}var w,z,C,S,F=[{name:"Cheese Pizza",img:"/img/pizza.png",section:"Pizza",price:100},{name:"Pepperoni Pizza",img:"/img/pizza2.jpeg",section:"Pizza",price:150},{name:"Chicken Pizza",img:"/img/chicken-pizza.jpeg",section:"Pizza",price:200},{img:"/img/healthy-pizza.jpeg",name:"Veggie Pizza",section:"Pizza",price:200},{img:"/img/burger.jpeg",name:"Burger",section:"Sandwich",price:150},{img:"/img/gyro.jpeg",name:"Gyro",section:"Sandwich",price:100},{img:"/img/sandwich.jpeg",name:"Shrimp PoBoy",section:"Sandwich",price:120},{img:"/img/fries.jpeg",name:"Fries",section:"Sides",price:100},{img:"/img/coke.jpg",price:50,name:"Soda",section:"Drinks",choices:["Coke","Sprite","Fanta"]}].reduce(function(e,n){return e[n.section]||(e[n.section]=[]),e[n.section].push(n),e},{}),P=b.b.div(w||(w=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  padding-bottom: 40px;\n"]))),I=Object(b.b)(h)(z||(z=Object(g.a)(["\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 5px;\n"]))),q=b.b.div(C||(C=Object(g.a)(["\n height: 100px; \n padding: 10px; \n font-size: 20px; \n background-image: "," \n background-position: center;\n background-size: cover;\n filter: contrast(75%); \n border-radius: 7px; \n margin-top: 5px; \n transition-property: box-shadow margin-top filter; \n transition-duration: .1s; \n box-shadow: 0px 0px 2px 0px grey;\n &:hover {\n  cursor: pointer; \n  filter: contrast(100%); \n  margin-top: 0px; \n  margin-bottom: 5px; \n  box-shadow: 0px 5px 10px 0px grey;\n }\n"])),function(e){var n=e.img;return"url(".concat(n,");")}),A=b.b.div(S||(S=Object(g.a)(["\n  height: 1000px;\n  margin: 0px 400px 50px 20px;\n"])));function D(e){var n=e.setOpenFood;return p.a.createElement(A,null,Object.entries(F).map(function(e){var t=Object(k.a)(e,2),a=t[0],r=t[1];return p.a.createElement(p.a.Fragment,null,p.a.createElement("h1",null," ",a," "),p.a.createElement(P,null,r.map(function(e){return p.a.createElement(q,{img:e.img,onClick:function(){n(e)}},p.a.createElement(I,null,p.a.createElement("div",null,e.name),p.a.createElement("div",null,y(e.price))))})))}))}var T,R,W,B,L,N,V=t(5),Y=b.b.input(T||(T=Object(g.a)(["\n  font-size: 18px;\n  width: 24px;\n  text-align: center;\n  border: none;\n  outline: none;\n"]))),G=Object(b.b)(h)(R||(R=Object(g.a)(["\n  display: flex;\n  height: 24px;\n"]))),J=b.b.div(W||(W=Object(g.a)(["\n  width: 23px;\n  color: ",";\n  font-size: 20px;\n  text-align: center;\n  cursor: pointer;\n  line-height: 23px;\n  margin: 0px 10px;\n  border: 1px solid ",";\n  ","\n  &:hover {\n    background-color: #ffe3e3;\n  }\n"])),"#f44336","#f44336",function(e){return e.disabled&&"opacity: 0.5; \n     pointer-events: none; \n     "});function H(e){var n=e.quantity;return p.a.createElement(G,null,p.a.createElement("div",null,"Quantity:"),p.a.createElement(J,{onClick:function(){n.setValue(n.value-1)},disabled:1===n.value},"-"),p.a.createElement(Y,n),p.a.createElement(J,{onClick:function(){n.setValue(n.value+1)}},"+"))}var M=b.b.div(B||(B=Object(g.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n"]))),Q=b.b.input(L||(L=Object(g.a)(["\n  margin-right: 10px;\n  cursor: pointer;\n"]))),U=b.b.label(N||(N=Object(g.a)(["\n  cursor: pointer;\n"])));function $(e){var n=e.toppings,t=e.checkTopping;return p.a.createElement(M,null,n.map(function(e,n){return p.a.createElement(U,null,p.a.createElement(Q,{type:"checkbox",checked:e.checked,onClick:function(){t(n)}}),e.name)}))}function K(e){var n=Object(u.useState)(e||_.map(function(e){return{name:e,checked:!1}})),t=Object(k.a)(n,2),a=t[0],r=t[1];return{checkTopping:function(e){var n=Object(V.a)(a);n[e].checked=!n[e].checked,r(n)},toppings:a}}var X,Z,_=["Extra Cheese","Pepperoni","Sausage","Onions","Peppers","Pineapple","Ham","Spinach","Artichokes","Mushrooms","Anchovies"];var ee,ne,te,ae,re,ie,oe,ce=b.b.input(X||(X=Object(g.a)(["\n  ","\n"])),"cursor: pointer"),le=b.b.label(Z||(Z=Object(g.a)(["\n  ","\n"])),"cursor: pointer");function ue(e){var n=e.openFood,t=e.choiceRadio;return p.a.createElement(p.a.Fragment,null,p.a.createElement("h3",null,"Choose one"),n.choices.map(function(e){return p.a.createElement(p.a.Fragment,null,p.a.createElement(ce,{type:"radio",id:e,name:"choice",value:e,checked:t.value===e,onChange:t.onChange}),p.a.createElement(le,{for:e}," ",e," ")," ")}))}var pe,de=b.b.div(ee||(ee=Object(g.a)(["\n  width: 500px;\n  background-color: white;\n  position: fixed;\n  top: 75px;\n  z-index: 11;\n  max-height: calc(100% - 100px);\n  left: calc(50% - 250px);\n  display: flex;\n  flex-direction: column;\n"]))),me=b.b.div(ne||(ne=Object(g.a)(["\n  overflow: auto;\n  min-height: 100px;\n  padding: 0px 40px;\n  padding-bottom: 80px;\n"]))),se=b.b.div(te||(te=Object(g.a)(["\n  box-shadow: 0px -2px 10px 0px grey;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n"]))),ge=Object(b.b)(h)(ae||(ae=Object(g.a)(["\n  margin: 10px;\n  color: white;\n  height: 20px;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n  width: 200px;\n  cursor: pointer;\n  background-color: ",";\n  ","\n"])),"#f44336",function(e){return e.disabled&&"\n    opactity: .5; \n    background-color: grey; \n    pointer-events: none; \n  "}),be=b.b.div(re||(re=Object(g.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  background-color: black;\n  opacity: 0.7;\n  z-index: 11;\n"]))),he=b.b.div(ie||(ie=Object(g.a)(["\n  min-height: 200px;\n  margin-bottom: 20px;\n  ","\n  background-position: center;\n  background-size: cover;\n"])),function(e){var n=e.img;return n?"background-image: url(".concat(n,");"):"min-height: 75px;"}),fe=Object(b.b)(I)(oe||(oe=Object(g.a)(["\n  font-size: 30px;\n  padding: 5px 40px;\n  top: ",";\n"])),function(e){return e.img?"100px":"20px"}),xe=.5;function ve(e){return e.quantity*(e.price+e.toppings.filter(function(e){return e.checked}).length*xe)}function Ee(e){var n=e.openFood,t=e.setOpenFood,a=e.setOrders,r=e.orders,i=function(e){var n=Object(u.useState)(e||1),t=Object(k.a)(n,2),a=t[0],r=t[1];return{value:a,setValue:r,onChange:function(e){+e.target.value>=1?r(+e.target.value):r(1)}}}(n&&n.quantity),o=K(n.toppings),c=function(e){var n=Object(u.useState)(e),t=Object(k.a)(n,2),a=t[0],r=t[1];return{value:a,onChange:function(e){r(e.target.value)}}}(n.choice),l=n.index>-1;function d(){t()}var m=Object(s.a)({},n,{quantity:i.value,toppings:o.toppings,choice:c.value});return p.a.createElement(p.a.Fragment,null,p.a.createElement(be,{onClick:d}),p.a.createElement(de,null,p.a.createElement(he,{img:n.img},p.a.createElement(fe,null," ",n.name," ")),p.a.createElement(me,null,p.a.createElement(H,{quantity:i}),"Pizza"===n.section&&p.a.createElement(p.a.Fragment,null,p.a.createElement("h3",null," Would you like toppings? "),p.a.createElement($,o)),n.choices&&p.a.createElement(ue,{openFood:n,choiceRadio:c})),p.a.createElement(se,null,p.a.createElement(ge,{onClick:l?function(){var e=Object(V.a)(r);e[n.index]=m,a(e),d()}:function(){a([].concat(Object(V.a)(r),[m])),d()},disabled:n.choices&&!c.value},l?"Update order: ":"Add to order: ",y(ve(m))))))}function Oe(e){return e.openFood?p.a.createElement(Ee,e):null}var je,ke,ye,we,ze,Ce=Object(b.a)(pe||(pe=Object(g.a)(["\n  body {\n    margin: 0; \n    font-family: 'Open Sans', sans-serif;\n  }\n  \n  h1, h2, h3 {\n    font-family: 'Righteous', cursive;\n  }\n  \n"]))),Se=t(6),Fe=window.firebase.database(),Pe=b.b.div(je||(je=Object(g.a)(["\n  position: fixed;\n  right: 0px;\n  top: 48px;\n  width: 340px;\n  background-color: white;\n  height: calc(100% - 48px);\n  z-index: 10;\n  box-shadow: 4px 0px 5px 4px grey;\n  display: flex;\n  flex-direction: column;\n"]))),Ie=Object(b.b)(me)(ke||(ke=Object(g.a)(["\n  padding: 20px;\n  height: 100%;\n"]))),qe=b.b.div(ye||(ye=Object(g.a)(["\n  padding: 10px 0px;\n  border-bottom: 1px solid grey;\n  ","\n"])),function(e){return e.editable?"\n    &:hover {\n      cursor: pointer;\n      background-color: #e7e7e7;\n    }\n  ":"\n    pointer-events: none; \n  "}),Ae=b.b.div(we||(we=Object(g.a)(["\n  padding: 10px 0px;\n  display: grid;\n  grid-template-columns: 20px 150px 20px 60px;\n  justify-content: space-between;\n"]))),De=b.b.div(ze||(ze=Object(g.a)(["\n  color: gray;\n  font-size: 10px;\n"])));function Te(e){var n=e.orders,t=e.setOrders,a=e.setOpenFood,r=e.login,i=e.loggedIn,o=e.setOpenOrderDialog,c=n.reduce(function(e,n){return e+ve(n)},0),l=.07*c,u=c+l;return p.a.createElement(Pe,null,0===n.length?p.a.createElement(Ie,null,"Your order's looking pretty empty."):p.a.createElement(Ie,null," ",p.a.createElement(qe,null," Your Order: ")," ",n.map(function(e,r){return p.a.createElement(qe,{editable:!0},p.a.createElement(Ae,{onClick:function(){a(Object(s.a)({},e,{index:r}))}},p.a.createElement("div",null,e.quantity),p.a.createElement("div",null,e.name),p.a.createElement("div",{style:{cursor:"pointer"},onClick:function(e){e.stopPropagation(),function(e){var a=Object(V.a)(n);a.splice(e,1),t(a)}(r)}},"\ud83d\uddd1"),p.a.createElement("div",null,y(ve(e)))),p.a.createElement(De,null,e.toppings.filter(function(e){return e.checked}).map(function(e){return e.name}).join(", ")),e.choice&&p.a.createElement(De,null,e.choice))}),p.a.createElement(qe,null,p.a.createElement(Ae,null,p.a.createElement("div",null),p.a.createElement("div",null,"Sub-Total"),p.a.createElement("div",null,y(c))),p.a.createElement(Ae,null,p.a.createElement("div",null),p.a.createElement("div",null,"Tax"),p.a.createElement("div",null,y(l))),p.a.createElement(Ae,null,p.a.createElement("div",null),p.a.createElement("div",null,"Total"),p.a.createElement("div",null,y(u)))),p.a.createElement("h4",null,"Address:"),p.a.createElement("form",null,p.a.createElement("textarea",null))),n.length>0&&p.a.createElement(se,null,p.a.createElement(ge,{onClick:function(){i?(o(!0),function(e,n){var t=n.email,a=n.displayName,r=Fe.ref("orders").push(),i=e.map(function(e){return Object.keys(e).reduce(function(n,t){return e[t]?"toppings"===t?Object(s.a)({},n,Object(Se.a)({},t,e[t].filter(function(e){return e.checked}).map(function(e){return e.name}))):Object(s.a)({},n,Object(Se.a)({},t,e[t])):n},{})});r.set({order:i,email:t,displayName:a})}(n,i)):r()}},"Checkout")))}var Re=window.firebase.auth(),We=new window.firebase.auth.GoogleAuthProvider;function Be(e){var n=e.openOrderDialog,t=e.setOpenOrderDialog,a=e.setOrders;return n?p.a.createElement(p.a.Fragment,null,p.a.createElement(be,null),p.a.createElement(de,null,p.a.createElement(me,null,p.a.createElement("h2",null,"\ud83d\ude9a Your order is on the way! "),p.a.createElement("p",null,"You have been emailed confirmation of your order. Thanks for choosing Sliceline.")),p.a.createElement(se,null,p.a.createElement(ge,{onClick:function(){a([]),t()}},"I'm still hungry")))):p.a.createElement("div",null)}var Le=function(){var e=function(){var e=Object(u.useState)(),n=Object(k.a)(e,2);return{openFood:n[0],setOpenFood:n[1]}}(),n=function(){var e=Object(u.useState)([]),n=Object(k.a)(e,2);return{orders:n[0],setOrders:n[1]}}(),t=function(){var e=Object(u.useState)("loading"),n=Object(k.a)(e,2),t=n[0],a=n[1];return Object(u.useEffect)(function(){Re.onAuthStateChanged(function(e){e?a(e):a()},function(e){console.log(e)})},[]),{login:function(){Re.signInWithPopup(We)},logout:function(){Re.signOut().then(function(){}).catch(function(e){})},loggedIn:t}}(),a=function(){var e=Object(u.useState)(),n=Object(k.a)(e,2);return{openOrderDialog:n[0],setOpenOrderDialog:n[1]}}();return function(e){var n=e.openFood,t=e.orders;Object(u.useEffect)(function(){document.title=n?n.name:0===t.length?"What's for dinner?":"[".concat(t.length,"] items in your order! ")})}(Object(s.a)({},e,n)),p.a.createElement(p.a.Fragment,null,p.a.createElement(Ce,null),p.a.createElement(Be,Object.assign({},a,n)),p.a.createElement(Oe,Object.assign({},e,n)),p.a.createElement(O,t),p.a.createElement(Te,Object.assign({},n,e,t,a)),p.a.createElement(j,null),p.a.createElement(D,e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(p.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.fef227de.chunk.js.map