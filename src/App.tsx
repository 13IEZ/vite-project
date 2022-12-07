import React from 'react';
import { CssBaseline } from '@mui/material';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'style/style';
import { Route, Routes } from 'react-router-dom';
import Main from 'pages/Main/Main';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
