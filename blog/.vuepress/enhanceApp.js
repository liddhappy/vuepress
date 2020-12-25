export default ({ router }) => {
  //路由多次点击出错问题
  const originalPush = router.push;
  router.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
  };
};
