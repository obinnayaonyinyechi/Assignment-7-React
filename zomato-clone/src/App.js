import './App.css';
import Details from './Components/Details';
import Filter from './Components/Filter';
import Home from './Components/Home';
import QuickSearches from './Components/QuickSearches';
import Wallpaper from './Components/Wallpaper';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Wallpaper />
      <QuickSearches />
    </Layout>
  );
}

export default App;
