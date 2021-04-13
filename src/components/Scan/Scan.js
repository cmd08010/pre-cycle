import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormFile from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'

const Scan = ({ user, msgAlert }) => {
  // const [pictures, setPictures] = useState(null)
  const [loading, setLoading] = useState(null)
  //
  // useEffect(() => {
  //   userPictureShow(user)
  //     .then(response => setPictures(response.data.pictures))
  // }, [])

  const getBarcodeData = event => {
    event.preventDefault()
    setLoading(true)
  }

  const addBarcodeImage = () => {}


  return (
  <div className="container">
    <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Scan Barcode</h3>
      <Form onSubmit={getBarcodeData}>
        <Form.Group controlId="image">
          <FormFile
            required
            id="upload-file-input"
            label="Upload File Here"
            onChange={addBarcodeImage}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
        Submit
        </Button>
      </Form>
    </div>
  </div>
  {loading && <div className="spinner">
    <Spinner animation="border" variant="info">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>}
</div>
  )
}

export default withRouter(Scan)
