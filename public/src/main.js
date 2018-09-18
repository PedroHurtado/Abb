import { Part } from './part.js'
import { renderComponent } from './domutil.js'

let body = document.body;
let main = document.querySelector('.main');
let socket = io.connect('http://localhost:8080/new_part');
socket.on('message', function (data) {
    let part = new Part(data);
    [...main.childNodes].forEach(node=>node.remove());
    renderComponent(main, [part]);
});




