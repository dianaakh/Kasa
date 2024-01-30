import React, { useState } from 'react'
import iconCollapse from '../assets/arrow_collapse.svg'

const Collapse = ({ title, content, isColumn }) => {

  // États pour gérer l'ouverture/fermeture du Collapse et la rotation de l'icône
  const [isOpen, setIsOpen] = useState(false);
  const [iconRotation, setIconRotation] = useState('')

  const toggleCollapse = () => {
    setIsOpen(!isOpen) // Inverse la valeur de isOpen (ouverture/fermeture)
    setIconRotation(isOpen ? 'reverse' : 'rotate'); // Change la classe CSS pour la rotation de l'icône en fonction de isOpen
  };

/* Classe CSS pour le contenu du Collapse en fonction de l'état d'ouverture/fermeture - Ajoute la classe column_equipment si isColumn est true.
   isOpen: Ajoute la classe open si isOpen est true, sinon ajoute la classe close. */

  const collapseContentClass = `collapse_content ${isColumn ? 'column_equipment' : ''} ${isOpen ? 'open' : 'close'}`

  return (
    <div className="collapse">
      <div className="collapse_header">
        <h2>{title}</h2> 
        <button className={`icon_collapse ${iconRotation}`} onClick={toggleCollapse}>
          <img src={iconCollapse} alt="Icône flèche" /> 
        </button>
      </div>
      <div className={collapseContentClass}>
        {/* Si le contenu est une colonne, affiche une liste */}
        {isColumn ? (
          <ul> 
             {/* Génère les éléments de la liste à partir du tableau de la prop content */}
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p> 
        )} {/* Si le contenu n'est pas une colonne, affiche un paragraphe */}
      </div>
    </div>
  );
}

export default Collapse;