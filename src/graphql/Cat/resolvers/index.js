export const resolver = (CatResolver)=> ({
  Query: {
    getCats: () => CatResolver.getCats(),
    getCat: (_, { name, _id }) => CatResolver.getCat({name,_id}),
  },
  Mutation: {
    createCat: async (_, { name }) =>CatResolver.saveCat({name})
  },
})
