<template>
  <div v-for="highlight in highlights" :key="highlight" class="container">
    <img :src="highlight.img" alt="Arsenal" width="300" height="200" />
    <h1>
      {{ highlight.title }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlights: [
        {
          title: "Arsenal Vs Man United",
          img: "../assets/photo/2.jpg",
        },
        {
          title: "Man City Vs Liverpool",
          img: "../assets/photo/1.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  background-color: aliceblue;
}
.container h1 {
  font-size: 30px;
}
</style>