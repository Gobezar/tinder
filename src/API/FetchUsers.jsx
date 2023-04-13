import axios from 'axios'

export async function FetchUsers(){
 
        const response = await axios.get('https://randomuser.me/api/')
        const result = (response.data.results[0])
        return result
}
