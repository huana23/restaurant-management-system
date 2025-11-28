import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import {
  Box,
  Card,
  TextField,
  Typography,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Divider,
  Link,
} from '@mui/material';

const cx = classNames.bind(styles);

function Login() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const validate = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      valid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className={cx('login-wrapper')}>
      <Card className={cx('login-card')}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
          Sign In
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <TextField
              id="email"
              name="email"
              type="email"
              error={emailError}
              helperText={emailErrorMessage}
              placeholder="your@email.com"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <TextField
              id="password"
              name="password"
              type="password"
              error={passwordError}
              helperText={passwordErrorMessage}
              placeholder="••••••"
              required
            />
          </FormControl>

          <FormControlLabel control={<Checkbox />} label="Remember me" />

          <Button variant="contained" type="submit">
            Sign In
          </Button>

          <Link component="button" variant="body2" sx={{ textAlign: 'center' }}>
            Forgot your password?
          </Link>
        </Box>

        <Divider sx={{ my: 2 }}>or</Divider>

        <Button variant="outlined" sx={{ mb: 1 }}>
          Sign in with Google
        </Button>

        <Button variant="outlined">
          Sign in with Facebook
        </Button>

        <Typography sx={{ textAlign: 'center', mt: 2 }}>
          Don't have an account?{' '}
          <Link href="#" variant="body2">
            Sign up
          </Link>
        </Typography>
      </Card>
    </div>
  );
}

export default Login;
