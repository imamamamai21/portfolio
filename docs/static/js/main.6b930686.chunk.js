(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(15),o=n.n(r),s=(n(35),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))}),a=n(10),l=n(5),j=n(13),u=n(12),h=n(11),b=n(61),d=n(2),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.show?Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Mai Shitntsu TOP"})}):Object(d.jsx)("div",{})}}]),n}(i.Component),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.show?Object(d.jsx)("div",{id:"worksPage",children:Object(d.jsx)("h1",{children:"WORKS!!"})}):Object(d.jsx)("div",{})}}]),n}(i.Component),x=n(56),f=n(58),m=n(59),g=n(62),v=n(60),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={show:e.show},i}return Object(l.a)(n,[{key:"render",value:function(){if(!this.props.show)return Object(d.jsx)("div",{});var e=Object(x.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}}));return Object(d.jsx)("div",{id:"profilePage",children:Object(d.jsx)(f.a,{className:e.paper,children:Object(d.jsxs)(m.a,{container:!0,spacing:2,children:[Object(d.jsx)(m.a,{item:!0,children:Object(d.jsx)(g.a,{className:e.image,children:Object(d.jsx)("img",{className:e.img,alt:"photo",src:"../static/images/miimage.JPG"})})}),Object(d.jsxs)(m.a,{item:!0,xs:12,sm:!0,container:!0,children:[Object(d.jsxs)(m.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:[Object(d.jsxs)(m.a,{item:!0,xs:!0,children:[Object(d.jsx)(v.a,{gutterBottom:!0,variant:"subtitle1",children:"Mai Shintsu"}),Object(d.jsx)(v.a,{variant:"body2",gutterBottom:!0,children:"Full resolution 1920x1080 \u2022 JPEG"}),Object(d.jsx)(v.a,{variant:"body2",color:"textSecondary",children:"ID: 1030114"})]}),Object(d.jsx)(m.a,{item:!0,children:Object(d.jsx)(v.a,{variant:"body2",style:{cursor:"pointer"},children:"Remove"})})]}),Object(d.jsx)(m.a,{item:!0,children:Object(d.jsx)(v.a,{variant:"subtitle1",children:"Github"})})]})]})})})}}]),n}(i.Component),w=(n(41),{profile:"Profile",works:"Works"}),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={menu:{profile:!1,works:!1}},console.log("Header::constructor: state =",i.state),i}return Object(l.a)(n,[{key:"onClickMenu",value:function(e){console.log("onClickMenu",e);var t=this.state.menu[e];t||(this.setState({menu:{profile:"profile"!==e||t?t:!t,works:"works"!==e||t?t:!t}}),this.props.onClickMenu(e))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h3",{children:"Mai Shitntsu logo"}),Object(d.jsx)("ul",{children:Object.keys(this.state.menu).map((function(t,n){return Object(d.jsx)("li",{"data-switch":e.state.menu[t]?"on":"off",children:Object(d.jsx)("input",{type:"button",value:w[t],onClick:function(){return e.onClickMenu(t)}})},"headMenu"+t)}))})]})}}]),n}(i.Component),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={showPage:{top:!0,profile:!1,works:!1}},i.onClickMenu=i.onClickMenu.bind(Object(j.a)(i)),i}return Object(l.a)(n,[{key:"onClickMenu",value:function(e){this.setState({showPage:{top:"top"===e,profile:"profile"===e,works:"works"===e}}),console.log(this.state.showPage)}},{key:"render",value:function(){var e=this.state.showPage;return Object(d.jsxs)(b.a,{maxWidth:"lg",children:[Object(d.jsx)(O,{show:e.top}),Object(d.jsx)(C,{onClickMenu:this.onClickMenu,target:{works:e.works,profile:e.profile}}),Object(d.jsx)(k,{show:e.profile}),Object(d.jsx)(p,{show:e.works})]})}}]),n}(i.Component);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),s()}},[[42,1,2]]]);
//# sourceMappingURL=main.6b930686.chunk.js.map