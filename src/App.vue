<template>
  <div class="d-flex flex-column" role="v-container">
    <div class="d-flex flex-row justify-content-center" role="v-container">
      <div class="d-flex flex-column w-75">
        <header class="d-flex flex-column justify-content-center" id="header">
          <div class="head-block d-flex flex-row justify-content-center mb-3">
            <div class="d-flex img-container rounded-circle">
              <img
                src="data:image/jpeg;base64,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"
              >
            </div>
          </div>
          <div class="line"></div>
          <div class="head-footer-block d-flex flex-row justify-content-center">
            <div class="head-footer-container d-flex justify-content-between">
              <a href="#" title="Folow me !">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#" title="Text me !">
                <i class="fa fa-skype"></i>
              </a>
              <a href="#" title="Call me !">
                <i class="fa fa-wordpress"></i>
              </a>
              <a href="#" title="Give a look !">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#" title="Text me !">
                <i class="fa fa-envelope-o"></i>
              </a>
              <a href="#" title="Call me !">
                <i class="fa fa-phone"></i>
              </a>
            </div>
          </div>
          <div class="line mb-2"></div>
        </header>

        <section class="d-flex flex-column" id="content">
          <div class="content-container d-flex flex-row justify-content-center h-100">
            <div class="content-placeholder d-flex w-50 flex-column-reverse h-100">
              <Typing v-if="isTyping"></Typing>

              <transition-group
                name="custom-classes-transition"
                enter-active-class="animated fadeInUpBig"
              >
                <MsgBull v-for="m in messages" v-bind:key="m.id" :class="[`order-${messages.length-m.id}`]" v-bind:msg="m.msg" v-bind:createDate="m.date"></MsgBull>
              </transition-group>
            </div>
          </div>
        </section>

        <Footer @typing="onTyping" @typed="onTyped" :messages="tabMessages"></Footer>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MsgBull from "./components/MsgBull.vue";
import Footer from "./components/Footer.vue";
import Typing from "./components/Typing.vue";

import Messages from './assets/config/messages.config';

@Component({
  components: {
    MsgBull,
    Footer,
    Typing
  }
})
export default class App extends Vue {

  messages: any = [];
  interval!: any;
  nb: number = 0;
  isTyping: boolean = false;

  onTyping(isTyping: boolean): void {
    this.isTyping = isTyping === true;
  }

  onTyped(typedTxtIndex: number): void {
    if (Messages[typedTxtIndex] != undefined) {
      this.messages.push(
        Messages[typedTxtIndex]
      );
    }
  }

  get tabMessages(): string[] {
    const data = [];
    for (const el of Messages) {
      data.push(el.msg);
    }
    return data;
  }

  // Lifecycle hooks
  created() {
    console.log(`== App - CREATED ==`);
  }
  mounted() {
    console.log(`== App - MOUNTED ==`);
  }
  updated() {
    console.log(`== App - UPDATED ==`);
  }
  destroyed() {
    console.log(`== App - DESTROYED ==`);
    clearInterval(this.interval);
  }
}
</script>

<style lang="scss">
html,
body {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  height: 100%;
  font-size: 100%;
}

body {
  /*   background-image: url('https://image.freepik.com/icones-gratis/logotipo-esbocado-android_318-52891.jpg');
  background-repeat: repeat;
  background-size: 10%; */
  font-size: 1.25rem;
}

img {
  /*    max-width:100%;
   height: auto;
   vertical-align: middle; */

  width: 200px;
  max-width: 100%;
  max-height: 200px;
  height: auto;
  vertical-align: middle;
}

.img-container {
  overflow: hidden;
}

a {
  color: #6a777c;
  transition: color ease 0.25s;
}

a.active,
a:hover {
  color: #284f60;
}

.head-footer-container {
  width: 25%;
  font-size: 1.75rem;
}

.d-flex {
  min-height: 0;
  min-width: 0;
}

#container {
  background-color: rgba(255, 255, 255, 1);
}

#container,
[role="v-container"] {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: auto;
  height: 100%;
}

#header {
  flex-grow: 1;
}

#content {
  flex-grow: 20;
}

#content {
  /*   overflow: hidden; */
  max-height: 100%;
}

.content-container {
  flex-grow: 1;
  flex-basis: auto;
  flex-shrink: 0;
  position: relative;
}

.content-placeholder {
  position: absolute;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 0;
}

.msgbull-container {
  width: 75%;
  background-color: #1f64ef;
  color: #fff;
  border-radius: 15px;
  position: relative;
  margin-left: auto;
}

/* width */
.content-placeholder::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.content-placeholder::-webkit-scrollbar-track {
  background: #fff;
}

.content-placeholder::-webkit-scrollbar-track:hover {
  background: #f8f8f8;
}

/* Handle */
.content-placeholder::-webkit-scrollbar-thumb {
  background: #fff;
}

/* Handle on hover */
.content-placeholder::-webkit-scrollbar-thumb:hover {
  background: #909090;
}

.line {
  height: 1px;
  width: 100%;
  display: block;
  background: linear-gradient(to left, #fff, #6a777c, #fff);
}

</style>