import { Route, Routes } from 'react-router-dom'
import '../src/sass/main.scss'

import Subscribe from './components/Subscribe'

function App() {
  return (
    <>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Subscribe />} />
        </Routes>
      </div>
    </>
  )
}

export default App
