import "./styles.css";
import { getAllBooksSync } from "./api";
import { BooksList } from "./container/booksList/booksList";
import { AddBookForm } from "./container/addBookForm/addBookForm";
/* ALL PROMISES */
import {
    getAllBooks,
    createBook,
    // not mentioned in README.md
    readBookById,
    updateBookById,
    deleteBookById,
} from "./api";

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
                    } catch {
                        // In case of error
                    } finally {
                        retry();
                    }
                }}
                onModify={async (id, title, description) => {
                    try {
                        await updateBookById(id, { title, description });
                    } catch {
                        // In case of error
                    } finally {
                        retry();
                    }
                }}
            />
            <AddBookForm
                isLoading={isLoading}
                isError={isError}
                onAdd={async (title, description) => {
                    try {
                        await createBook({ title, description });
                    } catch {
                        // In case of error
                    } finally {
                        retry();
                    }
                }}
            />
        </div>
    );
}
