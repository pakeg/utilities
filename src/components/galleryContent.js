export default {
  name: "gallery-content",
  inject: ["photos", "styles"],
  template: `
  <div id="images" :class="styles.className">
    <img v-for="photo in photos" :src="photo" loading="lazy"/>
  </div>
  `,
};
