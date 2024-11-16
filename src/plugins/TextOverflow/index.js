const overflow = {
  install(app) {
    app.directive("overflow", {
      mounted(el, binding) {
        const box = el.getBoundingClientRect();
        const { width, height } = box;
        console.log(width, height);
        console.log(el.offsetHeight);
        console.log(window.getComputedStyle(el).lineHeight);
      },
    });
  },
};

export default overflow;
