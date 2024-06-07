import React, { FC } from "react";
import { BookProps } from "./book.types";

export const Book: FC<BookProps> = ({ data, onRemove, onModify }) => {
  const { id, title, description } = data;
  return (
    <div className="bookItem">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <button className="removeButton" onClick={() => onRemove(id)}>
        REMOVE ITEM
      </button>
      <button className="modifyButton" onClick={() => onModify(id)}>
        EDIT ITEM
      </button>
    </div>
  );
};
