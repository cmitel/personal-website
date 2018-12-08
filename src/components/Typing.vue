<template>
  <div class="typing-inprogress mb-0">
    <div class="w-100 typing-container text-left mb-0">
      <div class="block w-100 mb-0 text-right rounded">
        <i class="fa fa-circle">&nbsp;</i>
        <i class="fa fa-circle">&nbsp;</i>
        <i class="fa fa-circle">&nbsp;</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Typing extends Vue { }
</script>

<style>
  .typing-container {
  position: relative;
  margin-left: auto;
}

.typing-container .fa-circle {
  padding-left: 2px;
  font-size: 0.75rem;
}

@keyframes monanimation {
  0% {
    font-size: 0.95rem;
  }
  50% {
    font-size: 1.25rem;
  }
  100%{
    font-size: 0.95rem;
  }
}

@keyframes monanimation3 {
  0% {
    font-size: 1.45rem;
  }
  70% {
    font-size: 0.95rem;
  }
  100%{
    font-size: 1.45rem;
  }
}

.typing-container .fa-circle:nth-child(1) {
  animation: monanimation 2s 0s ease-in-out infinite;
}

.typing-container .fa-circle:nth-child(2) {
  animation: monanimation 2s 1s ease-in-out infinite;
}

.typing-container .fa-circle:nth-child(3) {
  animation: monanimation3 2s 0s ease-in-out infinite;
}

.typing-container .block {
  float: right;
  margin-right: 10px;
  color: lightgray;
}
</style>

