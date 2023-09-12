export default function TodoItems(props) {
  return (
    <div>
      {props.items.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.details}</p>
          <p>{item.priority}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
}
