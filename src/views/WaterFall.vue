<script setup>
import WaterFall from "@/components/waterFall/index.vue";
import Card from "@/components/card/index.vue";

const getData = () => {
  return new Promise((res, rej) => {
    import("../datas/list.json")
      .then((data) => res(data))
      .catch((err) => rej(err));
  });
};
</script>

<template>
  <div>
    <WaterFall :request="getData">
      <template #item="itemProps">
        <Card :itemTotal="itemProps"></Card>
      </template>
    </WaterFall>
  </div>
</template>

<style lang="scss" scoped></style>
