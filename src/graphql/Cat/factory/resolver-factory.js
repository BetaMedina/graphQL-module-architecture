import { CatClass } from "../data";
import { CatRepositoryClass } from "../repository/cat-query";
import { resolver } from "../resolvers";

const makeResolver = () => {
  const catRepository = new CatRepositoryClass();
  const catClass = new CatClass(catRepository);
  return resolver(catClass);
};

export default makeResolver();
