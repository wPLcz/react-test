import React, { FC, useState } from "react";
import { Book } from "../../component/book/book";
import { AddBookForm } from "../addBookForm/addBookForm";
import { BooksListProps } from "./booksList.types";

export const BooksList: FC<BooksListProps> = ({
  data,
  isError,
  isLoading,
  onRemove,
  onModify,
}) => {
  const [edited, changeEdited] = useState<string[]>([]);
  if (isError) {
    return <span>Ooops! Please try again later...</span>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || data.length === 0) {
    return <span>No data...</span>;
  }

  return (
    <div className="bookList">
      {data.map((book) => {
        const isEdited = edited.includes(book.id);
        return isEdited ? (
          <AddBookForm
            isLoading={isLoading}
            isError={isError}
            onAdd={(title, description) => {
              changeEdited((state) =>
                state.filter((edited) => edited !== book.id)
              );
              onModify(book.id, title, description);
            }}
            initialData={{ ...book }}
            onDisregard={(id) => {
              changeEdited((state) => state.filter((edited) => edited !== id));
            }}
            isEdited
          />
        ) : (
          <Book
            data={book}
            onRemove={onRemove}
            onModify={(id: string) => changeEdited((state) => [...state, id])}
          />
        );
      })}
    </div>
  );
};
