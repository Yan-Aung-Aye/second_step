<template>
  <TwoDeeLive />
</template>

<script>
import TwoDeeLive from "../components/Twochild.vue";
export default {
  components: {
    TwoDeeLive,
  },
};
</script>
<style>
.container {
  border-radius: 20px;
  padding: 5px;
  justify-content: center;
  text-align: center;
  margin: 10px auto 10px;
  background: rgb(241, 205, 0);
  border-radius: 10px;
  max-width: 470px;
  font-weight: bold;
}
.container h1 {
  font-size: 95pt;
  color: rgb(9, 133, 5);
  font-weight: 900;
  position: relative;
}
.container h3 {
  font-size: 50px;
  font-weight: 800;
  color: rgb(212, 8, 8);
}
.container h2 {
  font-weight: bold;
  color: blue;
}
.container h4 {
  font-weight: bold;
  color: blue;
  animation: Key 1s ease-in-out infinite;
  font-size: 25px;
}
.container h5 {
  font-weight: bold;
  font-size: 1.35rem;
  color: rgb(255, 252, 252);
  background-color: rgb(172, 10, 10);
  border-radius: 10px;
  display: inline;
  padding: 7px;
}
.container h6 {
  font-size: 1.3rem;
  font-weight: bold;
  color: rgb(255, 252, 252);
  background-color: rgb(172, 10, 10);
  border-radius: 10px;
  display: inline;
  padding: 7px;
}
.container p {
  margin: 15px auto 3px;
  font-size: 20px;
  font-weight: 800;
  color: rgb(170, 2, 170);
}
.container .flex {
  display: flex;
  justify-content: space-around;
}
.container .twolive {
  animation: Key 1s ease-in-out infinite;
}
@keyframes Key {
  from {
    transform: translate(0%);
  }
  to {
    transform: translate(-5%, 5%);
  }
}
</style>