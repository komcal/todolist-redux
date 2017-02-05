import reducer from './todos';

describe('todos reducer', () => {
    it('should return initial state', () => {
      expect(
        reducer(undefined, {})
      )
      .toEqual([])
    })

    it('should handle ADD_TODO', () => {
      expect(
        reducer([], {
          type: 'ADD_TODO',
          text: 'Hello World',
          id: 1
        })
      )
      .toEqual([
        {
          id: 1,
          text: 'Hello World',
          completed: false
        }
      ])

      expect(
        reducer(
          [
            {
              text: 'first todo',
              id: 1,
              completed: false
            }
          ],
          {
            type: 'ADD_TODO',
            text: 'Hello World',
            id: 2
          }
        )
      )
      .toEqual([
        {
          id: 1,
          text: 'first todo',
          completed: false
        },
        {
          id: 2,
          text: 'Hello World',
          completed: false
        }
      ])
    })

    it('should handle TOGGLE_TODO', () => {
      const initialState = [
        {
          id: 1,
          text: 'first todo',
          completed: false
        },
        {
          id: 2,
          text: 'secound todo',
          completed: false
        }
      ]
      const expectedState = [
        {
          id: 1,
          text: 'first todo',
          completed: true
        },
        {
          id: 2,
          text: 'secound todo',
          completed: false
        }

      ]
      expect(
        reducer(initialState, {
          type: 'TOGGLE_TODO',
          id: 1
        })
      )
      .toEqual(expectedState)
    })

    it('should handle REMOVE_TODO', () => {
      const initialState = [
        {
          id: 1,
          text: 'first todo',
          completed: false
        },
        {
          id: 2,
          text: 'secound todo',
          completed: false
        }
      ]
      const expectedState = [
        {
          id: 2,
          text: 'secound todo',
          completed: false
        }
      ]
      expect(
        reducer(initialState, {
          type: 'REMOVE_TODO',
          id: 1
        })
      )
      .toEqual(expectedState)
    })
});
