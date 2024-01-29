import { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
} from 'react-router-dom';
import { store } from 'redux/store';
import App from './App';
import './i18n';

render(
    // Suspense нужен для файлов с переводами, когда используется i18next-http-backend
    <Suspense fallback="">
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </Suspense>,
    document.getElementById('root'),
);
