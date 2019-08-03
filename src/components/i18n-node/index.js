import { I18nNode } from './i18n-node';
const source = (text, srcLang, tgtLang) => {
    return new Promise((resolve, reject) => {
        console.log(`Translating [${text}] from ${srcLang} to ${tgtLang}`);
        setTimeout(() => {
            resolve('foo')
        }, 300)
    })
}
if (!window.customElements.get('i18n-node')) {
    window.customElements.define('i18n-node', I18nNode(source));
}