'use strict';

import './films.scss';

import template from './film.pug';

export default class Film {
    constructor(options) {
        this.item = document.createElement('div'); 
        this.item.className = 'films__item';
        this.item.innerHTML = template(options);		
    }
}
