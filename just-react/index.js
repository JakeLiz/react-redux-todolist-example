import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App'


const defaultState = [
    'HW',
    'squash',
    'bottle'
]

const reducer = (state = defaultState, action) => {
    const stateCopy = state.slice()
    switch (action.type) {
        case 'ADD_TODO_ITEM':
            const newTodoItem = action.todoItem
            stateCopy.push(newTodoItem)
            break;
    }
    return stateCopy
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-root')
)