export interface Book {
  id: string;
  title: string;
  description: string;
}

const books: Book[] = [
  {
    id: "1",
    title: "The Lord of The Rings",
    description:
      "The story concerns peoples such as Hobbits, Elves, Men, Dwarves, Wizards, and Orcs (called goblins in The Hobbit), and centers on the Ring of Power made by the Dark Lord Sauron",
  },
  {
    id: "2",
    title: "The River",
    description:
      "In The River, we meet a boy called Rowan who loves exploring the countryside with his dog.",
  },
  {
    id: "3",
    title: "Dune",
    description:
      "Dune is set in the distant future in a feudal interstellar society in which various noble houses control planetary fiefs",
  },
];

const getNewId = (() => {
  let id = books.length;
  return () => `${++id}`;
})();

export function getAllBooksSync() {
  return books;
}

export async function getAllBooks(isRejected = false) {
  return await new Promise<Book[]>((resolve, reject) => {
    setTimeout(() => {
      if (isRejected) {
        reject(new Error(`Error getting all books`));
      }
      resolve(books);
    }, 1000 * 3);
  });
}

export async function createBook(book: Omit<Book, "id">) {
  const nextBook = { ...book, id: getNewId() };
  books.push(nextBook);
  return nextBook;
}

export async function readBookById(id: string) {
  const book = books.find((item) => item.id === id);
  return book;
}

export async function updateBookById(
  id: string,
  updates: Partial<Omit<Book, "id">>
) {
  const book = books.find((item, index) => {
    const isSelectedBook = item.id === id;
    if (isSelectedBook) {
      books[index] = {
        ...item,
        ...updates,
      };
    }
    return isSelectedBook;
  });
  return book;
}

export async function deleteBookById(id: string) {
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) throw new Error("element not found");
  books.splice(index, 1);
  return books;
}

window.createBook = createBook;
window.deleteBook = deleteBookById;
window.getAllBooksSync = getAllBooksSync;
