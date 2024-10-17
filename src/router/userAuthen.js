import {ref} from 'vue'


const userAuthentication = ref(false)

export function authentication(){
    const login = () => {
        userAuthentication.value = true
    }

    const logout = () => {
        userAuthentication.value = false
    }

    return {userAuthentication, login, logout}
}