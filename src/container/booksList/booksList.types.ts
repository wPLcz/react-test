import { Book } from "../../component/book/book.types";

export interface BooksListProps {
  data?: Book[];
  isError: boolean;
  isLoading: boolean;
  onRemove: (id: string) => void;
  onModify: (id: string, title: string, description: string) => void;
}
