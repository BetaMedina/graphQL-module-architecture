import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import path from "path"

const typesArrays = fileLoader(path.join(__dirname, '**', "resolver-factory.js"))

const resolver = mergeResolvers(typesArrays)

export default resolver