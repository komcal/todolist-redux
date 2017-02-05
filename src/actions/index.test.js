import * as actions from './index';

describe('Actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    let id = 0
    const expectedAction = {
      type: 'ADD_TODO',
      id: id++,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })

  it('should create and action to toggle todo', () => {
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    expect(actions.toggleTodo(1)).toEqual(expectedAction);
  })

  it('should create and action to remove todo', () => {
    const expectedAction = {
      type: 'REMOVE_TODO',
      id: 1
    }
    expect(actions.removeTodo(1)).toEqual(expectedAction);
  })

  it('should create and action to setVisibilityFilter', () => {
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    }
    expect(actions.setVisibilityFilter('SHOW_COMPLETED')).toEqual(expectedAction);
  })
})
