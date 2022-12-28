(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n,r=a(45),o=a(8),c=a(9),l=a(11),i=a(10),s=a(0),u=a.n(s),m=a(17),d=a(153),p=a.n(d),f=a(46),g=a(32),b=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement(h,{className:"navbar navbar-expand-sm navbar-dark px-sm-5"},u.a.createElement(m.b,{to:"/store"},u.a.createElement("img",{src:p.a,alt:"*Logo*",className:"navbar-brand"})),u.a.createElement("ul",{className:"navbar-nav align-items-center"},u.a.createElement("li",{className:"nav-item ml-5"},u.a.createElement(m.b,{to:"/store",className:"nav-link"},"products"))),u.a.createElement(m.b,{to:"/cart",className:"ml-auto"},u.a.createElement(g.ButtonContainer,null,u.a.createElement("span",{className:"mr-2"},u.a.createElement("i",{className:"fas fa-cart-plus"})),"my cart")))}}]),a}(s.Component),h=f.a.nav(n||(n=Object(r.a)(["\n  background: var(--mainBlue);\n  .nav-link {\n    color: var(--mainWhite) !important;\n    font-size: 1.3rem;\n    text-transform: capitalize;\n  }\n"])));t.default=b},103:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(8),r=a(9),o=a(11),c=a(10),l=a(0),i=a.n(l),s=a(104),u=a(64),m=(a(51),a(19)),d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"py-5"},i.a.createElement("div",{className:"container"},i.a.createElement(u.default,{name:"our",title:"products"}),i.a.createElement("div",{className:"row"},i.a.createElement(m.ProductConsumer,null,(function(e){return e.products.map((function(e){return i.a.createElement(s.default,{key:e.id,product:e})}))}))))))}}]),a}(l.Component)},104:function(e,t,a){"use strict";a.r(t);var n,r=a(45),o=a(8),c=a(9),l=a(11),i=a(10),s=a(0),u=a.n(s),m=a(46),d=a(17),p=a(19),f=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.product,t=e.id,n=e.title,r=e.img,o=e.price,c=e.inCart;return u.a.createElement(g,{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},u.a.createElement("div",{className:"card"},u.a.createElement(p.ProductConsumer,null,(function(e){return u.a.createElement("div",{className:"img-container p-5",onClick:function(){return e.handleDetail(t)}},u.a.createElement(d.b,{to:"/details"},u.a.createElement("img",{src:a(119)("./".concat(r)),alt:"product image",className:"card-img-top"})),u.a.createElement("button",{className:"cart-btn",onClick:function(){e.addToCart(t),e.openModal(t)},disabled:!!c},c?u.a.createElement("p",{className:"text-capitilize mb-0",disabled:!0},"inCart"):u.a.createElement("i",{className:"fas fa-cart-plus"})))})),u.a.createElement("div",{className:"card-footer d-flex justify-content-between"},u.a.createElement("p",{className:"align-self-center mb-0"},n),u.a.createElement("h5",{className:"text-blue font-italic mb-0"},u.a.createElement("span",{className:"mr-1"},"$",o)))))}}]),n}(s.Component),g=m.a.div(n||(n=Object(r.a)(["\n\t.card{\n\t\tborder-color:transparent;\n\t\ttransition:all 0.35s linear;\n\t}\n\n\t.card-footer{\n\t\tbackground: transparent;\n\t\tborder-top:transparent;\n\t\ttransition:all 0.35s linear;\n\n\t}\n\t&:hover{\n\t\t.card{\n\t\t\tborder: 0.04rem solid rgba(0,0,0,0.2);\n\t\t\tborder-top-left-radius: 50px;\n\t\t\tborder-top-right-radius:50px;\n\t\t\tbox-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);\n\t\t}\n\t\t.card-footer{\n\t\t\tbackground: rgba(247,247,247);\n\t\t}\n\t}\n\t.img-container{\n\t\tposition:relative;\n\t\toverflow:hidden;\n\t}\n\n\t.img-container:hover .card-img-top{\n\t\ttransform:scale(1.2);\n\t}\n\n\t.card-img-top{\n\t\ttransition: all 0.35s linear;\n\t}\n\n\t.cart-btn {\n\t\tposition:absolute;\n\t\tbottom:0;\n\t\tright:0;\n\t\tpadding:0.2rem 0.4rem;\n\t\tbackground: var(--lightBlue);\n\t\tborder:none;\n\t\tcolor:var(--mainWhite);\n\t\tfont-size:1.4rem;\n\t\tborder-top-left-radius: 0.5rem;\n\t\ttransform:translate(100%,100%);\n\t\ttransition: all 0.35s linear;\n\t}\n\t.img-container:hover .cart-btn{\n\t\ttransform:translate(0%,0%);\n\t}\n\n\t.cart-btn:hover{\n\t\tcolor:var(--mainBlue);\n\t\tcursor:pointer;\n\t}\n"])));t.default=f},105:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),o=a(11),c=a(10),l=a(0),i=a.n(l),s=a(64),u=a(106),m=a(107),d=a(19),p=a(108),f=a(110),g=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("section",null,i.a.createElement(d.ProductConsumer,null,(function(t){return t.cart.length>0?i.a.createElement(i.a.Fragment,null,i.a.createElement(s.default,{name:"your",title:"cart"}),i.a.createElement(u.default,null),i.a.createElement(p.default,{value:t}),i.a.createElement(f.default,{value:t,history:e.props.history})):i.a.createElement(m.default,null)})))}}]),a}(l.Component);t.default=g},106:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var n=a(0),r=a.n(n);function o(){return r.a.createElement("div",{className:"container-fluid text-center d-none d-lg-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"name of product")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))}},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);t.default=function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title"},r.a.createElement("h1",null,"your cart is currently empty"))))}},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(109);t.default=function(e){var t=e.value,a=t.cart;return console.log(t,a),r.a.createElement("div",{className:"container-fluid"},a.map((function(e){return r.a.createElement(o.default,{key:e.id,item:e,value:t})})))}},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);t.default=function(e){var t=e.item,n=e.value,o=t.id,c=t.title,l=t.img,i=t.price,s=t.total,u=t.count,m=n.increment,d=n.decrement,p=n.removeItem;return r.a.createElement("div",{className:"row my-5 text-capitilize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:a(119)("./".concat(l)),style:{width:"5rem",height:"5rem"},className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"}," product : "),c),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"}," price : "),"$",i),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return d(o)}},"-"),r.a.createElement("span",{className:"btn btn-black mx-1"},u),r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return m(o)}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("div",{className:"cart-icon"},r.a.createElement("i",{className:"fas fa-trash",onClick:function(){return p(o)}}))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("strong",null,"item total : $ ",s)))}},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a(111);t.default=function(e){var t=e.value,a=e.history,n=t.cartSubTotal,l=t.cartTax,i=t.cartTotal,s=t.clearCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-3 px-5",type:"button",onClick:function(){return s()}},"clear cart")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"subtotal:"),r.a.createElement("strong",null,"$ ",n)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"tax:"),r.a.createElement("strong",null,"$ ",l)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"total:"),r.a.createElement("strong",null,"$ ",i)),r.a.createElement(c.default,{total:i,clearCart:s,history:a})))))}},111:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(8),r=a(9),o=a(11),c=a(10),l=a(0),i=a.n(l),s=a(252),u=a.n(s),m=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,{env:"sandbox",client:{sandbox:"YOUR-SANDBOX-APP-ID",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:1,onError:function(e){console.log("Error!",e)},onSuccess:function(e){console.log("The payment was succeeded!",e)},onCancel:function(e){console.log("The payment was cancelled!",e)}})}}]),a}(i.a.Component)},112:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),o=a(11),c=a(10),l=a(0),i=a.n(l),s=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 mx-auto text-center text-title text-uppercase pt-5"},i.a.createElement("h1",{className:"display-3"},"404"),i.a.createElement("h1",null,"error"),i.a.createElement("h2",null,"page not found"),i.a.createElement("h3",null,"the requested URL",i.a.createElement("span",{className:"text-danger"}," ",this.props.location.pathname),"was not found"))))}}]),a}(l.Component);t.default=s},113:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),o=a(11),c=a(10),l=a(0),i=a.n(l),s=a(19),u=a(17),m=a(32),d=function(e){Object(o.a)(l,e);var t=Object(c.a)(l);function l(){return Object(n.a)(this,l),t.apply(this,arguments)}return Object(r.a)(l,[{key:"render",value:function(){return i.a.createElement(s.ProductConsumer,null,(function(e){var t=e.detailProduct,n=t.id,r=t.company,o=t.img,c=t.info,l=t.price,s=t.title,d=t.inCart;return i.a.createElement("div",{className:"container py-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},i.a.createElement("h1",null,s))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},i.a.createElement("img",{src:a(119)("./".concat(o)),className:"img-fluid",alt:"product"})),i.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},i.a.createElement("h2",null,"model : ",s),i.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},"made by : ",i.a.createElement("span",{className:"text-uppercase"},r)),i.a.createElement("h4",{className:"text-blue"},i.a.createElement("strong",null,"price : ",i.a.createElement("span",null,"$"),l)),i.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"some info about product"),i.a.createElement("p",{className:"text-muted lead"},c),i.a.createElement(u.b,{to:"/store"},i.a.createElement(m.ButtonContainer,null,"back to product")),i.a.createElement(m.ButtonContainer,{cart:!0,disabled:d,onClick:function(){e.addToCart(n),e.openModal(n)}},d?"inCart":"add to cart"))))}))}}]),l}(l.Component);t.default=d},114:function(e,t,a){"use strict";a.r(t);var n,r=a(45),o=a(8),c=a(9),l=a(11),i=a(10),s=a(0),u=a.n(s),m=a(46),d=a(19),p=a(32),f=a(17),g=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return u.a.createElement(d.ProductConsumer,null,(function(e){var t=e.modalOpen,a=e.closeModal,n=e.modalProduct,r=n.img,o=n.title,c=n.price;return t?u.a.createElement(b,null,u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{id:"modal",className:"col-8 p-5 mx-auto col-md-6 col-lg-4 text-center text-capitalize"},u.a.createElement("h5",null,"item added to the cart"),u.a.createElement("img",{src:r,alt:"product-img",className:"img-fluid"}),u.a.createElement("h5",null,o),u.a.createElement("h5",{className:"text-muted"},"price : $ ",c),u.a.createElement(f.b,{to:"/store"},u.a.createElement(p.ButtonContainer,{onClick:function(){return a()}},"store")),u.a.createElement(f.b,{to:"/cart"},u.a.createElement(p.ButtonContainer,{cart:!0,onClick:function(){return a()}},"go to cart")))))):null}))}}]),a}(s.Component),b=m.a.div(n||(n=Object(r.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  #modal {\n    background: var(--mainWhite);\n  }\n"])));t.default=g},115:function(e,t,a){"use strict";a.r(t),a.d(t,"register",(function(){return r})),a.d(t,"unregister",(function(){return c}));var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("/store",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/store","/service-worker.js");n?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(t,e)}))}}function o(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},119:function(e,t,a){var n={"./":75,"./App":62,"./App.css":162,"./App.js":62,"./App.test":163,"./App.test.js":163,"./components/Button":32,"./components/Button.js":32,"./components/Cart/Cart":105,"./components/Cart/Cart.js":105,"./components/Cart/CartColumns":106,"./components/Cart/CartColumns.js":106,"./components/Cart/CartItem":109,"./components/Cart/CartItem.js":109,"./components/Cart/CartList":108,"./components/Cart/CartList.js":108,"./components/Cart/CartTotals":110,"./components/Cart/CartTotals.js":110,"./components/Cart/EmptyCart":107,"./components/Cart/EmptyCart.js":107,"./components/Cart/PayPalButton":111,"./components/Cart/PayPalButton.js":111,"./components/Cart/package":210,"./components/Cart/package.json":210,"./components/Default":112,"./components/Default.js":112,"./components/Details":113,"./components/Details.js":113,"./components/Navbar":102,"./components/Navbar.js":102,"./components/Product":104,"./components/Product.js":104,"./components/ProductList":103,"./components/ProductList.js":103,"./components/Title":64,"./components/Title.js":64,"./components/modal":114,"./components/modal.js":114,"./context":19,"./context.js":19,"./data":51,"./data.js":51,"./img/data.jpg":586,"./img/product-1.png":587,"./img/product-2.png":588,"./img/product-3.png":589,"./img/product-4.png":590,"./img/product-5.png":591,"./img/product-6.png":592,"./img/product-7.png":593,"./img/product-8.png":594,"./index":75,"./index.css":161,"./index.js":75,"./logo.svg":153,"./serviceWorker":115,"./serviceWorker.js":115,"./setupTests":211,"./setupTests.js":211};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=119},153:function(e,t,a){e.exports=a.p+"static/media/logo.9f7e506d.svg"},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(247),c=a(62);test("renders learn react link",(function(){var e=(0,Object(o.a)(r.a.createElement(c.default,null)).getByText)(/learn react/i);expect(e).toBeInTheDocument()}))},19:function(e,t,a){"use strict";a.r(t),a.d(t,"ProductProvider",(function(){return p})),a.d(t,"ProductConsumer",(function(){return f}));var n=a(28),r=a(117),o=a(8),c=a(9),l=a(11),i=a(10),s=a(0),u=a.n(s),m=a(51),d=u.a.createContext(),p=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={products:[],detailProduct:m.detailProduct,cart:[],modalOpen:!1,modalProduct:m.detailProduct,cartSubTotal:0,cartTax:0,cartTotal:0},e.setProducts=function(){var t=[];m.storeProducts.forEach((function(e){var a=Object(r.a)({},e);t=[].concat(Object(n.a)(t),[a])})),e.setState((function(){return{products:t}}))},e.getItem=function(t){return e.state.products.find((function(e){return e.id===t}))},e.handleDetail=function(t){var a=e.getItem(t);e.setState((function(){return{detailProduct:a}}))},e.addToCart=function(t){var a=Object(n.a)(e.state.products),r=a.indexOf(e.getItem(t)),o=a[r];o.inCart=!0,o.count=1;var c=o.price;o.total=c,e.setState((function(){return{products:a,cart:[].concat(Object(n.a)(e.state.cart),[o])}}),(function(){return e.addTotals()}))},e.openModal=function(t){var a=e.getItem(t);e.setState((function(){return{modalProduct:a,modalOpen:!0}}))},e.closeModal=function(){e.setState((function(){return{modalOpen:!1}}))},e.increment=function(t){var a=Object(n.a)(e.state.cart),r=a.find((function(e){return e.id===t})),o=a.indexOf(r),c=a[o];c.count++,c.total=c.count*c.price,e.setState((function(){return{cart:Object(n.a)(a)}}),(function(){e.addTotals()}))},e.decrement=function(t){var a=Object(n.a)(e.state.cart),r=a.find((function(e){return e.id===t})),o=a.indexOf(r),c=a[o];c.count<=1?e.removeItem(t):(c.count--,c.total=c.count*c.price,e.setState((function(){return{cart:Object(n.a)(a)}}),(function(){e.addTotals()})))},e.removeItem=function(t){var a=Object(n.a)(e.state.products),r=Object(n.a)(e.state.cart);r=r.filter((function(e){return e.id!==t}));var o=a.indexOf(e.getItem(t)),c=a[o];c.inCart=!1,c.count=0,c.total=0,e.setState((function(){return{cart:Object(n.a)(r),products:Object(n.a)(a)}}),(function(){e.addTotals()}))},e.clearCart=function(){e.setState((function(){return{cart:[]}}),(function(){e.setProducts(),e.addTotals()}))},e.addTotals=function(){var t=0;e.state.cart.map((function(e){return t+=e.total}));var a=parseFloat((.1*t).toFixed(2)),n=t+a;e.setState((function(){return{cartSubTotal:t,cartTax:a,cartTotal:n}}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setProducts()}},{key:"render",value:function(){return u.a.createElement(d.Provider,{value:Object(r.a)(Object(r.a)({},this.state),{},{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart})},this.props.children)}}]),a}(s.Component),f=d.Consumer},210:function(e){e.exports=JSON.parse('{"main":"Cart.js"}')},211:function(e,t,a){"use strict";a.r(t);a(595)},253:function(e,t,a){e.exports=a(75)},32:function(e,t,a){"use strict";a.r(t),a.d(t,"ButtonContainer",(function(){return o}));var n,r=a(45),o=a(46).a.button(n||(n=Object(r.a)(["\n\ttext-transform: capitalize;\n\tfont-size: 1.4rem;\n\tbackground:transparent;\n\tborder:0.05rem solid var(--lightBlue);\n\tborder-color:",";\n\tcolor:",";\n\tborder-radius: 0.5rem;\n\tpadding:0.2rem 0.5rem;\n\tcursor: pointer;\n\tmargin: 0.2rem 0.5rem 0.2rem 0;\n\ttransition: all 0.5s ease-in-out;\n\t&:hover{\n\t\tbackground:",";\n\t\tcolor:",";\n\t}\n\t$:focus{\n\t\toutline:none;\n\t}\n"])),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}),(function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}),(function(e){return e.cart?"var(--mainWhite)":"var(--mainBlue)"}))},51:function(e,t,a){"use strict";a.r(t),a.d(t,"storeProducts",(function(){return n})),a.d(t,"detailProduct",(function(){return r}));var n=[{id:1,title:"Google Pixel - Black",img:"img/product-1.png",price:10,company:"GOOGLE",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:2,title:"Samsung S7",img:"img/product-2.png",price:16,company:"SAMSUNG",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:3,title:"HTC 10 - Black",img:"img/product-3.png",price:8,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:4,title:"HTC 10 - White",img:"img/product-4.png",price:18,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:5,title:"HTC Desire 626s",img:"img/product-5.png",price:24,company:"htc",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:6,title:"Vintage Iphone",img:"img/product-6.png",price:17,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:7,title:"Iphone 7",img:"img/product-7.png",price:30,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0},{id:8,title:"Smashed Iphone",img:"img/product-8.png",price:2,company:"apple",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0}],r={id:1,title:"Google Pixel - Black",img:"img/product-1.png",price:10,company:"google",info:"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",inCart:!1,count:0,total:0}},586:function(e,t,a){e.exports=a.p+"static/media/data.ca9005e8.jpg"},587:function(e,t,a){e.exports=a.p+"static/media/product-1.d63d9eff.png"},588:function(e,t,a){e.exports=a.p+"static/media/product-2.ad7ef891.png"},589:function(e,t,a){e.exports=a.p+"static/media/product-3.d27ec2bc.png"},590:function(e,t,a){e.exports=a.p+"static/media/product-4.d9ed7537.png"},591:function(e,t,a){e.exports=a.p+"static/media/product-5.8f9a1f89.png"},592:function(e,t,a){e.exports=a.p+"static/media/product-6.b49d1b7c.png"},593:function(e,t,a){e.exports=a.p+"static/media/product-7.4c6ab223.png"},594:function(e,t,a){e.exports=a.p+"static/media/product-8.d390282f.png"},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=(a(162),a(257),a(102)),l=a(103),i=a(113),s=a(105),u=a(112),m=a(114);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.default,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/store",component:l.default}),r.a.createElement(o.a,{path:"/details",component:i.default}),r.a.createElement(o.a,{path:"/cart",component:s.default}),r.a.createElement(o.a,{component:u.default})),r.a.createElement(m.default,null))}},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);t.default=function(e){var t=e.name,a=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold"},t," ",r.a.createElement("strong",{className:"text-blue"},a))))}},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),l=a(17),i=(a(161),a(62)),s=a(115),u=a(19);c.a.render(r.a.createElement(u.ProductProvider,null,r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.default,null)))),document.getElementById("root")),s.unregister()}},[[253,1,2]]]);
//# sourceMappingURL=main.43f65b84.chunk.js.map