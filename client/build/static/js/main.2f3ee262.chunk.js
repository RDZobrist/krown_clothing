(this.webpackJsonpkrown_clothing=this.webpackJsonpkrown_clothing||[]).push([[0],{100:function(e,t,n){},108:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n.n(r),a=n(61),i=n.n(a),o=n(44),s=n(41),u=n(83),l=(n(100),n(40)),d=(n(101),n(90)),p=n(58),b=n(84),O=n.n(b),j=n(17),f=n(23),h={currentUser:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.a.SIGN_IN_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{currentUser:t.payload,error:null});case f.a.SIGN_OUT_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{currentUser:null,error:null});case f.a.SIGN_IN_FAILURE:case f.a.SIGN_OUT_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload});default:return e}},m=n(39),S=n(27),E=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(S.a)(e),[Object(j.a)(Object(j.a)({},t),{},{quantity:1})])},_=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))},v={hidden:!0,cartItems:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a.TOGGLE_CART_HIDDEN:return Object(j.a)(Object(j.a)({},e),{},{hidden:!e.hidden});case m.a.ADD_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:E(e.cartItems,t.payload)});case m.a.CLEAR_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case m.a.REMOVE_ITEM:return Object(j.a)(Object(j.a)({},e),{},{cartItems:_(e.cartItems,t.payload)});case m.a.CLEAR_CART:return Object(j.a)(Object(j.a)({},e),{},{cartItems:[]});default:return e}},I={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},w=n(43),C={collections:null,isFetching:!1,errorMessage:void 0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.a.FETCH_COLLECTIONS_START:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0});case w.a.FETCH_COLLECTIONS_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1,collections:t.payload});case w.a.FETCH_COLLECTIONS_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},T=n(79),U={currentAdminUser:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type===T.a.SET_CURRENT_ADMIN_USER?Object(j.a)(Object(j.a)({},e),{},{currentAdminUser:t.payload}):e},A={key:"root",storage:O.a,whitelist:["cart"]},R=Object(l.b)({user:x,cart:g,directory:y,shop:N,adminUser:k}),G=Object(p.a)(A,R),L=n(0),F=n.n(L),D=n(18),M=n(35),P=n(72),H=F.a.mark(q),z=F.a.mark(K),B=F.a.mark(V);function q(){var e,t,n;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=M.d.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(D.b)(M.b,t);case 7:return n=r.sent,r.next=10,Object(D.c)(Object(P.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(D.c)(Object(P.a)(r.t0.message));case 16:case"end":return r.stop()}}),H,null,[[0,12]])}function K(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(w.a.FETCH_COLLECTIONS_START,q);case 2:case"end":return e.stop()}}),z)}function V(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.b)(K)]);case 2:case"end":return e.stop()}}),B)}var W=n(34),J=F.a.mark(se),X=F.a.mark(ue),Q=F.a.mark(le),Y=F.a.mark(de),Z=F.a.mark(pe),$=F.a.mark(be),ee=F.a.mark(Oe),te=F.a.mark(je),ne=F.a.mark(fe),re=F.a.mark(he),ce=F.a.mark(xe),ae=F.a.mark(me),ie=F.a.mark(Se),oe=F.a.mark(Ee);function se(e,t){var n,r;return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(D.b)(M.c,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(D.c)(Object(W.e)(Object(j.a)({id:r.id},r.data())));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(D.c)(Object(W.d)(c.t0));case 15:case"end":return c.stop()}}),J,null,[[0,11]])}function ue(e){var t,n,r,c,a,i;return F.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,console.log("ive been called"),o.prev=2,o.next=5,M.a.createUserWithEmailAndPassword(n,r);case 5:return a=o.sent,i=a.user,o.next=9,Object(D.c)(Object(W.j)({user:i,additionalData:{displayName:c}}));case 9:o.next=15;break;case 11:return o.prev=11,o.t0=o.catch(2),o.next=15,Object(D.c)(Object(W.h)(o.t0));case 15:case"end":return o.stop()}}),X,null,[[2,11]])}function le(e){var t,n,r;return F.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=3,se(n,r);case 3:case"end":return c.stop()}}),Q)}function de(){var e,t;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M.a.signInWithPopup(M.f);case 3:return e=n.sent,t=e.user,n.next=7,se(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(D.c)(Object(W.d)(n.t0));case 13:case"end":return n.stop()}}),Y,null,[[0,9]])}function pe(e){var t,n,r,c,a,i,o;return F.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,t.displayName,s.prev=1,s.next=4,M.a.signInWithEmailAndPassword(n,r);case 4:return c=s.sent,a=c.user,s.next=8,Object(D.b)(M.c,a);case 8:return i=s.sent,s.next=11,i.get();case 11:return o=s.sent,s.next=14,Object(D.c)(Object(W.e)(Object(j.a)({id:o.id},o.data())));case 14:s.next=19;break;case 16:s.prev=16,s.t0=s.catch(1),Object(D.c)(Object(W.d)(s.t0));case 19:case"end":return s.stop()}}),Z,null,[[1,16]])}function be(){var e;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(M.e)();case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,se(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(D.c)(Object(W.d)(t.t0));case 14:case"end":return t.stop()}}),$,null,[[0,10]])}function Oe(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.signOut();case 3:return e.next=5,Object(D.c)(Object(W.g)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(D.c)(Object(W.f)(e.t0));case 11:case"end":return e.stop()}}),ee,null,[[0,7]])}function je(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(f.a.GOOGLE_SIGN_IN_START,de);case 2:case"end":return e.stop()}}),te)}function fe(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(f.a.EMAIL_SIGN_IN_START,pe);case 2:case"end":return e.stop()}}),ne)}function he(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(f.a.SIGN_UP_START,ue);case 2:case"end":return e.stop()}}),re)}function xe(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(f.a.SIGN_UP_SUCCESS,le);case 2:case"end":return e.stop()}}),ce)}function me(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(f.a.CHECK_USER_SESSION,be);case 2:case"end":return e.stop()}}),ae)}function Se(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(f.a.SIGN_OUT_START,Oe);case 2:case"end":return e.stop()}}),ie)}function Ee(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.b)(je),Object(D.b)(fe),Object(D.b)(me),Object(D.b)(Se),Object(D.b)(he),Object(D.b)(xe)]);case 2:case"end":return e.stop()}}),oe)}var _e=n(50),ve=F.a.mark(ye),ge=F.a.mark(we),Ie=F.a.mark(Ce);function ye(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.c)(Object(_e.b)());case 2:case"end":return e.stop()}}),ve)}function we(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.d)(f.a.SIGN_OUT_SUCCESS,ye);case 2:case"end":return e.stop()}}),ge)}function Ce(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.b)(we)]);case 2:case"end":return e.stop()}}),Ie)}var Ne=F.a.mark(Te);function Te(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.b)(V),Object(D.b)(Ee),Object(D.b)(Ce)]);case 2:case"end":return e.stop()}}),Ne)}var Ue=Object(d.a)(),ke=[Ue];var Ae=Object(l.d)(G,l.a.apply(void 0,ke));Ue.run(Te);var Re,Ge,Le,Fe,De,Me,Pe,He,ze,Be,qe,Ke,Ve,We,Je,Xe=Object(p.b)(Ae),Qe=(p.b,n(29)),Ye=n(33),Ze=n(60),$e=n(45),et=n(22),tt=n(21),nt=["title","titleId"];function rt(){return rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rt.apply(this,arguments)}function ct(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function at(e,t){var n=e.title,c=e.titleId,a=ct(e,nt);return r.createElement("svg",rt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Re||(Re=r.createElement("g",null)),Ge||(Ge=r.createElement("g",null)),Le||(Le=r.createElement("g",null)),Fe||(Fe=r.createElement("g",null)),De||(De=r.createElement("g",null)),Me||(Me=r.createElement("g",null)),Pe||(Pe=r.createElement("g",null)),He||(He=r.createElement("g",null)),ze||(ze=r.createElement("g",null)),Be||(Be=r.createElement("g",null)),qe||(qe=r.createElement("g",null)),Ke||(Ke=r.createElement("g",null)),Ve||(Ve=r.createElement("g",null)),We||(We=r.createElement("g",null)),Je||(Je=r.createElement("g",null)))}var it,ot,st,ut,lt,dt,pt,bt,Ot,jt=r.forwardRef(at),ft=(n.p,tt.c.div(it||(it=Object(et.a)(["\n  width: 45px;\n  height: 45px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"])))),ht=Object(tt.c)(jt)(ot||(ot=Object(et.a)(["\n  width: 24px;\n  height: 24px;\n"]))),xt=tt.c.span(st||(st=Object(et.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]))),mt=n(12),St=Object(Ye.b)({itemCount:$e.c}),Et=Object(s.b)(St,(function(e){return{toggleCartHidden:function(){return e(Object(_e.e)())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(mt.jsxs)(ft,{onClick:t,children:[Object(mt.jsx)(ht,{}),Object(mt.jsx)(xt,{children:n})]})})),_t=(n(108),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,a=t.quantity;return Object(mt.jsxs)("div",{className:"cart-item",children:[Object(mt.jsx)("img",{src:n,loading:"lazy",alt:"item",decoding:"async"}),Object(mt.jsxs)("div",{className:"item-details",children:[Object(mt.jsx)("span",{className:"name",children:c}),Object(mt.jsxs)("span",{className:"price",children:[a," x $",r]})]})]})}),vt=c.a.memo(_t),gt=n(59),It=tt.c.div(ut||(ut=Object(et.a)(["\n  position: absolute;\n  width: 240px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]))),yt=Object(tt.c)(gt.a)(lt||(lt=Object(et.a)(["\n  margin-top: auto;\n"]))),wt=(tt.c.span(dt||(dt=Object(et.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]))),tt.c.div(pt||(pt=Object(et.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"])))),Ct=Object(Ye.b)({cartItems:$e.b}),Nt=Object(Qe.g)(Object(s.b)(Ct)((function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return Object(mt.jsxs)(It,{children:[Object(mt.jsx)(wt,{children:t.length?t.map((function(e){return Object(mt.jsx)(vt,{item:e},e.id)})):Object(mt.jsx)("span",{children:"your cart is empty...so empty"})}),Object(mt.jsx)(yt,{onClick:function(){n.push("/checkout"),r(Object(_e.e)())},children:"GO TO CHECKOUT"})]})}))),Tt=n(63),Ut=["title","titleId"];function kt(){return kt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kt.apply(this,arguments)}function At(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Rt(e,t){var n=e.title,c=e.titleId,a=At(e,Ut);return r.createElement("svg",kt({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},a),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,bt||(bt=r.createElement("desc",null,"Created with Sketch.")),Ot||(Ot=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Gt,Lt,Ft,Dt,Mt,Pt=r.forwardRef(Rt),Ht=(n.p,tt.c.div(Gt||(Gt=Object(et.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"])))),zt=(Object(tt.b)(Lt||(Lt=Object(et.a)([" \n    padding: 10px 15px;\n    cursor: pointer;\n"]))),Object(tt.c)(o.b)(Ft||(Ft=Object(et.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"])))),Bt=tt.c.div(Dt||(Dt=Object(et.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]))),qt=Object(tt.c)(o.b)(Mt||(Mt=Object(et.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"])));qt.displayName="OptionLink";var Kt,Vt,Wt=Object(Ye.b)({currentUser:Tt.a,hidden:$e.a}),Jt=Object(s.b)(Wt,(function(e){return{startUserSignout:function(){return e(Object(W.k)())}}}))((function(e){var t=e.currentUser,n=e.hidden,r=e.startUserSignout;return Object(mt.jsxs)(Ht,{children:[Object(mt.jsx)(zt,{to:"/",children:Object(mt.jsx)(Pt,{className:"logo"})}),Object(mt.jsxs)(Bt,{children:[Object(mt.jsx)(qt,{to:"/shop",children:"SHOP"}),Object(mt.jsx)(qt,{to:"/contactus",children:"CONTACT"}),t?Object(mt.jsx)(qt,{as:"div",onClick:r,children:"SIGN OUT"}):Object(mt.jsx)(qt,{to:"/signin",children:"SIGN IN"}),Object(mt.jsx)(Et,{})]}),n?null:Object(mt.jsx)(Nt,{})]})})),Xt=Object(tt.a)(Kt||(Kt=Object(et.a)(["\n\tbody {\n\t\tfont-family: 'Open Sans Condensed';\n\t\tpadding: 20px 40px;\n\t\t@media screen and (max-width: 800px) {\n\t\t\tpadding: 10px;\n\t\t}\n        @media screen and (max-width: 600px) {\n\t\t\tpadding: 10px;\n\t\t}\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: black;\n\t}\n\t*, *::before, *::after {\n        box-sizing: border-box;\n      }\n   \n\n"]))),Qt=n(76),Yt=n(82),Zt=tt.c.div(Vt||(Vt=Object(et.a)(["\nposition: fixed;\nalign-items: center;\nwidth: 80vh;\nwidth: 100vh;\nmargin: 20px;\npadding: 10px;\n"])));Object(Ze.a)();var $t=function(){return Object(mt.jsxs)(Zt,{children:[Object(mt.jsx)("h2",{children:"Do we know each other yet?"}),Object(mt.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("form submitted")},children:[Object(mt.jsxs)("div",{children:[Object(mt.jsx)("span",{children:"First Name"}),Object(mt.jsx)("input",{type:"First Name",label:"First name",name:"firstname",value:"firstname"})]}),Object(mt.jsxs)("div",{children:[Object(mt.jsx)("span",{children:"Last Name"}),Object(mt.jsx)("input",{type:"Last Name",label:"Last Name name",name:"lastname",value:"lastname"})]}),Object(mt.jsxs)("div",{children:[Object(mt.jsx)("span",{children:"Date of Birth"}),Object(mt.jsx)("input",{type:"DOB",label:"DOB",name:"dob",value:"dob"})]}),Object(mt.jsxs)("div",{children:[Object(mt.jsx)("span",{children:"Email"}),Object(mt.jsx)("input",{type:"email",label:"Email",name:"email",value:"email"})]}),Object(mt.jsxs)("div",{children:[Object(mt.jsx)("span",{children:"Password"}),Object(mt.jsx)("input",{type:"password",label:"Password",name:"password",value:"password"})]}),Object(mt.jsxs)("div",{children:[Object(mt.jsx)("span",{children:"Confirm Password"}),Object(mt.jsx)("input",{type:"password",label:"Confirm password",name:"confirmpassword",value:"confirmpassword"})]}),Object(mt.jsx)(gt.a,{type:"submit",children:" Sign Me Up "})]})]})},en=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,149))})),tn=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,150))})),nn=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,151))})),rn=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,155))})),cn=Object(Ze.a)();console.log("THis is perf: ",cn);var an=Object(Ye.b)({currentUser:Tt.a,cartItems:$e.c}),on=Object(s.b)(an,(function(e){return{checkUserSession:function(){return e(Object(W.a)())}}}))((function(e){var t=e.checkUserSession,n=e.currentUser,c=e.cartItems;return Object(r.useEffect)((function(){t()}),[t]),Object(mt.jsxs)("div",{children:[Object(mt.jsx)(Xt,{}),Object(mt.jsx)(Jt,{}),Object(mt.jsx)(Qe.d,{children:Object(mt.jsx)(Yt.a,{children:Object(mt.jsxs)(r.Suspense,{fallback:Object(mt.jsx)(Qt.a,{}),children:[Object(mt.jsx)(Qe.b,{exact:!0,path:"/",component:en}),Object(mt.jsx)(Qe.b,{path:"/contactus",component:$t}),Object(mt.jsx)(Qe.b,{path:"/shop",component:rn}),Object(mt.jsx)(Qe.b,{exact:!0,path:"/checkout",render:function(){return c?Object(mt.jsx)(nn,{}):Object(mt.jsx)(Qe.a,{to:"/shop"})}}),Object(mt.jsx)(Qe.b,{exact:!0,path:"/signin",render:function(){return n?Object(mt.jsx)(Qe.a,{to:"/"}):Object(mt.jsx)(tn,{})}})]})})})]})}));i.a.render(Object(mt.jsx)(s.a,{store:Ae,children:Object(mt.jsx)(o.a,{children:Object(mt.jsx)(u.a,{persistor:Xe,children:Object(mt.jsx)(on,{})})})}),document.getElementById("root"))},23:function(e,t,n){"use strict";t.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",FACEBOOK_SIGN_IN_START:"FACEBOOK_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE"}},34:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return O}));var r=n(23),c=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},a=function(e){var t=e.email,n=e.password;return{type:r.a.EMAIL_SIGN_IN_START,payload:{email:t,password:n}}},i=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},o=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},s=function(e){var t=e.user,n=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:t,additionalData:n}}},u=function(e){return{type:r.a.SIGN_UP_START,payload:e}},l=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}},d=function(){return{type:r.a.CHECK_USER_SESSION}},p=function(){return{type:r.a.SIGN_OUT_START}},b=function(){return{type:r.a.SIGN_OUT_SUCCESS}},O=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}}},35:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return j}));var r=n(0),c=n.n(r),a=n(17),i=n(1),o=n(49),s=(n(112),n(105),n(91));n(69);o.a.initializeApp({apiKey:"AIzaSyCnPhU5FOQJ5iWGPtNYnNYhC2jZJglQ0DM",authDomain:"krownclothingdb.firebaseapp.com",projectId:"krownclothingdb",storageBucket:"krownclothingdb.appspot.com",messagingSenderId:"677870554234",appId:"1:677870554234:web:1a64600583e3b6042d7fc3",measurementId:"G-XNXCM6FTL2"});var u=function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=j.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,o=t.email,s=new Date,e.prev=9,e.next=12,r.set(Object(a.a)({displayName:i,email:o,createdAt:s},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},d=function(){return new Promise((function(e,t){var n=p.onAuthStateChanged((function(t){n(),e(t)}),t)}))},p=(Object(s.a)(),o.a.auth()),b=new o.a.auth.GoogleAuthProvider;b.setCustomParameters({prompt:"select_account"});var O=new o.a.auth.FacebookAuthProvider;O.setCustomParameters({display:"popup"});var j=o.a.firestore();o.a},39:function(e,t,n){"use strict";t.a={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM:"CLEAR_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_CART:"CLEAR_CART"}},43:function(e,t,n){"use strict";t.a={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s}));var r=n(33),c=function(e){return e.cart},a=Object(r.a)([c],(function(e){return e.cartItems})),i=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),o=Object(r.a)([c],(function(e){return e.hidden})),s=Object(r.a)([a],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))},50:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(39),c=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},a=function(e){return{type:r.a.CLEAR_ITEM,payload:e}},i=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},o=function(e){return{type:r.a.ADD_ITEM,payload:e}},s=function(){return{type:r.a.CLEAR_CART}}},59:function(e,t,n){"use strict";var r=n(17),c=n(75),a=(n(7),n(81)),i=n(12),o=["children"];t.a=function(e){var t=e.children,n=Object(c.a)(e,o);return Object(i.jsx)(a.a,Object(r.a)(Object(r.a)({},n),{},{children:t}))}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(33),c=Object(r.a)([function(e){return e.user}],(function(e){return e.currentUser}))},72:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(43),c=(n(35),function(){return{type:r.a.FETCH_COLLECTIONS_START}}),a=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},76:function(e,t,n){"use strict";n(7),n(110);var r=n(12);t.a=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"spinner"}),Object(r.jsx)("div",{className:"spinner-text",children:"We're working on it..."})]})}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={ADMIN_SIGN_IN_START:"ADMIN_SIGN_IN_START",ADMIN_SIGN_IN_SUCCESS:"ADMIN_SIGN_IN_SUCCESS",ADMIN_SIGN_IN_FAILURE:"ADMIN_SIGN_IN_FAILURE",SET_CURRENT_ADMIN_USER:"SET_CURRENT_ADMIN_USER"}},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r,c,a,i,o=n(22),s=n(21),u=Object(s.b)(r||(r=Object(o.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),l=Object(s.b)(c||(c=Object(o.a)(["\n  background-color: white;\n  color: black;\n  border-radius: 3px;\n  border: 1px solid black;\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),d=Object(s.b)(a||(a=Object(o.a)(["\n  background-color: #4285f4;\n  color: white;\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),p=s.c.button(i||(i=Object(o.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"])),(function(e){return e.isGoogleSignIn?d:e.inverted?l:u}))},82:function(e,t,n){"use strict";var r,c,a,i=n(2),o=n(3),s=n(13),u=n(14),l=n(7),d=n.n(l),p=n(22),b=n(21),O=b.c.div(r||(r=Object(p.a)(["\n  height: 66.66vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),j=b.c.div(c||(c=Object(p.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"])),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),f=b.c.h2(a||(a=Object(p.a)(["\n  font-size: 28px;\n  color: #2f8e89;\n"]))),h=n(12),x=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={hasErrored:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e),console.log(t)}},{key:"render",value:function(){return this.state.hasErrored?Object(h.jsxs)(O,{children:[Object(h.jsx)(j,{imageUrl:"https://i.imgur.com/WvEu0cO.png"}),Object(h.jsx)(f,{children:" Sorry, looks like we cooked this page a little too long"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),n}(d.a.Component);t.a=x}},[[111,1,2]]]);
//# sourceMappingURL=main.2f3ee262.chunk.js.map