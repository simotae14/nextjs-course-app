import React from 'react';
import '../src/components/styles.module.css';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}