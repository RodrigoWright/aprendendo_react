import React from 'react';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import Saymyname from './components/Saymyname';
import Pessoa from './components/Pessoa';
import './App.css';

function App() {
  const nome = "Rodrigo"
  const url = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWVyMS00MjFiYjViOC05ZmMyLTRkNWEtYjJkMS0xZTFmODFiMjZiODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5vfqGmq9kIylfG3glHGa20CAPUtoWlAxKEGpIvGOi8'
  const prof = "Garoto de programa"
  const idade = 20

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Saymyname name = {nome}/>
      <Pessoa
        nome = {nome}
        idade = {idade}
        prof = {prof}
        foto = {url}
      />
      <Frase/>
      <HelloWorld/>
      
    </div>
  );
}

export default App;
