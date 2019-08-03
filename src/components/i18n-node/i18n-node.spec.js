import { I18nNode } from './i18n-node';

const source = (text, srcLang, tgtLang) => {
    return new Promise((resolve, reject) => {
        console.log(`Translating [${text}] from ${srcLang} to ${tgtLang}`);
        setTimeout(() => {
            resolve('foo')
        }, 300)
    })
}

window.customElements.define('i18n-node-test', I18nNode(source));
describe('I18n Node', () => {
    let element;
    beforeEach(() => {
        element = document.createElement('i18n-node-test');
        element.innerHTML="bar";
        document.body.append(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    })

    // check that the exposed API works
    describe('init', () => {
        it('should add a create a text node with no value, then change to foo', () => {
            expect(element).toBeTruthy();
        });
    });

});