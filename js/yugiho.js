const listYugiho = async () => {

    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell%20Card');

    const data = await response.json();

    console.log(data.data);
    
    let cards='';

    data.data.forEach((card, index) => {

        cards += `
        
        <li>
            <a class="card" id="${index}">
                <img src="https://images.ygoprodeck.com/images/cards_cropped/${card.id}.jpg" class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                            <path />
                        </svg>
                        <img class="card__thumb" src="https://images.ygoprodeck.com/images/cards_cropped/${card.id}.jpg" alt="" />
                       <div class="card__header-text">
                            <h3 class="card__title">${card.name}</h3>
                        </div>
                    </div>
                    <p class="card__description">${card.desc}</p>
                    
                    <p class="card__description">type: ${card.type}</p>
                    <p class="card__description">atk: ${card.atk}</p>
                    <p class="card__description">def: ${card.def}</p>
                    <p class="card__description">level: ${card.level}</p>
                </div>
            </a>
        </li>

        `;

    });

    document.getElementById('cards').innerHTML = cards;
   

}

window.addEventListener('load', function () {

    listYugiho();

});