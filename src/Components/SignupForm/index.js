import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef
 } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { doSignup } from '../../store/actions/session.actions';

import { getIsAuthenticated } from '../../store/selectors/session.selectors';

const SignUpForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isSignupEnable, setSignupEnable] = useState(false);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const loginRef = useRef(null);
  const dispatch = useDispatch();
  // setLogin(value) ==== setState({login: value});
  // useEffect(() => {
  //   console.log('componentDidMount/componentDidUpdate');
  // });
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);
  // useEffect(() => {
  //   console.log('login has changed');
  // }, [login]);
  useEffect(() => {
    const input = loginRef.current;
    input.focus();
  }, []);
  useEffect(() => {
    setSignupEnable(
      login !== '' &&
      password !== '' &&
      password === repeatPassword
    );
  }, [login, password, repeatPassword]);

  const handleChange = useCallback((e) => {
    const updatersMap = {
      login: setLogin,
      password: setPassword,
      repeatPassword: setRepeatPassword
    };
    const { name, value } = e.target;
    updatersMap[name](value);
  }, [setLogin, setPassword, setRepeatPassword]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(doSignup({login, password}));
    }
    , [login, password, dispatch]
  );
  const expectedLogin = useMemo(
    () => (
      login !== ''
        ? <h2>Your login will be: {login}</h2>
        : <h2>Please enter your login</h2>
      )
    , [login]
  );
  return (
    isAuthenticated
      ? <Redirect to="/"/>
      : (
      <form>
        {expectedLogin}
        <fieldset>
          <label>
            Login:
            <input ref={loginRef} type="text" placeholder="Enter login" name="login" value={login} onChange={handleChange}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Password:
            <input type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            Repeat password:
            <input type="password" placeholder="Repeat password" name="repeatPassword" value={repeatPassword} onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit" disabled={!isSignupEnable} onClick={handleSubmit}>Sign Up</button>
      </form>
    )
  );
};

export default SignUpForm;
