export default defineEventHandler(({ context }) => {
  // Property 'name' does not exist on type 'Record<string, string> | undefined'.
  // const {
  //   params: { name },
  // } = context;

  // const { params } = context;
  // const name = params?.name;

  return {
    message: `你好 ${name}，欢迎来宁皓网学习 Nuxt`,
  };
});
