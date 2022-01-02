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
  },
  getFundByFundId : async (id) =>{
    return api.get(`/fund/${id}`);
  },
  postDonation : async (fundId, formData) =>{
    return api.post(`/donation/fund/${fundId}`, formData, {
      headers : {
        Authorization :  `bearer ${localStorage.getItem('token')}`,
        'Content-Type' : 'multipart/form-data,'
      }
    })
  },
  getDonationByFundId : async (fundId) =>{
    return api.get(`/donation/fund/${fundId}`, {
      headers : {
        Authorization :  `bearer ${localStorage.getItem('token')}`,
      }
    })
  },
  patchDonationById: async ({donationId, fundId}) =>{
    return api.patch(`/donation/${donationId}/fund/${fundId}`,{}, {
      headers : {
        Authorization :  `bearer ${localStorage.getItem('token')}`,
      },
    })
  },
  getProfileUserLogin: async () =>{
    return api.get('/profil', {
      headers : {
        Authorization :  `bearer ${localStorage.getItem('token')}`,
      },
    })
  },
  getUserLoginDonations : async ()=>{
    return api.get('/mydonation', {
      headers : {
        Authorization :  `bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}
export default ApiServices;