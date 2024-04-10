import { ApolloServer } from "@apollo/server";
import { startStandaloneServer} from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";


  const resolvers = {
    Query: {
      writers: () => db.writers,
      writer: (_, { id }) => db.writers.find(writer => writer.id === id),
      books: () => db.books,
      book: (_, { id }) => db.books.find(book => book.id === id),
      comments: () => db.comments,
      comment: (_, { id }) => db.comments.find(comment => comment.id === id),
    },
    Writer: {
      books: (writer) => {
        return db.books.filter((book) => book.author === writer.id);
      },
    },
    Book: {
      comments: (book) => {
        return db.comments.filter((comment) => comment.book === book.id);
      },
    }
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);