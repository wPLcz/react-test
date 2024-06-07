export interface Book {
  id: string;
  title: string;
  description: string;
}

export interface BookProps {
  data: Book;
  onRemove: (id: string) => void;
  onModify: (id: string) => void;
}
