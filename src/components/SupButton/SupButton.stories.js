import SupButton from './SupButton.vue'

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
  // Components used in your story `template` are defined in the `components` object
  components: { SupButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  template: `<sup-button class="btn" v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
}
