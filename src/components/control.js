export default {
  name: "control",
  inject: ["photos", "activeIndx", "changeActive"],
  data() {
    return {
      countInRow: 3,
      widthBlock: 0,
      widthImg: 0,
      fistIndx: this.activeIndx - 2,
      lastIndx: this.photos.length - 2,
      transtionCan: true,
    };
  },
  mounted() {
    this.widthImg = this.$refs.controlDiv?.children[0].children[0].offsetWidth;
    const heightImg = this.$refs.controlDiv?.children[0].offsetHeight;
    this.$refs.controlDiv.style.width = `${this.widthImg * this.countInRow}px`;
    this.$refs.controlDiv.style.height = `${heightImg}px`;
    this.$refs.currentDiv.style.width = `${this.widthImg}px`;
    this.$refs.currentDiv.style.height = `${heightImg}px`;
    this.$refs.currentDiv.style.left = `${this.widthImg}px`;
  },
  computed: {
    transformX() {
      const previousIndex = this.lastIndx - 1;
      const nextIndex = this.fistIndx + 1;

      const isAtFirstIndex = this.activeIndx == this.fistIndx;
      const isAtLastIndex = this.activeIndx == this.lastIndx;

      const change = this.activeIndx * this.widthImg - this.widthImg;
      if (isAtFirstIndex) {
        setTimeout(() => {
          this.transtionCan = false;
          this.changeActive(previousIndex);
        }, 500);
      } else if (isAtLastIndex) {
        setTimeout(() => {
          this.transtionCan = false;
          this.changeActive(nextIndex);
        }, 500);
      }

      if (!this.transtionCan) {
        setTimeout(() => {
          this.transtionCan = true;
        }, 10);
      }

      return change;
    },
    transition() {
      return this.transtionCan ? "transform linear 0.5s" : "";
    },
  },
  template: `
  <div id="control" ref="controlDiv">
    <div class="wraper" :style="[{ transform: 'translateX('+ (-transformX) +'px)'}, {transition: transition}]">  
      <div class="blockImg"
        v-for="(photo, indx) in photos"
        :key="photo"
        :data-index="indx"
        @click="changeActive">
          <img :src="photo" loading="lazy"/>
      </div>
    </div>
    <div id="current" ref="currentDiv"></div>
  </div>
    `,
};
