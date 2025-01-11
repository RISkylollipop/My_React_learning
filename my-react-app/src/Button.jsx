import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <div className='alertshow'>
    <Alert show={show} variant="success">
      <Alert.Heading>My Alert</Alert.Heading>
      <p>
       Let React Give Out the Ginger😍😘
      </p>
      <hr />
      <div className=" d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
          Close
        </Button>
      </div>
    </Alert>

    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
  </div>
  );
}


export default AlertDismissible