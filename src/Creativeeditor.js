// import { h, defineComponent, nextTick } from "vue";
// import { h } from "vue";
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
const Creativeeditor = {
  name: "Creativeeditor",
  //   mixins: [ BaseMixin ],
  render(h) {
    // try {
      //   this.error = false;
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
      //   return h("div", "hello");
      return h({template: "<div>Hello Editor</div>"})
    // } catch (err) {
    //   //   this.error = true;
    //   return h("pre", { style: { color: "red" } }, err.stack);
    // }
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

export default Creativeeditor;
