<template>
  <form @submit.prevent>
    <div>
      <input type="text" placeholder="标题" v-model="title" />
    </div>
    <div>
      <textarea placeholder="正文" v-model="content"></textarea>
    </div>
    <div>
      <button class="primary" @click="createPost">发布</button>
    </div>
  </form>
</template>

<script setup lnag="ts">
useHead({ title: '创建内容' });

const title = ref('');
const content = ref('');

const createPost = async () => {
  console.log(title.value, content.value);

  const { data } = await useApiFetch('posts', {
    method: 'POST',
    body: {
      title: title.value,
      content: content.value,
    },
  });

  if (data.value) {
    title.value = '';
    content.value = '';
  }
};
</script>
