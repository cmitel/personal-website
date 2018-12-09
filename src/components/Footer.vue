<template>
  <section class="d-flex flex-column justify-content-center" id="footer">
    <div class="footer-container d-flex flex-row justify-content-center">
      <div class="d-flex w-50">
        <input
          class="d-flex pl-3 pr-3"
          id="txtContent"
          type="text"
          name="content"
          v-model="inputTxt"
        />
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
export default class Footer extends Vue {

  msg: string = `Hello guys ! I'm barack obama the first black president of United States. And I'm going to talk about me not for long but I just want to you to know me better than you do right now. What do you think fella ?`;
  inputTxt: string = "";

  created() {

  }

  mounted(): void {
    console.log(`= Footer : MOUNTED =`)

    let index = 0;

    $('#txtContent').focus();

    setInterval(() => {

      let startElements = 0;

      [3, 2, 3, 1, 3].forEach(e => {

        startElements = this.inputTxt.length;

        if (this.inputTxt.length <= this.msg.length && this.inputTxt.length - startElements < e) {
          this.inputTxt += this.msg.charAt(index);
          index++;
          $('#txtContent').blur();
          $('#txtContent').focus();
        }

      });

    }, 200);
  }

  destroyed(): void {
    console.log(`= Footer : DESTROYED =`)
  }

}
</script>

