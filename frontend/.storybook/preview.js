import { jsx as _jsx } from "react/jsx-runtime";
import '../src/index.css';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../src/context/AuthContext';
import { mswHandlers } from './msw-handlers';
initialize({ onUnhandledRequest: 'bypass' });
const preview = {
    decorators: [
        (Story, context) => {
            if (context.parameters.skipGlobalRouter) {
                return _jsx(Story, {});
            }
            const initialEntries = context.parameters.initialEntries ?? ['/'];
            return (_jsx(MemoryRouter, { initialEntries: initialEntries, children: _jsx(AuthProvider, { children: _jsx(Story, {}) }) }));
        },
    ],
    loaders: [mswLoader],
    parameters: {
        msw: { handlers: mswHandlers },
    },
    async beforeEach() {
        localStorage.setItem('cpap-theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    },
};
export default preview;
