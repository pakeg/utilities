import wrap from "./components/wrap.js";
import "./gallery.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";

const app = Vue.createApp({
  data() {
    return {
      photos: [
        img8,
        img9,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img1,
        img2,
      ],
      activeIndx: 3,
    };
  },
  provide() {
    return {
      photos: this.photos,
      activeIndx: Vue.computed(() => this.activeIndx),
      changeActive: this.changeActive,
    };
  },
  methods: {
    changeActive(e) {
      this.activeIndx =
        typeof e.currentTarget != "undefined"
          ? e.currentTarget.dataset.index
          : e;
    },
  },
  components: {
    wrap,
  },
});
app.config.unwrapInjectedRef = true;
app.mount("#gallery");
