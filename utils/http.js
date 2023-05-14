import axios from "axios";

const BACKEND_URL = "https://todo-list-d9240-default-rtdb.firebaseio.com";

export const postTodo = async (todoData) => {
    const {data} = await axios.post(`${BACKEND_URL}/todos.json`, todoData);
    const id = data.name;
    return id;
}

export const getTodo = async () => {
    const {data} = await axios.get(`${BACKEND_URL}/todos.json`);

    const todoList = [];

    for(const key in data) {
        const todoObj = {
            id: key,
            text: data[key].text,
            status: data[key].status
        }

        todoList.push(todoObj);
    }
    return todoList;

}

export const updateTodo = async (id, updatableData) => {
    return axios.put(`${BACKEND_URL}/todos/${id}.json`, updatableData)
}

export const deleteTodo = async (id) => {
    return axios.delete(`${BACKEND_URL}/todos/${id}.json`);
}