<script setup>
import { onMounted, nextTick } from "vue";

const TYPE_DIRECTORY = "directory";
const TYPE_FILE = "file";

const control = ref(null);
const filesControl = ref(null);
const showFiles = ref(null);
const showDirector = ref(null);
const filesListTree = ref({});
const reader = new FileReader();

class Directory {
  constructor(name, type, content = null) {
    this.name = name;
    this.children = [];
    this.type = type;
    this.content = content;
  }
}

function drag(e) {
  console.log(e.clientX);
  console.log(filesControl.value.clientWidth);

  filesControl.value.style.width = e.clientX + "px";
  // console.log(filesControl.value);
}

function filesListToObject(list) {
  const menu = [];
  for (let i = 0; i < list.length; i++) {
    const arr = pathStringToArray(list[i]["webkitRelativePath"]);
    // console.log("arr", arr);
    let cur = menu;
    let curFile = list[i];
    let curName = arr.shift();
    let flag = false;

    while (arr.length > 0) {
      for (let j = 0; j < cur.length; j++) {
        if (cur[j].name === curName) {
          cur = cur[j].children;
          flag = true;
          break;
        }
      }
      if (!flag) {
        cur.push(new Directory(curName, TYPE_DIRECTORY));
        cur = cur.at(-1).children;
      }
      curName = arr.shift();
      flag = false;
    }
    if (arr.length === 0) {
      cur.push(new Directory(curName, TYPE_FILE, curFile));
      continue;
    }
  }
  console.log("menu", menu);
  reader.readAsText(list[0]);
  reader.addEventListener("loadend", (e) => {
    console.log("content: ", reader.result);
  });
  return menu;
}

function pathStringToArray(path) {
  return path.split("/").slice(1);
}

onMounted(() => {
  control.value.addEventListener("mousedown", (e) => {
    console.log("start", e);
    const start = e.clientX;
    window.addEventListener("mousemove", drag);
  });
  window.addEventListener("mouseup", (e) => {
    window.removeEventListener("mousemove", drag);
  });
  showDirector.value.addEventListener("click", (e) => {
    chooseDirector.showPicker();
    chooseDirector.addEventListener("change", (e) => {
      console.log(chooseDirector.files);
      const result = filesListToObject(chooseDirector.files);
      // console.log(result);
    });
  });
});
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="button" ref="showFiles">选择文件夹</div>
      <div class="button" ref="showDirector">选择文件</div>
      <input type="file" name="" id="chooseDirector" webkitdirectory />
    </div>
    <div class="main">
      <div class="aside">
        <div class="files-control" ref="filesControl"></div>
        <div class="control" ref="control"></div>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input[type="file"] {
  opacity: 0;
  position: absolute;
  left: -1000px;
}
.button {
  width: 100px;
  height: 30px;
  margin: 10px;
  text-align: center;
  line-height: 30px;
  background-color: aqua;
  border-radius: 30px;
  cursor: pointer;
}
.container {
  --border: grey;
  .header {
    height: 50px;
    border-bottom: 1px solid var(--border);
    display: flex;
  }
  .main {
    height: calc(100vh - 50px);
    .aside {
      height: 100%;
      display: flex;
      overflow-y: scroll;
      .files-control {
        width: 200px;
      }
      .control {
        width: 5px;
        background-color: blue;
        cursor: ew-resize;
      }
    }
    .content {
    }
  }
}
</style>
