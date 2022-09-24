//Same result that using deep coping or map-immutability but more eye friendly

import { produce } from 'immer';

let book = { title: 'Harry Potter' };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let uptated = publish(book);

console.log(book);

console.log(uptated);