var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var o=a("kEUo3");const n=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),s=document.querySelector('textarea[name="message"]');n.addEventListener("input",(0,o.throttle)((e=>{const t={email:n.elements.email.value,message:n.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),n.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:r}}=e.currentTarget;console.log({email:t.value,message:r.value}),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));const i=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");i&&(l.value=i.email,s.value=i.message);
//# sourceMappingURL=03-feedback.f439fca8.js.map
