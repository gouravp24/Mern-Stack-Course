import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const Student = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="add-form-div">
              <h2 className="text-center">Add Student</h2>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} >
                    <Form.Label>Std</Form.Label>
                    <Form.Control type="text" placeholder="Enter Std" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control type="text" placeholder="Enter Roll No" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" >
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} >
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} >
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>

          {/* list */}

          <div className="col-md-6">
            <div className="add-form-div">
              <h2 className="text-center">Student List</h2>
              <div className="table-responsive">
                <Table striped bordered hover className="w-100 text-center">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Std</th>
                      <th>Roll No</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zip</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gourav</td>
                      <td>Patil</td>
                      <td>10</td>
                      <td>123</td>
                      <td>Karad</td>
                      <td>Pune</td>
                      <td>Maharashtra</td>
                      <td>415105</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
