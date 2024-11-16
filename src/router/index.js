import { createWebHistory } from "vue-router";
import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  // {
  //   path: "/404",
  //   component: () => import("@/layout/404.vue"),
  //   name: "not-found",
  // },
  // {
  //   path: "/:pathMatch(.*)",
  //   redirect: "/404",
  // },
  // {
  //   path: "/apitest1",
  //   component: () => import("@/views/Apitest.vue"),
  //   name: "apitest1",
  // },
  {
    path: "/",
    // component: ()=>import('@/App.vue'),
    redirect: "count-to",
    children: [
      {
        path: "home",
        component: () => import("@/layout/Menu.vue"),
        children: [
          {
            path: "/count-to",
            component: () => import("@/views/Countup.vue"),
            name: "count-to",
          },
          {
            path: "/image-lazyload",
            component: () => import("@/views/Imagelazy.vue"),
            name: "image-lazyload",
          },
          {
            path: "/drag",
            component: () => import("@/views/Drag.vue"),
            name: "drag",
          },
          {
            path: "/todolist",
            component: () => import("@/views/Todolist.vue"),
            name: "todolist",
          },
          {
            path: "/timeline",
            component: () => import("@/views/Timeline.vue"),
            name: "timeline",
          },
          {
            path: "/permission",
            component: () => import("@/views/Permission.vue"),
            name: "permission",
          },
          {
            path: "/login",
            component: () => import("@/views/Login.vue"),
            name: "login",
          },
          {
            path: "/change-screen",
            component: () => import("@/views/ChangeScreen.vue"),
            name: "change-screen",
          },
          {
            path: "/apitest",
            component: () => import("@/views/Apitest.vue"),
            name: "apitest",
          },
          {
            path: "/text-overflow",
            component: () => import("@/views/TextOverflow.vue"),
            name: "text-overflow",
          },
          {
            path: "/v-list",
            component: () => import("@/views/VList.vue"),
            name: "v-list",
          },
          {
            path: "/v-model",
            component: () => import("@/views/v-model/Parent.vue"),
            name: "v-model",
          },
          {
            path: "/file-upload",
            component: () => import("@/views/FileUpload.vue"),
            name: "file-upload",
          },
          {
            path: "/choose-block",
            component: () => import("@/views/ChooseBlock.vue"),
            name: "choose-block",
          },
          {
            path: "/water-fall",
            component: () => import("@/views/WaterFall.vue"),
            name: "water-fall",
          },
        ],
      },
    ],
  },
  {
    path: "/screen",
    component: () => import("@/views/Screen.vue"),
  },
  {
    path: "/file-read",
    component: () => import("@/views/FileRead/index.vue"),
  },
  {
    path: "/test",
    component: () => import("@/views/Test.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
