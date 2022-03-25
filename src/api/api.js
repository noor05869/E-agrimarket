import axios from "axios";
const api = axios.create({
  baseURL:"https://backend.eagrimarket.com/"
})

export function postFarmerdata(data){
  return api.post("v1/personalinof", {...data})
}

export function postOtp(data){
  console.log("final--------",data)

  return api.post("v1/verify",{...data})

}