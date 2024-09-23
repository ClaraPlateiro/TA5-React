import { useState } from 'react';


function App() {
  const [estado, setEstado] = useState(false);

  const esVisible = () => {
    setEstado(!estado);
  }

  return (
    <div>
      <button onClick={esVisible}>{estado ? 'Ocultar' : 'Mostrar'}</button>
      {estado && (
        <div>
          <h1>Mensaje oculto</h1>
        </div>
      )}
    </div>
  );
}

export default App;