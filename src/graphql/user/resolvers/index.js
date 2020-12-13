const resolver = (UserClass) => ({
  Query: {
    getUserByMail: (_, { email }) => UserClass.getUserByMail({ email }),
    getUserById: (_, { _id }) => UserClass.getUserById({ _id }),
  },
  Mutation: {
    createUser: async (_, { email, password, name }) =>UserClass.createUser({ email, password, name }),
  }
});
export { resolver };
