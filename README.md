1. Create a custom component in React that should receive a list of books as a prop and render the title and the description of each book in a list.

3. Use the provided custom hook (usePromise) to handle the getAllBooks promise function and return all the books. Ensure that the **isLoading**, **isError**, and **data** states are properly managed.

4. The book data obtained from the previous custom hook should be displayed using the custom component created at the beginning of the test.

5. Create a small form to add a book with the value "title" and "description" and use the API's createBook promise. If everything goes well, the book list should be refreshed using the custom hook's **reCall** function.

6. For each book, include a delete button that, when pressed, should remove the specified book from the list using the API's **deleteBookById** function. If everything goes well, the book list should be refreshed using the custom hook's **reCall** function.

7. Develop a custom hook that handles promises and manages the states **isLoading**, **isError**, **data**, and the **reCall** function to re-fetch the request. This hook should accept a promise as a parameter and manage the execution states of that promise. (Replicate the behaviour of the provided custom hook)

8. (Optional) Finally, for each book, add an edit button that loads the previously created form with the selected book's data. In this case, upon completing the form, it should call the **updateBookById** function to update the book's information. If everything goes well, the book list should be refreshed using the custom hook's **reCall** function.

9. (Optional) Apply types in the customHook