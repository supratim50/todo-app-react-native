export const Todos = [
    {
        id: "e1",
        text: "Doing execise",
        status: 'complete'
    }
];

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            const id = new Date() + Math.random();
            return [{...action.payload, id: id}, ...state];
        case 'REMOVE':
            const newTodos = state.filter((todo) => todo.id !== action.id);
            return newTodos;
        case 'UPDATE':
            const updatableIndex = state.findIndex((item) => item.id === action.payload.id);
            const updatableItem = state[updatableIndex];
            const newData = {...updatableItem, ...action.payload.data};
            const newList = [...state];
            newList[updatableIndex] = newData;
            return newList;
        default:
            return state;
    }
}