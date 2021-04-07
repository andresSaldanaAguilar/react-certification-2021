import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../../Hooks/Form/Form';
import { useSession } from '../../Hooks/Session/Session';
import loginApi from '../../utils/mockedLogin';
import {
  CustomPaper,
  CustomTextField,
  NotFoundContainer,
  CustomButton,
} from './Login.styled';

function doLogin(values, userSession, history) {
  const user = loginApi(values.username, values.password);
  if (user) {
    const { dispatchSession } = userSession;
    dispatchSession({ type: 'login', payload: user });
    history.push('/');
  }
}

function LoginPage() {
  const [formValues, setFormValues] = useForm({ username: '', password: '' });
  const history = useHistory();
  const session = useSession();
  return (
    <section>
      <NotFoundContainer data-testid="Login" maxWidth="xs">
        <CustomPaper elevation={1}>
          <Box display="grid">
            <CustomTextField
              name="username"
              label="username"
              variant="outlined"
              className="usernameIpt"
              size="small"
              onChange={setFormValues}
            />
            <CustomTextField
              name="password"
              label="password"
              variant="outlined"
              className="passwordIpt"
              size="small"
              onChange={setFormValues}
            />
            <CustomButton
              data-testid="loginButton"
              variant="contained"
              onClick={() => doLogin(formValues, session, history)}
            >
              <Typography variant="body1" noWrap>
                Login
              </Typography>
            </CustomButton>
          </Box>
        </CustomPaper>
      </NotFoundContainer>
    </section>
  );
}

export default LoginPage;
