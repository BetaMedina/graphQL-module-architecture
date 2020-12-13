import { UserRepositoryClass } from "../repository/user-query";
import { BcrypAdapter } from "../../../infra/adapters/encrypter/bcrypt";
import { UserClass } from "../data";
import { resolver } from "../resolvers";

const makeResolver = () => {
  const repository = new UserRepositoryClass()
  const encrypter = new BcrypAdapter()
  const userClass = new UserClass(encrypter,repository);
  return resolver(userClass);
};

export default makeResolver();
