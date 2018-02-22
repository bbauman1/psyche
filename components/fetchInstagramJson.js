import React from 'react';

const instagramRequest = new Request('https://www.instagram.com/nasapsyche/?__a=1');

fetch(instagramRequest)
    .then(response => response.blob())
    .then(blob => {
        stuff.src = URL.createObjectURL(blob);
    });
export default fetchInstagramJson;