import React from "react";
import Book from "../Book/Book"

const BookList = ({books}) => (
    <section className="book-list">
        {books.map((book, i) => <Book key={i} url={book.url} title={book.title}/>)}
    </section>
);

export default BookList;