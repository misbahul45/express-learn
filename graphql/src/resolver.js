import Book from '../models/book.js';

const resolvers = {
  Query: {
    getAllBooks: async () => {
      return await Book.find({});
    },
    getBookById:async(_,{ _id })=>{
      return await Book.findById(_id)
    }
  },
  Mutation: {
    createBook: async (_, { title, author, description, release_year, genre }) => {
      console.log("Creating book with data:", { title, author, description, release_year, genre });
      const newBook = new Book({ title, author, description, release_year, genre });
      const savedBook = await newBook.save();
      console.log("Saved book:", savedBook);
      return savedBook;
    },
    updateBook: async(_, args)=>{
      const book=await Book.findByIdAndUpdate(args._id, args, { new:true })
      return book
    },
    deleteBook:async(_,args)=>{
      const deleteBook=await Book.findByIdAndDelete(args._id)
      return{
        message:`Successed Delete Book with title ${deleteBook.title}`
      }
    }
  },
};

export default resolvers;
