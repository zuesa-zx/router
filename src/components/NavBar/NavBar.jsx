import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

function NavBar({ setSearch, setRating }) {
  const starsHandler = (myrate) => {
    setRating(myrate)
  }
  return (
    <div>
      <Navbar bg="Light" variant="Light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="Movies">Movies</Nav.Link>
            <Nav.Link href="#details">details</Nav.Link>

          </Nav>
          <Nav>
            <input onChange={(e) => setSearch(e.target.value)} />

            <ReactStars
              style='margin:0 auto'
              count={5}
              size={24}
              defaultValue={0}
              onChange={starsHandler}
              activeColor="#ffd700"
            />
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar