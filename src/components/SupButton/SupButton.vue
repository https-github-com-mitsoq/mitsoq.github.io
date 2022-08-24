<template>
  <button
    class="btn"
    :class="[classes, variants]"
    :disabled="isDisabled"
    :name="label"
    :aria-label="label"
    @click="onClick"
  >
    <slot></slot>{{ label }}
  </button>
</template>

<script>
import { computed, reactive } from 'vue'
import { has, get } from '../../utils/obj'

const types = {
  primary: ['btn--primary'],
  secondary: ['btn--secondary'],
  tertiary: ['btn--tertiary'],
  quaternary: ['btn--quaternary'],
}

const visuals = {
  black: ['btn--black', 'white'],
  green: ['btn--green', 'white'],
  red: ['btn--red', 'white'],
  white: ['btn--white', 'black'],
}

export default {
  name: 'SupButton',
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return has(types, value)
      },
    },
    background: {
      type: String,
      required: true,
      validator(value) {
        return has(visuals, value)
      },
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    props = reactive(props)

    const classes = computed(() => get(types, props.type, {}))
    const variants = computed(() => get(visuals, props.background, {}))
    const isDisabled = computed(() => JSON.parse(props.disabled))

    const onClick = () => {
      emit('click')
    }

    return { classes, variants, isDisabled, onClick }
  },
}
</script>

<style lang="scss" scoped>
//Component options namespaced as modifiers ("--").
@mixin modifier($name) {
  //Get the parent component name.
  $component: str-slice(#{&}, 0, -1);
  &--#{$name} {
    @content;
  }
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  height: 40px;
  width: 300px;
  color: #000;
  border: 0;
  border-radius: 2px;
  max-width: 100%;
  padding: 10px;
  margin: 0 0 10px;
  text-transform: uppercase;
  outline: none;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  @include modifier('red') {
    background: #cc0303;
  }

  @include modifier('black') {
    background: #000000;
  }

  &:hover,
  &:focus {
    opacity: 0.9;
  }
}
.white {
  color: #f0f0f0;
}
</style>
