export const typeDefs = `#graphql
type Writer {
  id: ID!
  name: String!
  email: String!
  book: [Book]!
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
  writer(id: ID!): Writer
  books: [Book!]!
  book(id: ID!): Book
  comments: [Comment!]!
  comment(id: ID!): Comment
}
`;
