import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import Child from './Child'
import Child2 from './Child2'

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* all components */}
      <Child/>
      <Child2/>
      </Provider>
    </div>
  )
}

export default App