const Elements = ({ child, label, index }) => {
  return (
    <div>
      <label>
        {label ? label : ""} - {index}
      </label>
      {child}
    </div>
  );
};

const ArrayFieldTemplate = (props) => {
  const { schema } = props;
  return (
    <div>
      <div>{props.canAdd && schema.title}</div>
      {props.items.map((element, i) => (
        <Elements
          index={i + 1}
          label={schema?.add}
          key={"el-" + 1}
          child={element.children}
        />
      ))}
      {props.canAdd && (
        <button
          type="button"
          className="btn btn-info"
          onClick={props.onAddClick}
        >
          {schema.add}
        </button>
      )}
    </div>
  );
};

export default ArrayFieldTemplate;
