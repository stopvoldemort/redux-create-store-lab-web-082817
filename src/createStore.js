export default function createStore(reducer) {
  let state

  let store = {}

  store.getState = () => (state)

  store.dispatch = (action) => {
    state = reducer(state, action)
    render()
  }

  store.dispatch({ type: '@@INIT' })

  return store
}

function render() {
  const container = document.getElementById('container');
}
