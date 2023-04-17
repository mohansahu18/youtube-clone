import './App.css';
import Head from "../src/components/Head"
import Body from './components/Body';
import { Provider } from 'react-redux';
import Store from './utils/Store';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Error from './components/Error';
import Result from './components/Result';
import FilterPage from './components/FilterPage';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Head />
      <Body />
    </>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: <WatchPage />
      },
      {
        path: '/Result',
        element: <Result />
      },
      {
        path: '/Filter',
        element: <FilterPage />
      }

    ]
  }
])


function App() {
  return (
    <Provider store={Store}>
      <div>


        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}


export default App;
