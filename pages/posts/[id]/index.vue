<template>
  <div>
    <Head>
      <Title>{{ post?.title }}</Title>
    </Head>
  </div>
  <img
    v-if="post?.file"
    style="100%"
    :src="`${apiBaseUrl}/files/${post?.file?.id}/serve?size=large`"
    alt=""
  />
  <div v-else>没有图片</div>
  <h1>{{ post?.title }}</h1>
  <div>{{ post?.content }}</div>
  <div>{{ post?.user.name }}</div>
</template>

<script setup lang="ts">
import { Post } from '~/types/post.type';

const {
  params: { id },
} = useRoute();

const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

const { data: post } = await useApiFetch<Post>(`posts/${id}`);

if (!post.value) {
  showError({ statusCode: 404, message: '没有到内容页面' });
}
</script>
