(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a.p+"static/media/logo-yellow.a52368c1.svg"},150:function(e,t,a){e.exports=a.p+"static/media/logo-black.8a0d256e.svg"},152:function(e,t,a){e.exports=a(382)},157:function(e,t,a){},174:function(e,t,a){},378:function(e,t){},379:function(e,t,a){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(147),l=a.n(r),c=(a(157),a(34)),s=a(35),o=a(37),m=a(36),u=a(38),g=a(148),v=a.n(g);a(174),a(175);a(377).polyfill();var h=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"text-overlay"},i.a.createElement("div",{className:"text-overlay__inner"},i.a.createElement("p",{className:"text-overlay__caption"},e.caption),i.a.createElement("p",{className:"text-overlay__date"},e.created))),i.a.createElement("div",{className:"bg-image fade-out",style:{backgroundImage:"url(".concat(e.prevImg,")")}}),i.a.createElement("div",{className:"bg-image",style:{backgroundImage:"url(".concat(e.url,")")}}))},d=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).intervalID=0,a.animating=!1,a.getInstaImages=function(){v.a.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=1759117483.ebcb0e1.e727496b51af440cbdbc2c4c7f315dfc&count=20").then(function(e){return e.data.data.map(function(e){return{url:e.images.standard_resolution.url,id:e.id,caption:e.caption.text,created:e.created_time,prevImg:""}})}).then(function(e){a.setInitialImgState(e)}).catch(function(e){console.log(e)})},a.setInitialImgState=function(e){var t=[],n=e.filter(function(e,a){if(a<=14)return e;t.push(e)});a.setState({activeImgs:n,inactiveImgs:t})},a.setRandomImages=function(){var e=a.state.activeImgs,t=Math.floor(Math.random()*e.length),n=e[t],i=a.state.inactiveImgs,r=Math.floor(Math.random()*i.length),l=i[r];i[r]=n,e[t]=l,void 0!==e[t].prevImg&&e[t].prevImg===l.url||(e[t].prevImg=n.url),a.setState({inactiveImgs:i,activeImgs:e})},a.updateImages=function(){!0===a.props.introActive&&(a.intervalID=setInterval(function(e){return a.setRandomImages()},1e3))},a.clearAnimation=function(){clearInterval(a.intervalID)},a.convertDate=function(e){var t=new Date(1e3*e);return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()},a.state={activeImgs:[],inactiveImgs:[]},a.getInstaImages(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){!1===this.animating&&(this.updateImages(),this.animating=!0)}},{key:"render",value:function(){var e=this,t="insta-background ".concat(this.props.lightSwitch?"insta-background--lights-on ":"");return t+="".concat(!1===this.props.introActive?" insta-background--hide":"insta-background--animate-in"),!0!==this.props.introActive||!0===this.props.lightSwitch?(this.clearAnimation(),this.animating=!1):!0===this.props.introActive&&!1===this.animating&&(this.updateImages(),this.animating=!0),i.a.createElement("div",{className:t},this.state.activeImgs.map(function(t){var a={id:t.id,url:t.url,caption:t.caption,created:e.convertDate(t.created),prevImg:t.prevImg};return i.a.createElement(h,Object.assign({key:a.id},a))}))}}]),t}(i.a.Component),p=a(149),f=a.n(p),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:f.a,alt:"igo logo"})),i.a.createElement("div",{className:"intro-content"},i.a.createElement("div",null,i.a.createElement("h1",null,"Leigh Igoe - Developer"),i.a.createElement("h2",null,"A ",i.a.createElement("span",null,"dev")," with a background in design and a growing passion for ",i.a.createElement("span",null,"code"),"."),i.a.createElement("div",{className:"skills-list"},i.a.createElement("ul",null,i.a.createElement("li",null,"HTML5 "),i.a.createElement("li",null,"CSS3 + Sass"),i.a.createElement("li",null,"Javascript (ES5/ES6)"),i.a.createElement("li",null,"React"),i.a.createElement("li",null,"Angular"),i.a.createElement("li",null,"Gsap"),i.a.createElement("li",null,"JQuery"),i.a.createElement("li",null,"PHP"),i.a.createElement("li",null,"Wordpress"),i.a.createElement("li",null,"Concrete 5"),i.a.createElement("li",null,"Processwire"),i.a.createElement("li",null,"Hubspot"),i.a.createElement("li",null,"Eloqua")),i.a.createElement("span",{onClick:function(t){return e.props.introToggle()},className:"btn"},"More about me")))),i.a.createElement("div",{className:"social-footer"},i.a.createElement("div",{className:"social-footer__icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.01 49.01"},i.a.createElement("polygon",{fill:"currentColor",points:"36.4 16.07 24.4 25.79 12.41 16.07 36.4 16.07"}),i.a.createElement("polygon",{fill:"currentColor",points:"36.41 33.23 12.39 33.23 12.39 18.64 24.4 28.37 36.41 18.64 36.41 33.23"}))),i.a.createElement("div",{className:"social-footer__icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.01 49.01"},i.a.createElement("rect",{fill:"currentColor",x:"14.82",y:"20.54",width:"4.31",height:"12.91"}),i.a.createElement("ellipse",{fill:"currentColor",cx:"16.98",cy:"16.23",rx:"2.37",ry:"2.39"}),i.a.createElement("path",{fill:"currentColor",d:"M34.2,33.45H29.9V27.29c0-4.05-4.31-3.7-4.31,0v6.16H21.28V20.54h4.31v2.35c1.87-3.48,8.61-3.74,8.61,3.33Z"}))),i.a.createElement("div",{className:"social-footer__icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.01 49.01"},i.a.createElement("path",{fill:"currentColor",d:"M24.4,16.11c2.78,0,3.11,0,4.21.06,2.83.13,4.14,1.47,4.27,4.27,0,1.1.06,1.43.06,4.21s0,3.11-.06,4.21c-.13,2.8-1.44,4.14-4.27,4.27-1.1,0-1.42.06-4.21.06s-3.11,0-4.2-.06c-2.83-.13-4.15-1.48-4.27-4.27,0-1.1-.07-1.43-.07-4.21s0-3.11.07-4.21c.12-2.8,1.44-4.14,4.27-4.27C21.29,16.12,21.62,16.11,24.4,16.11Zm0-1.88c-2.82,0-3.18,0-4.29.07-3.78.17-5.89,2.27-6.06,6.05C14,21.47,14,21.82,14,24.65s0,3.18.06,4.29c.17,3.79,2.27,5.89,6.06,6.06,1.11,0,1.47.06,4.29.06s3.19,0,4.3-.06c3.78-.17,5.89-2.27,6.06-6.06.05-1.11.06-1.46.06-4.29s0-3.18-.06-4.3c-.17-3.77-2.27-5.88-6.06-6.05C27.59,14.25,27.23,14.23,24.4,14.23Zm0,5.07a5.35,5.35,0,1,0,5.35,5.35A5.35,5.35,0,0,0,24.4,19.3Zm0,8.82a3.47,3.47,0,1,1,3.48-3.47A3.47,3.47,0,0,1,24.4,28.12ZM30,17.84a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,30,17.84Z"}))),i.a.createElement("div",{className:"social-footer__icon"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.01 49.01"},i.a.createElement("path",{fill:"currentColor",d:"M33.4,20A13.19,13.19,0,0,1,13.1,31.75,9.3,9.3,0,0,0,20,29.83a4.65,4.65,0,0,1-4.33-3.22,4.62,4.62,0,0,0,2.1-.08A4.66,4.66,0,0,1,14,21.92a4.59,4.59,0,0,0,2.11.58,4.64,4.64,0,0,1-1.44-6.19,13.19,13.19,0,0,0,9.56,4.85,4.65,4.65,0,0,1,7.91-4.24,9.15,9.15,0,0,0,3-1.12,4.74,4.74,0,0,1-2,2.57,9.45,9.45,0,0,0,2.66-.74A9.62,9.62,0,0,1,33.4,20Z"})))))}}]),t}(n.Component),b=a(150),w=a.n(b),I=(a(379),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"brand"},i.a.createElement("img",{onClick:function(t){return e.props.introToggle()},src:w.a,alt:"igo logo"})),i.a.createElement("div",{className:"about-me"},i.a.createElement("div",null,i.a.createElement("h1",null,"Leigh Igoe - Developer"),i.a.createElement("h2",null,"Always learning and always ready for change"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at tortor ac libero pellentesque aliquet. Integer tempor gravida finibus. Vestibulum placerat, metus sit amet fringilla ultricies, tortor lorem vestibulum leo, in interdum lacus nisl ac turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie mauris a tellus dictum, finibus gravida orci ornare. In sit amet nulla velit. Sed porttitor, lectus quis euismod condimentum, magna massa condimentum metus, vitae ultricies sem ante nec neque."))),i.a.createElement("div",{className:"social-footer"}))}}]),t}(n.Component)),O=a(151),y=(a(380),function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),r=a[0],l=a[1];return i.a.createElement(n.Fragment,null,i.a.createElement("label",{onClick:function(t){return function(t){t.preventDefault(),e.switch(),l(!r)}(t)},className:"switch"},i.a.createElement("input",{checked:r,type:"checkbox"}),i.a.createElement("span",{className:"slider round"})))}),A=(a(381),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).turnLightsOn=function(){a.setState({lightsOn:!a.state.lightsOn})},a.openMoreDetails=function(){a.setState({lightsOn:!a.state.lightsOn,introActive:!a.state.introActive,aboutMeActive:!a.state.aboutMeActive})},a.state={lightsOn:!1,introActive:!0,aboutMeActive:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="wrapper ";return e+=!0!==this.state.introActive&&!1!==this.state.aboutMeActive||!0!==this.state.lightsOn?"":"click-through",i.a.createElement("div",null,!0===this.state.introActive?i.a.createElement(y,{switch:this.turnLightsOn}):"",i.a.createElement("div",{className:e},!0===this.state.introActive&&!1===this.state.lightsOn?i.a.createElement(E,{introToggle:this.openMoreDetails}):"",!0===this.state.aboutMeActive?i.a.createElement(I,{introToggle:this.openMoreDetails}):""),i.a.createElement(d,{introActive:this.state.introActive,lightSwitch:this.state.lightsOn}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[152,1,2]]]);
//# sourceMappingURL=main.d17e443b.chunk.js.map