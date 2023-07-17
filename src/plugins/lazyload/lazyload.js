const lazyload = {
    install(app, options) {
        let defaultSrc = options.default
        app.directive('lazy', {
            mounted(el, binding) {
                lazyload.init(el, defaultSrc)
                lazyload.observer(el, binding)
            }
        })
    },
    init(el, def) {
        //设置src为loading图
        el.setAttribute('src', def)
    },
    observer(el, binding) {
        let lazyLoadObser = new IntersectionObserver((entries) => {
            let lazyImg = entries[0].target;
            console.log(entries[0].isIntersecting)
            if (entries[0].isIntersecting) {
                lazyImg.src = binding.value;
                lazyLoadObser.unobserve(lazyImg); //卸载监听
            }
        });
        lazyLoadObser.observe(el);
    }
}

export default lazyload