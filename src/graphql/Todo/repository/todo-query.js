import { DbMethodsClass } from "../../../infra/db/dbMethodsClass";
import { Todo } from "../model/Todo";

export class TodoRepositoryClass extends DbMethodsClass {
  getAll() {
    return Todo.find();
  }
  getOne({ assigned, status, _id }) {
    return Todo.findOne({ $or: [{ assigned }, { _id }, { status }] });
  }
  create({ title, status, assigned }) {
    return new Todo({ title, status, assigned }).save();
  }
  update({ _id, status, assigned }) {
    return Todo.findByIdAndUpdate(
      { _id },
      { status, assigned },
      { upsert: false }
    );
  }
}
