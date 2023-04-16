// import galleryContent from "./galleryContent.js";
// import control from "./control.js";

export default {
  name: "wrap",
  data() {
    return {
      count: 123,
    };
  },
  // components: {
  //   galleryContent,
  //   control,
  // },
  template: `
  <div id="wrap">
    {{count}}
      <!-- <gallery-content></gallery-content>
      <control></control> -->
  </div>
  `,
};
