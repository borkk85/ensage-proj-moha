import axios from 'axios'

const API_URL = '/api/admin/'


const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('admin', JSON.stringify(response.data))
    }

    return response.data
} 

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('admin', JSON.stringify(response.data))
    }

    return response.data
} 

const logout = () => {
    localStorage.removeItem('admin')
}


const authService = {
    register,
    login,
    logout,
}

export default authService