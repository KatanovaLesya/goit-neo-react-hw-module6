import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Підключення Redux
import { PersistGate } from 'redux-persist/integration/react'; // Підключення Redux Persist
import { store, persistor } from './redux/store'; // Імпорт store та persistor
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
