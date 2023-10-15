<h1 align="center">Todo List</h1>

<h2 align = "center"> Table Of Contents </h2>

- [Background](#Background) <br/>
- [Todo list](#Todo) <br/>
- [Functionalities](#Functionalities) <br/>
- [Extras](#Extras) <br/>

<h2 id = "Background">Background</h2>

My first attempt at using Reactjs to make a website together with Nodejs, Expressjs and MongoDB.

<h2 id = "Todo">Todo list</h2>
<img src="https://raw.githubusercontent.com/dihcuierc/To-Do-List/main/frontend/public/ToDoList.jpg " alt="Todo list image"/>

### Each Todo item comprises of a title, details, priority level, and a category.

- `Title`: Title of the Todo item

- `Details`: Detail explanation of the task to be completed. (Optional input)

- `Priority`: Priority to complete the Todo item, 1 being highest priority

- `Category`: Categoty which the Todo item is categorised under.

<h2 id = "Functionalities">Functionalities</h2>

### `Add a Todo item`

Click on the `Add` button, fill in the necessary inputs and click on `Add` button to finalise input. (The `Add Todo form` will prompt for input should you leave out important details.) Your new Todo item will be added to the list of Todo items on the main page.

### `Remove a Todo item`

Click on the `X` button at the bottom of each Todo item to remove the Todo item from the list.

### `Completed Todo`

Click on the `Done` button at the bottom of each Todo item to mark the task as completed. The Todo item will have a strikethrough across the text.

### `Sort To-do items`

Todo items will be sorted based on priority level. User can choose the `Ascending` or `Descending` option.

### `Filter Todo items`

Todo items can be filtered for users look at a specific group of Todo items. User can choose to filter by `Work`, `Personal`, `Home`, `Health & Fitness`, `Shopping` or `Others`.

### `Search for a Todo item`

User can use the search bar to look for a specific Todo item. Search is based on the Todo item's title name only.

<h2 id = "Extras">Extras</h2>

### Todo in the future:

- Implement user `Sign-up`, `Login` and `Authentication` functionality.
- Allow users to `edit` their Todo item.
- Allow users to `undo` Done and Remove move.
- Include Todo item's details description to be searchable in the Search bar.
- Add in a `Time` information for each Todo item and add in a Reminder functionality to remind users of the Todo.
- Improve visuals.

### Running the Webpage

1. Clone the folder

```bash
git clone https://github.com/dihcuierc/To-Do-List.git
```

2. Download dependencies and start client

```bash
npm i
npm start
```

3. Navigate to the api folder, open up another terminal, download dependencies and start server

```bash
cd api/
npm i
npm start
```
