/**
  * 歌手信息模块接口列表
  */

 import base from "./base"
 import axios from "../utils/http.js"
 
 const artist = {
     artistInfo(params){
         return axios.get(base.host+base.bdm,{
             params:params
         })
     }
 }
 
 export default artist
 





   
        
  
