import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: 'Ulbi TV',
      email: 'adf@mail.ru',
      address: { city: 'Moskow', street: 'Lenina', zipcode: '123' },
    },
    {
      id: 2,
      name: 'Timur',
      email: 'zhj@mail.ru',
      address: { city: 'Kaliningrad', street: 'Pushkina', zipcode: '127' },
    },
  ];
  return (
    <div>
      <Card width="200px" height="200px" variant={CardVariant.outlined}>
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
