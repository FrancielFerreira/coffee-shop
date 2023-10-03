import React from 'react';
import styles from './Cadastrar.module.css';
import Head from '../../Components/Head';

import { useAuthentication } from '../../hooks/useAuthentication';

const CadastrarAdmin = () => {
  const [displayName, setDisplayName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError('As senhas precisão ser iguais');
      return;
    }

    const res = await createUser(user);

    console.log(res);
  };

  React.useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <>
      <Head
        title="Criar Admin - Coffee Shops | Tia Rosa"
        description="Descrição da admin"
      />
      <div className="container">
        <div className={styles.register}>
          <h1 className="titulo">Criar usuário</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nome</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Nome completo"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
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
            <div>
              <label>Confirmar senha</label>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Deve ser exatamente igual a primeira senha informada"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {!loading && <button className="btn">Criar usuário</button>}
            {loading && (
              <button className="btn" disabled>
                Aguarde...
              </button>
            )}
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default CadastrarAdmin;
