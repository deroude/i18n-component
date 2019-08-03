export function I18nNode(source) {
    return class extends HTMLElement {
        constructor() {
            super();
            this._source = source;
        }

        get defaultLang() {
            return 'en-US';
        }

        get lang() {
            return this.getAttribute("lang");
        }

        static get observedAttributes() {
            return ['lang'];
        }

        attributeChangedCallback(name, oldValue, newValue) {

        }

        connectedCallback() {
            this._source(this.innerHTML, this.defaultLang, this.lang).then(result => this.innerHTML = result);
        }
    }
}