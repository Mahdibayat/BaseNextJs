import React, {useEffect} from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import { CookiesProvider } from 'react-cookie';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: IRANSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        direction: rtl;
        background-color: #E9E9E9;
    }
    .rs-row{
        margin-left: unset;
        margin-right: unset;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .rs-alert-container {
      left: unset;
      width: 100%;
    }
`

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

export default function App({ Component, pageProps }) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
            });
        }

    }, []);
  const store = useStore(pageProps.initialReduxState);

  return (
      <>
        <GlobalStyle />
        <Provider store={store}>
            <CookiesProvider>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </CookiesProvider>
        </Provider>
      </>
  )
}
