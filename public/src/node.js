import {flatMap} from './util.js';
export class Node{
    constructor(nodeType,props,...children){
        this.nodeType = nodeType;
        this.props = props;
        this.children = [...flatMap(children)];
    }

}