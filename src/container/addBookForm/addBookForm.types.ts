export interface AddBookFormProps {
  isError: boolean;
  isLoading: boolean;
  isEdited?: boolean;
  initialData?: {
    id: string;
    title: string;
    description: string;
  };
  onAdd: (title: string, description: string) => void;
  onDisregard?: (id: string) => void;
}
