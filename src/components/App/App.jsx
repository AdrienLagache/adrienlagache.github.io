import CardsList from '../CardsList/CardsList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Overview />
        <CardsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
