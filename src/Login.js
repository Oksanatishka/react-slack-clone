import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                    // src="https://cdn.brandfolder.io/5H442O3W/at/pl546j-7le8zk-afym5u/Slack_Mark_Web.png"
                    alt=""
                />
                <h1>Sign in to Oksana Bibik HQ</h1>
                <p>oksanabibik.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    );
};

export default Login;
