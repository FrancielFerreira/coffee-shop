//  routes
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//firebase
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//context
import { AuthProvider } from './context/AuthContext';

// components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Produto from './Components/Produto';

// pages
import Home from './Pages/Home/Home';
import Page404 from './Pages/Page404/Page404';
import Sobre from './Pages/Sobre/Sobre';
import Produtos from './Pages/Produtos/Produtos';
import Contato from './Pages/Contato/Contato';

// admin
import Admin from './Pages/Admin/Admin';
import Login from './Pages/Login/Login';
import Cadastrar from './Pages/Cadastrar/Cadastrar';

const App = () => {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
            <Route
              path="/admin/*"
              element={user ? <Admin /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/admin" />}
            />
            <Route
              path="/cadastrar"
              element={!user ? <Cadastrar /> : <Navigate to="/admin" />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
