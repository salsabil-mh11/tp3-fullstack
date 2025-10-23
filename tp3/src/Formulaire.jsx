//Exercice 3: 
import { useState } from 'react';
function Formulaire() {
  const [nom, setNom] = useState('');
  const handleClick = () => alert(`Bonjour, ${nom} !`);
  return (
    <div>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" />
      <button onClick={handleClick}>Envoyer</button>
    </div>
  );
}
export default Formulaire;
