/**
 * Component props Object
 */
const props = {
    text: {
        type: String,
        default: 'hello'
    },
}

/**
 * Component Hello
 */
const Hello = {
  name: 'hello',
//   mixins: [ BaseMixin ],
  props,
  data () {
    return {
      message: this.text
    }
  },
  methods: {
    /**
     * Main loop. Draws visualization.
     */
    mainLoop: function () {
      console.log('loop')
    },
  }
}

export default Hello