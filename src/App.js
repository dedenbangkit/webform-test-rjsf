import React, { useState } from "react";
//import Form from "@rjsf/core";
import Form from "@rjsf/bootstrap-4";
import schema from "./form/schema.json";
import uiSchema from "./form/uiSchema.json";
import { Container, Row, Col } from "react-bootstrap";
import CustomTemplate from "./template";

const { ArrayField, Field } = CustomTemplate;

function App() {
  const [formData, setFormData] = useState({});
  return (
    <Container>
      <Row>
        <Col>
          <Form
            schema={schema}
            formData={formData}
            uiSchema={uiSchema}
            onChange={(e) => setFormData(e.formData)}
            onSubmit={(e) => console.log(e)}
            FieldTemplate={Field}
            ArrayFieldTemplate={ArrayField}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
