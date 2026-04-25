import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Characters from '../../pages/Characters'

// todo: https://fsd.how/ru/docs/get-started/overview/ посмотреть
// https://reactrouter.com/start/data/routing
// https://reactrouter.com/start/data/installation изучить
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  )
}