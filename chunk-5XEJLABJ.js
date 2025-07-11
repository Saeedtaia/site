import{ja as d,ka as S,la as w,qa as z,ra as A,w as E}from"./chunk-IKIQ46U5.js";import{Gb as v,La as x,Ma as h,Oa as y,Q as c,Qb as F,R as g,Tb as a,V as u,Zb as D,ma as l,nb as m,zb as I}from"./chunk-QPP33GNY.js";var C=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var O=S`
    ${C}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: ${d("inputtext.invalid.border.color")};
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: ${d("inputtext.invalid.placeholder.color")};
    }
`,V={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},k=(()=>{class t extends w{name="inputtext";theme=O;classes=V;static \u0275fac=(()=>{let n;return function(i){return(n||(n=l(t)))(i||t)}})();static \u0275prov=c({token:t,factory:t.\u0275fac})}return t})();var Q=(()=>{class t extends z{ngControl=u(E,{optional:!0,self:!0});pcFluid=u(A,{optional:!0,host:!0,skipSelf:!0});pSize;variant=a();fluid=a(void 0,{transform:D});$variant=F(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=u(k);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(n){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value,n)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let n;return function(i){return(n||(n=l(t)))(i||t)}})();static \u0275dir=h({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(s,i){s&1&&m("input",function(r){return i.onInput(r)}),s&2&&I(i.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"]},features:[v([k]),y]})}return t})(),W=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=x({type:t});static \u0275inj=g({})}return t})();function M(){let t=[],p=(e,r)=>{let o=t.length>0?t[t.length-1]:{key:e,value:r},f=o.value+(o.key===e?0:r)+2;return t.push({key:e,value:f}),f},n=e=>{t=t.filter(r=>r.value!==e)},s=()=>t.length>0?t[t.length-1].value:0,i=e=>e&&parseInt(e.style.zIndex,10)||0;return{get:i,set:(e,r,o)=>{r&&(r.style.zIndex=String(p(e,o)))},clear:e=>{e&&(n(i(e)),e.style.zIndex="")},getCurrent:()=>s(),generateZIndex:p,revertZIndex:n}}var _=M();export{Q as a,W as b,_ as c};
