import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { Layout } from 'antd';

// Pages
import { HomePage } from './pages/HomePage'
import { Error404Page } from './pages/Error404Page'
import { SearchMoviePage } from './pages/SearchMoviePage'
import { MovieDetailPage } from './pages/MovieDetailPage'
import { LastReleasesPage } from './pages/LastReleasesPage'
import { PopularMoviesPage } from './pages/PopularMoviesPage'

//Components
import MenuTopComponent from './components/MenuTop';


export default function App() {

  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header>
          <MenuTopComponent />
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact={true}  >
              <HomePage />
            </Route>

            <Route path="/last-releases" exact={true}  >
              <LastReleasesPage />
            </Route>

            <Route path="/popular-movies" exact={true}  >
              <PopularMoviesPage />
            </Route>

            <Route path="/search-movies" exact={true}  >
              <SearchMoviePage />
            </Route>

            <Route path="/movie-detail/:id" exact={true}>
              <MovieDetailPage />
            </Route>

            <Route path="*">
              <Error404Page />
            </Route>

          </Switch>

        </Content>
      </Router>
    </Layout>
  );
}

