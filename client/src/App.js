import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component ? route.component : PageNotFound;
              let Layout = DefaultLayout;
              const path = route.path ? route.path : "*"
              if (route.layout) {
                Layout = route.layout
              }
              else if (route.layout === null) {
                Layout = Fragment
              }
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                >
                </Route>)
            })
          }
        </Routes>

      </div>
    </Router>
  );
}

export default App;
