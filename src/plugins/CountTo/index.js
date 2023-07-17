import CountTo from './src/count-to.vue'

CountTo.install = (app) => {
    app.component(CountTo.name,CountTo)
}

export default CountTo