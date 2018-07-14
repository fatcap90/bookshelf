import React from "react";
import Navbar from 'react-bootstrap/lib/Navbar';
import FormGroup  from 'react-bootstrap/lib/FormGroup';
import FormControl  from 'react-bootstrap/lib/FormControl';
import Button  from 'react-bootstrap/lib/Button';


const TopNavBar =(props) => (
<Navbar>
        <Navbar.Form>
            <div align="center">
            <FormGroup>
                <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button bsStyle="success" type="submit">Найти</Button>
            </div>
        </Navbar.Form>
</Navbar>
);


export default TopNavBar;