export class CatClass {
  constructor(CatQuerys){
    this.catQuerys = CatQuerys
  }
  getCats() {
    return this.catQuerys.findAll()
  }
  getCat(name, _id) {
    return this.catQuerys.getOne(name, _id);
  }
  async createCat(name) {
    return this.catQuerys.create(name)
  }
}
