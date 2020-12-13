// import {typedefs,resolvers} from "./schema"
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/types";
import resolvers from "./graphql/resolvers";
import express from "express";
import mongoose from "mongoose";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  const port = 4000;

  await mongoose.connect(
    "mongodb://root:root@localhost:27017/test-grapqh?authSource=admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  app.listen({ port }, () => {
    console.log(`Running on port ${port}`);
  });
};
startServer();
