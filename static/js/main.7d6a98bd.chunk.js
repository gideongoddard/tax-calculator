(this["webpackJsonptax-calc"]=this["webpackJsonptax-calc"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(13),n(2)),l=n(3),u=n(1),s=n(5),m=n(4),h=(n(14),n(15),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"UK Income Tax Calculator"),o.a.createElement("h2",null,"Year 2020/21"))}}]),n}(o.a.Component)),d=(n(16),n(17),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleUserChoice=a.handleUserChoice.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleUserChoice",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return o.a.createElement("div",{className:"country-field"},o.a.createElement("h3",null,"Do you live in Scotland?"),o.a.createElement("p",null,"Income tax bands are different in Scotland than the rest of the UK"),o.a.createElement("div",{className:"radio"},o.a.createElement("span",null,o.a.createElement("input",{type:"radio",id:"yes",name:"yes",onChange:this.handleUserChoice,value:"yes",checked:"yes"===this.props.scotland}),o.a.createElement("label",{htmlFor:"yes"},"Yes")),o.a.createElement("span",null,o.a.createElement("input",{type:"radio",id:"no",name:"no",onChange:this.handleUserChoice,value:"no",checked:"no"===this.props.scotland}),o.a.createElement("label",{htmlFor:"no"},"No"))))}}]),n}(o.a.Component)),p=(n(18),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleUserInput=a.handleUserInput.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleUserInput",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return o.a.createElement("div",{className:"income-field"},o.a.createElement("h3",null,"What is your annual income (\xa3)?"),o.a.createElement("input",{type:"number",id:"income",name:"income",min:"0",onChange:this.handleUserInput,value:this.props.income}))}}]),n}(o.a.Component)),b=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleScotlandChange=a.handleScotlandChange.bind(Object(u.a)(a)),a.handleIncomeChange=a.handleIncomeChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleScotlandChange",value:function(e){this.props.onScotlandChange(e)}},{key:"handleIncomeChange",value:function(e){this.props.onIncomeChange(e)}},{key:"handleSubmit",value:function(e){this.props.onFormSubmit(!0),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{style:{display:this.props.formSubmitted?"none":"flex"},onSubmit:this.handleSubmit},o.a.createElement(d,{scotland:this.props.scotland,onChange:this.handleScotlandChange}),o.a.createElement("div",{className:"separator"}),o.a.createElement(p,{income:this.props.income,onChange:this.handleIncomeChange}),o.a.createElement("div",{className:"separator"}),o.a.createElement("input",{type:"submit",value:"Submit",className:"submit"}))}}]),n}(o.a.Component),f=(n(19),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:this.props.formSubmitted?"flex":"none"},className:"results"},o.a.createElement("h3",null,"Your results"),o.a.createElement("p",null,"On your salary of \xa3",this.props.income,", your income tax due will be:"),o.a.createElement("div",{className:"main-result"},"\xa3",this.props.incomeTax))}}]),n}(o.a.Component)),v={calculateTax:function(e,t){if(t<=12500)return 0;if("no"===e){if(t>12500&&t<=5e4)return 20*(t-12500)/100;if(t>5e4&&t<=15e4){var n=0;t>125e3&&(n=2500);return 7500+40*(t-5e4)/100+n}if(t>15e4){return 47500+45*(t-15e4)/100+2500}return"Invalid input"}if("yes"===e){if(t>12500&&t<=14585)return 19*(t-12500)/100;if(t>14585&&t<=25158){return 396.15+20*(t-14585)/100}if(t>25158&&t<=43430){return 2510.75+21*(t-25158)/100}if(t>43430&&t<=15e4){var a=0;t>125e3&&(a=2500);return 6347.87+41*(t-43430)/100+a}if(t>15e4){return 6347.87+51185.22+46*(t-15e4)/100+2375}return"Invalid input"}return"Invalid input"}},y=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={formSubmitted:!1,scotland:"no",income:"",incomeTax:""},a.updateScotland=a.updateScotland.bind(Object(u.a)(a)),a.updateIncome=a.updateIncome.bind(Object(u.a)(a)),a.submitForm=a.submitForm.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"updateScotland",value:function(e){this.setState({scotland:e})}},{key:"updateIncome",value:function(e){this.setState({income:e})}},{key:"submitForm",value:function(){var e=v.calculateTax(this.state.scotland,this.state.income);this.setState({formSubmitted:!0,incomeTax:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(b,{scotland:this.state.scotland,onScotlandChange:this.updateScotland,income:this.state.income,onIncomeChange:this.updateIncome,formSubmitted:this.state.formSubmitted,onFormSubmit:this.submitForm}),o.a.createElement(f,{formSubmitted:this.state.formSubmitted,income:this.state.income,incomeTax:this.state.incomeTax}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.7d6a98bd.chunk.js.map