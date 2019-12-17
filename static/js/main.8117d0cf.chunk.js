(this["webpackJsonpcomit-final-project"]=this["webpackJsonpcomit-final-project"]||[]).push([[0],{136:function(e,t,a){e.exports=a(186)},141:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=a(12),l=a(13),s=a(15),u=a(14),m=a(16),d=a(37),p=a(43),h=(a(141),a(246)),f=a(86),E=a.n(f),b=a(114),g=a.n(b),v=a(85),j={palette:{primary:a.n(v).a,secondary:g.a},typography:{useNextVariants:!0}},O=a(115),y=a.n(O),C=a(17),T=a(50),x=a(117),S=a(20),N={authenticated:!1,credentials:{},likes:[],notifications:[]},A={loading:!1,searchText:"",data:[],dishes:[],slides:[],cart:[],mcart:!1,error:null},k={loading:!1,errors:null},I=[x.a],w=Object(T.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATED":return Object(S.a)({},e,{authenticated:!0});case"SET_UNAUTHENTICATED":return N;case"SET_USER":return Object(S.a)({authenticated:!0},t.payload);default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BEGIN":return Object(S.a)({},e,{loading:!0,error:null});case"FETCH_FAILURE":return Object(S.a)({},e,{loading:!1,error:t.payload.error,dishes:[]});case"FETCH_DATA_LOADED":return Object(S.a)({},e,{loading:!1,data:t.payload.data});case"FETCH_DATA_SUCCESS":return Object(S.a)({},e,{loading:!1,dishes:t.payload.data});case"FETCH_SLIDE_SUCCESS":return Object(S.a)({},e,{loading:!1,slides:t.payload.data});case"UPDATE_SEARCH":return Object(S.a)({},e,{searchText:t.payload.data});case"UPDATE_CART":return Object(S.a)({},e,{cart:t.payload.data,mcart:!0});case"OPEN_MCART":return Object(S.a)({},e,{mcart:!0});case"CLOSE_MCART":return Object(S.a)({},e,{mcart:!1});default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ERRORS":return Object(S.a)({},e,{loading:!1,errors:t.payload});case"CLEAR_ERRORS":return Object(S.a)({},e,{loading:!1,errors:null});case"LOADING UI":return Object(S.a)({},e,{loading:!0});default:return e}}}),U=Object(T.e)(w,{},Object(T.d)(T.a.apply(void 0,I))),_=a(231),D=a(233),R=a(190),F=a(235),L=a(234),P=a(120),H=a.n(P),M=a(51),B=a.n(M);function W(e){return function(t,a){var n=a().data.data.filter((function(t){return!!t.name.toLowerCase().includes(e.toLowerCase())}));t($(n)),t(q(e))}}function z(){return function(e){return e(G()),B.a.get("".concat("/comit-final-project","/data/dishes.json")).then((function(t){return e(K(t.data)),e($(t.data)),t.data})).catch((function(t){return e(J(t))}))}}function V(){return function(e){return e(G()),B.a.get("".concat("/comit-final-project","/data/slides.json")).then((function(t){return e(X(t.data)),t.data})).catch((function(t){return e(J(t))}))}}var G=function(){return{type:"FETCH_BEGIN"}},J=function(e){return{type:"FETCH_FAILURE",payload:{error:e}}},K=function(e){return{type:"FETCH_DATA_LOADED",payload:{data:e}}},$=function(e){return{type:"FETCH_DATA_SUCCESS",payload:{data:e}}},X=function(e){return{type:"FETCH_SLIDE_SUCCESS",payload:{data:e}}},q=function(e){return{type:"UPDATE_SEARCH",payload:{data:e}}},Q=function(e){return{type:"UPDATE_CART",payload:{data:e}}},Y=function(){return{type:"OPEN_MCART"}},Z=function(){return{type:"CLOSE_MCART"}},ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.cart;return r.a.createElement(_.a,null,r.a.createElement(D.a,{className:"nav-container"},r.a.createElement(R.a,{color:"inherit",component:d.b,to:"".concat("/comit-final-project","/"),className:"nav-button"},"Home"),r.a.createElement(R.a,{color:"inherit",component:d.b,to:"".concat("/comit-final-project","/order"),className:"nav-button"},"ORDER"),r.a.createElement(L.a,{"aria-label":"4 pending messages",onClick:function(){return e.props.dispatch({type:"OPEN_MCART"})}},r.a.createElement(F.a,{badgeContent:t.length,color:"secondary"},r.a.createElement(H.a,{fontSize:"large"}))),r.a.createElement(R.a,{color:"inherit",component:d.b,to:"".concat("/comit-final-project","/about"),className:"nav-button"},"About"),r.a.createElement(R.a,{color:"inherit",component:d.b,to:"".concat("/comit-final-project","/login"),className:"nav-button"},"Login")))}}]),t}(n.Component),te=Object(C.b)((function(e){return{data:e.data,UI:e.UI}}),(function(e){return{dispatch:e,openMCart:Y}}))(ee),ae=a(236),ne=a(237),re=a(121),ce=a.n(re),oe=a(73),ie=a.n(oe),le=a(122),se=a.n(le),ue=a(123),me=a.n(ue),de=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"recents"},a.handleChange=function(e){a.setState({value:e.target.value})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement(ae.a,{value:this.value,onChange:this.handleChange,className:"nav-bottom-root"},r.a.createElement(ne.a,{label:"Recents",value:"recents",icon:r.a.createElement(ce.a,null)}),r.a.createElement(ne.a,{label:"Favorites",value:"favorites",icon:r.a.createElement(ie.a,null)}),r.a.createElement(ne.a,{label:"Nearby",value:"nearby",icon:r.a.createElement(se.a,null)}),r.a.createElement(ne.a,{label:"Folder",value:"folder",icon:r.a.createElement(me.a,null)}))}}]),t}(n.Component),pe=a(128),he=function(e){var t=e.component,a=e.authenticated,n=Object(pe.a)(e,["component","authenticated"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(p.a,{to:"/"}):r.a.createElement(t,e)}}))},fe=a(124),Ee=a.n(fe),be=(a(166),a(167),a(168),a(169),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handlClick=function(){a.props.history.push("".concat("/comit-final-project","/order"))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(V())}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,n=t.slides;return a?r.a.createElement("div",null,"Loading..."):n&&r.a.createElement(Ee.a,{autoplay:3e3,className:"slider-wrapper"},n.map((function(t,a){return r.a.createElement("div",{key:a,className:"slider-content",style:{background:"url('".concat("/comit-final-project").concat(t.image,"') no-repeat center center")}},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("button",{className:"slidebutton",onClick:e.handlClick},t.button)),r.a.createElement("section",null,r.a.createElement("img",{src:"".concat("/comit-final-project").concat(t.userProfile),alt:t.user}),r.a.createElement("span",null,"Order:",r.a.createElement("strong",null,t.user))))})))}}]),t}(n.Component)),ge=Object(C.b)((function(e){return{slides:e.data.slides,loading:e.data.loading,error:e.data.error,UI:e.UI}}),(function(e){return{dispatch:e,fetchSlide:V}}))(be),ve=a(248),je=a(40),Oe=a.n(je),ye=a(252),Ce=a(247),Te=a(187),xe=a(129),Se=a(253),Ne=a(125),Ae=a.n(Ne),ke=a(126),Ie=a.n(ke),we=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSearchChange",value:function(e){this.props.dispatch(W(e.currentTarget.value))}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.searchText;return r.a.createElement(xe.a,{component:"form",className:t.root},r.a.createElement(L.a,{className:t.iconButton,"aria-label":"menu"},r.a.createElement(Ae.a,null)),r.a.createElement(Se.a,{className:t.input,placeholder:"Search ...",inputProps:{"aria-label":"search ..."},value:a,onChange:this.handleSearchChange.bind(this)}),r.a.createElement(L.a,{type:"submit",className:t.iconButton,"aria-label":"search"},r.a.createElement(Ie.a,{color:"primary"})))}}]),t}(n.Component),Ue=Object(C.b)((function(e){return{classes:e.classes,searchText:e.data.searchText,UI:e.UI}}),(function(e){return{dispatch:e,doSearch:W}}))(Object(Te.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}))(we)),_e=a(35),De=(a(3),a(239)),Re=a(240),Fe=a(241),Le=a(242),Pe=a(243),He=a(255),Me=a(62),Be=a(78),We=a(245),ze=a(244),Ve=a(127),Ge=a(254),Je=a(250),Ke=a(238);var $e=function(e){var t=e.option,a=t.name,n=t.adjustPrice,c=(e.includeId,e.optionValue);return r.a.createElement(Ke.a,{value:c,control:r.a.createElement(Je.a,{color:"primary"}),label:"".concat(a," ").concat(n>0?n:""),labelPlacement:"end"})};var Xe=function(e){var t=e.include,a=t.name,n=t.options,c=e.includeId,o=r.a.useState(""),i=Object(Ve.a)(o,2),l=i[0],s=i[1];return r.a.createElement("div",null,r.a.createElement("h5",null,a),r.a.createElement(Ge.a,{"aria-label":"position",name:"position",value:l,onChange:function(e){s(e.target.value)},row:!0},!!n&&n.map((function(e,t){return r.a.createElement($e,{key:"".concat(c,"-").concat(t),includeId:c,optionValue:"".concat(c,"-").concat(t),option:e})}))))},qe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleDownClick=function(){var e=a.props.dish.code,t=a.props.data.dishes.slice(0),n=t.findIndex((function(t){return t.code===e}));t[n].number--,t[n].number<1&&(t[n].number=1),a.props.dispatch($(t))},a.handFavClick=function(){var e=a.props.dish.code,t=a.props.data.dishes.slice(0),n=t.findIndex((function(t){return t.code===e}));t[n].favorite="1"==t[n].favorite?"0":"1",a.props.dispatch($(t))},a.handleUpClick=function(){var e=a.props.dish.code,t=a.props.data.dishes.slice(0),n=t.findIndex((function(t){return t.code===e}));t[n].number++,a.props.dispatch($(t))},a.handleAddToCart=function(){var e=a.props.data.cart.slice(0);e.push(Object.assign({},a.props.dish)),a.props.dispatch(Q(e)),console.log(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.dish,c=n.favorite,o=n.number,i=(n.tag,n.code),l=n.name,s=n.description,u=n.basePrice,m=n.imageUrl,d=n.includes,p=t.loading,h=m||"/dish.png";return r.a.createElement(De.a,{className:a.card},r.a.createElement(Re.a,{avatar:r.a.createElement(He.a,{"aria-label":"recipe",className:a.avatar},o),action:r.a.createElement(L.a,{"aria-label":"add to favorites",onClick:function(){return e.handFavClick()}},r.a.createElement(ie.a,{color:"1"===c?"primary":"inherit"})),title:l,subheader:"Price:".concat(u/100,"$")}),r.a.createElement(Fe.a,{className:a.media,image:"".concat("/comit-final-project").concat(h),title:l}),r.a.createElement(Le.a,null,r.a.createElement(Me.a,{variant:"body2",color:"textSecondary",component:"p"},s),r.a.createElement("div",null,!!d&&d.map((function(e,t){return r.a.createElement(Xe,{key:"".concat(i,"-").concat(t),includeId:"".concat(i,"-").concat(t),include:e})})))),r.a.createElement(Pe.a,{disableSpacing:!0},r.a.createElement(ze.a,null,r.a.createElement(R.a,{onClick:this.handleDownClick},"-"),r.a.createElement(R.a,null,o),r.a.createElement(R.a,{onClick:this.handleUpClick},"+")),r.a.createElement(R.a,{type:"submit",variant:"contained",color:"primary",className:a.button,onClick:this.handleAddToCart,fullWidth:!0},"Add to Order",p&&r.a.createElement(We.a,{size:30,className:a.progress}))),r.a.createElement("div",null))}}]),t}(n.Component),Qe=Object(C.b)((function(e){return{data:e.data,UI:e.UI}}),(function(e){return{dispatch:e,fetchDataSuccess:$,updateCart:Q}}))(Oe()((function(e){var t;return{cardWrapper:{paddingBottom:0,marginBottom:0},card:{width:345,margin:"10px",paddingBottom:"10px",position:"relative"},cardContent:(t={height:"200px"},Object(_e.a)(t,e.breakpoints.down("md"),{width:"200px"}),Object(_e.a)(t,"overflow","hidden"),t),centeredCardConent:{display:"flex",flexDirection:"column",justifyContent:"center"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Be.a[500]}}}))(qe)),Ye=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.data.cart;return r.a.createElement("div",{className:t.list,role:"presentation",onClick:function(){return e.props.dispatch(Z())},onKeyDown:function(){return e.props.dispatch(Z())}},a&&a.map((function(e,t){return r.a.createElement("li",{key:t},e.name," - ",e.number)})))}}]),t}(n.Component),Ze=Object(C.b)((function(e){return{data:e.data,UI:e.UI}}),(function(e){return{dispatch:e,openMCart:Y,closeMCart:Z}}))(Object(Te.a)((function(e){return{list:{width:300},fullList:{width:"auto"}}}))(Ye)),et=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).closeMCartPanel=function(){a.props.dispatch(Z())},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(z())}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.error,n=e.loading,c=e.dishes,o=e.mcart;if(a)return r.a.createElement("div",{className:t.root},r.a.createElement("div",null,"Error! ",a.message),";");if(n)return r.a.createElement("div",{className:t.root},r.a.createElement(Ce.a,{color:"secondary"}));var i=c.map((function(e){return r.a.createElement(Qe,{key:e.code,dish:e})}));return r.a.createElement(ve.a,{container:!0},r.a.createElement(ve.a,{container:!0,justify:"center"},r.a.createElement(Ue,null)),r.a.createElement(ve.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start"},i),r.a.createElement(ye.a,{anchor:"right",open:o,onClose:this.closeMCartPanel},r.a.createElement(Ze,null)))}}]),t}(n.Component),tt=Object(C.b)((function(e){return{classes:e.classes,dishes:e.data.dishes,loading:e.data.loading,error:e.data.error,mcart:e.data.mcart,UI:e.UI}}),(function(e){return{dispatch:e,fetchData:z,openMCart:Y,closeMCart:Z}}))(Oe()((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2),marginTop:300}}}}))(et)),at=a(249),nt=function(){return function(e){B.a.get("/user").then((function(t){e({type:"SET_USER",payload:t.data})})).catch((function(e){return console.log(e)}))}},rt=function(e){var t="Bearer ".concat(e);localStorage.setItem("FBIdToken",t),B.a.defaults.headers.common.Authorization=t},ct=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a,e.props.history)},e.handleChange=function(t){e.setState(Object(_e.a)({},t.target.name,t.target.value))},e.state={email:"",password:"",loading:!1,errors:{}},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.UI.errors&&this.setState({errors:e.UI.errors})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement(ve.a,{container:!0,className:t.form},r.a.createElement(ve.a,{item:!0,sm:!0}),r.a.createElement(ve.a,{item:!0,sm:!0},r.a.createElement("img",{src:"".concat("/comit-final-project","/images/dish.png"),alt:"Dish",className:t.image}),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(at.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(at.a,{id:"password",name:"password",type:"password",label:"Password",className:t.textField,helperText:n.password,error:!!n.password,value:this.state.password,onChange:this.handleChange,fullWidth:!0}),n.general&&r.a.createElement(Me.a,{variant:"h2",className:t.customError},n.general),r.a.createElement(R.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Login",a&&r.a.createElement(We.a,{size:30,className:t.progress})))),r.a.createElement(ve.a,{item:!0,sm:!0}))}}]),t}(n.Component),ot={loginUser:function(e,t){return function(a){a({type:"LOADING UI"}),B.a.post("/login",e).then((function(e){rt(e.data.token),a(nt()),a({type:"CLEAR_ERRORS"}),t.push("/")})).catch((function(e){a({type:"SET_ERRORS",payload:e.response.data})}))}}},it=Object(C.b)((function(e){return{user:e.user,UI:e.UI}}),ot)(Oe()({form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},texrField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"}})(ct)),lt=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(e){e.preventDefault()},e.handleChange=function(t){e.setState(Object(_e.a)({},t.target.name,t.target.value))},e.state={name:"",email:"",description:"",loading:!1,errors:{}},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.UI.loading,n=this.state.errors;return r.a.createElement(ve.a,{container:!0,className:t.form},r.a.createElement(ve.a,{item:!0,sm:!0}),r.a.createElement(ve.a,{item:!0,sm:!0},r.a.createElement("div",{className:t.info},r.a.createElement("h1",null,"ABOUT"),r.a.createElement("address",null,r.a.createElement("b",null,"Phone"),": ",r.a.createElement("a",{href:"tel:+13069336295"},"(306) 933-6295"),r.a.createElement("br",null),r.a.createElement("b",null,"Email"),":"," ",r.a.createElement("a",{href:"mailto:nam.sakatoon@gmail.com"},"nam.sakatoon@gmail.com"),r.a.createElement("br",null),r.a.createElement("b",null,"Address"),": 114 - 15 Innovation Blvd,",r.a.createElement("br",null)," Saskatoon, SK S7N 2X8,")),r.a.createElement("hr",null),r.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},r.a.createElement(at.a,{id:"name",name:"name",type:"text",label:"Name",className:t.textField,helperText:n.name,error:!!n.email,value:this.state.name,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(at.a,{id:"email",name:"email",type:"email",label:"Email",className:t.textField,helperText:n.email,error:!!n.email,value:this.state.email,onChange:this.handleChange,fullWidth:!0}),r.a.createElement(at.a,{id:"description",label:"Description",multiline:!0,rowsMax:"4",value:this.state.description,onChange:this.handleChange,fullWidth:!0}),n.general&&r.a.createElement(Me.a,{variant:"h2",className:t.customError},n.general),r.a.createElement(R.a,{type:"submit",variant:"contained",color:"primary",className:t.button},"Add contact",a&&r.a.createElement(We.a,{size:30,className:t.progress})))),r.a.createElement(ve.a,{item:!0,sm:!0}))}}]),t}(n.Component),st=Object(C.b)((function(e){return{UI:e.UI}}),{})(Oe()({info:{textAlign:"left"},form:{textAlign:"center"},image:{margin:"20px auto 20px auto"},pageTitle:{margin:"10px auto 10px auto"},texrField:{margin:"10px auto 10px auto"},button:{marginTop:20,position:"relative"},customError:{color:"red",fontSize:"0.8rem",marginTop:10},progress:{position:"absolute"}})(lt)),ut=E()(j),mt=localStorage.IdToken;if(mt){var dt=y()(mt);console.log(dt),1e3*dt.ex<Date.now()?(window.location.href="/login",!1):!0}var pt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:ut},r.a.createElement(C.a,{store:U},r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{basename:"/comit-final-project"}),r.a.createElement(d.a,null,r.a.createElement(te,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"".concat("/comit-final-project","/"),component:ge}),r.a.createElement(p.b,{exact:!0,path:"".concat("/comit-final-project","/order"),component:tt}),r.a.createElement(he,{exact:!0,path:"".concat("/comit-final-project","/login"),component:it}),r.a.createElement(he,{exact:!0,path:"".concat("/comit-final-project","/about"),component:st}))),r.a.createElement(de,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[136,1,2]]]);
//# sourceMappingURL=main.8117d0cf.chunk.js.map