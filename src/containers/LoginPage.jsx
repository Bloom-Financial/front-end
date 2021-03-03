import React from 'react';
import Login from '../components/app/login/Login';
import { getAuthorizationCode } from '../services/LoginService';

export default function LoginPage() {
  getAuthorizationCode();

  return (
    <div>
      <Login />
    </div>
  );
}
