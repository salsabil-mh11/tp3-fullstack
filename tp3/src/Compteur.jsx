// Exercice 2:
import { useState } from 'react';
function Compteur() {
  const [compteur, setCompteur] = useState(0);
  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>+</button>
      <button onClick={() => setCompteur(compteur - 1)}>-</button>
    </div>
  );
}
export default Compteur;
