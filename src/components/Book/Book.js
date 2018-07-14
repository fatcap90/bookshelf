import React from "react";

const Book = ({url, title}) => {
    return (
        <article>
            <img src={url} alt="Обложка книги" />
            <div className="book-title">
                {title}
            </div>
        </article>
    );
};

export default Book;
