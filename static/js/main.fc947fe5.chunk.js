(this["webpackJsonpcomit-final-project"]=this["webpackJsonpcomit-final-project"]||[]).push([[0],{125:function(e,t,a){e.exports=a.p+"static/media/dish.5ef013cf.png"},138:function(e,t,a){e.exports=a(188)},143:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=a(15),l=a(16),s=a(18),u=a(17),d=a(19),m=a(36),p=a(42),h=(a(143),a(248)),f=a(86),E=a.n(f),b=a(112),g=a.n(b),v=a(85),j={palette:{primary:a.n(v).a,secondary:g.a},typography:{useNextVariants:!0}},O=a(113),y=a.n(O),C=a(27),T=a(50),A=a(115),N=a(20),w={authenticated:!1,credentials:{},likes:[],notifications:[]},I={favorite:"0",loading:!1,dishes:[],cart:[],mcart:!1,error:null},k={loading:!1,errors:null},S=[A.a],x=Object(T.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(N.a)({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return w;case"SET_USER":return Object(N.a)({authenticated:!0},t.payload);default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA_BEGIN":return Object(N.a)({},e,{loading:!0,error:null});case"FETCH_DATA_SUCCESS":return Object(N.a)({},e,{loading:!1,dishes:t.payload.data});case"FETCH_DATA_FAILURE":return Object(N.a)({},e,{loading:!1,error:t.payload.error,dishes:[]});case"UPDATE_CART":return Object(N.a)({},e,{cart:t.payload.data,mcart:!0});case"OPEN_MCART":return Object(N.a)({},e,{mcart:!0});case"CLOSE_MCART":return Object(N.a)({},e,{mcart:!1});case"SET_FAVORITE":case"SET_UNFAVORITE":var a=e.dishes.findIndex((function(e){return e.code===t.payload.code}));return e.dishes[a].favorite="1",e.dishes.map((function(e){return e.code===t.code?Object(N.a)({},e,{favorite:!e.favorite}):e}));default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return Object(N.a)({},e,{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(N.a)({},e,{loading:!1,errors:null});case"LOADING UI":return Object(N.a)({},e,{loading:!0});default:return e}}}),U=Object(T.e)(x,{},Object(T.d)(T.a.apply(void 0,S))),R=a(232),_=a(234),D=a(192),F=a(236),L=a(235),P=a(118),M=a.n(P),B=a(39),H=a.n(B);function W(){return function(e){return e(V()),H.a.get("".concat("/comit-final-project","/data/dishes.json")).then((function(t){return console.log(t.data),e(z(t.data)),t.data})).catch((function(t){return e(G(t))}))}}var V=function(){return{type:"FETCH_DATA_BEGIN"}},z=function(e){return{type:"FETCH_DATA_SUCCESS",payload:{data:e}}},G=function(e){return{type:"FETCH_DATA_FAILURE",payload:{error:e}}},J=function(e){return{type:"UPDATE_CART",payload:{data:e}}},$=function(){return{type:"OPEN_MCART"}},K=function(){return{type:"CLOSE_MCART"}},q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.cart;return r.a.createElement(R.a,null,r.a.createElement(_.a,{className:"nav-container"},r.a.createElement(D.a,{color:"inherit",component:m.b,to:"".concat("/comit-final-project","/"),className:"nav-button"},"Home"),r.a.createElement(D.a,{color:"inherit",component:m.b,to:"".concat("/comit-final-project","/order"),className:"nav-button"},"ORDER"),r.a.createElement(L.a,{"aria-label":"4 pending messages",onClick:function(){return e.props.dispatch({type:"OPEN_MCART"})}},r.a.createElement(F.a,{badgeContent:t.length,color:"secondary"},r.a.createElement(M.a,{fontSize:"large"}))),r.a.createElement(D.a,{color:"inherit",component:m.b,to:"".concat("/comit-final-project","/admin"),className:"nav-button"},"About"),r.a.createElement(D.a,{color:"inherit",component:m.b,to:"".concat("/comit-final-project","/login"),className:"nav-button"},"Login")))}}]),t}(n.Component),Q=Object(C.b)((function(e){return{data:e.data,UI:e.UI}}),(function(e){return{dispatch:e,openMCart:$}}))(q),X=a(237),Y=a(238),Z=a(119),ee=a.n(Z),te=a(71),ae=a.n(te),ne=a(120),re=a.n(ne),ce=a(121),oe=a.n(ce),ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"recents"},a.handleChange=function(e){a.setState({value:e.target.value})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement(X.a,{value:this.value,onChange:this.handleChange,className:"nav-bottom-root"},r.a.createElement(Y.a,{label:"Recents",value:"recents",icon:r.a.createElement(ee.a,null)}),r.a.createElement(Y.a,{label:"Favorites",value:"favorites",icon:r.a.createElement(ae.a,null)}),r.a.createElement(Y.a,{label:"Nearby",value:"nearby",icon:r.a.createElement(re.a,null)}),r.a.createElement(Y.a,{label:"Folder",value:"folder",icon:r.a.createElement(oe.a,null)}))}}]),t}(n.Component),le=a(127),se=function(e){var t=e.component,a=e.authenticated,n=Object(le.a)(e,["component","authenticated"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(p.a,{to:"/"}):r.a.createElement(t,e)}}))},ue=a(122),de=a.n(ue),me=(a(168),a(169),a(170),a(171),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={slides:null,loading:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});H.a.get("".concat("/comit-final-project","/data/slides.json")).then((function(t){e.setState({slides:t.data,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.slides;return e.loading?r.a.createElement("div",null,"Loading..."):t&&r.a.createElement(de.a,{autoplay:3e3,className:"slider-wrapper"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:"slider-content",style:{background:"url('".concat("/comit-final-project").concat(e.image,"') no-repeat center center")}},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("button",{className:"slidebutton"},e.button)),r.a.createElement("section",null,r.a.createElement("img",{src:"".concat("/comit-final-project").concat(e.userProfile),alt:e.user}),r.a.createElement("span",null,"Order:",r.a.createElement("strong",null,e.user))))})))}}]),t}(n.Component)),pe=a(249),he=a(239),fe=a(128),Ee=a(254),be=a(123),ge=a.n(be),ve=a(124),je=a.n(ve),Oe=Object(he.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));function ye(){var e=Oe();return r.a.createElement(fe.a,{component:"form",className:e.root},r.a.createElement(L.a,{className:e.iconButton,"aria-label":"menu"},r.a.createElement(ge.a,null)),r.a.createElement(Ee.a,{className:e.input,placeholder:"Search ...",inputProps:{"aria-label":"search ..."}}),r.a.createElement(L.a,{type:"submit",className:e.iconButton,"aria-label":"search"},r.a.createElement(je.a,{color:"primary"})))}var Ce=a(253),Te=a(46),Ae=a(73),Ne=a.n(Ae),we=(a(3),a(241)),Ie=a(242),ke=a(243),Se=a(244),xe=a(245),Ue=a(256),Re=a(62),_e=a(76),De=a(247),Fe=a(246),Le=a(126),Pe=a(255),Me=a(251),Be=a(240);var He=function(e){var t=e.option,a=t.name,n=t.adjustPrice,c=(e.includeId,e.optionValue);return r.a.createElement(Be.a,{value:c,control:r.a.createElement(Me.a,{color:"primary"}),label:"".concat(a," ").concat(n>0?n:""),labelPlacement:"end"})};var We=function(e){var t=e.include,a=t.name,n=t.options,c=e.includeId,o=r.a.useState(null),i=Object(Le.a)(o,2),l=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("h5",null,a),r.a.createElement(Pe.a,{"aria-label":"position",name:"position",value:l,onChange:function(e){s(e.target.value)},row:!0},!!n&&n.map((function(e,t){return r.a.createElement(He,{key:"".concat(c,"-").concat(t),includeId:c,optionValue:"".concat(c,"-").concat(t),option:e})}))))},Ve=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleDownClick=function(){var e=a.props.dish.code,t=a.props.data.dishes.slice(0),n=t.findIndex((function(t){return t.code===e}));t[n].number--,t[n].number<1&&(t[n].number=1),a.props.dispatch(z(t))},a.handFavClick=function(){var e=a.props.dish.code,t=a.props.data.dishes.slice(0),n=t.findIndex((function(t){return t.code===e}));t[n].favorite="1"==t[n].favorite?"0":"1",a.props.dispatch(z(t)),console.log("here")},a.handleUpClick=function(){var e=a.props.dish.code,t=a.props.data.dishes.slice(0),n=t.findIndex((function(t){return t.code===e}));t[n].number++,a.props.dispatch(z(t)),console.log(t[n].number)},a.handleAddToCart=function(){var e=a.props.data.cart.slice(0);e.push(a.props.dish),a.props.dispatch(J(e)),console.log(e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.dish,c=n.favorite,o=n.number,i=(n.tag,n.code),l=n.name,s=n.description,u=n.basePrice,d=n.imageUrl,m=n.includes,p=t.loading,h="/comit-final-project/"+(d||"/dish.png");return r.a.createElement(we.a,{className:a.card},r.a.createElement(Ie.a,{avatar:r.a.createElement(Ue.a,{"aria-label":"recipe",className:a.avatar},o),action:r.a.createElement(L.a,{"aria-label":"add to favorites",onClick:function(){return e.handFavClick()}},r.a.createElement(ae.a,{color:"1"===c?"primary":"inherit"})),title:l,subheader:"Price:".concat(u/100,"$")}),r.a.createElement(ke.a,{className:a.media,image:h,title:l}),r.a.createElement(Se.a,null,r.a.createElement(Re.a,{variant:"body2",color:"textSecondary",component:"p"},s),r.a.createElement("div",null,!!m&&m.map((function(e,t){return r.a.createElement(We,{key:"".concat(i,"-").concat(t),includeId:"".concat(i,"-").concat(t),include:e})})))),r.a.createElement(xe.a,{disableSpacing:!0},r.a.createElement(Fe.a,null,r.a.createElement(D.a,{onClick:this.handleDownClick},"-"),r.a.createElement(D.a,null,o),r.a.createElement(D.a,{onClick:this.handleUpClick},"+")),r.a.createElement(D.a,{type:"submit",variant:"contained",color:"primary",className:a.button,onClick:this.handleAddToCart,fullWidth:!0},"Add to Order",p&&r.a.createElement(De.a,{size:30,className:a.progress}))),r.a.createElement("div",null))}}]),t}(n.Component),ze=Object(C.b)((function(e){return{data:e.data,UI:e.UI}}),(function(e){return{dispatch:e,fetchDataSuccess:z,updateCart:J}}))(Ne()((function(e){var t;return{cardWrapper:{paddingBottom:0,marginBottom:0},card:{width:345,margin:"10px",paddingBottom:"10px",position:"relative"},cardContent:(t={height:"200px"},Object(Te.a)(t,e.breakpoints.down("md"),{width:"200px"}),Object(Te.a)(t,"overflow","hidden"),t),centeredCardConent:{display:"flex",flexDirection:"column",justifyContent:"center"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:_e.a[500]}}}))(Ve)),Ge=a(189),Je=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.data.cart;return r.a.createElement("div",{className:t.list,role:"presentation",onClick:function(){return e.props.dispatch(K())},onKeyDown:function(){return e.props.dispatch(K())}},a&&a.map((function(e,t){return r.a.createElement("li",{key:t},e.name," - ",e.number)})))}}]),t}(n.Component),$e=Object(C.b)((function(e){return{data:e.data,UI:e.UI}}),(function(e){return{dispatch:e,openMCart:$,closeMCart:K}}))(Object(Ge.a)((function(e){return{list:{width:500},fullList:{width:"auto"}}}))(Je)),Ke=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},a.closeMCartPanel=function(){a.props.dispatch(K())},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(W())}},{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading,n=e.dishes,c=e.mcart;if(t)return r.a.createElement("div",null,"Error! ",t.message);if(a)return r.a.createElement("div",null,"Loading...");var o=n.map((function(e){return r.a.createElement(ze,{key:e.code,dish:e})}));return r.a.createElement(pe.a,{container:!0},r.a.createElement(pe.a,{container:!0,justify:"center"},r.a.createElement(ye,null)),r.a.createElement(pe.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start"},o),r.a.createElement(Ce.a,{anchor:"right",open:c,onClose:this.closeMCartPanel},r.a.createElement($e,null)))}}]),t}(n.Component),qe=Object(C.b)((function(e){return{dishes:e.data.dishes,loading:e.data.loading,error:e.data.error,mcart:e.data.mcart,UI:e.UI}}),(function(e){return{dispatch:e,fetchData:W,openMCart:$,closeMCart:K}}))(Ke),Qe=a(125),Xe=a.n(Qe),Ye=a(250),Ze=function(){return function(e){H.a.get("/user").then((function(t){e({type:"SET_USER",payload:t.data})})).catch((function(e){return console.log(e)}))}},et=function(e){var t="Bearer ".concat(e);localStorage.setItem("FBIdToken",t),H.a.defaults.headers.common.Authorization=t},tt=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a,e.props.history)},e.handleChange=function(t){e.setState(Object(Te.a)({},t.target.name,t.target.value))},e.state={email:"",password:"",loading:!1,errors:{}},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement(pe.a,{container:!0,className:t.form},r.a.createElement(pe.a,{item:!0,sm:!0}),r.a.createElement(pe.a,{item:!0,sm:!0},r.a.createElement("img",{src:Xe.a,alt:"Dish",className:t.image}),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(Ye.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(Ye.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,helperText:n.password,error:!!n.password,value:this.state.password,onChange:this.handleChange,fullWidth:!0}),n.general&&r.a.createElement(Re.a,{variant:"h2",className:t.customError},n.general),r.a.createElement(D.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Login",a&&r.a.createElement(De.a,{size:30,className:t.progress})))),r.a.createElement(pe.a,{item:!0,sm:!0}))}}]),t}(n.Component),at={loginUser:function(e,t){return function(a){a({type:"LOADING UI"}),H.a.post("/login",e).then((function(e){et(e.data.token),a(Ze()),a({type:"CLEAR_ERRORS"}),t.push("/")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}},nt=Object(C.b)((function(e){return{user:e.user,UI:e.UI}}),at)(Ne()({form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},texrField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"}})(tt));var rt=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Wellcome Admin!"))},ct=E()(j),ot=localStorage.IdToken;if(ot){var it=y()(ot);console.log(it),1e3*it.ex<Date.now()?(window.location.href="/login",!1):!0}var lt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:ct},r.a.createElement(C.a,{store:U},r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{basename:"/comit-final-project"}),r.a.createElement(m.a,null,r.a.createElement(Q,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"".concat("/comit-final-project","/"),component:me}),r.a.createElement(p.b,{exact:!0,path:"".concat("/comit-final-project","/order"),component:qe}),r.a.createElement(se,{exact:!0,path:"".concat("/comit-final-project","/login"),component:nt}),r.a.createElement(se,{exact:!0,path:"".concat("/comit-final-project","/admin"),component:rt,authenticated:!0}))),r.a.createElement(ie,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[138,1,2]]]);
//# sourceMappingURL=main.fc947fe5.chunk.js.map