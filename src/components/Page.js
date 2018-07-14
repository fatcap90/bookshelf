import React from 'react';
import BookList from './BookList/BookList';
import Header from './Header/Header';

const Page = () => {
    return (
        <div>
            <Header/>
            <main>
                <BookList/>
            </main>
        </div>
    )
};

export default Page;