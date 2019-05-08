/**
  * api接口的统一出口
  */
// 以后，每个接口都给我加上注释
// 搜索模块接口
import search from "./search"
// 歌手信息模块接口
import artist from "./artist"


// 导出接口
export default {
    search,
    artist,
    // 其他接口...
}

