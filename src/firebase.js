import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyATPng7tirgb2LTivwRI4D0-Qjjrdyd--U',
    authDomain: 'slack-clone-project-65b9a.firebaseapp.com',
    databaseURL: 'https://slack-clone-project-65b9a.firebaseio.com',
    projectId: 'slack-clone-project-65b9a',
    storageBucket: 'slack-clone-project-65b9a.appspot.com',
    messagingSenderId: '384603969365',
    appId: '1:384603969365:web:f11e453dbf5afd269881dc',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
