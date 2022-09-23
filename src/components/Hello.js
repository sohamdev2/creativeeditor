// import { h, defineComponent, nextTick } from "vue";
import { h } from "vue";
/**
 * Component props Object
 */
const props = {
  text: {
    type: String,
    default: "hello",
  },
};

/**
 * Component Hello
 */
const Hello = {
  name: "hello",
  //   mixins: [ BaseMixin ],
  render() {
    try {
      this.error = false;
      //   const { $slots, $attrs, tag, componentData, realList, getKey } = this;
      //   const componentStructure = computeComponentStructure({
      //     $slots,
      //     tag,
      //     realList,
      //     getKey,
      //   });
      //   this.componentStructure = componentStructure;
      //   const attributes = getComponentAttributes({ $attrs, componentData });
      //   return componentStructure.render(h, attributes);
      return h("div", "hello");
    } catch (err) {
      //   this.error = true;
      return h("pre", { style: { color: "red" } }, err.stack);
    }
  },
  props,
  data() {
    return {
      message: this.text,
    };
  },
  methods: {
    /**
     * Main loop. Draws visualization.
     */
    mainLoop: function () {
      console.log("loop");
    },
  },
};

export default Hello;
