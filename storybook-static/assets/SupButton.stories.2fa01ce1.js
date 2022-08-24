import{r as b,a,b as g,e as m,f as _,t as h,n as k,o as S}from"./vue.esm-bundler.c775131b.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const c=(t,e=!1)=>{let n=typeof t;return n==="object"?e?n:t===null?"null":Array.isArray(t)?"array":t instanceof RegExp?"regex":t instanceof Error?"error":n:n},s=(t,e,n=!0)=>{if(c(e)!=="array"&&(e=String(e).split(".")),e.length>0){const r=e.shift();return t!==null&&typeof t=="object"&&(n?r in t:Object.prototype.hasOwnProperty.apply(t,[r]))?s(t[r],e,n):!1}return!0},l=(t,e,n,r=!0)=>{if(c(e)!=="array"&&(e=String(e).split(".")),e.length>0){const o=e.shift();return t!==null&&typeof t=="object"&&(r?o in t:Object.prototype.hasOwnProperty.apply(t,[o]))?l(t[o],e,n,r):n}return t};const i={primary:["btn--primary"],secondary:["btn--secondary"],tertiary:["btn--tertiary"],quaternary:["btn--quaternary"]},u={black:["btn--black","white"],green:["btn--green","white"],red:["btn--red","white"],white:["btn--white","black"]},p={name:"SupButton",props:{type:{type:String,required:!0,validator(t){return s(i,t)}},background:{type:String,required:!0,validator(t){return s(u,t)}},label:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(t,{emit:e}){t=b(t);const n=a(()=>l(i,t.type,{})),r=a(()=>l(u,t.background,{})),o=a(()=>JSON.parse(t.disabled));return{classes:n,variants:r,isDisabled:o,onClick:()=>{e("click")}}}},v=["disabled","name","aria-label"];function x(t,e,n,r,o,y){return S(),g("button",{class:k(["btn",[r.classes,r.variants]]),disabled:r.isDisabled,name:n.label,"aria-label":n.label,onClick:e[0]||(e[0]=(...f)=>r.onClick&&r.onClick(...f))},[m(t.$slots,"default",{},void 0,!0),_(h(n.label),1)],10,v)}const d=B(p,[["render",x],["__scopeId","data-v-7eb90002"]]);p.__docgenInfo={displayName:"SupButton",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},required:!0},{name:"background",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}]};const D={parameters:{storySource:{source:`import SupButton from './SupButton.vue'

export default {
  title: 'Shop/Button',
  component: SupButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['black', 'green', 'red', 'white'],
    },
    background: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    },
    disabled: { control: 'bool' },
    onClick: {},
  },
}

const Template = args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { SupButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args }
  },
  template: \`<sup-button class="btn" v-bind="args" />\`,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}
`,locationsMap:{default:{startLoc:{col:17,line:21},endLoc:{col:2,line:29},startBody:{col:17,line:21},endBody:{col:2,line:29}}}}},title:"Shop/Button",component:d,argTypes:{type:{control:{type:"select"},options:["black","green","red","white"]},background:{control:{type:"select"},options:["primary","secondary","tertiary","quaternary"]},disabled:{control:"bool"},onClick:{}}},C=t=>({components:{SupButton:d},setup(){return{args:t}},template:'<sup-button class="btn" v-bind="args" />'}),q=C.bind({});q.args={label:"Button"};const O=["Default"];export{q as Default,O as __namedExportsOrder,D as default};
//# sourceMappingURL=SupButton.stories.2fa01ce1.js.map
