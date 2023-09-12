import Input from "../UI/Input";

export default function AddTodo() {
  return (
    <form>
      <Input
        label="Title"
        input={{
          id: "amount",
          type: "string",
        }}
      />
      <button>Add</button>
    </form>
  );
}
