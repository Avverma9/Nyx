import React, { useState } from "react";
import Axios from "axios";
import { Form, Button, Label, Grid, Card, Image} from "semantic-ui-react";
import "./Homepage.css";

function Homepage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("description", description);
    formData.append("images", images);

    Axios.post("https://nyx-k51u.onrender.com/api/records", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
        setResponse(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
          <Label color="blue" textAlign="center" className="containers">
            <h2>STUDENT LEDGER</h2>

            <Form.Field>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Student Name
              </label>
              <div style={{ border: "1px solid #ddd", padding: "1px" }}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </Form.Field>

            <Form.Field>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Email
              </label>
              <div style={{ border: "1px solid #ddd", padding: "1px" }}>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Form.Field>
            <Form.Field>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Mobile Number
              </label>
              <div style={{ border: "1px solid #ddd", padding: "1px" }}>
                <input
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </Form.Field>
            <Form.Field>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Description
              </label>
              <div style={{ border: "1px solid #ddd", padding: "1px" }}>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </Form.Field>
            <Form.Field>
              <label>Student Image</label>
              <input
                type="file"
                name="images"
                onChange={(e) => setImages(e.target.files[0])}
              />
            </Form.Field>
            
          </Label>
          <Form.Field>
          <Button type="submit" color="blue">
            SUBMIT
          </Button>
          </Form.Field>
        </Form>
        {response && (
            <div className="card-container">
  <Card fluid>
    <Image src={response.data.images} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{response.data.name}</Card.Header>
      <Card.Meta>
        <span className="date">{response.description}</span>
      </Card.Meta>
      <Card.Description>
        <p>Email: {response.data.email}</p>
        <p>Mobile Number: {response.data.mobile}</p>
        <p>Description : {response.data.description}</p>
      </Card.Description> <h2>Record Stored Successfully</h2>
    </Card.Content>
   
  </Card>
  </div>
  
)}

      </Grid.Column>
    </Grid>
  );
}

export default Homepage;
