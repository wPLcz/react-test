import "./styles.css";
import { getAllBooksSync } from "./api";
import { BooksList } from "./container/booksList/booksList";
import { AddBookForm } from "./container/addBookForm/addBookForm";
/* ALL PROMISES */
import {
  getAllBooks,
  createBook,
  readBookById,
  updateBookById,
  deleteBookById,
} from "./api";

/* USE THIS HOOK TO HANDLE PROMISES */
import { useFetch } from "./utils/useFetch";

export default function App() {
  const { data, isLoading, isError, retry } = useFetch(getAllBooks);

  return (
    <div className="container">
      <h1>Welcome to Adesso React Test</h1>
      <BooksList
        data={data}
        isLoading={isLoading}
        isError={isError}
        onRemove={async (id) => {
          try {
            await deleteBookById(id);
          } finally {
            retry();
          }
        }}
        onModify={async (id, title, description) => {
          try {
            await updateBookById(id, { title, description });
          } finally {
            retry();
          }
        }}
      />
      <AddBookForm
        isLoading={isLoading}
        isError={isError}
        onAdd={async (title, description) => {
          await createBook({ title, description });
          retry();
        }}
      />
    </div>
  );
}
