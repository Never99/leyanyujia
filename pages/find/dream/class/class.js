var util = require('../../../../utils/util.js')

class MenusImgs {
  getMovieData(cb) {
    this.cb = cb;
    util.http(this.url, this.processDoubanData.bind(this));
  }
}
export { MenusImgs }