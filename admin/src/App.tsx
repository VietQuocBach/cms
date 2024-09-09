import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './root'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Root />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
