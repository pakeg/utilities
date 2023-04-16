export default {
  name: "gallery-content",
  inject: ["photos", "activeIndx"],
  template: `
  <div id="images">
  
    <template v-for="(photo, indx) in photos" :key="photo">
      <Transition name="list" mode="out-in">
        <img :src="photo" loading="lazy" v-if="indx == activeIndx"/>
      </Transition>
    </template>
  </div>
  `,
};
