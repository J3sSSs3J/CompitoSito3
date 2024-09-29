const cityData = {
    'rome': {
        'name': 'Roma',
        'image': 'https://www.fodors.com/wp-content/uploads/2019/07/BestAncientSitesInRome__HERO_willian-west-YpKiwlvhOpI-unsplash.jpg',
        'description': 'Roma, conosciuta come la "Città Eterna", è la capitale d\'Italia e uno dei centri culturali e storici più importanti del mondo. Fondata nel 753 a.C., è famosa per la sua straordinaria storia, architettura e arte. Tra i suoi monumenti iconici si trovano il Colosseo, il Foro Romano e la Basilica di San Pietro.'    },
    'paris': {
        'name': 'Parigi',
        'image': 'https://th.bing.com/th/id/R.bb690f4e844bd3738dbae4c5b2c60b59?rik=HnlNPt5cR%2fbrag&riu=http%3a%2f%2fappuntidiviaggio.sevendays.biz%2fwp-content%2fuploads%2f44288531_xl.jpg&ehk=foBKAbMM2WJmPBfBFExhWol7khA5RLQBXFDgdf%2bBLVA%3d&risl=&pid=ImgRaw&r=0',
        'description': 'Parigi, la capitale della Francia, è conosciuta per i suoi musei d\'arte, monumenti come la Torre Eiffel e il Louvre. Con le sue strade romantiche e caffè storici, Parigi è un simbolo di cultura e bellezza.'    },
    'new-york': {
        'name': 'New York',
        'image': 'https://th.bing.com/th/id/R.1f361be35615a25366dc913229d0ea27?rik=VIOXjaEejdZcJA&pid=ImgRaw&r=0',
        'description': 'New York, la città che non dorme mai, è famosa per i suoi grattacieli, Central Park e la vivace atmosfera culturale. È un melting pot di culture e una delle città più iconiche del mondo.'    },
    'tokyo': {
        'name': 'Tokyo',
        'image': 'https://cdn.thecrazytourist.com/wp-content/uploads/2018/05/ccimage-shutterstock_197314337.jpg',
        'description': 'Tokyo, una metropoli futuristica, mescola la tradizione con la modernità, con templi antichi e grattacieli tecnologici. È conosciuta per la sua cucina deliziosa, la cultura pop e l\'efficienza dei trasporti pubblici.'    },
    'sydney': {
        'name': 'Sydney',
        'image': 'https://i1.wp.com/beautifulplacestovisit.com/wp-content/uploads/2011/07/Opera_House_with_Sydney.jpg',
        'description': 'Sydney, una città australiana vibrante, è famosa per l\'Opera House, il porto e le spiagge come Bondi Beach. Con un clima mite e una vivace scena culturale, Sydney è una meta ideale per i turisti. La città offre anche una varietà di attività all\'aperto, dai surf sulle onde del Pacifico a escursioni nei parchi nazionali circostanti, rendendola una destinazione affascinante per chi cerca avventura e relax.'    }
};

function showCity(city) {
    const cityInfo = cityData[city];
    
    document.getElementById('city-name').innerText = cityInfo.name; 
    document.getElementById('city-description').innerText = cityInfo.description;
    document.getElementById('city-image').src = cityInfo.image; 
    document.getElementById('city-image').alt = cityInfo.name; 
}
