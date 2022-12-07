import { Provider } from 'react-redux';
import { store } from './components/data/store';
import Screen from './Screen';

export default function App() {

  return (
    <Provider store={store}>
      <Screen/>
    </Provider>
  );
}