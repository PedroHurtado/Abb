import { Node } from "./node.js";

function createElement(nodeType, props) {
    let element = document.createElement(nodeType);
    decorateNode(element, props);
    return element;
}
function createTextElement(text) {
    return document.createTextNode(text);
}
function decorateNode(element, props) {
    for (let [key, value] of Object.entries(props || {})) {
        applyAttributes(key, value, element)
    }
}
function applyAttributes(key, value, element) {
    //TODO:escaped string html
    if (key === 'class') {
        value.split(',').forEach(cl => {
            element.classList.add(cl.trim());
        })
    }
    else {
        //TODO:attributes
    }
}
export function renderComponent(domNode, domNodes = []) {
    domNodes.forEach(n => {
        let node, nodeDom;
        if (n.render) {
            node = n.render();

        }
        else {
            node = n;
        }
        if (typeof node === 'string') {
            nodeDom = createTextElement(node);
            domNode.appendChild(nodeDom)
        } else if (node instanceof Node) {
            nodeDom = createElement(node.nodeType, node.props);
            domNode.appendChild(nodeDom);
        }
        if (node.children) {
            renderComponent(nodeDom, node.children)
        }
    });
}