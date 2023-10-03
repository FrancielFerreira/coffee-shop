import React from 'react';
import styles from './Login.module.css';
import Head from '../../Components/Head';

import { useAuthentication } from '../../hooks/useAuthentication';

const LoginAdmin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  React.useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="container">
      <Head
        title="Login - Coffee Shops | Tia Rosa"
        description="Descrição da admin"
      />
      <div className={styles.login}>
        <h1 className="titulo">Entrar</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Deve conter pelo menos 6 digitos"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!loading && <button className="btn">Entrar</button>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default LoginAdmin;
