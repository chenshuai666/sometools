import { useUserStore } from '@/store/index.js'

export default {
    mounted(el, binding, vNode) {
        const roles = useUserStore().roles
        const { value } = binding
        // console.log(value)
        // if (value.length) {
            const hasRole = roles.some(role => {
                return value.includes(role)
            })
            // console.log(hasRole)
            if (!hasRole) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        // }
    }
}