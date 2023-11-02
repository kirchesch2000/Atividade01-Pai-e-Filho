import logo from './logo.svg';
import './App.css';
import Pai from './componentes/AtividadePai';
import Filho from './componentes/AtividadeFilho';

function App() {
  return (
        <>
          <Pai></Pai>
          <Filho text="filho direto sem o pai"></Filho>
        </>
  );
}

export default App;
