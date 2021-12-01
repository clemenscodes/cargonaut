import { Environment } from '@api-interfaces';

export const environment: Environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyBa4OJOiOcgA4fZCY-FHwJNKneyC9c5PyA',
        authDomain: 'cargonaut.firebaseapp.com',
        projectId: 'cargonaut',
        storageBucket: 'cargonaut.appspot.com',
        messagingSenderId: '255425502650',
        appId: '1:255425502650:web:8fb593da639e47ab601183',
    },
    apiUrl: 'https://europe-west1-cargonaut.cloudfunctions.net/api'
};
