import MyMessage from "./MyMessage.vue";
import { render, h, Teleport, ref } from "vue";

export default function showMsg(message, options = { time: 3000 }) {
  const body = document.body;
  const container = document.createElement("div");
  const onClick = () => {
    render(null, container);
  };
  const vNode = h(MyMessage, { message, onClick });
  render(vNode, container);
  body.appendChild(container.firstElementChild);
  setTimeout(() => {
    onClick();
  }, options.time);
  return onClick;
}
