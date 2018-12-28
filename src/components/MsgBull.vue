<template>
  <div class="msgbull">
    <div class="msgbull-block">
      <div class="msgbull-container p-2 mr-3 mb-2">
        <div class="msgbull-text" v-html="msg">
        </div>
        <div class="msgbull-time text-right font-weight-bold">
          <p class="p-0 m-0">{{ msgDate }}</p>
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

.msgbull a,
.msgbull a:hover,
.msgbull a:active {
  color: yellow;
  font-weight: bold;
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
import { Prop } from "vue-property-decorator";

@Component
export default class MsgBull extends Vue {

  // Properties
  @Prop({
      type: Date,
      default: new Date()
  })
  createDate!: Date;

  @Prop({
      type: String,
      default: "test"
  })
  msg!: String;

  // computed
  get msgDate(): String {
    const d = this.createDate || new Date(1970, 1, 1);
    return `${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;
  }

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

