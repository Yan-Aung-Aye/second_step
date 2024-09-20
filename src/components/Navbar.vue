<template>
  <div class="contener">
    <div class="group">
      <p class="text">
        မင်္ဂလာပါ ။ အွန်လိုင်းမှာ ယုံကြည်စိတ်ချရပြီး ဘောနက် လည်းနေ့စဥ်ပေးနေသော
        အေးဂျင့်ကို သတိရတယ်ဆိုရင် ဒီကို သတိရလိုက်ပါနော် ။
      </p>
    </div>
  </div>
  <header>
    <router-link to="/"> 2D Live</router-link> ||
    <router-link to="/livechat">Chat</router-link> ||
    <router-link to="/football"> Football</router-link> ||
    <router-link to="/highlights">Highlights</router-link>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 10px auto 10px;
  padding: 9px;
  background-color: #827e8a;
  border-radius: 10px;
}

header a {
  color: #eeeef5;
  text-decoration: none;
  margin: auto;
  font-weight: bold;
  display: inline;
  font-size: 25px;
}
header a.router-link-active {
  color: #0315b8;
  font-weight: bold;
}
.group {
  position: relative;
  height: 35px;
  margin: 8px auto;
  overflow: hidden;
  background-color: rgb(168, 163, 163);
  border-bottom: 2px solid rgb(22, 5, 182);
  border-top: 2px solid rgb(4, 4, 168);
  font-weight: bold;
}
.group .text {
  position: absolute;
  margin: 0;
  padding: 5px;
  width: max-content;
  color: #1c08d3;
  font-weight: 700;
  animation: RightToleft 17s infinite linear;
}

@keyframes RightToleft {
  from {
    transform: translate(0%);
  }
  to {
    transform: translate(-50%);
  }
}
</style>