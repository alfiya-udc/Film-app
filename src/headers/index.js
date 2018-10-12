'use strict';

import './headers-list.scss';

import template from './headers-list.pug';

export default class HeadersList {
    constructor(options) {
        this.item = document.createElement('div'); 
        this.item.className = 'headers-list';
        this.item.innerHTML = template(options);		
    }
}
