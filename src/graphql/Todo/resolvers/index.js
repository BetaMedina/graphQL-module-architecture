
const resolver = (todoClass)=>({
  Query: {
    getTodo: (_, { assigned, status, _id }) => todoClass.getTodo(assigned, status, _id),
    getTodos: () => todoClass.getTodos( ),
  },
  Mutation: {
    createTodo: async (_, { title, status, assigned }) => todoClass.createTodo( title, status, assigned),
    updateStatus: async (_, { _id, status, assigned }) => todoClass.updateStatus( _id, status, assigned)
  },
});
export {resolver}