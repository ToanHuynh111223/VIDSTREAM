import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';
function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout ? route.layout : DefaultLayout;
              return (
                <Route
                  key={index}
                  path={route.path}
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
