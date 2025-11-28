
import { Place } from "./types";

export const PLACES: Place[] = [
  // --- Fastfood ---
  {
    id: 'f1',
    name: 'McDonald\'s',
    type: 'fastfood',
    description: 'De wereldberoemde keten voor burgers, frietjes en snelle service midden in het centrum.',
    address: 'Plaça de l\'Ajuntament, 27',
    isPartner: false,
    publicDiscount: {
        text: 'Geniet van kortingen via de app',
        link: 'https://links.mcdonaldsapps.com/Gc1Jsjj/i/nl-NL'
    },
    coordinates: { lat: 39.4708, lng: -0.3766 },
    imageUrl: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c301?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f2',
    name: 'Burger King',
    type: 'fastfood',
    description: 'Home of the Whopper. Vlam gegrilde burgers op een iconische locatie aan het plein.',
    address: 'Plaça de l\'Ajuntament, 25',
    isPartner: false,
    coordinates: { lat: 39.4707, lng: -0.3767 },
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f3',
    name: 'KFC',
    type: 'fastfood',
    description: 'Kentucky Fried Chicken. De bekende krokante kip, vlak naast het treinstation en de arena.',
    address: 'Carrer de Xàtiva, 24',
    isPartner: false,
    coordinates: { lat: 39.4672, lng: -0.3770 },
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f4',
    name: 'Popeyes Louisiana Kitchen',
    type: 'fastfood',
    description: 'New Orleans stijl gefrituurde kip, beroemd om zijn kruidige smaak en kip-sandwiches.',
    address: 'Passeig de Russafa, 20',
    isPartner: false,
    coordinates: { lat: 39.4695, lng: -0.3740 },
    imageUrl: 'https://images.unsplash.com/photo-1513639776629-9269d0d927fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f5',
    name: 'Freiduría El Gallo de Oro',
    type: 'fastfood',
    description: 'Authentieke Spaanse vis-snackbar (Vis). De beste plek voor verse calamares, ansjovis en gebakken vis.',
    address: 'Carrer de la Reina, 92',
    isPartner: true,
    discount: 'Gratis drankje bij een portie calamares',
    coordinates: { lat: 39.4665, lng: -0.3295 },
    imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80'
  },

  // --- Culture ---
  {
    id: '2',
    name: 'Ciudad de las Artes y las Ciencias',
    type: 'culture',
    description: 'Het futuristische symbool van Valencia. Een must-see architectonisch wonder.',
    address: 'Av. del Professor López Piñero, 7',
    isPartner: false,
    coordinates: { lat: 39.4549, lng: -0.3508 },
    imageUrl: 'https://images.unsplash.com/photo-1541270941907-3d71450259eb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '19',
    name: 'La Lonja de la Seda',
    type: 'culture',
    description: 'UNESCO Werelderfgoed. De oude zijdebeurs, een gotisch meesterwerk.',
    address: 'Carrer de la Llotja, 2',
    isPartner: false,
    coordinates: { lat: 39.4744, lng: -0.3784 },
    imageUrl: 'https://images.unsplash.com/photo-1647455871230-07e3a242c738?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '20',
    name: 'Catedral de Valencia',
    type: 'culture',
    description: 'De thuisbasis van de Heilige Graal. Beklim de Miguelete toren voor uitzicht.',
    address: 'Plaça de l\'Almoina, s/n',
    isPartner: false,
    coordinates: { lat: 39.4753, lng: -0.3755 },
    imageUrl: 'https://images.unsplash.com/photo-1506456073714-25036130b91e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '21',
    name: 'Torres de Serranos',
    type: 'culture',
    description: 'Een van de twee overgebleven stadspoorten van de oude stadsmuur.',
    address: 'Plaça dels Furs, s/n',
    isPartner: true,
    discount: 'Gratis audiotour via app',
    coordinates: { lat: 39.4791, lng: -0.3760 },
    imageUrl: 'https://images.unsplash.com/photo-1596541663957-3075670868a6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '22',
    name: 'Plaza de la Virgen',
    type: 'culture',
    description: 'Het historische hart van de stad met de beroemde Turia fontein.',
    address: 'Plaça de la Verge',
    isPartner: false,
    coordinates: { lat: 39.4764, lng: -0.3753 },
    imageUrl: 'https://images.unsplash.com/photo-1598485295629-679959649533?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23',
    name: 'Palacio del Marqués de Dos Aguas',
    type: 'culture',
    description: 'Nationaal Keramiekmuseum met een verbluffende albasten barokke gevel.',
    address: 'Carrer del Poeta Querol, 2',
    isPartner: false,
    coordinates: { lat: 39.4725, lng: -0.3745 },
    imageUrl: 'https://images.unsplash.com/photo-1662998638686-353634026330?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '24',
    name: 'Estació del Nord',
    type: 'culture',
    description: 'Prachtig modernistisch treinstation met veel mozaïekwerk.',
    address: 'Carrer d\'Alacant, 25',
    isPartner: false,
    coordinates: { lat: 39.4670, lng: -0.3773 },
    imageUrl: 'https://images.unsplash.com/photo-1596131398701-d8050949d214?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '25',
    name: 'Mercado de Colón',
    type: 'culture',
    description: 'Chique markthal omgebouwd tot een gastro-ruimte met cafés en restaurants.',
    address: 'Carrer de Jorge Juan, 19',
    isPartner: true,
    discount: '10% korting bij geselecteerde kraampjes',
    coordinates: { lat: 39.4697, lng: -0.3695 },
    imageUrl: 'https://images.unsplash.com/photo-1582298583416-015e4a504d6e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '26',
    name: 'IVAM',
    type: 'culture',
    description: 'Institut Valencià d\'Art Modern. Hedendaagse kunst in een strak gebouw.',
    address: 'Carrer de Guillem de Castro, 118',
    isPartner: false,
    coordinates: { lat: 39.4806, lng: -0.3828 },
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3969105?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '27',
    name: 'Museo de Bellas Artes',
    type: 'culture',
    description: 'Een van de belangrijkste kunstmusea van Spanje, met werken van Goya en Velázquez.',
    address: 'Carrer de Sant Pius V, 9',
    isPartner: false,
    coordinates: { lat: 39.4795, lng: -0.3703 },
    imageUrl: 'https://images.unsplash.com/photo-1549487961-41270258d46a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '28',
    name: 'San Nicolás Church',
    type: 'culture',
    description: 'De "Sixtijnse Kapel" van Valencia. Adembenemende fresco\'s.',
    address: 'Carrer dels Cavallers, 35',
    isPartner: true,
    discount: '€2 korting op entree',
    coordinates: { lat: 39.4761, lng: -0.3787 },
    imageUrl: 'https://images.unsplash.com/photo-1628172909436-5d61413fa5c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '29',
    name: 'Torres de Quart',
    type: 'culture',
    description: 'De westelijke stadspoort, die nog steeds de littekens van kanonskogels draagt.',
    address: 'Plaça de Santa Úrsula',
    isPartner: false,
    coordinates: { lat: 39.4757, lng: -0.3840 },
    imageUrl: 'https://images.unsplash.com/photo-1620215772652-9447e112cb9b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '30',
    name: 'Museo Fallero',
    type: 'culture',
    description: 'Museum waar de geredde "Ninots" van het Las Fallas festival worden tentoongesteld.',
    address: 'Plaça de Montolivet, 4',
    isPartner: false,
    coordinates: { lat: 39.4611, lng: -0.3582 },
    imageUrl: 'https://images.unsplash.com/photo-1616429215886-c4d375354964?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '31',
    name: 'Centre del Carme',
    type: 'culture',
    description: 'Oud klooster omgebouwd tot cultureel centrum met wisselende exposities.',
    address: 'Carrer del Museu, 2',
    isPartner: false,
    coordinates: { lat: 39.4800, lng: -0.3790 },
    imageUrl: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '32',
    name: 'Palau de la Música',
    type: 'culture',
    description: 'Concertgebouw in de Turia tuinen met prachtige glazen gevel en palmbomen binnen.',
    address: 'Passeig de l\'Albereda, 30',
    isPartner: false,
    coordinates: { lat: 39.4674, lng: -0.3614 },
    imageUrl: 'https://images.unsplash.com/photo-1542345513-8a3069c93a02?auto=format&fit=crop&w=800&q=80'
  },

  // --- Activities ---
  {
    id: '3',
    name: 'Mercado Central',
    type: 'activity',
    description: 'Een van de oudste nog draaiende markten van Europa. Proef de lokale sfeer.',
    address: 'Plaça de la Ciutat de Bruges',
    isPartner: false,
    coordinates: { lat: 39.4741, lng: -0.3794 },
    imageUrl: 'https://images.unsplash.com/photo-1533920145262-327c56a6eb2a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Turia Park Fietstour',
    type: 'activity',
    description: 'Huur een fiets en ontdek de groene long van de stad in de drooggelegde rivierbedding.',
    address: 'Jardín del Turia',
    isPartner: true,
    discount: '15% korting op fietsverhuur',
    coordinates: { lat: 39.4690, lng: -0.3600 },
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '33',
    name: 'Oceanogràfic',
    type: 'activity',
    description: 'Het grootste aquarium van Europa. Loop door tunnels omringd door haaien.',
    address: 'Carrer d\'Eduardo Primo Yúfera, 1B',
    isPartner: true,
    discount: 'Fast-track toegang',
    coordinates: { lat: 39.4528, lng: -0.3484 },
    imageUrl: 'https://images.unsplash.com/photo-1582991880461-8b438dbdb031?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '34',
    name: 'Bioparc Valencia',
    type: 'activity',
    description: 'Een innovatieve dierentuin zonder hekken, die de Afrikaanse savanne nabootst.',
    address: 'Av. Pío Baroja, 3',
    isPartner: true,
    discount: '10% korting op familietickets',
    coordinates: { lat: 39.4784, lng: -0.4077 },
    imageUrl: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '35',
    name: 'Albufera Boottocht',
    type: 'activity',
    description: 'Vaar tijdens zonsondergang over het grootste meer van Spanje.',
    address: 'Embarcadero de la Albufera',
    isPartner: true,
    discount: '2e persoon gratis bij zonsondergang',
    coordinates: { lat: 39.3333, lng: -0.3333 },
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '36',
    name: 'Mestalla Stadion Tour',
    type: 'activity',
    description: 'Bezoek het historische stadion van Valencia CF, een van de oudste in Spanje.',
    address: 'Av. de Suècia, s/n',
    isPartner: false,
    coordinates: { lat: 39.4746, lng: -0.3582 },
    imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '37',
    name: 'Playa de la Malvarrosa',
    type: 'activity',
    description: 'Het stadsstrand van Valencia. Breed zandstrand met een gezellige boulevard.',
    address: 'Passeig de Neptú',
    isPartner: false,
    coordinates: { lat: 39.4675, lng: -0.3230 },
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '38',
    name: 'Jardín de Monforte',
    type: 'activity',
    description: 'Een romantische, neoklassieke tuin vol standbeelden en fonteinen.',
    address: 'Carrer de Montfort',
    isPartner: false,
    coordinates: { lat: 39.4786, lng: -0.3639 },
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '39',
    name: 'Gulliver Park',
    type: 'activity',
    description: 'Gigantische speeltuin in de vorm van Gulliver. Geweldig voor kinderen (en volwassenen).',
    address: 'Jardín del Turia',
    isPartner: false,
    coordinates: { lat: 39.4627, lng: -0.3592 },
    imageUrl: 'https://images.unsplash.com/photo-1620509652225-4c0744e3395b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '40',
    name: 'Hemisfèric',
    type: 'activity',
    description: 'IMAX bioscoop en planetarium in de vorm van een gigantisch oog.',
    address: 'Av. del Professor López Piñero, 3',
    isPartner: false,
    coordinates: { lat: 39.4557, lng: -0.3541 },
    imageUrl: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae16?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '41',
    name: 'Cabanyal Wijkwandeling',
    type: 'activity',
    description: 'Verken de oude visserswijk met zijn kleurrijke betegelde huizen.',
    address: 'El Cabanyal',
    isPartner: true,
    discount: 'Gratis digitale wandelgids',
    coordinates: { lat: 39.4699, lng: -0.3289 },
    imageUrl: 'https://images.unsplash.com/photo-1512413346738-9cb579bc19c3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '42',
    name: 'Jardín Botánico',
    type: 'activity',
    description: 'Botanische tuin van de universiteit, een oase van rust vol zeldzame planten.',
    address: 'Carrer de Quart, 80',
    isPartner: false,
    coordinates: { lat: 39.4770, lng: -0.3860 },
    imageUrl: 'https://images.unsplash.com/photo-1496568257322-1981d3bc8d8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '43',
    name: 'Catamaran Cruise',
    type: 'activity',
    description: 'Zeiltocht vanuit de haven, perfect om af te koelen op zee.',
    address: 'Marina de Valencia',
    isPartner: true,
    discount: '10% korting op ochtendvaarten',
    coordinates: { lat: 39.4616, lng: -0.3225 },
    imageUrl: 'https://images.unsplash.com/photo-1566418855470-3636599292e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '44',
    name: 'Veles e Vents',
    type: 'activity',
    description: 'Iconisch gebouw in de haven, hotspot voor events en uitzicht.',
    address: 'Marina de Valencia',
    isPartner: false,
    coordinates: { lat: 39.4608, lng: -0.3232 },
    imageUrl: 'https://images.unsplash.com/photo-1619623661271-92cb716f9f6e?auto=format&fit=crop&w=800&q=80'
  },

  // --- Shops ---
  {
    id: '45',
    name: 'Calle Colón',
    type: 'shop',
    description: 'De belangrijkste winkelstraat van Valencia met alle grote merken.',
    address: 'Carrer de Colón',
    isPartner: false,
    coordinates: { lat: 39.4688, lng: -0.3730 },
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '46',
    name: 'Mercado de Ruzafa',
    type: 'shop',
    description: 'Kleurrijke buurtmarkt in de trendy wijk Ruzafa. Minder toeristisch dan Central.',
    address: 'Plaça del Baró de Corts',
    isPartner: false,
    coordinates: { lat: 39.4633, lng: -0.3755 },
    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '47',
    name: 'Plaza Redonda',
    type: 'shop',
    description: 'Uniek rond plein vol met kleine winkeltjes voor handwerk en souvenirs.',
    address: 'Plaça Redona',
    isPartner: true,
    discount: '5% korting bij keramiekwinkel',
    coordinates: { lat: 39.4737, lng: -0.3780 },
    imageUrl: 'https://images.unsplash.com/photo-1519789112957-c3a1b02534cb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '48',
    name: 'Cestos y Mimbres',
    type: 'shop',
    description: 'Traditionele winkel gespecialiseerd in rieten manden en tassen.',
    address: 'Carrer del Músic Peydró, 52',
    isPartner: true,
    discount: '10% korting op handgemaakte tassen',
    coordinates: { lat: 39.4735, lng: -0.3790 },
    imageUrl: 'https://images.unsplash.com/photo-1599692482352-7e7215274d44?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '49',
    name: 'Ale-Hop Flagship',
    type: 'shop',
    description: 'De bekende Spaanse cadeauwinkel, met de koe voor de deur.',
    address: 'Plaza del Ayuntamiento',
    isPartner: false,
    coordinates: { lat: 39.4700, lng: -0.3760 },
    imageUrl: 'https://images.unsplash.com/photo-1531265726475-52ad60219627?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '50',
    name: 'Simple',
    type: 'shop',
    description: 'Winkel met prachtige, lokaal gemaakte Spaanse producten en design.',
    address: 'Carrer del Palau, 5',
    isPartner: true,
    discount: 'Gratis ansichtkaart bij aankoop',
    coordinates: { lat: 39.4755, lng: -0.3765 },
    imageUrl: 'https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?auto=format&fit=crop&w=800&q=80'
  }
];
