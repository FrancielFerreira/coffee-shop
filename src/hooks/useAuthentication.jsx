import { db } from '../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup - previne erro de memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
  //register
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
      let errorSystemMessage;
      if (error.message.includes('password')) {
        errorSystemMessage = 'A senha precisa conter pelo menos 6 careteres!';
      } else if (error.message.includes('email-already')) {
        errorSystemMessage = 'E-mail já cadastrado!';
      } else {
        errorSystemMessage = 'Ocorreu um erro, por favor tente mas tarde!';
      }
      setLoading(false);
      setError(errorSystemMessage);
    }
  };

  //logout
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  //login
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(false);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
      let errorSystemMessage;
      if (error.message.includes('invalid')) {
        errorSystemMessage = 'Usuário não encontrado!';
      } else if (error.message.includes('wrong-password')) {
        errorSystemMessage = 'Senha inconrreta!';
      } else {
        errorSystemMessage = 'Ocorreu um erro, por favor tente mais tarde!';
      }
      setError(errorSystemMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
