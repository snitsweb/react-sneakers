(this["webpackJsonpsneakers.local"]=this["webpackJsonpsneakers.local"]||[]).push([[0],{13:function(e,t,a){e.exports={content_card:"Card_content_card__2ncLG",card_like_btn:"Card_card_like_btn__1qP5z",card_title:"Card_card_title__1dKuc",card_footer:"Card_card_footer__2uatL",card_price_wr:"Card_card_price_wr__1Hefd",card_price_text:"Card_card_price_text__18-hf",card_price:"Card_card_price__RXnHy",card_btn:"Card_card_btn__381Gb"}},4:function(e,t,a){e.exports={overlay:"Drawer_overlay__2qfIB",visible:"Drawer_visible__AZAXZ",drawer:"Drawer_drawer__2tRNY",active:"Drawer_active__1bNzd","title-wrapper":"Drawer_title-wrapper__1QdrS",title:"Drawer_title__2_HCR","cart-close":"Drawer_cart-close__3RfPR",cart_items_wr:"Drawer_cart_items_wr__1m04E","cart-items":"Drawer_cart-items__3Mvsf","cart-item":"Drawer_cart-item__18Wur","cart-item-img":"Drawer_cart-item-img__3JNDm","cart-item-desc":"Drawer_cart-item-desc__1m76c","cart-item-price":"Drawer_cart-item-price__2ZFtv","cart-item-remove":"Drawer_cart-item-remove__1hskd","drawer-btn":"Drawer_drawer-btn__9hEFd",disable:"Drawer_disable__2H_x4","drawer-footer":"Drawer_drawer-footer__38NQa"}},41:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),i=a(34),s=a.n(i),n=a(15),o=(a(41),a(12)),d=a(11),l=a.n(d),m=a(14),j=a(5),u=a(7),b=a.n(u),h=a(2),x=r.a.createContext({}),f=function(){var e=r.a.useContext(x),t=e.cartItems,a=e.setCartItems,c=0!==t.length?t.reduce((function(e,t){return t.price+e}),0):0;return{cartItems:t,setCartItems:a,totalPrice:c}},p=a(1);var v=function(e){var t=f().totalPrice;return Object(p.jsx)("header",{className:"header",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"header-inner",children:[Object(p.jsx)(n.b,{to:"/",children:Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)("img",{width:40,height:40,className:"logo-img",src:"/img/logo.png",alt:"Logotype"}),Object(p.jsxs)("div",{className:"logoinfo",children:[Object(p.jsx)("h3",{className:"logo-title",children:"REACT SNEAKERS"}),Object(p.jsx)("span",{className:"logo-text",children:"Sklep najlepszych adidas\xf3w"})]})]})}),Object(p.jsxs)("ul",{className:"list",children:[Object(p.jsxs)("li",{className:"list-item",onClick:e.onClickCart,children:[Object(p.jsx)("img",{className:"list-item-img",src:"/img/cart.svg",width:18,height:18,alt:"cart"}),Object(p.jsxs)("span",{className:"list-item-text",children:[t," z\u0142."]})]}),Object(p.jsx)("li",{className:"list-item",children:Object(p.jsx)(n.b,{to:"/favourites",children:Object(p.jsx)("img",{className:"list-item-img",src:"/img/favorite.svg",width:18,height:18,alt:"favorite"})})}),Object(p.jsx)("li",{className:"list-item",children:Object(p.jsx)(n.b,{to:"/orders",children:Object(p.jsx)("img",{className:"list-item-img",src:"/img/union.svg",width:18,height:18,alt:"My account"})})})]})]})})})},O=function(e){var t=e.image,a=e.title,c=e.description,i=r.a.useContext(x).setCartOpened;return Object(p.jsxs)("div",{className:"cart_empty",children:[Object(p.jsx)("img",{src:t,alt:"Empty box",className:"cart_empty_img"}),Object(p.jsx)("h4",{className:"cart_empty_title",children:a}),Object(p.jsx)("p",{className:"cart_empty_text",children:c}),Object(p.jsxs)("button",{onClick:function(){return i(!1)},className:"cart_empty_btn",children:[Object(p.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow",className:"cart_empty_btn_img"}),"Wr\xf3\u0107"]})]})},_=a(4),g=a.n(_);var N=function(e){var t=e.onCloseCart,a=e.onRemove,c=e.items,i=void 0===c?[]:c,s=e.opened,n=f(),o=n.cartItems,d=n.setCartItems,u=n.totalPrice,h=r.a.useState(!1),x=Object(j.a)(h,2),v=x[0],_=x[1],N=r.a.useState(0),w=Object(j.a)(N,2),k=w[0],C=w[1],y=r.a.useState(!1),I=Object(j.a)(y,2),z=I[0],S=I[1],A=function(){var e=Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,b.a.post("https://60e636ff086f730017a6feca.mockapi.io/orders",{items:o});case 4:t=e.sent,a=t.data,_(!0),d([]),C(a.id),0!==o.length&&o.forEach((function(e){return b.a.delete("https://60e636ff086f730017a6feca.mockapi.io/cart/".concat(e.id))})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert("B\u0142\u0105d w trakcie z\u0142\xf3\u017cenia zamowienia"),console.log(e.t0);case 16:S(!1);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(g.a.overlay," ").concat(s?g.a.visible:""),children:Object(p.jsxs)("div",{className:"".concat(g.a.drawer," ").concat(s?g.a.active:""),children:[Object(p.jsxs)("div",{className:g.a["title-wrapper"],children:[Object(p.jsx)("h2",{className:g.a.title,children:"Koszyk"}),Object(p.jsx)("img",{onClick:t,src:"/img/remove-active.svg",alt:"Usu\u0144",className:g.a["cart-close"],title:"Zamknij"})]}),0===i.length?Object(p.jsx)(O,{image:v?"/img/completeCart.png":"/img/empty-cart.png",title:v?"Zamowinie zosta\u0142o z\u0142o\u017cone":"Koszyk jest pusty",description:v?"Twoje zam\xf3wienie # ".concat(k," zostanie wkr\xf3tce dostarczone kurierem"):"Dodaj co najmniej jedn\u0105 par\u0119 trampek do zam\xf3wienia."}):Object(p.jsxs)("div",{className:g.a.cart_items_wr,children:[Object(p.jsx)("div",{className:g.a["cart-items"],children:i.filter((function(e){return!("{}"===JSON.stringify(e))})).map((function(e){return Object(p.jsxs)("div",{className:g.a["cart-item"],children:[Object(p.jsx)("img",{src:e.img,alt:e.name,className:g.a["cart-item-img"]}),Object(p.jsxs)("div",{className:g.a["cart-item-desc"],children:[Object(p.jsx)("p",{className:g.a["cart-item-title"],children:e.name}),Object(p.jsxs)("p",{className:g.a["cart-item-price"],children:[e.price," z\u0142."]})]}),Object(p.jsx)("img",{onClick:function(){a(e)},src:"/img/remove-active.svg",alt:"Usu\u0144",className:g.a["cart-item-remove"],title:"Usu\u0144"})]},e.img+e.price+e.name)}))}),Object(p.jsxs)("div",{className:g.a["drawer-footer"],children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Cena:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[u," z\u0142."]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"Podatek 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[.05*u," z\u0142."]})]})]}),Object(p.jsxs)("button",{onClick:A,className:"".concat(g.a["drawer-btn"]," ").concat(z&&"disable"),children:["Z\u0142\xf3\u017c zam\xf3wienie",Object(p.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"})]})]})]})]})})},w=a(20),k=a(13),C=a.n(k),y=a(36);var I=function(e){var t=e.onFavourite,a=e.onPlus,c=e.img,i=e.price,s=e.name,n=e.itemId,o=e.id,d=(e.favourited,e.loading),l=void 0!==d&&d,m=r.a.useContext(x),u=m.isItemAdded,b=m.isItemFavourited,h=r.a.useState(b({itemId:n})),f=Object(j.a)(h,2),v=f[0],O=f[1];return Object(p.jsx)("div",{className:C.a.content_card,children:l?Object(p.jsxs)(y.a,{speed:2,width:160,height:200,viewBox:"0 0 160 200",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"13",y:"0",rx:"5",ry:"5",width:"133",height:"112"}),Object(p.jsx)("rect",{x:"13",y:"119",rx:"6",ry:"6",width:"120",height:"15"}),Object(p.jsx)("rect",{x:"13",y:"140",rx:"6",ry:"6",width:"80",height:"15"}),Object(p.jsx)("rect",{x:"99",y:"46",rx:"6",ry:"6",width:"32",height:"32"}),Object(p.jsx)("rect",{x:"83",y:"70",rx:"6",ry:"6",width:"48",height:"32"}),Object(p.jsx)("rect",{x:"13",y:"166",rx:"6",ry:"6",width:"50",height:"32"}),Object(p.jsx)("rect",{x:"100",y:"166",rx:"6",ry:"6",width:"32",height:"32"})]}):Object(p.jsxs)(r.a.Fragment,{children:[t&&Object(p.jsx)("div",{className:C.a.card_like_btn,onClick:function(){t({img:c,price:i,name:s,itemId:n,id:o}),O(!v)},children:Object(p.jsx)("img",{src:b({itemId:n})?"/img/card-liked.svg":"/img/card-unliked.svg",alt:"Unliked",title:"Dodaj do listy \u017cycze\u0144"})}),Object(p.jsx)("img",{src:c,alt:"Adidas",width:133,height:112}),Object(p.jsx)("h4",{className:C.a.card_title,children:s}),Object(p.jsxs)("div",{className:C.a.card_footer,children:[Object(p.jsxs)("div",{className:C.a.card_price_wr,children:[Object(p.jsx)("span",{className:C.a.card_price_text,children:"Cena:"}),Object(p.jsxs)("span",{className:C.a.card_price,children:[i," z\u0142."]})]}),a&&Object(p.jsx)("button",{className:C.a.card_btn,onClick:function(){a({img:c,price:i,name:s,itemId:n,id:o})},children:Object(p.jsx)("img",{src:u({itemId:n})?"/img/btn-added.svg":"/img/btn-add.svg",alt:"Add to cart",width:32,height:32,title:"Dodaj do koszyka"})})]})]})})};var z=function(e){var t=r.a.useContext(x).isItemFavourited;return Object(p.jsx)("section",{className:"content",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"content-inner",children:[Object(p.jsxs)("div",{className:"content-title-wrapper",children:[Object(p.jsx)("h1",{className:"title",children:e.searchValue?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(e.searchValue):"Wszystkie adidasy"}),Object(p.jsxs)("div",{className:"search-panel",children:[Object(p.jsx)("img",{src:"/img/search.svg",alt:"Search",className:"search-icon"}),Object(p.jsx)("input",{onChange:e.onChangeSearchInput,type:"text",value:e.searchValue,placeholder:"Szukaj..."}),e.searchValue&&Object(p.jsx)("img",{src:"/img/remove-active.svg",onClick:function(){return e.setSearchValue("")},alt:"Clear input",className:"clear_btn"})]})]}),Object(p.jsx)("div",{className:"content-cards",children:function(){var a=e.items.filter((function(t){return t.name.toLowerCase().includes(e.searchValue.toLowerCase())}));return(e.isLoading?Object(o.a)(Array(10)):a).map((function(a,c){return Object(p.jsx)(I,Object(w.a)({onFavourite:function(t){return e.onAddFavourite(t)},onPlus:function(t){return e.onAddToCart(t)},loading:e.isLoading,favourited:a&&t(a)},a),c)}))}()})]})})})};var S=function(e){var t=e.onAddToCart,a=(e.isFavourited,r.a.useContext(x)),c=a.favourites,i=a.onAddFavourite,s=a.isItemFavourited;return Object(p.jsx)("section",{className:"content",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"content-inner",children:[Object(p.jsx)("div",{className:"content-title-wrapper",children:Object(p.jsx)("h1",{className:"title",children:"Ulubione"})}),Object(p.jsx)("div",{className:"content-cards",children:c.map((function(e){return Object(p.jsx)(I,{name:e.name,price:e.price,img:e.img,onFavourite:function(e){return i(e)},onPlus:function(e){return t(e)},favourited:s(e),itemId:e.itemId,id:e.id},e.name+e.price+e.img)}))})]})})})};var A=function(e){e.onAddToCart,e.isFavourited;var t=r.a.useContext(x),a=(t.onAddFavourite,t.isItemFavourited),c=r.a.useState([]),i=Object(j.a)(c,2),s=i[0],n=i[1],d=r.a.useState(!0),u=Object(j.a)(d,2),h=u[0],f=u[1];return r.a.useEffect((function(){Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://60e636ff086f730017a6feca.mockapi.io/orders/");case 3:t=e.sent,a=t.data,n(a.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),f(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsx)("section",{className:"content",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"content-inner",children:[Object(p.jsx)("div",{className:"content-title-wrapper",children:Object(p.jsx)("h1",{className:"title",children:"Moje zam\xf3wienia"})}),Object(p.jsx)("div",{className:"content-cards",children:(h?Object(o.a)(Array(8)):s).map((function(e,t){return Object(p.jsx)(I,Object(w.a)({favourited:a(e),loading:h},e),t)}))})]})})})};var D=function(){var e=r.a.useState([]),t=Object(j.a)(e,2),a=t[0],c=t[1],i=r.a.useState([]),s=Object(j.a)(i,2),n=s[0],d=s[1],u=r.a.useState([]),f=Object(j.a)(u,2),O=f[0],_=f[1],g=r.a.useState(""),w=Object(j.a)(g,2),k=w[0],C=w[1],y=r.a.useState(!1),I=Object(j.a)(y,2),D=I[0],F=I[1],P=r.a.useState(!0),E=Object(j.a)(P,2),R=E[0],L=E[1];r.a.useEffect((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t,a,r,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),e.next=4,Promise.all([b.a.get("https://60e636ff086f730017a6feca.mockapi.io/items"),b.a.get("https://60e636ff086f730017a6feca.mockapi.io/cart"),b.a.get("https://60e636ff086f730017a6feca.mockapi.io/favourite")]);case 4:t=e.sent,a=Object(j.a)(t,3),r=a[0],i=a[1],s=a[2],d(i.data),_(s.data),c(r.data),L(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Nie uda\u0142o si\u0119 pobra\u0107 danych z serwera"),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=n.find((function(e,a){return e.itemId===t.itemId})))){e.next=7;break}b.a.delete("https://60e636ff086f730017a6feca.mockapi.io/cart/".concat(a.id)),d((function(e){return e.filter((function(e){return e.itemId!==t.itemId}))})),e.next=12;break;case 7:return e.next=9,b.a.post("https://60e636ff086f730017a6feca.mockapi.io/cart",t);case 9:c=e.sent,r=c.data,d((function(e){return[].concat(Object(o.a)(e),[r])}));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("Nie uda\u0142o si\u0119 doda\u0107 do koszyka"),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),T=function(e){try{var t=O.find((function(t){return Number(t.itemId)===Number(e.itemId)}));t?(b.a.delete("https://60e636ff086f730017a6feca.mockapi.io/favourite/".concat(t.id)),_((function(t){return t.filter((function(t){return t.itemId!==e.itemId}))}))):(b.a.post("https://60e636ff086f730017a6feca.mockapi.io/favourite/",e),_((function(t){return[].concat(Object(o.a)(t),[e])})))}catch(a){alert("Nie uda\u0142o si\u0119 zmieni\u0107 list\u0119 ulubionych"),console.log(a)}};return Object(p.jsx)(x.Provider,{value:{cartItems:n,favourites:O,items:a,setCartItems:d,isItemAdded:function(e){return n.some((function(t){return Number(t.itemId)===Number(e.itemId)}))},isItemFavourited:function(e){return O.some((function(t){return Number(t.itemId)===Number(e.itemId)}))},onAddFavourite:T,setCartOpened:F},children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(N,{onRemove:V,items:n,onCloseCart:function(){return F(!1)},opened:D}),Object(p.jsx)(v,{onClickCart:function(){return F(!0)}}),Object(p.jsxs)("main",{children:[Object(p.jsx)(h.a,{path:"/",exact:!0,children:Object(p.jsx)(z,{searchValue:k,onChangeSearchInput:function(e){C(e.target.value)},setSearchValue:C,onAddFavourite:T,onAddToCart:V,items:a,cartItems:n,isLoading:R})}),Object(p.jsx)(h.a,{path:"/favourites",children:Object(p.jsx)(S,{onAddFavourite:T,onAddToCar:V})}),Object(p.jsx)(h.a,{path:"/orders",children:Object(p.jsx)(A,{})})]})]})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(n.a,{children:Object(p.jsx)(D,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f26af835.chunk.js.map