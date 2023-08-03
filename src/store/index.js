import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 1
        }
    },
    getters: {
        double: (state) => state.count * 2
    }
})

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            roles: ['admin']
        }
    },
    actions: {
        changeRole(role) {
            this.roles = [role]
            console.log(this.roles)
        }
    }
})