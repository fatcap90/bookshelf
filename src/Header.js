import React from "react";
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Image from 'react-bootstrap/lib/Image';




const Header =(props) => (
    <PageHeader>
        <Image src="/img/header.png" responsive/>
        Example page header <small>Subtext for header</small>
    </PageHeader>
);


export default Header;