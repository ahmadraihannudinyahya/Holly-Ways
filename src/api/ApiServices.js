import axios from "axios"

const api = axios.create({
  baseURL : 'http://192.168.56.101:5000/api/v1'
})

const ApiServices  = {
  postRegisterUser : async ( registerUser ) =>{
    return api.post('/register', registerUser);
  },
  postLoginUser : async (loginUser) => {
    return api.post('/login', loginUser);
  },
  getAllfund : async () => {
    return api.get('/fund');
  },
  postFund : async (newFund) => {
    return api.post('/fund', newFund, {
      headers : {
        Authorization :  `bearer ${localStorage.getItem('token')}`,
        'Content-Type' : 'multipart/form-data,'
      }
    })
  }
}
export default ApiServices;