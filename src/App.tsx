import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Card} from './lib/index';

const App: React.FC = () => {
  return (
    <div className="App">
      <Card title='Hello World' body='This is a tutorial for creating npm packages in typescript using create-react-app --typescript' />
      <Card title='Hello World' body='This is a tutorial for creating npm packages in typescript using create-react-app --typescript' footer='footer' />
    </div>
  );
}

export default App;
