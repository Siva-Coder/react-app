(this["webpackJsonpexpress-react"]=this["webpackJsonpexpress-react"]||[]).push([[0],{51:function(e,t,a){e.exports=a(62)},56:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),l=a.n(r),i=(a(56),a(22)),c=a(41),s=(a(57),a(88)),m=a(102),u=a(89),d=a(90),p=a(92),h=a(93),b=a(91),g=a(38),f=a.n(g),E=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var v=function(){var e=E();return o.a.createElement("div",{className:e.root},o.a.createElement(u.a,{position:"static"},o.a.createElement(d.a,null,o.a.createElement(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(f.a,null)),o.a.createElement(p.a,{variant:"h6",className:e.title},"News"),o.a.createElement(h.a,{color:"inherit"},"Login"))))},y=a(95),w=a(96),x=a(99),N=a(98),j=a(97),O=a(17),k=a.n(O),q=a(39),B=a.n(q),_=a(40),H=a.n(_),S=a(94),I=Object(s.a)((function(e){return{root:{maxWidth:"100%",marginBottom:20},media:{height:200},location:{display:"flex",alignContent:"center",marginBottom:"10px"},typo:{lineHeight:1.7},flex:{display:"flex"},sqft:{display:"flex"},bedrooms:{display:"flex",marginLeft:"20px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},title__price:{display:"flex",justifyContent:"space-between",alignItems:"center"}}}));function U(e){var t=I();return o.a.createElement(S.a,{item:!0,xs:12,sm:4},o.a.createElement(y.a,{className:t.root},o.a.createElement(w.a,null,o.a.createElement(j.a,{className:t.media,image:e.imageUrl,title:"Contemplative Reptile"}),o.a.createElement(N.a,null,o.a.createElement("div",{className:t.title__price},o.a.createElement(p.a,{gutterBottom:!0,variant:"h6",component:"h2"},e.title),o.a.createElement(p.a,{gutterBottom:!0,variant:"h6",component:"h2"},"\u20b9",e.price)),o.a.createElement("div",{className:t.location},o.a.createElement(k.a,null),o.a.createElement(p.a,{variant:"body2",className:t.typo,color:"textSecondary",component:"p"},e.location)),o.a.createElement("div",{className:t.flex},o.a.createElement("div",{className:t.sqft},o.a.createElement(B.a,null),o.a.createElement(p.a,{variant:"body2",className:t.typo,color:"textSecondary",component:"p"},e.sqft," sqft")),o.a.createElement("div",{className:t.bedrooms},o.a.createElement(H.a,null),o.a.createElement(p.a,{variant:"body2",className:t.typo,color:"textSecondary",component:"p"},e.bedrooms," bedrooms"))))),o.a.createElement(x.a,{style:{float:"right"}},o.a.createElement(h.a,{variant:"contained",size:"medium",style:{borderRadius:50,float:"right",marginBottom:5},color:"primary"},"View Details"))))}var M=a(100),C=a(101),D=a(27),F=a.n(D),G=a(26),A=a.n(G),T=a(28),W=a.n(T);Object(s.a)({root:{width:"100%",position:"absolute",bottom:0}});var J=a(103),L=Object(s.a)({root:{width:"100%",position:"absolute",bottom:0},Houses:{position:"absolute",height:"85%",padding:0,margin:"0px",overflow:"scroll",background:"#f4f4f4"},app__container:{background:"#f4f4f4",position:"absolute",height:"100%",width:"100%",overflow:"hidden"}});function R(e){var t=e.children,a=e.value,n=e.index,r=Object(c.a)(e,["children","value","index"]);return o.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),a===n&&o.a.createElement(J.a,{p:1},o.a.createElement(p.a,null,t)))}function z(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Y=function(){var e=Object(n.useState)([{title:"FIrst House",location:"Aurandalpet, Guntur",sqft:3200,bedrooms:2,price:"10,000",imageUrl:"https://media.istockphoto.com/photos/empty-white-new-construction-cottage-house-just-completed-picture-id1128971667?k=6&m=1128971667&s=612x612&w=0&h=-1j8bOD-2JuMdgTg07D-YjhKQP7sB9S1B-4F1MdeNWA="},{title:"Second House",location:"Nallacheruvu, Guntur",sqft:5e3,bedrooms:4,price:"20,000",imageUrl:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80"},{title:"Third House",location:"Amaravathi road, Guntur",sqft:2500,bedrooms:3,price:"8,000",imageUrl:"https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg"},{title:"Fourth House",location:"Madhapur, HYD",sqft:6e3,bedrooms:3,price:"17,000",imageUrl:"https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"}]),t=Object(i.a)(e,2),a=t[0],r=(t[1],L()),l=Object(m.a)(),c=o.a.useState(0),s=Object(i.a)(c,2),u=s[0],d=s[1];return o.a.createElement("div",{className:r.app__container},o.a.createElement(v,null),o.a.createElement("div",null,o.a.createElement(R,{value:u,index:0,dir:l.direction,className:r.Houses},o.a.createElement(S.a,{container:!0,spacing:1,direction:"row",justify:"space-evenly",alignItems:"center"},a.map((function(e){return o.a.createElement(U,{title:e.title,location:e.location,sqft:e.sqft,bedrooms:e.bedrooms,imageUrl:e.imageUrl,price:e.price})})))),o.a.createElement(R,{style:{background:"green"},value:u,index:1,dir:l.direction},"Item Two"),o.a.createElement(R,{style:{background:"blue"},value:u,index:2,dir:l.direction},"Item Three"),o.a.createElement(R,{style:{background:"yellow"},value:u,index:3,dir:l.direction},"Item 4"),o.a.createElement(M.a,{value:u,onChange:function(e,t){d(t)},showLabels:!0,className:r.root},o.a.createElement(C.a,Object.assign({label:"For you",icon:o.a.createElement(A.a,null)},z(1))),o.a.createElement(C.a,{label:"Nearby",icon:o.a.createElement(k.a,z(1))}),o.a.createElement(C.a,{label:"Favorites",icon:o.a.createElement(F.a,z(1))}),o.a.createElement(C.a,Object.assign({label:"More",icon:o.a.createElement(W.a,null)},z(1))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.8184163f.chunk.js.map