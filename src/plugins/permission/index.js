import hasRole from './hasRole'

export default {
    install(app, option) {
        app.directive('hasRole', hasRole)
    }
}