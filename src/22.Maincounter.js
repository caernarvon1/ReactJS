import React from 'react';
import { Provider } from 'react-redux';
import store from './22.Store'; // Dengan huruf S kapital
import Counter from './22.Counter'; // Dengan huruf C kapital


const Maincounter = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Maincounter;
