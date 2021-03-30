const FieldTemplate = (props, results) => {
  const { id, classNames, help, description, errors, children, schema } = props;
  return (
    <div key={id} className={classNames}>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
};

export default FieldTemplate;
