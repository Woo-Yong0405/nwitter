(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{28:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(29),s=n.n(c),i=n(8),o=n(18),u=n(5),l=n(10),j=n.n(l),d=n(15),b=n(19);n(47),n(38),n(46);b.a.initializeApp({apiKey:"AIzaSyD6upByoR3HNW8hY8iPMMSFEkX2XXQR8Do",authDomain:"nwitter-1aa22.firebaseapp.com",projectId:"nwitter-1aa22",storageBucket:"nwitter-1aa22.appspot.com",messagingSenderId:"1097305276978",appId:"1:1097305276978:web:3e9cf556966d331f8d722b"});var p=b.a,f=b.a.auth(),O=b.a.firestore(),h=b.a.storage(),m=n(1),x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)(!0),b=Object(i.a)(l,2),O=b[0],h=b[1],x=Object(a.useState)(""),w=Object(i.a)(x,2),g=w[0],v=w[1],N=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&u(a)},y=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n?a=new p.auth.GithubAuthProvider:"facebook"===n&&(a=new p.auth.FacebookAuthProvider),e.next=4,f.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h1",{children:"Welcome to Nwitter!"}),Object(m.jsxs)("form",{className:"formform",onSubmit:y,children:[Object(m.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:N}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:N}),Object(m.jsx)("input",{type:"submit",value:O?"Sign Up":"Log In"}),g]}),Object(m.jsx)("span",{className:"loginsignup",onClick:function(){return h((function(e){return!e}))},children:O?"Log In":"Sign Up"}),Object(m.jsxs)("div",{className:"sociallogin",children:[Object(m.jsx)("button",{onClick:k,name:"google",children:"Google"}),Object(m.jsx)("button",{onClick:k,name:"github",children:"Github"}),Object(m.jsx)("button",{onClick:k,name:"facebook",children:"Facebook"})]}),Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("footer",{children:"Nwitter Version 0.0 Last Editied: 2021.8.30"})})]})},w=n(31),g=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),b=l[0],p=l[1],f=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this Nweet?")){e.next=6;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return o((function(e){return!e}))};return Object(m.jsx)("div",{children:s?Object(m.jsxs)("ds",{className:"editing",children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.doc("nweets/".concat(t.id)).update({text:b}),o(!1)},children:[Object(m.jsx)("input",{className:"editing_input",type:"text",placeholder:"Edit your Nweet",onChange:function(e){var t=e.target.value;p(t)},value:b,required:!0}),Object(m.jsx)("input",{className:"editing_submit",type:"submit",value:"Update Nweet"})]}),Object(m.jsx)("button",{className:"editing_cancel",onClick:x,children:"Cancel"})]}):Object(m.jsxs)("sd",{className:"nweet-message",children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{className:"nweet-message_img",src:t.attachmentUrl,width:"50px",height:"50px",alt:""}),n&&Object(m.jsxs)("da",{className:"isowner",children:[Object(m.jsx)("button",{className:"isowner_delete",onClick:f,children:"Delete Nweet"}),Object(m.jsx)("button",{className:"isowner_edit",onClick:x,children:"Edit Nweet"})]})]})})},v=n(49),N=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),l=u[0],b=u[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),x=f[0],N=f[1];Object(a.useEffect)((function(){O.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));b(t)}))}),[]);var y=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,r,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===x){e.next=10;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(v.a)())),e.next=6,r.putString(x,"data_url");case 6:return i=e.sent,e.next=9,i.ref.getDownloadURL();case 9:a=e.sent;case 10:return o={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=13,O.collection("nweets").add(o);case 13:s(""),N("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:l.map((function(e){return Object(m.jsx)(g,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))}),Object(m.jsxs)("form",{className:"nweet",onSubmit:y,children:[Object(m.jsx)("input",{className:"nweet_input",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120,required:!0}),Object(m.jsx)("input",{className:"nweet_image",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;N(t)},n.readAsDataURL(t)}}),x&&Object(m.jsxs)("div",{className:"nweet_img-preview",children:[Object(m.jsx)("img",{src:x,alt:""}),Object(m.jsx)("button",{onClick:function(){N(null)},children:"Clear"})]}),Object(m.jsx)("input",{className:"nweet_nweet",type:"submit",value:"Nweet"})]}),Object(m.jsx)("footer",{children:"Nwitter Version 0.0 Last Editied: 2021.8.30"})]})},y=function(e){var t=e.refreshUser,n=e.userObj,r=Object(u.f)(),c=Object(a.useState)(n.displayName),s=Object(i.a)(c,2),o=s[0],l=s[1],b=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("da",{className:"profile",children:[Object(m.jsxs)("form",{className:"profile_form",onSubmit:b,children:[Object(m.jsx)("input",{className:"profile_form_input",type:"text",onChange:function(e){var t=e.target.value;l(t)},placeholder:"Display Name",value:o}),Object(m.jsx)("input",{className:"profile_form_submit",type:"submit",value:"Update Profile"})]}),Object(m.jsx)("button",{className:"logout",onClick:function(){window.confirm("Are you sure you want to log out?")&&(f.signOut(),r.push("/"))},children:"Log Out"}),Object(m.jsx)("footer",{children:"Nwitter Version 0.0 Last Editied: 2021.8.30"})]})},k=(n(28),function(e){var t=e.userObj;return Object(m.jsxs)("nav",{children:[Object(m.jsx)("div",{id:"navds",children:Object(m.jsx)("p",{children:Object(m.jsx)(o.b,{to:"/",className:"link",children:"Home"})})}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:Object(m.jsxs)(o.b,{to:"/profile",className:"link",children:[t.displayName,"'s Profile"]})})})]})}),S=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(o.a,{children:[n&&Object(m.jsx)(k,{userObj:a}),Object(m.jsx)(u.c,{children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(N,{userObj:a})}),Object(m.jsx)(u.a,{exact:!0,path:"/profile",children:Object(m.jsx)(y,{userObj:a,refreshUser:t})})]}):Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(x,{})})})]})};var C=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(S,{refreshUser:function(){var e=f.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8c7636a7.chunk.js.map