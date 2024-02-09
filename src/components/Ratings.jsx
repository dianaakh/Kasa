import React, { useEffect, useState } from 'react';

const Ratings = ({ rating }) => {
    const [stars, setStars] = useState([]); 

    useEffect(() => {

        const tab = []

        /* Boucle pour générer les étoiles en fonction de la prop "rating" */
        for (let i = 1; i <= 5; i++) {
        
            /* Détermine la classe CSS pour chaque étoile en fonction de la prop "rating" */
            const starClass = i <= rating ? 'fa-solid fa-star' : 'fa-solid fa-star star-inactive';
            tab.push(<i key={i} className={starClass}></i>); 
            /* Ajoute l'élément <i>, avec la classe correspondante, au tableau à chaque itération de la boucle */
        }

        /* Met à jour l'état "stars" avec le tableau "tab" nouvellement créé. */
        setStars(tab)  
    }, [rating])  /* Le bloc de code à l'intérieur du useEffect ne sera réexécuté que si la valeur de la prop rating change */

/* Retourne un élément contenant les étoiles générées */
    return <div className="rating">{stars}</div>; 
};

export default Ratings;