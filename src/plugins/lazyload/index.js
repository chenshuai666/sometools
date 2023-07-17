export default (app) => {
    app.directive('lazy', {
        beforeMount(el, binding) {
            //console.log(binding.value);
            let lazyLoadObser = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    let lazyImg = entry.target;
                    if (entry.intersectionRatio > 0) {
                        lazyImg.src = binding.value;
                        lazyLoadObser.unobserve(lazyImg); //卸载监听
                    }
                });
            });
            lazyLoadObser.observe(el);
        }
    })
}