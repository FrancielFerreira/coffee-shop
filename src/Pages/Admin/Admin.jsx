import React from 'react';
import styles from './Admin.module.css';
import Head from '../../Components/Head';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CadastrarProduto from './CadastrarProduto';
import EditarProduto from './EditarProduto';
import { useAuthentication } from '../../hooks/useAuthentication';

const Admin = () => {
  const { logout } = useAuthentication();

  return (
    <>
      <Head
        title="Admin - Coffee Shops | Tia Rosa"
        description="Descrição da admin"
      />
      <div className="container">
        <div className={styles.admin}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="cadastrar-produto" element={<CadastrarProduto />} />
            <Route path="editar-produto" element={<EditarProduto />} />
          </Routes>
          <h2>Acesso Rápido</h2>
          <nav>
            <NavLink to="">Dashboard</NavLink>
            <NavLink to="cadastrar-produto">Cadastrar Produto</NavLink>
            <NavLink to="editar-produto">Editar Produto</NavLink>
            <NavLink to="/" target="_blank">
              Ver Site
            </NavLink>
            <button onClick={logout}>Sair</button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Admin;
