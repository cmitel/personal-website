<template>
  <div class="typing-inprogress mb-0">
    <div class="typing-container w-100 d-inline-block mb-0 text-right">
      <div class="mb-0 block">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Typing extends Vue {}
</script>


<style lang="scss">
.typing-container {
  position: relative;
  margin-right: auto;

  .block {
    float: right;
  }

  span {
    height: 15px;
    width: 15px;
    float: left;
    margin: 0 1px;
    background-color: #9e9ea1;
    display: block;
    border-radius: 50%;
    opacity: 0.4;
    @for $i from 1 through 3 {
      &:nth-of-type(#{$i}) {
        animation: 1s blink infinite ($i * 0.3333s);
      }
    }
  }
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}
</style>

