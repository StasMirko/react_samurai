import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, updateNewPostText } from './redux/state';

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={ state } addPost={ addPost } updateNewPostText={ updateNewPostText } />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
