<template>
  <!-- Live Time is Here -->
  <div v-if="twoDeeLive">
    <div class="container">
      <h1 class="twolive">{{ twoDeeLive.live.twod }}</h1>
      <h6>အချိန် ( {{ twoDeeLive.live.time }} )</h6>
      <div class="flex">
        <div>
          <p>Set</p>
          <h4>
            {{ twoDeeLive.live.set }}
          </h4>
        </div>

        <div>
          <p>Value</p>
          <h4>
            {{ twoDeeLive.live.value }}
          </h4>
        </div>
      </div>
    </div>
    <!-- 12-00 Time  is Here-->
    <div class="container">
      <h3>{{ twoDeeLive.result[1].twod }}</h3>
      <h5>မနက် - {{ twoDeeLive.result[1].open_time }}</h5>
      <div class="flex">
        <div>
          <p>Set</p>
          <h2>
            {{ twoDeeLive.result[1].set }}
          </h2>
        </div>

        <div>
          <p>Value</p>
          <h2>
            {{ twoDeeLive.result[1].value }}
          </h2>
        </div>
      </div>
    </div>

    <!-- 4-30 Time is Here -->
    <div class="container">
      <h3>{{ twoDeeLive.result[3].twod }}</h3>
      <h5>ညနေ - {{ twoDeeLive.result[3].open_time }}</h5>
      <div class="flex">
        <div>
          <p>Set</p>
          <h2>
            {{ twoDeeLive.result[3].set }}
          </h2>
        </div>

        <div>
          <p>Value</p>
          <h2>
            {{ twoDeeLive.result[3].value }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let twoDeeLive = ref("");
    let error = ref("");
    let show = true;

    let load = async () => {
      try {
        let response = await fetch("https://api.thaistock2d.com/live");
        let datas = await response.json();
        twoDeeLive.value = datas;
      } catch (err) {
        error.value = err.message;
      }
    };
    load();
    return { twoDeeLive, error, show };
  },
};
</script>

<style>
</style>