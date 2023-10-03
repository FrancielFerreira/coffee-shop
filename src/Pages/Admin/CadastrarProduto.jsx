import React from 'react';
import styles from './CadastrarProduto.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CadastrarProduto = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState('');

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument('produtos');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // validate url image
    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma url válida.');
    }

    // checar valores
    if (formError) return;

    insertDocument({
      title,
      image,
      descricao,
      preco,
      uid: user.uid,
      createBy: user.displayName,
    });

    // redirect home
    navigate('/produtos');
  };

  return (
    <div className={styles.cadastrarProduto}>
      <h1>Cadastrar produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Produto</label>
          <input
            type="text"
            name="nomeProduto"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label>Foto do Produto</label>
          <input
            type="text"
            name="image"
            required
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div>
          <label>Descrição do Produto</label>
          <textarea
            type="text"
            name="descricao"
            rows="8"
            required
            onChange={(e) => setDescricao(e.target.value)}
            value={descricao}
          ></textarea>
        </div>
        <div>
          <label>Preço do Produto</label>
          <input
            type="text"
            name="descricao"
            required
            onChange={(e) => setPreco(e.target.value)}
            value={preco}
          />
        </div>
        {!response.loading && (
          <button className="btn">Cadastrar Produto</button>
        )}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CadastrarProduto;
