# The Art of Software in Action - GraphQL
Free Demo project for GraphQL

## Requirements 
Node Version
 - 20 
Install Nodemon: ``` npm install -g nodemon ```

### Run from the folder:
``` nodemon index.js ```
- visit  http://localhost:4000


### Run from the folder:

  Example Query 1
``` 
 query GetAllBooksWritersComments {
  writers {
    name
    books {
      title
      id
      comments {
        content
      }
    }
  }
}
 ```
   Example Query 2
``` 
 query GetWriterByID {
  writer(id: 1) {
    name
    email
    books {
      title
      comments {
        content
      }
    }
  }
}
 ```
Example Query 3
``` 
query GetAllBooksandComment {
   books {
    title
    id
    comments {
      content
      id
    }
  }
}
 ```
Example Query 4
``` 
query GetBookbyID {
   book(id: 1)  {
    title
  }
}
 ```
Example Query 5
``` 
query GetAllComments {
   comments {
    content
    id
  }
}
 ```
Example Query 6
``` 
query GetCommentByID {
   comment(id:1) {
    content
  }
}

 ```