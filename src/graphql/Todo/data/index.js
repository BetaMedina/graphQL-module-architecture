export class TodoClass {
  constructor(TodoQuery){
    this.todoQuery = TodoQuery
  }

  getTodo(assigned, status, _id) {
    return this.todoQuery.getOne({ _id , status , assigned });
  }
  getTodos() {
    return this.todoQuery.getAll();
  }
  async createTodo(title, status, assigned ) {
    return this.todoQuery.create({ title, status, assigned });
  }
  async updateStatus(_id, status, assigned ) {
    return this.todoQuery.update({ _id , status, assigned });
  }
}
