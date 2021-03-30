const CustomSchemaField = (props) => {
  console.log(props);
  return (
    <div id="custom">
      <p>Yeah, I'm pretty dumb.</p>
      <div>My props are: {JSON.stringify(props)}</div>
    </div>
  );
};

const field = {
  SchemaField: CustomSchemaField,
};

export default field;
