import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Characters from '../../pages/Characters'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  )
}