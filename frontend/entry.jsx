import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";

// import Test from './test_home_page';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    window.login = SessionAPIUtil.login;
    window.signup = SessionAPIUtil.signup;
    window.logout = SessionAPIUtil.logout;

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    ReactDOM.render(<Root store={store}/>, root);
});


//branch1 test edit
// branch 2 test

