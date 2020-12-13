import { TodoRepositoryClass } from "../repository/todo-query";
import { TodoClass } from "../data";
import { resolver } from "../resolvers";

const makeResolver = () => {
  const repository = new TodoRepositoryClass()
  const todoClass = new TodoClass(repository);
  return resolver(todoClass);
};

export default makeResolver();
