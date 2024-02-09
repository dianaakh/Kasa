import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsonData from "../data/housingData.json";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Host from '../components/Host';
import Ratings from '../components/Ratings';
import Collapse from "../components/Collapse";

const Housing = () => {

  // Déstructure les paramètres de l'URL en utilisant useParams() pour obtenir l'ID.
  const { id } = useParams();
  const navigate = useNavigate();
  // Utilise le hook d'état useState pour gérer l'état de housingData.
  const [housingData, setHousingData] = useState(undefined);

  useEffect(() => {
    // Recherche du logement correspondant à l'ID
    const selectedHousing = jsonData.find((element) => element.id === id)

    if (!selectedHousing) {
      navigate("/Page404")
    }
    else {
      setHousingData(selectedHousing);  // Si un logement correspondant à l'ID est trouvé, met à jour les données de logement avec ses informations.
    }
  }, [])  // Le tableau de dépendances est vide, cet effet ne dépend d'aucune valeur et ne s'exécutera qu'une seule fois après le premier rendu.

  return (
    <div>
      {/* Condition pour afficher le contenu uniquement si housingData est défini. */}
      {housingData && (
        <main className='contentHousing'>

          {/* Images du logement */}
          <Carrousel housingData={housingData} />

          <div className="columns_housing">
            <div>
              {/* Titre et emplacement du logement */}
              <h1>{housingData.title}</h1>
              <p>{housingData.location}</p>

              {/* Tags */}
              <Tags tags={housingData.tags} />
            </div>

            <div className='column2'>
              {/* Informations sur l'hôte */}
              <Host hostData={housingData.host} />

              {/* Classement du logement */}
              <Ratings rating={housingData.rating} />
            </div>
          </div>

          <div className="collapse_housing">
            {/* Description du logement */}
            <Collapse title="Description" content={housingData.description} />

            {/* Equipements du logement en colonne */}
            <Collapse title="Equipements" content={housingData.equipments} isColumn={true} />
          </div>
        </main >
      )}
    </div>
  );
};

export default Housing;