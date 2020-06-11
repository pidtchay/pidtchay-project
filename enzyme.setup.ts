import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// @ts-ignore
window.matchMedia = window.matchMedia || function () {
    return {
        matches: true,
        // tslint:disable-next-line: no-empty
        addListener: function() {},
        // tslint:disable-next-line: no-empty
        removeListener: function() {},
        // tslint:disable-next-line: no-empty
        removeEventListener: function() {}
    };
};


configure({ adapter: new Adapter() });
