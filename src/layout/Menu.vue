<template>
  <div class="container">
    <div class="aside">
      <ul @click="to">
        <li data-toPage="/count-to">数字滚动</li>
        <li data-toPage="/image-lazyload">图片懒加载</li>
        <li data-toPage="/drag">拖拽</li>
        <li data-toPage="/todolist">todolist</li>
        <li data-toPage="/timeline">时间轴</li>
        <li data-toPage="/permission">权限</li>
        <li data-toPage="/login">登录</li>
        <li data-toPage="/screen">大屏</li>
        <li data-toPage="/change-screen">监听切屏</li>
        <li data-toPage="/apitest">接口测试</li>
        <li data-toPage="/text-overflow">文本省略</li>
        <li data-toPage="/v-list">虚拟列表</li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const to = (e) => {
  // console.log(e.target.dataset.topage)
  router.push(e.target.dataset.topage);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding-top: 50px;

  .aside {
    width: 200px;
    flex-shrink: 0;
    cursor: pointer;
    margin-right: 50px;
    margin-top: 50px;

    ul {
      margin-left: 20px;
      border: 1px solid black;

      li {
        padding-left: 10px;
        height: 50px;
        line-height: 50px;
      }

      li:not(:last-child) {
        border-bottom: 1px solid black;
      }
    }
  }

  .content {
    width: 100%;
  }
}
</style>
