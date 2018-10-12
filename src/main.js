'use strict';

import Film from './film';
import HeadersList from './headers';

let film = new Film({
    name: "Дикий Запад"
});

let headers = new HeadersList({
});

document.body.appendChild(film.item);
document.body.appendChild(headers.item);