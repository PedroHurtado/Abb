import { Node } from './node.js';

const elements = ['div', 'span','i'];

function wrapperElement(nodeType) {
    return (props, ...childs) => new Node(nodeType, props, childs)
}

export const html = elements.reduce((a, b) => {
    a[b] = wrapperElement(b);
    return a;
}, {});
