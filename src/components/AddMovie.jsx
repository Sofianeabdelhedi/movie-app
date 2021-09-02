import React, { useState } from 'react'
//Modal
import Modal from 'react-modal';
//bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


const AddMovie = ({add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [title, setTitle] = useState('') 
    const [year, setYear] = useState('') 
    const [description, setDescription] = useState('') 
    const [posterURL, setPosterURL] = useState('') 
    const [rating, setRating] = useState(1) 

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

const handleSubmit = (e) =>{
    e.preventDefault(); 
    const newMovie = {
        id:Math.random(),
        title , 
        year , 
        description , 
        posterURL , 
        rating
    }
    add(newMovie);
    console.log("movie added");
    closeModal(); 
}
  const handleRating = (x) => {
        setRating(x)
}
    return (
        <div>
            <Button variant="outline-primary btn" onClick={openModal}>Add movie</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <Form onSubmit={handleSubmit} className='form'>
            <h3>Add movie</h3>
  <Form.Group className="mb-3" controlId="formTitle">
    <Form.Label>Movie title</Form.Label>
    <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupYear">
    <Form.Label>Year of producion</Form.Label>
    <Form.Control type="date"  value={year} onChange={(e)=>setYear(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formRating">
    <Form.Label>Rating</Form.Label>
    <StarRating handleRating={handleRating} rating={rating}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formDescription">
    <Form.Label>Description</Form.Label>
    <FloatingLabel controlId="floatingTextarea2" label="desription"  value={description}  onChange={(e)=>setDescription(e.target.value)}>
    <Form.Control
      as="textarea"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formURL">
    <Form.Label>Poster URL</Form.Label>
    <Form.Control type="url"  value={posterURL}  onChange={(e)=>setPosterURL(e.target.value)}/>
  </Form.Group>
<Button variant="outline-primary btn" type='submit'>Add</Button>
<Button variant="outline-danger btn" type='cancel'>Cancel</Button>
</Form>
      </Modal>
        </div>
    )
}

export default AddMovie
