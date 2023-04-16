import wrap from "./components/wrap.js";
import img1 from "./img/1.jpg";
console.log(img1);
const app = Vue.createApp({
  data() {
    return {
      photos: [],
    };
  },
  provide() {
    return {
      photos: this.photos,
    };
  },
  components: {
    wrap,
  },
});
app.mount("#gallery");
