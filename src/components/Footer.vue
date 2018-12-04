<template>
  <section class="d-flex flex-column justify-content-center" id="footer">
    <div class="footer-container d-flex flex-row justify-content-center">
      <div class="d-flex w-50">
        <input
          class="d-flex pl-3 pr-3"
          id="txtContent"
          type="text"
          name="content"
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#footer {
  flex-grow: 1;
}

#txtContent {
  flex-grow: 1;
  flex-basis: auto;
  flex-shrink: 1;
  border-radius: 2rem;
  // border: none;
  border: solid 1px #cbd7db;
  background-color: #deebef;
  transition: background-color ease 0.25s;
  height: 3rem;
  font-size: 0.95rem;
}

#txtContent:hover {
  background-color: #cbd7db;
}

#txtContent:focus {
  background-color: #fff;
  outline: none;
  border: solid 1px #cbd7db;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  font-size: 0.95rem;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class MsgBull extends Vue {}
</script>

