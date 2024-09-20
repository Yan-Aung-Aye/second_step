<template>
  <div v-for="football in footballs" :key="football" class="container">
    <h2>{{ football.match }}</h2>
    <p>စနေ နေ့ ( {{ football.time }} )အချိန်</p>
    <div class="link">
      <a :href="link1">တိုက်ရိုက်ကြည့်ရန်နှိပ်ပါ (1)</a>
      <a :href="link2">တိုက်ရိုက်ကြည့်ရန်နှိပ်ပါ (2)</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footballs: [
        { match: "Arsenal Vs Man City", time: "8-30", link1: "/", link2: "/" },
        { match: "Arsenal Vs Man Unied", time: "8-30", link1: "/", link2: "/" },
        { match: "Arsenal Vs Man City2", time: "8-30", link1: "/", link2: "/" },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  background-color: rgb(160, 151, 140);
  margin: 5px auto 10px;
}
.container h2 {
  font-size: 22px;
  font-weight: 900;
  color: rgb(218, 3, 171);
  margin: 5px auto 5px;
  background-color: rgb(151, 136, 136);
  display: inline;
  padding: 2px;
  border-radius: 10px;
}
.container .link {
  display: flex;
  justify-content: space-around;
  text-decoration: underline;
}
.container p {
  font-size: 17px;
  color: rgb(5, 95, 110);
  margin: 0 auto 5px;
}
</style>