import { DbMethodsClass } from "../../../infra/db/dbMethodsClass";
import { User } from "../model/User";

export class UserRepositoryClass extends DbMethodsClass {
  async getOneByMail({ email }) {
    return User.findOne({email});
  }
  getOneById({ _id }) {
    return User.findOne({_id});
  }
  create({ email, password, name}) {
    return new User({ email, password, name }).save();
  }
}
