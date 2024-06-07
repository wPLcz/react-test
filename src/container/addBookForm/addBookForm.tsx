import React, { FC, useState } from "react";
import { Book } from "../../component/book/book";
import { AddBookFormProps } from "./addBookForm.types";

export const AddBookForm: FC<AddBookFormProps> = ({
  initialData,
  isError,
  isLoading,
  isEdited,
  onDisregard,
  onAdd,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title && description) {
      onAdd(title, description);
      setTitle("");
      setDescription("");
    }
  };

  if (isError) {
    return null;
  }

  if (isLoading) {
    return null;
  }

  return (
    <div className="modifyItem">
      <form onSubmit={handleSubmit} className="form">
        <div className="formGroup">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            className="input"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="description" className="label">
            Description
          </label>
          <textarea
            className="textarea"
            id="description"
            maxLength={120}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {isEdited ? (
          <div className="ctaButtons">
            <button
              onClick={() =>
                initialData?.id && onDisregard && onDisregard(initialData.id)
              }
              className="disregardButton"
            >
              DISREGARD CHANGES
            </button>
            <button type="submit" className="editButton">
              SUBMIT
            </button>
          </div>
        ) : (
          <button type="submit" className="addButton">
            ADD BOOK
          </button>
        )}
      </form>
    </div>
  );
};
