import { gql } from "apollo-server";

//jika terdapat tanda seru maka itu hukumnya wajib atau harus ada
//kalo tidak maka hukumnya mubah atau boleh ada boleh nggak

const typeDefs = gql`
    type Book{
        _id:ID!
        title:String!,
        author:String!,
        description:String,
        release_year:Int!,
        genre:String!
    }
    type Message{
        message:String!
    }
    type Query{
        getAllBooks:[Book]!,
        getBookById(_id:ID!):Book!
    }
    type Mutation{
        createBook(
            title:String!,
            author:String!,
            description:String,
            release_year:Int!,
            genre:String!
        ):Book!,
        updateBook(
            _id:ID!
            title:String,
            author:String,
            description:String,
            release_year:Int,
            genre:String
        ):Book!,
        deleteBook(
            _id:ID!,
        ):Message
    }
`

export default typeDefs