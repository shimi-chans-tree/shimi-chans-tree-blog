import React, { useState, useReducer, useEffect } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

import { rootState } from '../constants/initState';

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, rootState);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []); // at init only
  return mounted ? (
    <AppContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  ) : null;
}

export default MyApp;
