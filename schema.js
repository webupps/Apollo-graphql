export const typeDefs = `#graphql
type Writer {
  id: ID!
  name: String!
  email: String!
  books: [Book]!
}

type Book {
  id: ID!
  title: String
  author: Writer
  comments: [Comment]!
}

type Comment {
  id: ID!
  content: String!
  book: Book!
}

type Query {
  writers: [Writer!]!
  writer(id: Int): Writer
  books: [Book!]!
  book(id: Int): Book
  comments: [Comment!]!
  comment(id: Int): Comment
}
`;
