import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path"

const typesArrays = fileLoader(path.join(__dirname, '**', "*.gql"))

const typeDefs = mergeTypes(typesArrays)

export default typeDefs