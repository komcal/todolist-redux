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
})
