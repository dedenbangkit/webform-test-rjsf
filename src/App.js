import React, { useState } from "react";
//import Form from "@rjsf/core";
import Form from "@rjsf/bootstrap-4";
import schema from "./form/schema.json";
import uiSchema from "./form/uiSchema.json";
import { Container, Row, Col } from "react-bootstrap";

const ArrayFieldTemplate = (props) => {
  const { schema } = props;
  console.log(props);
  return (
    <div>
      <div>{props.canAdd && schema.title}</div>
      {props.items.map((element, i) => (
        <div key={"el-" + i}>{element.children}</div>
      ))}
      {props.canAdd && (
        <button
          type="button"
          className="btn btn-info"
          onClick={props.onAddClick}
        >
          + {schema.add}
        </button>
      )}
    </div>
  );
};

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
            ArrayFieldTemplate={ArrayFieldTemplate}
            onChange={(e) => setFormData(e.formData)}
            onSubmit={(e) => console.log(e)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
