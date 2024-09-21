<template>
  <form>
    <textarea
      placeholder="text message here"
      v-model="message"
      @keydown.enter="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import useCollection from "../composable/useCollection.js";
// import { timestamp } from "../firebase/config.js";
export default {
  setup() {
    let message = ref("");
    let { error, addDoc } = useCollection("messages");

    let handleSubmit = async () => {
      let chat = {
        message: message.value,
        // created_at: timestamp(),
      };
      await addDoc(chat);
      message.value = "";
    };

    return { message, handleSubmit };
  },
};
</script>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>