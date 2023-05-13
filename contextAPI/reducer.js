export const Todos = [
    {
        id: "e1",
        text: "Doing execise",
        status: 'complete'
    },
    {
        id: "e2",
        text: "Make breakfast",
        status: 'incomplete'
    },
    {
        id: "e3",
        text: "Wash Cloths",
        status: 'complete'
    },
    {
        id: "e4",
        text: "Make Lunch",
        status: 'incomplete'
    },
    {
        id: "e5",
        text: "Wash Dishes",
        status: 'complete'
    },
    {
        id: "e6",
        text: "Make Dinner",
        status: 'incomplete'
    },
];

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            const id = new Date() + Math.random();
            return [{...action.payload, id: id}, ...state];
        case 'REMOVE':
            const newTodos = Todos.filter((todo) => todo.id !== action.id);
            return newTodos;
        default:
            return state;
    }
}