import galleryContent from "./galleryContent.js";
import control from "./control.js";

export default {
  name: "wrap",
  data() {
    return {};
  },
  components: {
    galleryContent,
    control,
  },
  template: `
  <div id="wrap" v-cloak>
      <gallery-content></gallery-content>
      <control></control>
  </div>
  `,
};
