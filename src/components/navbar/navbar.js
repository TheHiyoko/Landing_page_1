import React from "react";
import { Container,Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


function NavBar(){
    return(
        <div >
            <Navbar bg="dark" varint={"dark"} className="justify-content-center">
                <Container>
                    <h2>Hyoko Soluções</h2>
                </Container>
            </Navbar>
            <br />
            
        </div>
    )
}

export default NavBar