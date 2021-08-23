(this["webpackJsonpmagic-eye"]=this["webpackJsonpmagic-eye"]||[]).push([[0],{121:function(e,t,n){},140:function(e,t){},156:function(e,t,n){},157:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},195:function(e,t,n){},213:function(e,t,n){},215:function(e,t){},228:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s=n(20),c=n.n(s),a=(n(156),n(35)),i=n(30),u=n(51),l=n(50),d=n(27),p=(n(157),n(43)),j=n(17),b=n(274),O=n(276),f=n(277),h=n(87),g=n(127),C=n.n(g),x=n(14),v="TOGGLE_PROGRESS",S="TOGGLE_DRAWER",m="LOG_OUT",y="STORE_USER",w="FETCH_COURSES_BEGIN",E="FETCH_COURSES_SUCCESS",P="FETCH_COURSES_FAILURE",I="FETCH_COURSE_CONTENTS_BEGIN",T="FETCH_COURSE_CONTENTS_SUCCESS",N="FETCH_COURSE_CONTENTS_FAILURE",_="FETCH_VIDEOS_BEGIN",k="FETCH_VIDEOS_SUCCESS",D="FETCH_VIDEOS_FAILURE",F="FETCH_PDFS_BEGIN",L="FETCH_PDFS_SUCCESS",U="FETCH_PDFS_FAILURE",A="FETCH_LINKS_BEGIN",R="FETCH_LINKS_SUCCESS",B="FETCH_LINKS_FAILURE",H="FETCH_CATALOGS_BEGIN",V="FETCH_CATALOGS_SUCCESS",G="FETCH_CATALOGS_FAILURE",M="FETCH_USER_INFO_BEGIN",W="FETCH_USER_INFO_SUCCESS",z="FETCH_USER_INFO_FAILURE",K="CLEAR_COURSES",J="SET_SELECTED_COURSE",Y="SET_SELECTED_COURSE_CONTENT",X="SET_SELECTED_VIDEO",Z="SET_SELECTED_PDF",q="SET_SELECTED_LINK",Q="SET_DOWNLOAD_URL",$=n(7),ee=n(6),te={apiKey:"AIzaSyBr5zvyP47SpotmXSKaO-CgYMzZ9cz9Nns",authDomain:"magiceyelearningcenter-aa59e.firebaseapp.com",databaseURL:"https://magiceyelearningcenter-aa59e.firebaseio.com",projectId:"magiceyelearningcenter-aa59e",storageBucket:"magiceyelearningcenter-aa59e.appspot.com",messagingSenderId:"719274574069",appId:"1:719274574069:web:47008065b3eb3b6f2845bc",measurementId:"G-GXSDNRK361"};n(92);$.b.apps.length?$.b.app():$.b.initializeApp(te);var ne=$.b.firestore();function re(e){return console.log("fetching course contents:=>",e),function(t,n){t({type:I});n().app.user;return function(e){return console.log("course id is",e),ne.collection("dataByCourse").doc(e).collection("contents").get()}(e).then((function(e){var n;t((n=e.docs.map((function(e){return Object(ee.a)(Object(ee.a)({},e.data()),{},{id:e.id})})),{type:T,payload:{courseContents:n}}))})).catch((function(e){return t(function(e){return{type:N,payload:{error:e}}}())}))}}function oe(e){return console.log("fetching videos:=>",e.courseId,",",e.contentId),function(t,n){return t({type:_}),(r=e.courseId,o=e.contentId,console.log("content:",o,"course",r),ne.collection("VideoByContent").doc(r).collection(o).orderBy("createdDate","desc").get()).then((function(e){var n=e.docs.map((function(e){return Object(ee.a)(Object(ee.a)({},e.data()),{},{id:e.id})}));n=n.filter((function(e){return e.visible})),console.log("video:",n),t({type:k,payload:n})})).catch((function(e){return t(function(e){return{type:D,payload:{error:e}}}())}));var r,o}}function se(e){return console.log("fetching pdfs:=>",e.courseId,",",e.contentId),function(t,n){return t({type:F}),(r=e.courseId,o=e.contentId,console.log("content:",o,"course",r),ne.collection("PdfByContent").doc(r).collection(o).orderBy("createdDate","desc").get()).then((function(e){var n=e.docs.map((function(e){return Object(ee.a)(Object(ee.a)({},e.data()),{},{id:e.id})}));n=n.filter((function(e){return e.visible})),console.log("pdfs:",n),t({type:L,payload:n})})).catch((function(e){return t(function(e){return{type:U,payload:{error:e}}}())}));var r,o}}function ce(e){return console.log("fetching links:=>",e.courseId,",",e.contentId),function(t,n){return t({type:A}),(r=e.courseId,o=e.contentId,console.log("content:",o,"course",r),ne.collection("LinkByContent").doc(r).collection(o).orderBy("createdDate","desc").get()).then((function(e){var n=e.docs.map((function(e){return Object(ee.a)(Object(ee.a)({},e.data()),{},{id:e.id})}));n=n.filter((function(e){return e.visible})),console.log("pdfs:",n),t({type:R,payload:n})})).catch((function(e){return t(function(e){return{type:B,payload:{error:e}}}())}));var r,o}}function ae(){return console.log("fetching courses"),function(e,t){var n,r;return e({type:w}),e({type:K,payload:null}),console.log("user from local storage",localStorage.getItem("user")),function(e){console.log("fetching user data",e);var t=ne.collection("CourseByStudent");if(e){var n=e.phoneNumber.replace("+959","09");t=t.doc(n).collection("courses")}return t.get()}(null!==(n=null!==(r=$.b.auth().currentUser)&&void 0!==r?r:t("app").user)&&void 0!==n?n:JSON.parse(localStorage.getItem("user"))).then((function(t){t.forEach((function(t){ne.collection("courses").doc(t.id).get().then((function(n){var r;console.log("course data",n.data()),e((r=Object(ee.a)(Object(ee.a)({},n.data()),{},{id:t.id}),{type:E,payload:{courses:r}}))}))}))})).catch((function(t){return e(function(e){return{type:P,payload:{error:e}}}(t))}))}}function ie(){return console.log("fetching catalogs"),function(e,t){return e({type:H}),ne.collection("courses").get().then((function(t){var n=t.docs.map((function(e){return Object(ee.a)(Object(ee.a)({},e.data()),{},{id:e.id})}));console.log("catalogs:",n),e(function(e){return{type:V,payload:e}}(n))})).catch((function(t){return e(function(e){return{type:G,payload:{error:e}}}(t))}))}}function ue(){return console.log("fetching user info"),function(e,t){var n,r;return e({type:M}),function(e){var t=e.phoneNumber.replace("+959","09");return console.log("getting user info",t),ne.collection("students").doc(t).get()}(null!==(n=null!==(r=$.b.auth().currentUser)&&void 0!==r?r:t("app").user)&&void 0!==n?n:JSON.parse(localStorage.getItem("user"))).then((function(t){var n;console.log("user data:",t.data()),e((n=t.data(),{type:W,payload:n}))})).catch((function(t){return e(function(e){return{type:z,payload:{error:e}}}(t))}))}}var le=n(3);var de=Object(x.b)((function(e){return{user:e.app.user,userInfo:e.app.userInfo}}),(function(e){return{fetchUserInfo:function(){return e(ue())}}}))((function(e){return Object(r.useEffect)((function(){e.user&&e.userInfo&&e.fetchUserInfo()}),[]),e.user&&e.userInfo?Object(le.jsx)("span",{children:e.userInfo.name}):Object(le.jsx)("div",{children:"Not Logged In"})})),pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={achorEl:!1,MobileMoreAnchorEl:!1},e.handleProfileMenuOpen=function(t){e.setState({achorEl:t.currentTarget})},e.handleMobileMenuClose=function(){e.setState({mobileMoreAnchorEl:null})},e.handleMenuClose=function(){e.setState({achorEl:null,mobileMoreAnchorEl:null})},e.handleMobileMenuOpen=function(t){e.setState({mobileMoreAnchorEl:t.currentTarget})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return Object(le.jsx)("div",{className:t.grow,children:Object(le.jsx)(b.a,{position:"static",children:Object(le.jsxs)(O.a,{children:[Object(le.jsx)(f.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){return e.props.toggleDrawer()},children:Object(le.jsx)(C.a,{})}),Object(le.jsx)(h.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(le.jsx)("span",{className:"whiteText",children:"Magic Eye Learning Center"})}),Object(le.jsx)("div",{className:t.grow}),Object(le.jsx)("div",{children:Object(le.jsx)(h.a,{variant:"h6",children:Object(le.jsx)(de,{className:"whiteText"})})})]})})})}}]),n}(o.a.Component),je=Object(j.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}))(Object(x.b)((function(e){return{isDrawerOpen:e.app.isDrawerOpen,user:e.app.user}}),(function(e){return{toggleDrawer:function(){return e({type:S})}}}))(pe)),be=n(284),Oe=n(131),fe=n.n(Oe),he=n(278),ge=n(279),Ce=n(280),xe=n(281),ve=n(282),Se=n(130),me=n.n(Se),ye=n(97),we=n.n(ye),Ee=n(128),Pe=n.n(Ee),Ie=n(129),Te=n.n(Ie),Ne=n(19);n(62);function _e(e){return{type:v,payload:e}}function ke(){return{type:S,payload:null}}function De(e){return localStorage.setItem("user",JSON.stringify(e)),console.log("user stored on local storage",e),{type:y,payload:e}}$.b.apps.length?$.b.app():$.b.initializeApp(te);var Fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=$.b.auth().onAuthStateChanged((function(t){t||e.props.storeUser(null)}));return function(){return t()}}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(le.jsx)(be.a,{open:this.props.isDrawerOpen,onClose:function(){return e.props.toggleDrawer()},children:Object(le.jsxs)("div",{className:t.list,role:"presentation",onClick:function(){return e.props.toggleDrawer()},onKeyDown:function(){return e.props.toggleDrawer()},children:[Object(le.jsxs)(he.a,{children:[e.props.user&&Object(le.jsx)(Ne.b,{to:"/courses",children:Object(le.jsxs)(ge.a,{button:!0,children:[Object(le.jsx)(Ce.a,{children:Object(le.jsx)(Pe.a,{})}),Object(le.jsx)(xe.a,{primary:"Courses"})]},"Courses")}),e.props.user&&Object(le.jsx)(Ne.b,{to:"/catalogs",children:Object(le.jsxs)(ge.a,{button:!0,children:[Object(le.jsx)(Ce.a,{children:Object(le.jsx)(Te.a,{})}),Object(le.jsx)(xe.a,{primary:"Catalogs"})]},"Catalogs")}),e.props.user&&Object(le.jsx)(Ne.b,{to:"/about",children:Object(le.jsxs)(ge.a,{button:!0,children:[Object(le.jsx)(Ce.a,{children:Object(le.jsx)(me.a,{})}),Object(le.jsx)(xe.a,{primary:"About"})]},"About")})]}),Object(le.jsx)(ve.a,{}),Object(le.jsxs)(he.a,{children:[e.props.user&&Object(le.jsxs)(ge.a,{button:!0,children:[Object(le.jsxs)("a",{onClick:function(){return e.props.signOut()},children:[Object(le.jsx)(Ce.a,{children:Object(le.jsx)(we.a,{})})," "]}),Object(le.jsx)("a",{onClick:function(){return e.props.signOut()},children:Object(le.jsx)(xe.a,{primary:"LogOut"})})]},"Logout"),!e.props.user&&Object(le.jsx)(Ne.b,{to:"/login",children:Object(le.jsxs)(ge.a,{button:!0,children:[Object(le.jsx)(Ce.a,{children:Object(le.jsx)(we.a,{})}),Object(le.jsx)(xe.a,{primary:"LogIn"})]},"LogIn")})]})]})})}}]),n}(o.a.Component),Le=fe()((function(e){return{list:{width:250},fullList:{width:"auto"}}}))(Object(x.b)((function(e){return{isDrawerOpen:e.app.isDrawerOpen,user:e.app.user}}),(function(e){return{toggleDrawer:function(){return e(ke())},toggleProgress:function(){return e(_e())},storeUser:function(t){return e(De(t))},signOut:function(){return e((localStorage.setItem("user",null),$.b.auth().signOut(),{type:m}))}}}))(Fe)),Ue=n(283);var Ae=Object(x.b)((function(e){return{isProgressShown:e.app.isProgressShown,progressText:e.app.progressText}}),(function(e){return{toggleProgress:function(){return e(_e())}}}))((function(e){var t;return e.isProgressShown?Object(le.jsxs)("div",{onClick:function(){return e.toggleProgress()},style:{width:"100%",height:"100%",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(le.jsx)("span",{style:{marginRight:"10px",color:"blue",fontWeight:"bold"},children:null!==(t=e.progressText)&&void 0!==t?t:"Please wait"}),"  ",Object(le.jsx)(Ue.a,{})]}):Object(le.jsx)("div",{})}));n(190);n(191);var Re=Object(x.b)((function(e){return{user:e.app.user}}),(function(e){return{toggleProgress:function(t){return e(_e(t))}}}))((function(e){return Object(le.jsxs)("div",{className:"About",children:[Object(le.jsx)("h3",{children:"Magic Eye Computer Group (Pakokku)"}),Object(le.jsxs)("div",{children:[" ","Student Name : ",Object(le.jsx)(de,{})]}),Object(le.jsxs)("div",{children:["Phone No : ",Object(le.jsx)("span",{children:e.user.phoneNumber})]})]})})),Be=(n(192),n(22));var He=Object(x.b)((function(e){return{}}),(function(e){return{setSelectedVideo:function(t){return e({type:X,payload:{selectedVideo:t}})}}}))((function(e){var t=Object(Be.g)();return Object(le.jsx)("div",{onClick:function(){return t.push("/viewVideo"),void e.setSelectedVideo(e.video)},children:Object(le.jsx)("div",{children:e.video.name})})})),Ve=(n(193),n(132)),Ge=n.n(Ve);var Me=function(){return Object(le.jsx)("div",{className:"NoDataWrapper",children:Object(le.jsxs)("div",{children:[Object(le.jsx)(Ge.a,{}),Object(le.jsx)("div",{children:"No Data Found!!!"})]})})};var We=Object(x.b)((function(e){return{selectedCourseContent:e.app.selectedCourseContent,selectedCourse:e.app.selectedCourse,videos:e.app.videos,isProgressShown:e.app.isProgressShown}}),(function(e){return{fetchVideos:function(t){return e(oe(t))}}}))((function(e){return Object(r.useEffect)((function(){if(e.selectedCourseContent&&e.selectedCourse){var t={courseId:e.selectedCourse.id,contentId:e.selectedCourseContent.id};e.fetchVideos(t)}}),[]),e.selectedCourse&&e.selectedCourseContent?e.videos.length<=0&&!e.isProgressShown?Object(le.jsx)(Me,{}):Object(le.jsx)("div",{children:e.videos?Object(le.jsx)("div",{className:"videos",children:Object(le.jsx)("div",{className:"videosWrapper",children:e.videos.map((function(e){return Object(le.jsx)(He,{video:e})}))})}):"no videos found"}):Object(le.jsx)(Be.a,{to:"/"})}));var ze=function(e){return Object(le.jsx)("div",{children:Object(le.jsx)(Ne.b,{to:{pathname:"https://"+e.link.link},target:"_blank",children:e.link.name})})};var Ke=Object(x.b)((function(e){return{selectedCourseContent:e.app.selectedCourseContent,selectedCourse:e.app.selectedCourse,links:e.app.links,isProgressShown:e.app.isProgressShown}}),(function(e){return{fetchLinks:function(t){return e(ce(t))}}}))((function(e){return Object(r.useEffect)((function(){if(e.selectedCourseContent&&e.selectedCourse){var t={courseId:e.selectedCourse.id,contentId:e.selectedCourseContent.id};e.fetchLinks(t)}}),[]),e.selectedCourse&&e.selectedCourseContent?e.links.length<=0?Object(le.jsx)(Me,{}):Object(le.jsx)("div",{children:e.links?Object(le.jsx)("div",{className:"videos",children:Object(le.jsx)("div",{className:"videosWrapper",children:e.links.map((function(e){return Object(le.jsx)(ze,{link:e})}))})}):"no links found"}):Object(le.jsx)(Be.a,{to:"/"})}));var Je=Object(x.b)((function(e){return{}}),(function(e){return{setSelectedPDF:function(t){return e({type:Z,payload:{selectedPDF:t}})}}}))((function(e){var t=Object(Be.g)();return Object(le.jsx)("div",{onClick:function(){return t.push("/viewPDF"),void e.setSelectedPDF(e.pdf)},children:e.pdf.name})}));var Ye=Object(x.b)((function(e){return{selectedCourseContent:e.app.selectedCourseContent,selectedCourse:e.app.selectedCourse,pdfs:e.app.pdfs,isProgressShown:e.app.isProgressShown}}),(function(e){return{fetchPDFs:function(t){return e(se(t))}}}))((function(e){return Object(r.useEffect)((function(){if(e.selectedCourseContent&&e.selectedCourse){var t={courseId:e.selectedCourse.id,contentId:e.selectedCourseContent.id};e.fetchPDFs(t)}}),[]),e.selectedCourse&&e.selectedCourseContent?e.pdfs.length<=0&&!e.isProgressShown?Object(le.jsx)(Me,{}):Object(le.jsx)("div",{children:e.pdfs?Object(le.jsx)("div",{className:"videos",children:Object(le.jsx)("div",{className:"videosWrapper",children:e.pdfs.map((function(e){return Object(le.jsx)(Je,{pdf:e})}))})}):"no pdfs found"}):Object(le.jsx)(Be.a,{to:"/"})})),Xe=(n(99),n(46)),Ze=(n(133),n(195),n(83)),qe=n.n(Ze),Qe=(n(213),function(e){var t=e.playableUrl;return Object(le.jsx)("div",{className:"video-responsive",children:Object(le.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t.embedId),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}),$e=(n(214),n(144));o.a.Component;var et=Object(x.b)((function(e){return{video:e.app.selectedVideo,isProgressShown:e.app.isProgressShown}}),(function(e){return{toggleProgress:function(t){return e(_e(t))}}}))((function(e){var t=Object(r.useState)({}),n=Object(Xe.a)(t,2),o=n[0],s=n[1],c=Object(r.useState)({}),a=Object(Xe.a)(c,2);if(a[0],a[1],Object(r.useEffect)((function(){s({type:"YOUTUBE",embedId:e.video.url})}),[]),!e.video)return Object(le.jsx)(Be.a,{to:"/"});var i=Object(le.jsx)("div",{style:{display:e.isProgressShown?"none":"block",marginTop:"150px",textAlign:"center",fontWeight:"bolder"},children:"Sorry,something wrong while extracting Video links !!!"});return(o.type="YOUTUBE")&&o.embedId&&(i=Object(le.jsx)(Qe,{playableUrl:o})),Object(le.jsx)("div",{className:"videoViewerWrapper",children:i})}));n(228);var tt=Object(x.b)((function(e){return{pdf:e.app.selectedPDF,isProgressShown:e.app.isProgressShown}}),(function(e){return{toggleProgress:function(t){return e(_e(t))},setDownloadUrl:function(t){return e(function(e){return{type:Q,payload:e}}(t))}}}))((function(e){var t=Object(r.useState)(""),n=Object(Xe.a)(t,2),o=n[0],s=n[1];if(Object(r.useEffect)((function(){if(e.pdf){e.toggleProgress(!0);var t=new FormData;t.append("media_link",e.pdf.url),qe()({method:"post",url:"https://www.oursecretworld.site/linkextractor.php",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(t){s(t.data.absoluteLink),e.toggleProgress(!1)})).catch((function(t){e.toggleProgress(!1)}))}}),[]),!e.pdf)return Object(le.jsx)(Be.a,{to:"/"});var c=Object(le.jsx)("div",{style:{display:e.isProgressShown?"none":"block",marginTop:"150px",textAlign:"center",fontWeight:"bolder"},children:"Sorry,something wrong while extracting pdf links !!!"});return o&&(c=Object(le.jsxs)("div",{className:"pdfActionsWrapper",children:[Object(le.jsx)("a",{href:"https://drive.google.com/viewerng/viewer?url="+o,target:"_blank",children:"View PDF"}),Object(le.jsx)("a",{href:o,children:"Download PDF"})]})),Object(le.jsx)("div",{children:c})})),nt=n(140),rt=n.n(nt);n(229);var ot=Object(x.b)((function(e){return{isProgressShown:e.app.isProgressShown,selectedCourse:e.app.selectedCourse}}),(function(e){return{toggleProgress:function(t){return e(_e(t))},setSelectedCourse:function(t){return e({type:J,payload:{selectedCourse:t}})}}}))((function(e){var t=Object(Be.g)();return Object(le.jsx)("div",{className:"courseItem",onClick:function(){return t.push("/courseContent"),void e.setSelectedCourse(e.item)},children:Object(le.jsx)("span",{children:e.item.name})})}));n(121);$.b.apps.length?$.b.app():$.b.initializeApp(te);$.b.firestore();var st=Object(x.b)((function(e){return{isProgressShown:e.app.isProgressShown,courses:e.app.courses}}),(function(e){return{toggleProgress:function(t){return e(_e(t))},fetchCourses:function(){return e(ae())}}}))((function(e){return Object(r.useEffect)((function(){e.fetchCourses()}),[]),e.courses.length<=0&&!e.isProgressShown?Object(le.jsx)(Me,{}):Object(le.jsx)("div",{className:"courses",children:Object(le.jsx)("div",{className:"coursesWrapper",children:e.courses.map((function(e){return Object(le.jsx)(ot,{item:e},e.id)}))})})}));$.b.apps.length?$.b.app():$.b.initializeApp(te);$.b.firestore();var ct=Object(x.b)((function(e){return{isProgressShown:e.app.isProgressShown,catalogs:e.app.catalogs}}),(function(e){return{toggleProgress:function(t){return e(_e(t))},fetchCatalogs:function(){return e(ie())}}}))((function(e){return Object(r.useEffect)((function(){e.fetchCatalogs()}),[]),e.catalogs.length<=0&&!e.isProgressShown?Object(le.jsx)(Me,{}):Object(le.jsx)("div",{className:"courses",children:Object(le.jsx)("div",{className:"coursesWrapper",children:e.catalogs.map((function(e){return Object(le.jsx)("div",{className:"courseItem",children:e.name})}))})})}));var at=Object(x.b)((function(e){return{isProgressShown:e.app.isProgressShown}}),(function(e){return{setSelectedCourseContent:function(t){return e({type:Y,payload:{selectedCourseContent:t}})}}}))((function(e){var t=Object(Be.g)();return Object(le.jsx)("div",{className:"courseItem",onClick:function(){return e.setSelectedCourseContent(e.item),void t.push("/courseContentDetail")},children:e.item.name})}));var it=Object(x.b)((function(e){return{selectedCourse:e.app.selectedCourse,courseContents:e.app.courseContents,isProgressShown:e.app.isProgressShown}}),(function(e){return{fetchCourseContents:function(t){return e(re(t))}}}))((function(e){return Object(Be.g)(),Object(r.useEffect)((function(){e.selectedCourse&&e.fetchCourseContents(e.selectedCourse.id)}),[]),e.selectedCourse?e.courseContents.length<=0&&!e.isProgressShown?Object(le.jsx)(Me,{}):Object(le.jsx)("div",{children:e.selectedCourse?Object(le.jsx)("div",{className:"courses",children:Object(le.jsx)("div",{className:"coursesWrapper",children:e.courseContents.map((function(e){return Object(le.jsx)(at,{item:e},e.id)}))})}):"no data"}):Object(le.jsx)(Be.a,{to:"/"})}));n(230);var ut=Object(x.b)((function(e){return{selectedCourseContent:e.app.selectedCourseContent}}),(function(e){return{}}))((function(e){return e.selectedCourseContent?Object(le.jsxs)("div",{className:"courseContentWrapper",children:[Object(le.jsx)(Ne.b,{className:"contentType",to:"/videos",children:"Videos"}),Object(le.jsx)(Ne.b,{className:"contentType",to:"/pdfs",children:"PDFs"}),Object(le.jsx)(Ne.b,{className:"contentType",to:"/links",children:"Links"})]}):Object(le.jsx)(Be.a,{to:"/"})})),lt=(n(231),n(141)),dt=n.n(lt);$.b.apps.length?$.b.app():$.b.initializeApp(te);var pt={signInFlow:"popup",signInOptions:[{provider:$.b.auth.PhoneAuthProvider.PROVIDER_ID,defaultCountry:"MM",loginHint:"09440883322"}],callbacks:{signInSuccessWithAuthResult:function(){return!1}}};var jt=Object(x.b)((function(e){return{isProgressShown:e.app.isProgressShown,user:e.app.user}}),(function(e){return{toggleProgress:function(t){return e(_e(t))},storeUser:function(t){return e(De(t))}}}))((function(e){return Object(r.useEffect)((function(){var t=$.b.auth().onAuthStateChanged((function(t){t&&e.storeUser(t)}));return function(){return t()}}),[]),e.user?Object(le.jsx)(Be.a,{to:"/courses"}):Object(le.jsxs)("div",{style:{marginTop:"30px"},children:[Object(le.jsx)(dt.a,{uiConfig:pt,firebaseAuth:$.b.auth()})," "]})})),bt=n(9),Ot=["component","user"],ft=function(e){var t=e.component,n=e.user,r=Object(bt.a)(e,Ot);return Object(le.jsx)(Be.b,Object(ee.a)(Object(ee.a)({},r),{},{render:function(e){return n?Object(le.jsx)(t,Object(ee.a)(Object(ee.a)({},r),e)):Object(le.jsx)(Be.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var ht=Object(x.b)((function(e){return{user:e.app.user}}))((function(e){return Object(le.jsxs)(Be.d,{children:[Object(le.jsx)(ft,{exact:!0,path:"/about",user:e.user,component:Re}),Object(le.jsx)(ft,{exact:!0,path:"/courses",user:e.user,component:st}),Object(le.jsx)(ft,{exact:!0,path:"/catalogs",user:e.user,component:ct}),Object(le.jsx)(ft,{exact:!0,path:"/courseContent",user:e.user,component:it}),Object(le.jsx)(ft,{exact:!0,path:"/videos",user:e.user,component:We}),Object(le.jsx)(ft,{exact:!0,path:"/pdfs",user:e.user,component:Ye}),Object(le.jsx)(ft,{exact:!0,path:"/links",user:e.user,component:Ke}),Object(le.jsx)(ft,{exact:!0,path:"/viewVideo",user:e.user,component:et}),Object(le.jsx)(ft,{exact:!0,path:"/viewPDF",user:e.user,component:tt}),Object(le.jsx)(ft,{exact:!0,path:"/viewLink",user:e.user,component:rt.a}),Object(le.jsx)(ft,{exact:!0,path:"/courseContentDetail",user:e.user,component:ut}),Object(le.jsx)(Be.b,{path:"/login",children:Object(le.jsx)(jt,{})}),Object(le.jsx)(ft,{exact:!0,path:"/",user:e.user,component:st})]})})),gt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(le.jsxs)("div",{className:"App",style:{position:"relative",height:"100%"},children:[Object(le.jsx)(Ae,{}),Object(le.jsx)(je,{openDrawerHandler:function(){return ke()}}),Object(le.jsx)(Le,{}),Object(le.jsx)(ht,{})]})}}]),n}(o.a.Component),Ct=Object(x.b)((function(e){return{left:e.left,isProgressShown:e.isProgressShown}}))(gt),xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,285)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),s(e),c(e)}))},vt=n(67),St=n(36),mt={user:JSON.parse(localStorage.getItem("user")),userInfo:{},isProgressShown:!1,progressText:"Loading..",isDrawerOpen:!1,courses:[],catalogs:[],courseContents:[],selectedCourse:null,selectedCourseContent:null,selectedVideo:null,selectedPDF:null,selectedLink:null,videos:[],pdfs:[],links:[],downloadUrl:""};var yt=Object(vt.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!!t.payload&&t.payload,progressText:t.payload?t.payload:mt.progressText});case S:return Object(ee.a)(Object(ee.a)({},e),{},{isDrawerOpen:!e.isDrawerOpen});case m:return Object(ee.a)(Object(ee.a)({},e),{},{user:null});case y:return console.log("storing user:"+t.payload.phoneNumber),Object(ee.a)(Object(ee.a)({},e),{},{user:t.payload});case H:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!0,progressText:"Fetching catalogs"});case V:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,catalogs:t.payload});case G:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,catalogs:[]});case w:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!0,progressText:"Fetching Courses"});case E:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,courses:[].concat(Object(St.a)(e.courses),[t.payload.courses])});case P:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,courses:[]});case I:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!0,progressText:"Fetching Course Contents"});case T:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,courseContents:t.payload.courseContents});case N:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,courseContents:[]});case _:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!0,progressText:"Fetching Videos",videos:[]});case k:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,videos:t.payload});case D:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,videos:[]});case F:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!0,progressText:"Fetching PDFs",pdfs:[]});case L:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,pdfs:t.payload});case U:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,pdfs:[]});case A:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!0,progressText:"Fetching Links",links:[]});case R:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,links:t.payload});case B:return Object(ee.a)(Object(ee.a)({},e),{},{isProgressShown:!1,links:[]});case M:return Object(ee.a)(Object(ee.a)({},e),{},{userInfo:{}});case W:return Object(ee.a)(Object(ee.a)({},e),{},{userInfo:t.payload});case z:return Object(ee.a)(Object(ee.a)({},e),{},{userInfo:{}});case K:return Object(ee.a)(Object(ee.a)({},e),{},{courses:[]});case J:return Object(ee.a)(Object(ee.a)({},e),{},{selectedCourse:t.payload.selectedCourse});case Y:return Object(ee.a)(Object(ee.a)({},e),{},{selectedCourseContent:t.payload.selectedCourseContent});case X:return Object(ee.a)(Object(ee.a)({},e),{},{selectedVideo:t.payload.selectedVideo});case Z:return Object(ee.a)(Object(ee.a)({},e),{},{selectedPDF:t.payload.selectedPDF});case q:return Object(ee.a)(Object(ee.a)({},e),{},{selectedLink:t.payload.selectedLink});case Q:return Object(ee.a)(Object(ee.a)({},e),{},{downloadUrl:t.payload});default:return e}}}),wt=n(143),Et=Object(vt.c)(yt,Object(vt.a)(wt.a));c.a.render(Object(le.jsx)(o.a.StrictMode,{children:Object(le.jsx)(Ne.a,{children:Object(le.jsx)(x.a,{store:Et,children:Object(le.jsx)(Ct,{})})})}),document.getElementById("root")),xt()}},[[240,1,2]]]);
//# sourceMappingURL=main.d7d43516.chunk.js.map