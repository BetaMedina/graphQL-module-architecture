import { DbMethodsClass } from "../../../infra/db/dbMethodsClass";
import {Cat} from "../model/Cat"

export class CatRepositoryClass extends DbMethodsClass {
  getAll() {
    return Cat.find()
  }
  getOne({name, _id}) {
    return Cat.findOne({ $or: [{ name }, { _id }] });
  }
  create({name}) {
    const cat = new Cat({ name });
    return cat.save();
  }
}
