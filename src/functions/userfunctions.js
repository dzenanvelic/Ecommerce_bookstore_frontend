import axios from 'axios'

const url = "http://localhost:8000/api"
export const sendUserData = async (user) => {

    try {
        return await axios.post('/register', user)

    } catch (error) {
        console.log(error.response.data)
    }

}