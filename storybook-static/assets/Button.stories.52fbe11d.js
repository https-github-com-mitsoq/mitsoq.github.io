import{r as c,a as r,b as m,t as d,n as u,d as p,o as y}from"./vue.esm-bundler.c775131b.js";import{_ as g}from"./_plugin-vue_export-helper.cdc0426e.js";const a={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:t}){return e=c(e),{classes:r(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:r(()=>({backgroundColor:e.backgroundColor})),onClick(){t("click")}}}};function b(e,t,s,o,v,x){return y(),m("button",{type:"button",class:u(o.classes),onClick:t[0]||(t[0]=(...i)=>o.onClick&&o.onClick(...i)),style:p(o.style)},d(s.label),7)}const l=g(a,[["render",b],["__scopeId","data-v-75c39268"]]);a.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}]};const h={parameters:{storySource:{source:`import MyButton from './Button.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Demo/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args }
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button v-bind="args" />',
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
`,locationsMap:{primary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},secondary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},large:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},small:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}}}}},title:"Demo/Button",component:l,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}}},n=e=>({components:{MyButton:l},setup(){return{args:e}},template:'<my-button v-bind="args" />'}),B=n.bind({});B.args={primary:!0,label:"Button"};const k=n.bind({});k.args={label:"Button"};const _=n.bind({});_.args={size:"large",label:"Button"};const f=n.bind({});f.args={size:"small",label:"Button"};const L=["Primary","Secondary","Large","Small"];export{_ as Large,B as Primary,k as Secondary,f as Small,L as __namedExportsOrder,h as default};
//# sourceMappingURL=Button.stories.52fbe11d.js.map
