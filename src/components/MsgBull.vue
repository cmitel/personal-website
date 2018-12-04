<template>
  <div class="msgbull">
    <div class="msgbull-block">
      <div class="msgbull-container p-2 mr-3 mb-2">
        <div class="msgbull-text">
          {{ msg }}
        </div>
        <div class="msgbull-time text-right font-weight-bold">
          <p class="p-0 m-0">{{ createDate }}</p>
        </div>
        <span class="fa fa-play icon"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.msgbull {
  font-size: 0.95rem;
}

.msgbull-text {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
}

.msgbull-time {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  font-size: 0.8rem;
  color: #d8e5ff;
}

.icon {
  color: red;
  position: absolute;
  bottom: 10px;
  right: -10px;
  color: #1f64ef;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    msg: {
      type: String,
      default: "TEst"
    },
    createDate: {
      type: Date,
      default: new Date()
    }
  }
})
export default class MsgBull extends Vue {
  // data
  // Initial data can be declared as instance properties
  // message = "1234"

  // // return initial data
  // data () {
  //   return {
  //     message: 123
  //   }
  // }

  // Component methods can be declared as instance methods
  // onClick (): void {
  //   window.alert(this.message)
  // }

  // computed
  // get reverseMessage() {
  //   return this.message
  //     .split("")
  //     .reverse()
  //     .join("");
  // }

  // method
  // changeMessage() {
  //   this.message = "Good bye";
  // }

  // Lifecycle hooks
  created() {
    console.log(`== MsgBull - CREATED ==`);
  }
  mounted() {
    console.log(`== MsgBull - MOUNTED ==`);
  }
  updated() {
    console.log(`== MsgBull - UPDATED ==`);
  }
  destroyed() {
    console.log(`== MsgBull - DESTROYED ==`);
  }
}
</script>

