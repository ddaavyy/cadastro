import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Time/Time';

function App() {

  const times = [
    {
      nome: 'League of Legends',
      corPrimaria: '#5db679',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Counter Strike 2',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Dota 2',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Valorant',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7EB'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
    }
  
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)}/>
        
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} jogadores={jogadores.filter(jogador => jogador.time === time.nome)}/>)}

      
    </div>
  );
}

export default App;
