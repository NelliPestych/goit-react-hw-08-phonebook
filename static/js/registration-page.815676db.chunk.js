(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{199:function(e,a,t){e.exports={registrationForm:"Registration_registrationForm__rhhZY"}},218:function(e,a,t){"use strict";t.r(a);var n=t(158),r=t(2),i=t(54),o=t(55),l=t(57),s=t(56),m=t(0),c=t.n(m),u=t(23),h=t(22),p=t(222),d=t(221),b=t(220),g=t(145),v=t(199),w=t.n(v),E={name:"",email:"",password:""},f=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state=E,e.handleInputChange=function(a){var t=a.target,n=t.value,i=t.name;e.setState(Object(r.a)({},i,n))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(Object(n.a)({},e.state)),e.setState(E)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return c.a.createElement("form",{className:w.a.registrationForm,onSubmit:this.handleSubmit},c.a.createElement(p.a,{variant:"outlined"},c.a.createElement(d.a,{htmlFor:"name"},"Name"),c.a.createElement(b.a,{type:"text",name:"name",id:"name",value:a,onChange:this.handleInputChange,label:"Name",required:!0})),c.a.createElement(p.a,{variant:"outlined"},c.a.createElement(d.a,{htmlFor:"email"},"Email"),c.a.createElement(b.a,{type:"email",name:"email",id:"email",value:t,onChange:this.handleInputChange,label:"Email",required:!0})),c.a.createElement(p.a,{variant:"outlined"},c.a.createElement(d.a,{htmlFor:"password"},"Password"),c.a.createElement(b.a,{type:"password",name:"password",id:"password",value:n,onChange:this.handleInputChange,label:"Password",placeholder:"Enter your password",required:!0})),c.a.createElement(g.a,{variant:"contained",color:"primary",type:"submit"},"Register"))}}]),t}(m.Component);a.default=Object(u.b)(null,{onRegister:h.a.register})(f)}}]);
//# sourceMappingURL=registration-page.815676db.chunk.js.map