import{ca as nt,ga as ot,ha as T,k as J,l as K,la as et,m as X,n as O,na as F,oa as rt,r as tt,ra as it,sa as lt,va as at,wa as dt,xa as ct}from"./chunk-IKIQ46U5.js";import{Ab as c,Bb as $,Gb as U,Ib as H,Ka as k,La as P,Ma as D,Oa as L,Q as Z,Qa as y,R as B,Sa as I,Tb as W,V as f,Zb as p,_a as h,_b as q,aa as g,ba as m,da as A,eb as l,fb as e,gb as r,hb as u,ib as M,jb as E,kb as Y,la as z,ma as v,nb as R,oa as N,ob as b,pb as Q,qb as G,rb as _,sa as j,tb as w,ub as S,za as d,zb as x}from"./chunk-QPP33GNY.js";var ut=(()=>{class t extends F{autofocus=!1;focused=!1;platformId=f(j);document=f(A);host=f(N);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){tt(this.platformId)&&this.autofocus&&setTimeout(()=>{let n=rt.getFocusableElements(this.host?.nativeElement);n.length===0&&this.host.nativeElement.focus(),n.length>0&&n[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let n;return function(o){return(n||(n=v(t)))(o||t)}})();static \u0275dir=D({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[L]})}return t})();var st=(()=>{class t extends lt{pathId;ngOnInit(){this.pathId="url(#"+nt()+")"}static \u0275fac=(()=>{let n;return function(o){return(n||(n=v(t)))(o||t)}})();static \u0275cmp=k({type:t,selectors:[["SpinnerIcon"]],features:[L],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(g(),e(0,"svg",0)(1,"g"),u(2,"path",1),r(),e(3,"defs")(4,"clipPath",2),u(5,"rect",3),r()()()),i&2&&(x(o.getClassNames()),h("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),d(),h("clip-path",o.pathId),d(3),l("id",o.pathId))},encapsulation:2})}return t})();var bt=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var ht=["content"],ft=["loadingicon"],mt=["icon"],vt=["*"],Ct=t=>({class:t});function yt(t,a){t&1&&Y(0)}function xt(t,a){if(t&1&&u(0,"span"),t&2){let n=b(3);x(n.cx("loadingIcon")),h("aria-hidden",!0)("data-pc-section","loadingicon")}}function kt(t,a){if(t&1&&u(0,"SpinnerIcon",7),t&2){let n=b(3);l("styleClass",n.cn(n.cx("loadingIcon"),n.spinnerIconClass()))("spin",!0),h("aria-hidden",!0)("data-pc-section","loadingicon")}}function Lt(t,a){if(t&1&&(M(0),y(1,xt,1,4,"span",3)(2,kt,1,4,"SpinnerIcon",6),E()),t&2){let n=b(2);d(),l("ngIf",n.loadingIcon),d(),l("ngIf",!n.loadingIcon)}}function _t(t,a){}function wt(t,a){if(t&1&&y(0,_t,0,0,"ng-template",8),t&2){let n=b(2);l("ngIf",n.loadingIconTemplate||n._loadingIconTemplate)}}function St(t,a){if(t&1&&(M(0),y(1,Lt,3,2,"ng-container",2)(2,wt,1,1,null,5),E()),t&2){let n=b();d(),l("ngIf",!n.loadingIconTemplate&&!n._loadingIconTemplate),d(),l("ngTemplateOutlet",n.loadingIconTemplate||n._loadingIconTemplate)("ngTemplateOutletContext",H(3,Ct,n.cx("loadingIcon")))}}function It(t,a){if(t&1&&u(0,"span"),t&2){let n=b(2);x(n.cx("icon")),h("data-pc-section","icon")}}function Mt(t,a){}function Et(t,a){if(t&1&&y(0,Mt,0,0,"ng-template",8),t&2){let n=b(2);l("ngIf",!n.icon&&(n.iconTemplate||n._iconTemplate))}}function Tt(t,a){if(t&1&&(M(0),y(1,It,1,3,"span",3)(2,Et,1,1,null,5),E()),t&2){let n=b();d(),l("ngIf",n.icon&&!n.iconTemplate&&!n._iconTemplate),d(),l("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)("ngTemplateOutletContext",H(3,Ct,n.cx("icon")))}}function Ft(t,a){if(t&1&&(e(0,"span"),c(1),r()),t&2){let n=b();x(n.cx("label")),h("aria-hidden",n.icon&&!n.label)("data-pc-section","label"),d(),$(n.label)}}function Bt(t,a){if(t&1&&u(0,"p-badge",9),t&2){let n=b();l("value",n.badge)("severity",n.badgeSeverity)}}var Pt={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading,"p-button-link":t.link,[`p-button-${t.severity}`]:t.severity,"p-button-raised":t.raised,"p-button-rounded":t.rounded,"p-button-text":t.text||t.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined","p-button-sm":t.size==="small","p-button-lg":t.size==="large","p-button-plain":t.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label,"p-button-icon-left":t.iconPos==="left"&&t.label,"p-button-icon-right":t.iconPos==="right"&&t.label},t.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,a])=>!!a).reduce((a,[n])=>a+` ${n}`,"p-button-loading-icon"),label:"p-button-label"},pt=(()=>{class t extends et{name="button";theme=bt;classes=Pt;static \u0275fac=(()=>{let n;return function(o){return(n||(n=v(t)))(o||t)}})();static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})();var Dt=(()=>{class t extends F{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid=W(void 0,{transform:p});onClick=new I;onFocus=new I;onBlur=new I;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(n){this._buttonProps=n,n&&typeof n=="object"&&Object.entries(n).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}pcFluid=f(it,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=f(pt);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"content":this._contentTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"loadingicon":this._loadingIconTemplate=n.template;break;default:this._contentTemplate=n.template;break}})}ngOnChanges(n){super.ngOnChanges(n);let{buttonProps:i}=n;if(i){let o=i.currentValue;for(let C in o)this[C]=o[C]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,n])=>!!n).reduce((n,[i])=>n+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let n;return function(o){return(n||(n=v(t)))(o||t)}})();static \u0275cmp=k({type:t,selectors:[["p-button"]],contentQueries:function(i,o,C){if(i&1&&(_(C,ht,5),_(C,ft,5),_(C,mt,5),_(C,ot,4)),i&2){let s;w(s=S())&&(o.contentTemplate=s.first),w(s=S())&&(o.loadingIconTemplate=s.first),w(s=S())&&(o.iconTemplate=s.first),w(s=S())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",p],loading:[2,"loading","loading",p],loadingIcon:"loadingIcon",raised:[2,"raised","raised",p],rounded:[2,"rounded","rounded",p],text:[2,"text","text",p],plain:[2,"plain","plain",p],severity:"severity",outlined:[2,"outlined","outlined",p],link:[2,"link","link",p],tabindex:[2,"tabindex","tabindex",q],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",p],fluid:[1,"fluid"],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[U([pt]),L,z],ngContentSelectors:vt,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass","spin",4,"ngIf"],[3,"styleClass","spin"],[3,"ngIf"],[3,"value","severity"]],template:function(i,o){i&1&&(Q(),e(0,"button",0),R("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),G(1),y(2,yt,1,0,"ng-container",1)(3,St,3,5,"ng-container",2)(4,Tt,3,5,"ng-container",2)(5,Ft,2,5,"span",3)(6,Bt,1,2,"p-badge",4),r()),i&2&&(x(o.cn(o.cx("root"),o.styleClass)),l("ngStyle",o.style)("disabled",o.disabled||o.loading)("pAutoFocus",o.autofocus),h("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),d(2),l("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),d(),l("ngIf",o.loading),d(),l("ngIf",!o.loading),d(),l("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),d(),l("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[O,J,X,K,ct,ut,st,dt,at,T],encapsulation:2,changeDetection:0})}return t})(),kn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=B({imports:[O,Dt,T,T]})}return t})();var gt=class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["app-whychooseus"]],decls:59,vars:0,consts:[[1,"p-3","mt-10","w-full"],[1,"font-bold","text-2xl","py-3","text-center","w-full"],[1,"grid","grid-cols-3","px-24","gap-x-0","gap-y-32","place-items-center","my-10","py-10"],[1,"px-5","text-center"],["width","52","height","52","viewBox","0 0 52 52","fill","none","xmlns","http://www.w3.org/2000/svg",1,"mx-auto"],["d","M48.5158 13.008C45.0442 6.99502 39.4388 2.69395 32.7322 0.896905C26.0259 -0.900142 19.0209 0.0221471 13.0079 3.49365C6.99498 6.96516 2.69381 12.5706 0.89686 19.2771C-0.900086 25.9836 0.0221017 32.9886 3.49361 39.0015C6.60762 44.3952 11.557 48.4944 17.4299 50.5437C20.2138 51.515 23.1201 51.9998 26.0218 51.9998C29.1768 51.9998 32.3262 51.4264 35.3031 50.2823C35.8266 50.0811 36.0879 49.4935 35.8866 48.97C35.6853 48.4464 35.0976 48.1849 34.5743 48.3865C26.6504 51.4321 18.0722 50.0483 11.6633 45.2377L12.5732 40.4881L13.0116 40.3457C14.6684 39.8074 15.5784 38.0216 15.0404 36.3647L14.7186 35.3745C14.6442 35.1454 14.6446 34.9032 14.7196 34.6743C15.0019 33.8138 14.901 32.8724 14.4429 32.0912C13.9847 31.3101 13.2123 30.7624 12.3236 30.5886L10.0313 30.1407L5.60845 26.778C5.34347 26.5765 4.99663 26.5177 4.67996 26.6204L2.09052 27.4616C2.03558 26.5354 2.03477 25.6096 2.08697 24.6886C2.18914 24.7838 2.25566 24.8485 2.29659 24.8909C2.34727 24.9753 2.41004 25.0527 2.48357 25.1198C2.69502 25.3123 2.88657 25.3997 3.28876 25.3997C3.65834 25.3996 4.20546 25.3259 5.10886 25.1925C5.96564 25.0658 6.81795 24.9231 6.82638 24.9217C7.16794 24.8645 7.45668 24.637 7.59257 24.3186C7.72846 24.0001 7.69261 23.6344 7.49751 23.3482L6.25225 21.5217L8.03589 20.2463C8.15472 20.1613 8.25384 20.0517 8.32646 19.9249L11.0913 15.0982L12.2057 13.904C13.3446 12.6834 13.6696 10.8977 13.0336 9.35432C12.6584 8.44401 12.0031 7.68615 11.1835 7.1754C12.0712 6.47756 13.0176 5.83325 14.0235 5.25262C17.7141 3.12183 21.7416 2.08925 25.7269 2.04974L23.9134 4.32464L17.1884 6.68221C16.9153 6.77788 16.6959 6.98568 16.5856 7.25319L14.7075 11.806C14.5742 12.1295 14.6165 12.4986 14.8198 12.7834L17.5628 16.6257C17.1699 16.9841 16.7875 17.5061 16.3308 18.1543C16.1305 18.4386 15.9414 18.707 15.8107 18.8575C15.6971 18.9885 15.5833 19.1165 15.4706 19.2433C14.8806 19.907 14.2706 20.5934 13.8372 21.5103C12.8844 23.5273 13.0768 25.8715 14.3395 27.6284C15.5604 29.327 17.5731 30.1905 19.7214 29.9378C20.0714 29.8968 20.3977 29.816 20.7134 29.7378C21.5841 29.5224 21.86 29.5009 22.1393 29.7623C22.2752 29.8895 22.2876 29.9136 22.2849 30.3452C22.283 30.6198 22.2808 30.9614 22.3755 31.3515C22.5271 31.9756 22.9191 32.407 23.2339 32.7535C23.3904 32.9257 23.5523 33.1038 23.6022 33.2233C23.9189 33.9824 23.781 34.4028 23.4788 35.324C23.4529 35.4028 23.4265 35.4832 23.4 35.5657C22.9408 36.987 23.5808 38.3969 24.1455 39.6407C24.329 40.0446 24.5021 40.4258 24.6156 40.7628C25.5287 43.4724 26.2132 44.093 26.7626 44.3428C27.0503 44.4736 27.3481 44.531 27.6489 44.5309C29.113 44.5308 30.6407 43.1715 31.3425 42.3097C31.7832 41.7686 31.8918 41.2268 31.971 40.831C32.0105 40.6341 32.0416 40.4788 32.1009 40.3772C32.1917 40.2218 32.2987 40.1013 32.4341 39.9488C32.7063 39.6422 33.0452 39.2607 33.2647 38.5692C33.4315 38.0439 33.5527 37.9151 33.9539 37.4877C34.0238 37.4135 34.0983 37.3341 34.1782 37.2471C35.5309 35.7752 35.1825 34.6508 34.8136 33.4603C34.5031 32.4586 35.0461 31.8179 36.3591 30.5952C36.9283 30.0651 37.5167 29.5171 37.9716 28.8586C38.1707 28.5703 38.7763 27.6936 38.4016 26.8245C38.0342 25.9724 37.1005 25.8292 36.3504 25.7142C36.0541 25.6687 35.6065 25.6001 35.464 25.5069C34.8356 25.0961 34.4512 24.2387 34.0794 23.4095C34.0053 23.2444 33.9323 23.0815 33.8583 22.9234C33.7262 22.6412 33.5943 22.2999 33.4547 21.9385C33.0852 20.9822 32.6664 19.8982 31.9536 19.1426C31.3128 18.4637 30.1049 18.1366 29.0392 17.848C28.6808 17.751 28.3425 17.6594 28.1194 17.577C27.9324 17.508 27.7295 17.4955 27.5359 17.541C27.0172 17.6625 26.6936 17.7965 26.4533 17.9891C26.3899 18.0399 26.2019 18.207 26.0918 18.4755C25.72 18.2971 25.2087 17.9564 24.894 17.7466C24.8875 17.7423 24.8809 17.7379 24.8744 17.7335C24.9805 17.3092 24.8845 16.9687 24.784 16.756C24.2166 15.5559 22.3334 15.6499 21.9618 15.6815C21.7508 15.6991 21.4838 15.7086 21.2013 15.7185C20.7577 15.7343 20.2674 15.7519 19.7822 15.8064L19.8072 15.7367C20.1755 14.7106 21.1553 14.0212 22.2455 14.0212H22.8229C23.3836 14.0212 23.8384 13.5664 23.8384 13.0057C23.8384 12.445 23.3836 11.9902 22.8229 11.9902H22.2455C20.627 11.9902 19.1449 12.842 18.3142 14.1827L16.7994 12.0608L18.2897 8.44828L24.8611 6.14444C25.0413 6.08126 25.2002 5.96853 25.3193 5.81913L28.2405 2.15486C35.7048 2.86488 42.7309 7.04987 46.757 14.0234C47.8294 15.8808 48.6227 17.8363 49.1501 19.8364L48.7196 20.2203C48.1576 20.7217 47.8284 21.4409 47.8158 22.1935C47.8157 22.2018 47.8155 22.2099 47.8152 22.218L47.1138 20.2891C47.0093 20.0013 46.8553 19.7374 46.6565 19.5047L45.4053 18.0398C44.9202 17.472 44.214 17.1465 43.4674 17.1465H41.9359C41.3923 17.1465 40.8954 17.4443 40.639 17.9234C40.3825 18.4025 40.4106 18.9812 40.7121 19.4334L40.8671 19.6661C39.8775 20.5171 38.7329 21.198 37.5141 21.6573L35.4148 17.6361V16.739C35.4148 16.4616 35.3013 16.196 35.1005 16.0045L33.2101 14.1999C33.1058 14.1003 32.9815 14.0242 32.8455 13.9763L31.1438 13.3783C30.6144 13.1921 30.0348 13.4706 29.849 13.9997C29.663 14.5289 29.9412 15.1085 30.4703 15.2945L31.9657 15.8201L33.3838 17.1736V17.8854C33.3838 18.049 33.4234 18.2103 33.4991 18.3554L36.1273 23.3895C36.3636 23.8425 36.9001 24.0495 37.3788 23.8724L38.1441 23.5902C39.9219 22.9345 41.5698 21.8798 42.9096 20.5402C43.2519 20.1978 43.3051 19.6617 43.0365 19.2588L42.9824 19.1776H43.4674C43.619 19.1776 43.7625 19.2438 43.861 19.3591L45.1122 20.824C45.1525 20.8712 45.1837 20.9246 45.205 20.9832L46.5858 24.7799C46.7044 25.1062 46.9815 25.3491 47.3201 25.4242C47.3932 25.4404 47.4668 25.4483 47.5401 25.4483C47.8064 25.4483 48.0657 25.3434 48.2581 25.1508L48.9153 24.4936C49.3315 24.0773 49.618 23.5506 49.7549 22.9667C50.7714 31.1126 47.5773 39.539 40.8261 44.8379C40.3848 45.1841 40.3078 45.8225 40.6542 46.2638C41.0004 46.705 41.6387 46.782 42.08 46.4356C46.9542 42.61 50.3028 37.1384 51.5088 31.0285C52.7261 24.8597 51.6633 18.4597 48.5158 13.008ZM4.80204 28.7164L8.98977 31.9005C9.11357 31.9946 9.25718 32.059 9.40973 32.0888L11.9338 32.582C12.2559 32.6449 12.5246 32.8355 12.6907 33.1186C12.8568 33.4017 12.8917 33.7292 12.7895 34.0411C12.5793 34.6823 12.5783 35.3604 12.7868 36.002L13.1085 36.992C13.3008 37.5837 12.9756 38.2216 12.384 38.4139L11.3748 38.7418C11.0226 38.8562 10.7608 39.1532 10.6912 39.5166L9.87895 43.7567C8.09317 42.1222 6.52525 40.1905 5.25257 37.9861C3.69988 35.297 2.72976 32.4288 2.30218 29.5286L4.80204 28.7164ZM10.7208 12.5183L9.52612 13.7983C9.4728 13.8555 9.42618 13.9186 9.38728 13.9865L6.67434 18.723L4.26315 20.4471C3.81404 20.7682 3.70374 21.3891 4.01473 21.8453L4.9165 23.168C4.3967 23.2454 3.93023 23.3092 3.62006 23.343C3.56044 23.2859 3.49808 23.2279 3.43359 23.1679C3.19217 22.9437 2.85671 22.6442 2.35662 22.2065C3.18141 17.1017 5.64125 12.2925 9.50997 8.62154C10.2508 8.85483 10.8587 9.40744 11.1557 10.1282C11.4898 10.9389 11.319 11.8771 10.7208 12.5183ZM19.0012 18.068C19.4542 17.8131 20.5055 17.7758 21.2731 17.7486C21.5808 17.7377 21.8714 17.7273 22.131 17.7056C22.268 17.6941 22.4202 17.6963 22.5637 17.7074C22.4996 17.872 22.4788 18.0525 22.5066 18.2317C22.5555 18.5468 22.7498 18.8206 23.0309 18.971C23.2214 19.0729 23.4866 19.2498 23.7673 19.4369C24.561 19.9661 25.4608 20.5658 26.306 20.6196C27.0746 20.6695 27.5023 20.2315 27.6855 20.0449C27.7001 20.0301 27.7139 20.0152 27.7286 20.0017C27.8317 19.9176 27.9284 19.8049 28.0003 19.6689C28.1627 19.7153 28.3334 19.7615 28.5083 19.809C29.1096 19.9718 30.2289 20.2748 30.4762 20.5369C30.9155 21.0025 31.2579 21.8889 31.56 22.6708C31.7127 23.066 31.8569 23.4389 32.0187 23.7847C32.0881 23.9331 32.1565 24.086 32.2259 24.2407C32.6946 25.286 33.2257 26.4708 34.3526 27.2074C34.8635 27.5414 35.4899 27.6374 36.0426 27.7222C36.1094 27.7325 36.186 27.7442 36.2638 27.757C35.9357 28.2147 35.4686 28.6496 34.9751 29.1091C33.7179 30.28 32.1532 31.7372 32.8738 34.0618C33.2139 35.1595 33.2298 35.2781 32.6829 35.8731C32.6083 35.9543 32.5389 36.0282 32.4738 36.0975C32.0054 36.5961 31.6354 36.99 31.3291 37.9548C31.2401 38.235 31.1248 38.3648 30.9155 38.6005C30.7481 38.789 30.5396 39.0238 30.3473 39.3528C30.117 39.7471 30.0408 40.1267 29.9798 40.4317C29.9196 40.7318 29.8854 40.8825 29.7676 41.0271C29.4994 41.3564 28.9991 41.8345 28.4855 42.1608C28.0082 42.4639 27.7295 42.5053 27.6345 42.4996C27.5261 42.3835 27.1336 41.8747 26.5405 40.1143C26.3942 39.6801 26.1913 39.2332 25.9951 38.801C25.5625 37.8484 25.1154 36.8632 25.3329 36.19C25.3586 36.1106 25.384 36.033 25.409 35.9571C25.7565 34.8978 26.0846 33.8975 25.4768 32.4411C25.2918 31.9976 24.9971 31.6735 24.7374 31.3875C24.5694 31.2025 24.3789 30.9929 24.3496 30.8723C24.3138 30.7251 24.3149 30.5552 24.3163 30.3585C24.3197 29.8278 24.325 29.026 23.5278 28.2795C22.4039 27.2275 21.0934 27.5516 20.226 27.7661C19.9596 27.8319 19.708 27.8942 19.4849 27.9205C18.0582 28.0876 16.7844 27.5493 15.9891 26.4427C15.1573 25.2852 15.0365 23.7275 15.6741 22.3778C15.9828 21.7246 16.449 21.1999 16.9889 20.5925C17.1068 20.4598 17.2259 20.3259 17.3449 20.1888C17.543 19.9605 17.7609 19.6513 17.9914 19.324C18.2665 18.9335 18.7788 18.2063 19.0012 18.068Z","fill","black"],[1,"font-bold","text-xl","py-3","text-center","w-full"],[1,"mx-auto","text-center","w-[70%]","line-clamp-4","font-extralight","text-sm"],["width","60","height","60","viewBox","0 0 60 60","fill","none","xmlns","http://www.w3.org/2000/svg",1,"mx-auto"],["d","M56.6691 16.0364L30.4191 2.91137C30.289 2.84635 30.1455 2.8125 30 2.8125C29.8545 2.8125 29.7111 2.84635 29.581 2.91137L3.33095 16.0364C3.17511 16.1142 3.04405 16.234 2.95247 16.3822C2.8609 16.5304 2.81243 16.7012 2.81251 16.8754V43.1254C2.81156 43.3004 2.85961 43.4722 2.95124 43.6214C3.04286 43.7705 3.17439 43.891 3.33095 43.9692L29.581 57.0942C29.7111 57.1592 29.8545 57.1931 30 57.1931C30.1455 57.1931 30.289 57.1592 30.4191 57.0942L56.6691 43.9692C56.8256 43.891 56.9572 43.7705 57.0488 43.6214C57.1404 43.4722 57.1885 43.3004 57.1875 43.1254V16.8754C57.1876 16.7012 57.1391 16.5304 57.0476 16.3822C56.956 16.234 56.8249 16.1142 56.6691 16.0364ZM30 28.9523L22.6716 25.2876L46.096 12.8442L54.1585 16.8754L30 28.9523ZM15.1716 21.5376L38.596 9.09419L44.0335 11.8129L20.6119 24.2582L15.1716 21.5376ZM14.0625 23.0798L19.6875 25.8923V33.3623L17.5378 31.2126C17.3621 31.0368 17.1236 30.938 16.875 30.9379H14.0625V23.0798ZM30 4.79856L36.5363 8.06294L13.1119 20.5082L5.84626 16.8754L30 4.79856ZM4.68751 18.3923L12.1875 22.1423V31.8754C12.1875 32.1241 12.2863 32.3625 12.4621 32.5383C12.6379 32.7142 12.8764 32.8129 13.125 32.8129H16.4869L19.9622 36.2882C20.0933 36.4193 20.2603 36.5086 20.4422 36.5447C20.624 36.5809 20.8125 36.5623 20.9838 36.4914C21.155 36.4204 21.3014 36.3003 21.4045 36.1462C21.5075 35.992 21.5625 35.8108 21.5625 35.6254V26.8298L29.0625 30.5798V54.7336L4.68751 42.5461V18.3923ZM30.9375 54.7336V30.5798L55.3125 18.3923V42.5461L30.9375 54.7336Z","fill","black"],["d","M28.0513 0.554688H27.9997C20.7211 0.554688 13.7406 3.4461 8.59383 8.59285C3.44708 13.7396 0.555664 20.7201 0.555664 27.9987C0.555664 35.2773 3.44708 42.2578 8.59383 47.4045C13.7406 52.5513 20.7211 55.4427 27.9997 55.4427C28.2384 55.4427 28.4673 55.3479 28.6361 55.1791C28.8048 55.0103 28.8997 54.7814 28.8997 54.5427C28.8997 54.304 28.8048 54.0751 28.6361 53.9063C28.4673 53.7375 28.2384 53.6427 27.9997 53.6427C21.1985 53.6427 14.6758 50.9409 9.86662 46.1317C5.05743 41.3225 2.35566 34.7999 2.35566 27.9987C2.35566 21.1975 5.05743 14.6748 9.86662 9.86564C14.6758 5.05646 21.1985 2.35469 27.9997 2.35469H28.0483C32.7303 2.36391 37.3204 3.65464 41.321 6.08695C45.3217 8.51926 48.5802 12.0003 50.7432 16.1527C52.9062 20.3051 53.8913 24.9705 53.5915 29.6429C53.2918 34.3153 51.7187 38.8165 49.0429 42.6585C48.6471 43.2245 48.1317 43.6966 47.5332 44.0413C46.9348 44.3861 46.2678 44.5951 45.5797 44.6535C44.8779 44.7151 44.1711 44.6222 43.509 44.3814C42.847 44.1406 42.2457 43.7577 41.7475 43.2597L40.8997 42.4089C41.2261 42.2139 41.5471 42.0057 41.8597 41.7813C42.4899 41.3395 43.0804 40.8434 43.6243 40.2987H43.6273C44.0908 39.8283 44.3499 39.1939 44.3479 38.5335C44.346 37.8731 44.0833 37.2402 43.6171 36.7725L38.9563 32.1171C38.4879 31.65 37.8534 31.3877 37.192 31.3877C36.5305 31.3877 35.896 31.65 35.4277 32.1171L34.7317 32.8107C34.5028 33.0378 34.2517 33.2414 33.9823 33.4185C33.0875 33.997 32.0218 34.2522 30.9621 34.1416C29.9024 34.0311 28.9123 33.5614 28.1563 32.8107L22.0657 26.7201C21.4932 26.142 21.1726 25.361 21.1737 24.5474C21.1748 23.7339 21.4976 22.9538 22.0717 22.3773L23.8813 20.5587C24.1135 20.3276 24.2979 20.053 24.4236 19.7504C24.5494 19.4479 24.6142 19.1235 24.6142 18.7959C24.6142 18.4683 24.5494 18.1439 24.4236 17.8413C24.2979 17.5388 24.1135 17.2641 23.8813 17.0331L19.2283 12.3807C18.9979 12.1468 18.7232 11.9613 18.4201 11.8351C18.1171 11.7089 17.7919 11.6445 17.4637 11.6457C16.8377 11.6433 16.2342 11.8793 15.7759 12.3057C15.7481 12.3275 15.7216 12.3509 15.6967 12.3759C15.1563 12.9169 14.6625 13.5026 14.2207 14.1267C12.4986 16.5275 11.5917 19.4172 11.6331 22.3714C11.6746 25.3257 12.6623 28.1888 14.4511 30.5403C17.5922 34.7036 21.2994 38.4078 25.4653 41.5455C27.8744 43.3714 30.8135 44.3615 33.8365 44.3655C35.6825 44.3634 37.5091 43.9889 39.2071 43.2645L40.4743 44.5335C41.1573 45.219 41.9829 45.7459 42.8924 46.0766C43.8019 46.4074 44.773 46.534 45.7369 46.4475C46.6875 46.3661 47.6087 46.0767 48.4351 45.5997C49.2614 45.1228 49.9728 44.4699 50.5189 43.6875C53.383 39.576 55.0669 34.7588 55.388 29.7583C55.709 24.7578 54.655 19.7648 52.3401 15.3208C50.0252 10.8768 46.5379 7.15128 42.2563 4.5483C37.9746 1.94532 33.062 0.564199 28.0513 0.554688ZM26.5513 40.1079C22.519 37.0727 18.9305 33.4891 15.8899 29.4609C14.4453 27.5606 13.5993 25.2732 13.4598 22.8903C13.3202 20.5073 13.8934 18.1368 15.1063 16.0809L18.4381 19.4133C18.6069 19.5821 18.8359 19.677 19.0747 19.677C19.3134 19.677 19.5424 19.5821 19.7113 19.4133C19.8801 19.2445 19.975 19.0155 19.975 18.7767C19.975 18.5379 19.8801 18.3089 19.7113 18.1401L16.1503 14.5767C16.3903 14.2767 16.6423 13.9869 16.9129 13.7121C16.9369 13.6933 16.96 13.6733 16.9819 13.6521C17.1128 13.5261 17.2877 13.456 17.4695 13.4566C17.6513 13.4573 17.8256 13.5287 17.9557 13.6557L22.6117 18.3117C22.6766 18.3762 22.7281 18.453 22.7631 18.5375C22.7981 18.6221 22.816 18.7128 22.8157 18.8043C22.8156 18.8945 22.7975 18.9838 22.7624 19.0669C22.7274 19.1501 22.6761 19.2254 22.6117 19.2885L20.7907 21.1149C19.8829 22.0297 19.3735 23.2662 19.3735 24.555C19.3735 25.8437 19.8829 27.0803 20.7907 27.9951L26.8837 34.0833C27.8427 35.034 29.0747 35.6613 30.4077 35.8777C31.7406 36.094 33.1078 35.8885 34.3183 35.2899L37.9783 38.9499C38.148 39.1138 38.3753 39.2045 38.6113 39.2025C38.8473 39.2004 39.073 39.1058 39.2399 38.9389C39.4068 38.7721 39.5014 38.5463 39.5035 38.3103C39.5055 38.0744 39.4148 37.847 39.2509 37.6773L35.8237 34.2501C35.8837 34.1949 35.9491 34.1427 36.0037 34.0857L36.6997 33.3867C36.8303 33.2564 37.0072 33.1832 37.1917 33.1832C37.3761 33.1832 37.5531 33.2564 37.6837 33.3867L42.3445 38.0421C42.4747 38.1726 42.5483 38.3493 42.5492 38.5337C42.5501 38.7181 42.4783 38.8955 42.3493 39.0273C41.8778 39.499 41.3658 39.9285 40.8193 40.3107C38.732 41.8083 36.2193 42.5968 33.6507 42.5603C31.082 42.5238 28.5927 41.6642 26.5489 40.1079H26.5513Z","fill","black"],["d","M50.4872 46.9545H9.51246C8.18061 46.953 6.90375 46.4232 5.96203 45.4814C5.02032 44.5396 4.49066 43.2627 4.48926 41.9308V16.6252C4.49066 15.2934 5.02032 14.0165 5.96203 13.0747C6.90375 12.1329 8.18061 11.6031 9.51246 11.6016H50.4872C51.819 11.6031 53.0959 12.1329 54.0376 13.0747C54.9793 14.0165 55.509 15.2934 55.5104 16.6252V41.9308C55.509 43.2627 54.9793 44.5396 54.0376 45.4814C53.0959 46.4232 51.819 46.953 50.4872 46.9545ZM9.51246 13.5216C8.68963 13.5225 7.90076 13.8497 7.31898 14.4316C6.73719 15.0135 6.41002 15.8024 6.40926 16.6252V41.9308C6.41002 42.7537 6.73719 43.5426 7.31898 44.1245C7.90076 44.7063 8.68963 45.0336 9.51246 45.0345H50.4872C51.31 45.0336 52.0989 44.7063 52.6807 44.1245C53.2624 43.5426 53.5896 42.7537 53.5904 41.9308V16.6252C53.5896 15.8024 53.2624 15.0135 52.6807 14.4316C52.0989 13.8497 51.31 13.5225 50.4872 13.5216H9.51246Z","fill","black"],["d","M30 34.9273C29.766 34.9274 29.54 34.842 29.3645 34.6873L6.22852 14.2642L7.49908 12.8242L30 32.6885L52.502 12.8266L53.7725 14.2666L30.6365 34.6897C30.4605 34.844 30.2341 34.9286 30 34.9273Z","fill","black"],["d","M5.70605 43.9375L21.2486 26.2284L22.6924 27.4956L7.14989 45.2047L5.70605 43.9375Z","fill","black"],["d","M37.3564 27.4766L38.8003 26.2094L54.3431 43.9188L52.8993 45.186L37.3564 27.4766Z","fill","black"],["d","M54.41 14.8814L15.7332 8.04742C14.0383 7.74545 12.3917 8.9201 12.0977 10.59L9.60675 24.7453H6.0484C4.36743 24.7453 3 26.1003 3 27.765V48.9803C3 50.645 4.36743 52 6.0484 52H45.4978C47.1787 52 48.5462 50.645 48.5462 48.9803V41.5205C49.6762 41.7202 50.7671 41.9557 51.8119 41.3367C52.5957 40.8721 53.158 40.071 53.3152 39.1785L56.9523 18.5084C57.2515 16.8083 56.111 15.1812 54.41 14.8814ZM13.814 10.8863C13.9446 10.1448 14.671 9.61204 15.4275 9.74577L54.1043 16.5797C54.8633 16.7139 55.3711 17.4459 55.2365 18.2116L54.6364 21.6239L13.2121 14.305L13.814 10.8863ZM46.8042 48.9803C46.8042 49.6938 46.218 50.2745 45.4978 50.2745H6.0484C5.32811 50.2745 4.74194 49.6938 4.74194 48.9803V27.765C4.74194 27.0515 5.32811 26.4709 6.0484 26.4709H45.4978C46.218 26.4709 46.8042 27.0515 46.8042 27.765V48.9803ZM51.5993 38.8821C51.3285 40.4165 49.6083 39.9554 48.5462 39.7677V27.765C48.5462 26.1003 47.1787 24.7453 45.4978 24.7453H11.3753L12.913 16.0047L15.4362 16.4503L54.3368 23.3235L51.5993 38.8821Z","fill","black"],["d","M23.2258 47H18.7742C18.3468 47 18 46.552 18 46C18 45.448 18.3468 45 18.7742 45H23.2258C23.6532 45 24 45.448 24 46C24 46.552 23.6535 47 23.2258 47Z","fill","black"],["d","M14.0968 47H8.90323C8.40465 47 8 46.552 8 46C8 45.448 8.40465 45 8.90323 45H14.0968C14.5954 45 15 45.448 15 46C15 46.552 14.5954 47 14.0968 47Z","fill","black"],["d","M33.0968 47H27.9032C27.4046 47 27 46.552 27 46C27 45.448 27.4046 45 27.9032 45H33.0968C33.5954 45 34 45.448 34 46C34 46.552 33.5958 47 33.0968 47Z","fill","black"],["d","M42.2258 47H37.7742C37.3468 47 37 46.552 37 46C37 45.448 37.3468 45 37.7742 45H42.2258C42.6532 45 43 45.448 43 46C43 46.552 42.6532 47 42.2258 47Z","fill","black"],["d","M16.7538 42H10.2462C9.00764 42 8 41.1452 8 40.0945V37.9055C8 36.8548 9.00764 36 10.2462 36H16.7538C17.9924 36 19 36.8548 19 37.9055V40.0945C19 41.1448 17.9919 42 16.7538 42ZM10.2462 37.524C9.99865 37.524 9.79695 37.6947 9.79695 37.9051V40.0941C9.79695 40.3045 9.99865 40.4752 10.2462 40.4752H16.7538C17.0013 40.4752 17.2031 40.3045 17.2031 40.0941V37.9051C17.2031 37.6947 17.0013 37.524 16.7538 37.524H10.2462Z","fill","black"],["d","M41.2129 24.082C41.2129 15.1758 33.9707 7.93359 25.0645 7.93359C16.1582 7.93359 8.91602 15.1758 8.91602 24.082C8.91602 32.9883 16.1582 40.2305 25.0645 40.2305C33.9707 40.2305 41.2129 32.9883 41.2129 24.082ZM25.0645 38.5195C17.0957 38.5195 10.627 32.0391 10.627 24.082C10.627 16.1133 17.1074 9.64453 25.0645 9.64453C33.0332 9.64453 39.502 16.125 39.502 24.082C39.502 32.0391 33.0215 38.5195 25.0645 38.5195Z","fill","black"],["d","M20.9512 23.4258C23.0137 23.4258 24.6777 21.75 24.6777 19.6992C24.6777 17.6484 23.002 15.9727 20.9512 15.9727C18.9004 15.9727 17.2246 17.6484 17.2246 19.6992C17.2246 21.75 18.8887 23.4258 20.9512 23.4258ZM20.9512 17.6719C22.0645 17.6719 22.9785 18.5742 22.9785 19.6992C22.9785 20.8242 22.0762 21.7266 20.9512 21.7266C19.8262 21.7266 18.9238 20.8242 18.9238 19.6992C18.9238 18.5742 19.8262 17.6719 20.9512 17.6719Z","fill","black"],["d","M31.9082 16.8173C31.9082 16.5712 31.8027 16.3251 31.5918 16.1611C31.2285 15.8564 30.6895 15.915 30.3848 16.2782L18.4316 30.7978C18.3027 30.9618 18.2324 31.1493 18.2324 31.3368C18.2324 31.5829 18.3379 31.829 18.5488 31.9931C18.7129 32.122 18.9004 32.1923 19.0879 32.1923C19.334 32.1923 19.5801 32.0868 19.7441 31.8759L31.709 17.3447C31.8379 17.204 31.9082 17.0048 31.9082 16.8173Z","fill","black"],["d","M29.1777 24.7383C27.1152 24.7383 25.4512 26.4141 25.4512 28.4648C25.4512 30.5156 27.127 32.1914 29.1777 32.1914C31.2402 32.1914 32.9043 30.5156 32.9043 28.4648C32.9043 26.4141 31.2402 24.7383 29.1777 24.7383ZM29.1777 30.4922C28.0645 30.4922 27.1504 29.5898 27.1504 28.4648C27.1504 27.3516 28.0527 26.4375 29.1777 26.4375C30.3027 26.4375 31.2051 27.3398 31.2051 28.4648C31.2051 29.5781 30.291 30.4922 29.1777 30.4922Z","fill","black"],["d","M49.4983 53.2734L41.3655 39.0703C41.6937 38.8828 42.0452 38.7422 42.4202 38.6602C43.8851 38.3438 45.1624 37.418 45.9124 36.1172C46.6624 34.8164 46.8265 33.2461 46.3694 31.8164C45.9358 30.4688 46.3343 28.9805 47.389 28.0195C48.5022 27.0117 49.1468 25.5703 49.1468 24.0703C49.1468 22.5703 48.5022 21.1289 47.389 20.1211C46.3343 19.1719 45.9358 17.6836 46.3694 16.3242C46.8265 14.8945 46.6624 13.3242 45.9124 12.0234C45.1624 10.7227 43.8851 9.79688 42.4202 9.48047C41.0257 9.1875 39.9358 8.09766 39.6429 6.70312C39.3265 5.23828 38.4007 3.96094 37.0999 3.21094C35.7991 2.46094 34.2288 2.29688 32.7991 2.75391C31.4515 3.1875 29.9632 2.78906 29.0022 1.73438C27.9944 0.621094 26.553 -0.0234375 25.053 -0.0234375C23.553 -0.0234375 22.1116 0.621094 21.1038 1.73438C20.1546 2.78906 18.6663 3.1875 17.3069 2.75391C15.8772 2.29688 14.3069 2.46094 13.0062 3.21094C11.7054 3.96094 10.7796 5.23828 10.4632 6.70312C10.1819 8.10938 9.09209 9.19922 7.69756 9.49219C6.23271 9.80859 4.95537 10.7344 4.20537 12.0352C3.45537 13.3359 3.29131 14.9062 3.74834 16.3359C4.18193 17.6836 3.7835 19.1719 2.72881 20.1328C1.61553 21.1406 0.970995 22.582 0.970995 24.082C0.970995 25.582 1.61553 27.0234 2.72881 28.0312C3.7835 28.9805 4.18193 30.4688 3.74834 31.8281C3.29131 33.2578 3.45537 34.8281 4.20537 36.1289C4.95537 37.4297 6.23271 38.3555 7.69756 38.6719C8.0374 38.7422 8.36553 38.8711 8.65849 39.0352L0.502245 53.2734C0.326464 53.5781 0.36162 53.9648 0.584277 54.2344C0.806933 54.5039 1.18193 54.6211 1.51006 54.5039L8.48271 52.1836L10.1819 59.3438C10.264 59.6836 10.5452 59.9414 10.8851 59.9883C10.9319 60 10.9671 60 11.0022 60C11.3069 60 11.5882 59.8359 11.7405 59.5664L19.8147 45.4922C20.2952 45.6914 20.7405 45.9961 21.1038 46.4062C22.1116 47.5195 23.553 48.1641 25.053 48.1641C26.553 48.1641 27.9944 47.5195 29.0022 46.4062C29.3421 46.0312 29.7522 45.7383 30.1858 45.5391L38.2249 59.5664C38.3772 59.8359 38.6585 60 38.9632 60C38.9983 60 39.0452 60 39.0804 59.9883C39.4319 59.9414 39.7132 59.6836 39.7835 59.3438L41.4827 52.1836L48.4554 54.5039C48.7952 54.6211 49.1585 54.5039 49.3811 54.2344C49.6507 53.9648 49.6741 53.5781 49.4983 53.2734ZM11.3421 56.8477L9.92412 50.8828C9.86553 50.6484 9.71318 50.4492 9.51396 50.332C9.30303 50.2148 9.05693 50.1914 8.83428 50.2734L3.09209 52.1836L9.95928 40.207C10.2054 40.582 10.3812 40.9922 10.4749 41.4375C10.7913 42.9023 11.7171 44.1797 13.0179 44.9297C14.3187 45.6797 15.889 45.8438 17.3187 45.3867C17.5413 45.3164 17.7757 45.2695 17.9983 45.2344L11.3421 56.8477ZM27.7483 45.2578C27.0687 46.0195 26.0843 46.4531 25.0647 46.4531C24.0452 46.4531 23.0726 46.0195 22.3812 45.2578C21.6546 44.4492 20.7054 43.8984 19.6858 43.6523C19.6507 43.6406 19.6038 43.6289 19.5687 43.6289C19.1937 43.5469 18.8069 43.5 18.4319 43.5C17.8812 43.5 17.3304 43.582 16.803 43.7578C15.8304 44.0742 14.764 43.957 13.8851 43.4531C13.0062 42.9375 12.3733 42.082 12.1624 41.0859C11.9163 39.9141 11.2718 38.8828 10.3929 38.1445C10.3694 38.1211 10.346 38.1094 10.3226 38.0859C9.67803 37.5586 8.91631 37.1836 8.07256 36.9961C7.07646 36.7852 6.20928 36.1523 5.70537 35.2734C5.18975 34.3945 5.08428 33.3281 5.40068 32.3555C6.04521 30.3633 5.45928 28.1719 3.90068 26.7656C3.13896 26.0859 2.70537 25.1016 2.70537 24.082C2.70537 23.0625 3.13896 22.0898 3.90068 21.3984C5.45928 19.9922 6.04521 17.8008 5.40068 15.8086C5.08428 14.8359 5.20146 13.7695 5.70537 12.8906C6.221 12.0117 7.07646 11.3789 8.07256 11.168C10.1233 10.7344 11.7288 9.12891 12.1624 7.07813C12.3733 6.08203 13.0062 5.21484 13.8851 4.71094C14.764 4.19531 15.8304 4.08984 16.803 4.40625C18.7952 5.05078 20.9866 4.46484 22.3929 2.90625C23.0726 2.14453 24.0569 1.71094 25.0765 1.71094C26.096 1.71094 27.0687 2.14453 27.7601 2.90625C29.1663 4.46484 31.3577 5.05078 33.3499 4.40625C34.3226 4.08984 35.389 4.20703 36.2679 4.71094C37.1468 5.22656 37.7796 6.08203 37.9905 7.07813C38.4241 9.12891 40.0296 10.7344 42.0804 11.168C43.0765 11.3789 43.9436 12.0117 44.4476 12.8906C44.9632 13.7695 45.0687 14.8359 44.7522 15.8086C44.1077 17.8008 44.6936 19.9922 46.2522 21.3984C47.014 22.0781 47.4476 23.0625 47.4476 24.082C47.4476 25.1016 47.014 26.0742 46.2522 26.7656C44.6936 28.1719 44.1077 30.3633 44.7522 32.3555C45.0687 33.3281 44.9515 34.3945 44.4476 35.2734C43.9319 36.1523 43.0765 36.7852 42.0804 36.9961C41.1897 37.1836 40.3694 37.6055 39.7132 38.1797C39.7015 38.1914 39.678 38.2031 39.6663 38.2266C38.8343 38.9648 38.2366 39.9609 37.9905 41.0859C37.7796 42.082 37.1468 42.9492 36.2679 43.4531C35.389 43.9688 34.3226 44.0742 33.3499 43.7578C32.389 43.4531 31.3929 43.4297 30.4437 43.6523C30.4085 43.6641 30.3733 43.6641 30.3382 43.6758C29.3538 43.9453 28.4515 44.4844 27.7483 45.2578ZM41.1663 50.2734C40.9436 50.2031 40.6858 50.2266 40.4866 50.332C40.2757 50.4492 40.1233 50.6484 40.0765 50.8828L38.6585 56.8477L31.9905 45.2227C32.2601 45.2461 32.5413 45.293 32.8108 45.3867C34.2405 45.8438 35.8108 45.6797 37.1116 44.9297C38.4124 44.1797 39.3382 42.9023 39.6546 41.4375C39.7366 41.0273 39.9007 40.6523 40.1116 40.3008L46.9085 52.1836L41.1663 50.2734Z","fill","black"]],template:function(n,i){n&1&&(e(0,"section")(1,"div",0)(2,"h3",1),c(3,"WHY CHOOSE US?"),r(),e(4,"div",2)(5,"div",3),g(),e(6,"svg",4),u(7,"path",5),r(),m(),e(8,"h2",6),c(9,"GLOBAL DELIVERY"),r(),e(10,"p",7),c(11,` Experience Hassle-Free Shipping and Seamless Global Connectivity with Our Trustworthy and Efficient Delivery Service, Bringing the World to Your Fingertips!
`),r()(),e(12,"div",3),g(),e(13,"svg",8),u(14,"path",9),r(),m(),e(15,"h2",6),c(16,"FREE SHIPPING"),r(),e(17,"p",7),c(18,`
Shop to Your Heart's Content Without Worrying About Shipping Costs: Our Free Shipping Service Delivers Your Purchases with a Smile, Straight to Your Doorstep!`),r()(),e(19,"div",3),g(),e(20,"svg",8),u(21,"path",10),r(),m(),e(22,"h2",6),c(23,"24/7 SUPPORTING"),r(),e(24,"p",7),c(25,`
Shop with Confidence Anytime, Anywhere: Our Free Shipping Service Comes with 24/7 Support to Ensure Your Packages Arrive Safely and On Time!`),r()(),e(26,"div",3),g(),e(27,"svg",8),u(28,"path",11)(29,"path",12)(30,"path",13)(31,"path",14),r(),m(),e(32,"h2",6),c(33,"DAILY EMAIL"),r(),e(34,"p",7),c(35,`
Stay Up-to-Date with Your Deliveries: Enjoy the Convenience of Daily Email Updates with Our Free Shipping Service, Making Your Online Shopping Experience Even More Enjoyable!`),r()(),e(36,"div",3),g(),e(37,"svg",8),u(38,"path",15)(39,"path",16)(40,"path",17)(41,"path",18)(42,"path",19)(43,"path",20),r(),m(),e(44,"h2",6),c(45,"EASY PAYMENT"),r(),e(46,"p",7),c(47,`
Shop and Pay with Ease: Our Free Shipping Service Not Only Delivers Your Packages for Free, but Also Offers Easy Payment Options, Making Your Shopping Experience a Breeze!`),r()(),e(48,"div",3),g(),e(49,"svg",8),u(50,"path",21)(51,"path",22)(52,"path",23)(53,"path",24)(54,"path",25),r(),m(),e(55,"h2",6),c(56,"MONTHLY VOUCHER"),r(),e(57,"p",7),c(58,`
More Than Just Free Shipping: Our Service Rewards Your Loyalty with Monthly Vouchers, Giving You More Reasons to Shop and Save on Your Favorite Products!`),r()()()()())},encapsulation:2})};export{ut as a,Dt as b,kn as c,gt as d};
