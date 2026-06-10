import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage3D from './pages/Homepage3D'
import Components from './pages/Components'
import ComponentDetail from './pages/ComponentDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage3D />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/:id" element={<ComponentDetail />} />
      </Routes>
    </Router>
  )
}

export default App
