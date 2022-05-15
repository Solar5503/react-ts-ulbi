import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import UsersPage from './components/UsersPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <EventsExample />
    //   <Card width="200px" height="200px" variant={CardVariant.outlined}>
    //     <button>Кнопка</button>
    //   </Card>
    // </div>
  );
};

export default App;
