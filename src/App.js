import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// pour l'avoir ce bout de code qui suit il faut taper rsc. 
// On va mettre un switch dans le BrowserRouter parcequ'il va tester toute les routes
//  et s'il ne les trouve pas il va tomber dans l'erreur 404.
// Path = chemin, exact veut dire que le chemin doit exact.
// C'est  Ici que l'on va faire le routage à la main pour notre page.

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/a-propos" exact component={About} />
        <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;



// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//       <Home />
//     </div>
//   );
// }

// export default App;
