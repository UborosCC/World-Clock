import type { JSX } from 'react';
import { createElement } from 'react';
import Home from './pages/Home';
import AddTimezone from './pages/AddTimezone';

interface Route {
    element:JSX.Element;
    path: string;
    loader?: Function;
    menuLabel?: string;
    index?: number;
    parent: string;
}

export default [
    Home, 
    AddTimezone
] 
 .map(x => (({ element: createElement(x), ...x.route }) as Route))
 .sort((a, b) => (a.index || 0) - (b.index || 0));