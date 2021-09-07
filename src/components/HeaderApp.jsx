import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import StarRating from './StarRating'
import AddMovie from './AddMovie'

const HeaderApp = ({text,handleText,rating, handleRating,handleAdd}) => {
    return (
        <div className='header'>
            <Navbar bg="dark" variant= "dark"  expand="lg" className="mb-3">
  <Navbar.Brand href="#">Movie App</Navbar.Brand>
  <Navbar.Toggle/>
  <Navbar.Collapse className="justify-content-end">
    <Form className="d-flex searchbox">
      <input
        type="search"
        placeholder="Search"
        className="mr-3"
        aria-label="Search"
        value={text}
        onChange={handleText}
      />
      </Form>
      <AddMovie add={handleAdd} />
      <StarRating rating={rating} handleRating={handleRating}/>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default HeaderApp
