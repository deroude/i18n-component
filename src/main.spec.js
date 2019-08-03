import './main';
import { I18nNode } from "./components/i18n-node/i18n-node";

describe('ui-elements integration tests', () => {
    describe('i18n-node', () => {
        it(`should be defined`, () => {
            const i18nNodeClass = window.customElements.get('i18n-node');
            expect(i18nNodeClass).toBeTruthy();
        });
    });
});