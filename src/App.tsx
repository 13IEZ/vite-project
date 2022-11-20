import React from 'react';
import { CssBaseline } from '@mui/material';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'style/style';
import Main from 'pages/Main/Main';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Global styles={GlobalStyles} />
      <Main />
    </>
  );
};

export default App;
