/**
  * search模块接口列表
  */
import base from "./base"
import axios from "../utils/http.js"

  const search = {
      searchList(params){
        return axios.get(`/baidu_music_api${base.bdm}`,{
            params:params
        })
      }
  }
  export default search
  
  
  
  
 
  
 
 





   
        
            
  
  


