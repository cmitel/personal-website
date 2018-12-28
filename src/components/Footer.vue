<template>
  <section class="d-flex flex-column justify-content-center" id="footer">
    <div class="footer-container d-flex flex-row justify-content-center">
      <div class="d-flex w-50">
        <div class="w-100 d-inline-block txtContent p-3">
          <span id="typed" class="w-100"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#footer {
  flex-grow: 1;
}

.txtContent {
  border-radius: 2rem;
  border: solid 1px #cbd7db;
  background-color: #deebef;
  transition: background-color ease 0.25s;
  font-size: 0.95rem;

  &:hover {
    background-color: #cbd7db;
  }

  &:focus {
    background-color: #fff;
    outline: none;
    border: solid 1px #cbd7db;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
    font-size: 0.95rem;
  }
}

.typed-cursor {
  font-size: 1rem;
  font-weight: 500;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";
import Typed from "typed.js";

@Component
export default class Footer extends Vue {
  @Prop({
    type: Array,
    default: ["Hello world !"]
  })
  messages!: string[];

  preStringTyped(arrayPos: number, self: Typed): void {
    console.warn(`preStringTyped`);
    this.$emit("typing", true);
  }

  onStringTyped(arrayPos: number, self: Typed): void {
    console.warn(`onStringTyped`);
    this.$emit("typed", arrayPos);
    // this.$emit("typing", false);
  }

  onComplete(self: Typed): void {
    console.warn(`onComplete`);
    this.$emit("typing", false);
  }

  mounted(): void {
    console.log(`= Footer : MOUNTED =`);
    this.messages.push(``);
    const opts = {
      strings: this.messages,
      typeSpeed: 5,
      preStringTyped: this.preStringTyped,
      onStringTyped: this.onStringTyped,
      onComplete: this.onComplete,
      fadeOut: true,
      startDelay: 500,
      backDelay: 0,
      fadeOutDelay: true,
      contentType: 'html'
    };
    const typed = new Typed("#typed", opts);
  }

  destroyed(): void {
    console.log(`= Footer : DESTROYED =`);
  }
}
</script>

