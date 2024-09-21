<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div
        class="single"
        v-for="message in formattedMessages"
        :key="message.id"
      >
        <span class="created_at">{{ message.created_at }} </span>
        <span class="message">{{ message.message }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onUpdated, ref } from "vue";
import { db } from "../firebase/config.js";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    let messages = ref([]);
    let msgBox = ref(null);

    onUpdated(() => {
      msgBox.value.scrollTop.value.scrollHeight;
    });

    let formattedMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());
        return { ...msg, created_at: formatTime };
      });
    });

    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let results = [];

        snap.docs.forEach((doc) => {
          let document = { ...doc.data(), id: doc.id };
          doc.data().created_at && results.push(document);
        });
        messages.value = results;
      });
    return { messages, formattedMessages, msgBox };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>