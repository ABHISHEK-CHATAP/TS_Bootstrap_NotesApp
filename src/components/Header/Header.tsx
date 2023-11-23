import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import {Container} from "react-bootstrap";


interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
    
    <Navbar className="bg-body-tertiary " bg='dark' variant='dark' data-bs-theme="dark">
        <Container style={{color:"white"}}>
         {' '}
            React Bootstrap TS
        </Container>
      </Navbar>

    </>
  );
};

export default Header;
