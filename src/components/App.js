
import React from "react"
import { Form , Button, Card} from 'react-bootstrap'

function App() {
  return (
  <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4"> sign up </h2>
        <Form>
          <Form.Group id="email">Email</Form.Group>
        </Form>
      </Card.Body>

    </Card>
    <div className=" w-100 text-center mt-2">
      Already have a account? Log in


    </div>

  </>

  )
    
}

export default App;
