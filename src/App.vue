<template>
  <div class="d-flex flex-column" role="v-container">
    <div class="d-flex flex-row justify-content-center" role="v-container">
      <div class="d-flex flex-column w-75">
        <header class="d-flex flex-column justify-content-center" id="header">
          <div class="head-block d-flex flex-row justify-content-center mb-3">
            <div class="d-flex img-container rounded-circle">
              <img src="./assets/images/chrismitel.png" />
            </div>
          </div>
          <h1 class="d-flex justify-content-center mb-3" id="head-title">Chris Mitel, French Software Engineer !</h1>
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

@font-face{
	font-family: 'Caroni';
	src: url('./assets/fonts/caroni/Caroni-Regular.otf') format('woff');
}

html,
body {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  height: 100%;
  font-size: 100%;
}

body {
  font-size: 1.25rem;
}

img {

  width: 250px;
  max-width: 100%;
  max-height: 250px;
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

#head-title {
  font-family: 'Caroni', 'Roboto', 'Sans-serif';
  font-size: 2rem;
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