import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const s=document.querySelector(".feedback-form"),t=document.createElement("p");t.classList.add("error-message");t.textContent="Fill please all fields";t.style.display="none";s.appendChild(t);const e={email:"",message:""};function m(){document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message}s.addEventListener("input",function(a){a.target.name==="email"?e.email=a.target.value.trim():a.target.name==="message"&&(e.message=a.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(e))});const l=localStorage.getItem("feedback-form-state");if(l!==null){const a=JSON.parse(l);e.email=a.email,e.message=a.message,m()}s.addEventListener("submit",o);function o(a){a.preventDefault();const r=a.target;if(!e.email||!e.message){t.style.display="block";return}console.log(e),r.reset(),localStorage.clear(),e.email="",e.message="",t.style.display="none"}m();
//# sourceMappingURL=commonHelpers2.js.map
