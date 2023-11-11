export default defineNuxtPlugin(() => {
  addRouteMiddleware("auth", (to, from) => {
    const { $auth } = useNuxtApp();
    if (!$auth?.currentUser?.uid && to.path !== "/") {
      return navigateTo("/");
    }
  });
});
