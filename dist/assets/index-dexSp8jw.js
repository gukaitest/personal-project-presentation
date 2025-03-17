import{f as i,R as Z,r as O,K as q,S as J,U as Q,V as k,W as c,X as ee,Y as te,Z as le,a0 as ne,a1 as B,d as V,a2 as oe,a3 as ie,a4 as ae,a5 as se,a6 as X,a as re,a7 as G,a8 as de,a9 as ce}from"./index-CAvhOcyu.js";import{u as pe,r as F}from"./responsiveObserve-z8r-WqWM.js";function I(e){return e!=null}const E=e=>{const{itemPrefixCls:t,component:l,span:o,labelStyle:n,contentStyle:a,bordered:d,label:r,content:s,colon:u}=e,p=l;return d?i(p,{class:[{[`${t}-item-label`]:I(r),[`${t}-item-content`]:I(s)}],colSpan:o},{default:()=>[I(r)&&i("span",{style:n},[r]),I(s)&&i("span",{style:a},[s])]}):i(p,{class:[`${t}-item`],colSpan:o},{default:()=>[i("div",{class:`${t}-item-container`},[(r||r===0)&&i("span",{class:[`${t}-item-label`,{[`${t}-item-no-colon`]:!u}],style:n},[r]),(s||s===0)&&i("span",{class:`${t}-item-content`,style:a},[s])])]})},ue=e=>{const t=(u,p,L)=>{let{colon:m,prefixCls:x,bordered:b}=p,{component:y,type:w,showLabel:P,showContent:M,labelStyle:g,contentStyle:S}=L;return u.map((f,h)=>{var $,v;const z=f.props||{},{prefixCls:D=x,span:R=1,labelStyle:A=z["label-style"],contentStyle:H=z["content-style"],label:W=(v=($=f.children)===null||$===void 0?void 0:$.label)===null||v===void 0?void 0:v.call($)}=z,N=J(f),T=Q(f),_=k(f),{key:j}=f;return typeof y=="string"?i(E,{key:`${w}-${String(j)||h}`,class:T,style:_,labelStyle:c(c({},g),A),contentStyle:c(c({},S),H),span:R,colon:m,component:y,itemPrefixCls:D,bordered:b,label:P?W:null,content:M?N:null},null):[i(E,{key:`label-${String(j)||h}`,class:T,style:c(c(c({},g),_),A),span:1,colon:m,component:y[0],itemPrefixCls:D,bordered:b,label:W},null),i(E,{key:`content-${String(j)||h}`,class:T,style:c(c(c({},S),_),H),span:R*2-1,component:y[1],itemPrefixCls:D,bordered:b,content:N},null)]})},{prefixCls:l,vertical:o,row:n,index:a,bordered:d}=e,{labelStyle:r,contentStyle:s}=Z(Y,{labelStyle:O({}),contentStyle:O({})});return o?i(q,null,[i("tr",{key:`label-${a}`,class:`${l}-row`},[t(n,e,{component:"th",type:"label",showLabel:!0,labelStyle:r.value,contentStyle:s.value})]),i("tr",{key:`content-${a}`,class:`${l}-row`},[t(n,e,{component:"td",type:"content",showContent:!0,labelStyle:r.value,contentStyle:s.value})])]):i("tr",{key:a,class:`${l}-row`},[t(n,e,{component:d?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:r.value,contentStyle:s.value})])},me=e=>{const{componentCls:t,descriptionsSmallPadding:l,descriptionsDefaultPadding:o,descriptionsMiddlePadding:n,descriptionsBg:a}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:o,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{backgroundColor:a,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:n}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:l}}}}},fe=e=>{const{componentCls:t,descriptionsExtraColor:l,descriptionItemPaddingBottom:o,descriptionsItemLabelColonMarginRight:n,descriptionsItemLabelColonMarginLeft:a,descriptionsTitleMarginBottom:d}=e;return{[t]:c(c(c({},le(e)),me(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:d},[`${t}-title`]:c(c({},ne),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:l,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:o},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${a}px ${n}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},be=ee("Descriptions",e=>{const t=e.colorFillAlter,l=e.fontSizeSM*e.lineHeightSM,o=e.colorText,n=`${e.paddingXS}px ${e.padding}px`,a=`${e.padding}px ${e.paddingLG}px`,d=`${e.paddingSM}px ${e.paddingLG}px`,r=e.padding,s=e.marginXS,u=e.marginXXS/2,p=te(e,{descriptionsBg:t,descriptionsTitleMarginBottom:l,descriptionsExtraColor:o,descriptionItemPaddingBottom:r,descriptionsSmallPadding:n,descriptionsDefaultPadding:a,descriptionsMiddlePadding:d,descriptionsItemLabelColonMarginRight:s,descriptionsItemLabelColonMarginLeft:u});return[fe(p)]});B.any;const ye=()=>({prefixCls:String,label:B.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}),ge=V({compatConfig:{MODE:3},name:"ADescriptionsItem",props:ye(),setup(e,t){let{slots:l}=t;return()=>{var o;return(o=l.default)===null||o===void 0?void 0:o.call(l)}}}),K={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Se(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let l=0;l<F.length;l++){const o=F[l];if(t[o]&&e[o]!==void 0)return e[o]||K[o]}return 3}function U(e,t,l){let o=e;return(l===void 0||l>t)&&(o=ce(e,{span:t})),o}function $e(e,t){const l=de(e),o=[];let n=[],a=t;return l.forEach((d,r)=>{var s;const u=(s=d.props)===null||s===void 0?void 0:s.span,p=u||1;if(r===l.length-1){n.push(U(d,a,u)),o.push(n);return}p<a?(a-=p,n.push(d)):(n.push(U(d,a,p)),o.push(n),a=t,n=[])}),o}const ve=()=>({prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:B.any,extra:B.any,column:{type:[Number,Object],default:()=>K},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}),Y=Symbol("descriptionsContext"),C=V({compatConfig:{MODE:3},name:"ADescriptions",inheritAttrs:!1,props:ve(),slots:Object,Item:ge,setup(e,t){let{slots:l,attrs:o}=t;const{prefixCls:n,direction:a}=oe("descriptions",e);let d;const r=O({}),[s,u]=be(n),p=pe();ie(()=>{d=p.value.subscribe(m=>{typeof e.column=="object"&&(r.value=m)})}),ae(()=>{p.value.unsubscribe(d)}),se(Y,{labelStyle:X(e,"labelStyle"),contentStyle:X(e,"contentStyle")});const L=re(()=>Se(e.column,r.value));return()=>{var m,x,b;const{size:y,bordered:w=!1,layout:P="horizontal",colon:M=!0,title:g=(m=l.title)===null||m===void 0?void 0:m.call(l),extra:S=(x=l.extra)===null||x===void 0?void 0:x.call(l)}=e,f=(b=l.default)===null||b===void 0?void 0:b.call(l),h=$e(f,L.value);return s(i("div",G(G({},o),{},{class:[n.value,{[`${n.value}-${y}`]:y!=="default",[`${n.value}-bordered`]:!!w,[`${n.value}-rtl`]:a.value==="rtl"},o.class,u.value]}),[(g||S)&&i("div",{class:`${n.value}-header`},[g&&i("div",{class:`${n.value}-title`},[g]),S&&i("div",{class:`${n.value}-extra`},[S])]),i("div",{class:`${n.value}-view`},[i("table",null,[i("tbody",null,[h.map(($,v)=>i(ue,{key:v,index:v,colon:M,prefixCls:n.value,vertical:P==="vertical",bordered:w,row:$},null))])])])]))}}});C.install=function(e){return e.component(C.name,C),e.component(C.Item.name,C.Item),e};export{ge as D,C as a};
//# sourceMappingURL=index-dexSp8jw.js.map
