import tourImage from '../assets/tour.jpg';
import cultureImage from '../assets/culture.jpg';
import yalaImage from '../assets/yala.jpg';
import scenicImage from '../assets/Scenic.jpg';
import ayurvedaImage from '../assets/Ayurveda.jpg';
import ultimateImage from '../assets/Ultimate.webp';

export interface TourDay {
  route: string;
  dayLabel: string;
  description: string;
}

export interface TourData {
  slug: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  color: string;
  itinerary: TourDay[];
}

export const tours: TourData[] = [
  {
    slug: 'classic-mini-tour',
    title: 'Classic Mini Tour',
    duration: '4 Days / 3 Nights',
    description: 'A short but powerful journey through Sri Lanka\'s Cultural Triangle. Perfect for travellers with limited time.',
    image: tourImage,
    highlights: ['Colombo', 'Kandy', 'Dambulla', 'Sigiriya', 'Polonnaruwa', 'Anuradhapura'],
    inclusions: ['Accommodation', 'Transfers', 'English-speaking guide', 'Daily breakfast'],
    exclusions: ['Air tickets', 'Entrance fees', 'Personal expenses'],
    color: '#d4af37',
    itinerary: [
      {
        route: 'Colombo – Kandy',
        dayLabel: 'Day 1',
        description: 'Arrive at Bandaranaike International Airport and met by "Visit SL Travels" representatives. You leave Colombo in the morning and drive along busy highways into the interior of the island. In Pinnewela you will visit the elephant orphanage, where about eighty elephants are well looked after, which have been found throughout the country abandoned by their herd and brought there. You can watch milk feeding for baby jumbos and the daily bath in the nearby river. After this you will reach, the old royal city of Kandy, beautifully nestled between green hills. In Kandy, you will visit the temple of the tooth relic, which is the holiest shrine in Sri Lanka, where the tooth relic of Lord Buddha is highly venerated. In the evening you\'ll have the opportunity to see a dance performance, where you will see the famous Kandyan dances, as well as up-country and devil dances. Overnight in Kandy.'
      },
      {
        route: 'Dambulla – Sigiriya',
        dayLabel: 'Day 2',
        description: 'After breakfast visit the world famous Botanical Garden in Peradeniya. The park dates back to 1371 under the reign of king Vikrama Bahu III when he held court here. The English put the cornerstone of the present garden in 1821. Here will find a very large variety of orchids, palms, bushes, as well as tropical plants and flowers of all type. Then you will leave Kandy and will proceed to the north. Along the road you will see paddy fields, coconut groves, rubber and spice gardens and plantations. You will stop at one of the spice gardens and there you can see a lot of spice plants, bushes and plants cropping spices. After this visit you will ascend for a visit the Dambulla cave temple. This temple complex consists of five separate caverns with numerous statues of the Buddha and Hindu deities. Overnight in Sigiriya.'
      },
      {
        route: 'Sigiriya – Polonnaruwa',
        dayLabel: 'Day 3',
        description: 'After breakfast you will visit the Sigiriya rock. This impressive monolith which rises 200 meters out of the jungle has been transformed in the 5th Century by king Kashyapa into a fortress and became his capital. Here you will see the frescoes of the Sigiriya Maidens. In the afternoon you will drive to Polonnaruwa for the visit of the well preserved remains of the city which has been the capital in Sri Lanka from the 11th to the 13th Century. You will see the excavations: Temples, Dagobas, the royal palace, the royal library, ect. Overnight in Sigiriya.'
      },
      {
        route: 'Anuradhapura – Colombo',
        dayLabel: 'Day 4',
        description: 'After breakfast you leave to Anuradhapura in order to visit the ancient 1st capital of Sri Lanka. You will see some of the most famous as well as the tallest Dagoba of Sri Lanka, remains from palaces, temples, monasteries, ceremonial baths and the temple of the holy Bo-tree. After the visit of Anuradhapura you leave for Colombo, on the way you pass paddy fields and coconut plantations. You will reach Colombo or the airport in the evening.'
      }
    ]
  },
  {
    slug: 'cultural-heritage-tour',
    title: 'Cultural Heritage Tour',
    duration: '5 Days / 4 Nights',
    description: 'Step into 2,000+ years of history with visits to UNESCO sites, ancient capitals, and sacred temples.',
    image: cultureImage,
    highlights: ['Negombo', 'Sigiriya', 'Pinnawala', 'Anuradhapura', 'Kandy', 'Dambulla'],
    inclusions: ['Accommodation', 'Private transport', 'Guide', 'Daily breakfast'],
    exclusions: ['Flights', 'Entrance tickets', 'Personal expenses'],
    color: '#e8766a',
    itinerary: [
      {
        route: 'Airport – Negombo',
        dayLabel: 'Day 1',
        description: 'Arrive at Bandaranaike International Airport and transfer to your hotel in Negombo. Relax and explore the charming coastal town with its Dutch-era canal, bustling fish market, and golden beach. Overnight in Negombo.'
      },
      {
        route: 'Negombo – Pinnawala – Sigiriya',
        dayLabel: 'Day 2',
        description: 'After breakfast, drive to Pinnawala Elephant Orphanage where you can witness bathing and feeding of rescued elephants. Continue to Sigiriya and explore the surrounding area. Overnight in Sigiriya.'
      },
      {
        route: 'Sigiriya – Dambulla',
        dayLabel: 'Day 3',
        description: 'Morning climb of the Sigiriya Rock Fortress, a UNESCO World Heritage Site. Marvel at the ancient frescoes and the breathtaking views from the summit. Afternoon visit to the Dambulla Cave Temple with its impressive collection of Buddha statues and paintings. Overnight in Sigiriya.'
      },
      {
        route: 'Sigiriya – Anuradhapura',
        dayLabel: 'Day 4',
        description: 'Drive to Anuradhapura, the ancient capital of Sri Lanka. Visit the sacred Sri Maha Bodhi tree, Ruwanwelisaya Dagoba, Jetavanaramaya, and the ancient monasteries. This UNESCO city offers a glimpse into over 2,000 years of Buddhist civilization. Overnight in Anuradhapura.'
      },
      {
        route: 'Anuradhapura – Kandy – Airport',
        dayLabel: 'Day 5',
        description: 'Drive to Kandy, visiting a spice garden en route. In Kandy, visit the Temple of the Tooth Relic, the Royal Botanical Gardens at Peradeniya, and enjoy a traditional Kandyan dance performance. Transfer to the airport for departure.'
      }
    ]
  },
  {
    slug: 'best-of-sri-lanka',
    title: 'Best of Sri Lanka',
    duration: '7 Days / 6 Nights',
    description: 'A one-week escape covering cultural wonders, scenic highlands, and thrilling wildlife safaris.',
    image: yalaImage,
    highlights: ['Negombo', 'Anuradhapura', 'Sigiriya', 'Wildlife Safari', 'Dambulla', 'Kandy', 'Nuwara Eliya'],
    inclusions: ['Hotels', 'Transport', 'English-speaking chauffeur', 'Daily breakfast'],
    exclusions: ['International flights', 'Meals not listed', 'Entrance fees'],
    color: '#165b63',
    itinerary: [
      {
        route: 'Airport – Negombo',
        dayLabel: 'Day 1',
        description: 'Arrive at the airport and transfer to Negombo. Explore the vibrant fishing village, Dutch Fort, and relax on the beach. Overnight in Negombo.'
      },
      {
        route: 'Negombo – Anuradhapura',
        dayLabel: 'Day 2',
        description: 'Drive to Anuradhapura and explore the ancient ruins including Sri Maha Bodhi, Ruwanwelisaya, and Thuparamaya. Overnight in Anuradhapura.'
      },
      {
        route: 'Anuradhapura – Sigiriya',
        dayLabel: 'Day 3',
        description: 'Visit Sigiriya Rock Fortress and explore the ancient gardens, frescoes, and summit. Afternoon visit to Polonnaruwa. Overnight in Sigiriya.'
      },
      {
        route: 'Sigiriya – Dambulla – Kandy',
        dayLabel: 'Day 4',
        description: 'Visit the Dambulla Cave Temple, then drive to Kandy stopping at a spice garden. Evening visit to the Temple of the Tooth and Kandyan dance show. Overnight in Kandy.'
      },
      {
        route: 'Kandy – Nuwara Eliya',
        dayLabel: 'Day 5',
        description: 'Visit the Royal Botanical Gardens then drive through scenic tea plantations to Nuwara Eliya. Visit a tea factory and enjoy the cool hill country climate. Overnight in Nuwara Eliya.'
      },
      {
        route: 'Nuwara Eliya – Wildlife Safari',
        dayLabel: 'Day 6',
        description: 'Drive to the wildlife region and enjoy an afternoon jeep safari. Spot leopards, elephants, crocodiles, and exotic birds in their natural habitat. Overnight near the national park.'
      },
      {
        route: 'Safari – Colombo / Airport',
        dayLabel: 'Day 7',
        description: 'Morning at leisure or optional early morning safari. Drive to Colombo for a city tour or directly to the airport for departure.'
      }
    ]
  },
  {
    slug: 'scenic-sri-lanka',
    title: 'Scenic Sri Lanka',
    duration: '10 Days / 9 Nights',
    description: 'A scenic journey through misty tea hills, waterfalls, ancient temples, and wild safaris.',
    image: scenicImage,
    highlights: ['Sigiriya', 'Dambulla', 'Kandy', 'Pinnawala', 'Nuwara Eliya', 'Ella', 'Yala National Park'],
    inclusions: ['Accommodation', 'Chauffeur-guide', 'Private transfers', 'Daily breakfast'],
    exclusions: ['Flights', 'Optional activities', 'Personal costs'],
    color: '#2d8a4e',
    itinerary: [
      { route: 'Airport – Negombo', dayLabel: 'Day 1', description: 'Arrive and transfer to Negombo. Relax and acclimatize. Overnight in Negombo.' },
      { route: 'Negombo – Pinnawala – Sigiriya', dayLabel: 'Day 2', description: 'Visit the Pinnawala Elephant Orphanage en route to Sigiriya. Overnight in Sigiriya.' },
      { route: 'Sigiriya – Polonnaruwa', dayLabel: 'Day 3', description: 'Climb Sigiriya Rock Fortress in the morning. Afternoon visit to Polonnaruwa ancient city. Overnight in Sigiriya.' },
      { route: 'Sigiriya – Dambulla – Kandy', dayLabel: 'Day 4', description: 'Visit Dambulla Cave Temple, then drive to Kandy with a stop at a spice garden. Evening Kandyan dance show. Overnight in Kandy.' },
      { route: 'Kandy Sightseeing', dayLabel: 'Day 5', description: 'Full day in Kandy. Visit the Temple of the Tooth Relic and the Royal Botanical Gardens at Peradeniya. Overnight in Kandy.' },
      { route: 'Kandy – Nuwara Eliya', dayLabel: 'Day 6', description: 'Scenic drive through tea plantations to Nuwara Eliya. Visit a tea factory and Gregory Lake. Overnight in Nuwara Eliya.' },
      { route: 'Nuwara Eliya – Ella', dayLabel: 'Day 7', description: 'Drive to Ella, stopping at Ravana Falls. Visit Nine Arches Bridge and Little Adam\'s Peak. Overnight in Ella.' },
      { route: 'Ella – Yala', dayLabel: 'Day 8', description: 'Drive to Yala and enjoy an afternoon jeep safari in Yala National Park. Overnight near Yala.' },
      { route: 'Yala – Galle', dayLabel: 'Day 9', description: 'Drive along the southern coast to Galle. Explore the historic Galle Fort, a UNESCO World Heritage Site. Overnight in Galle.' },
      { route: 'Galle – Airport', dayLabel: 'Day 10', description: 'Morning at leisure in Galle. Transfer to the airport for departure.' }
    ]
  },
  {
    slug: 'round-tour-with-ayurveda',
    title: 'Round Tour with Ayurveda',
    duration: '10 Days / 9 Nights',
    description: 'Blend cultural discovery with Ayurveda wellness sessions for a truly restorative holiday.',
    image: ayurvedaImage,
    highlights: ['Colombo', 'Pinnawala', 'Kandy', 'Dambulla', 'Sigiriya', 'Polonnaruwa', 'Nuwara Eliya'],
    inclusions: ['Accommodation', 'Transport', 'Ayurveda therapy sessions', 'Guide'],
    exclusions: ['Flights', 'Meals not mentioned', 'Optional spa add-ons'],
    color: '#8b5e3c',
    itinerary: [
      { route: 'Airport – Negombo', dayLabel: 'Day 1', description: 'Arrive and transfer to Negombo. Evening Ayurveda consultation and relaxation treatment. Overnight in Negombo.' },
      { route: 'Negombo – Pinnawala – Kandy', dayLabel: 'Day 2', description: 'Visit Pinnawala Elephant Orphanage. Drive to Kandy. Afternoon Ayurveda herbal steam bath. Overnight in Kandy.' },
      { route: 'Kandy Sightseeing', dayLabel: 'Day 3', description: 'Visit Temple of the Tooth Relic and Royal Botanical Gardens. Afternoon Ayurveda oil massage. Overnight in Kandy.' },
      { route: 'Kandy – Dambulla – Sigiriya', dayLabel: 'Day 4', description: 'Drive to Dambulla Cave Temple, then proceed to Sigiriya. Evening relaxation treatment. Overnight in Sigiriya.' },
      { route: 'Sigiriya', dayLabel: 'Day 5', description: 'Morning climb of Sigiriya Rock Fortress. Afternoon Ayurveda Shirodhara therapy. Overnight in Sigiriya.' },
      { route: 'Sigiriya – Polonnaruwa', dayLabel: 'Day 6', description: 'Visit the ancient city of Polonnaruwa. Afternoon herbal body scrub treatment. Overnight in Sigiriya.' },
      { route: 'Sigiriya – Nuwara Eliya', dayLabel: 'Day 7', description: 'Drive through scenic hill country to Nuwara Eliya. Visit a tea factory. Evening Ayurveda foot massage. Overnight in Nuwara Eliya.' },
      { route: 'Nuwara Eliya – Ella', dayLabel: 'Day 8', description: 'Explore Ella with its stunning views, Nine Arches Bridge, and waterfalls. Ayurveda relaxation session. Overnight in Ella.' },
      { route: 'Ella – South Coast', dayLabel: 'Day 9', description: 'Drive to the south coast. Full Ayurveda treatment day with traditional therapies. Overnight on the south coast.' },
      { route: 'South Coast – Airport', dayLabel: 'Day 10', description: 'Final morning Ayurveda session. Transfer to the airport feeling rejuvenated and refreshed.' }
    ]
  },
  {
    slug: 'ultimate-sri-lanka',
    title: 'Ultimate Sri Lanka',
    duration: '15 Days / 14 Nights',
    description: 'The ultimate island experience — two weeks of heritage, safaris, rail journeys, and golden beaches.',
    image: ultimateImage,
    highlights: ['Negombo', 'Pinnawala', 'Sigiriya', 'Polonnaruwa', 'Matale', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle'],
    inclusions: ['Accommodation', 'Transport', 'English-speaking chauffeur', 'Daily breakfast'],
    exclusions: ['International airfare', 'Meals not listed', 'Personal expenses'],
    color: '#d4af37',
    itinerary: [
      { route: 'Airport – Negombo', dayLabel: 'Day 1', description: 'Arrive and transfer to Negombo. Evening beach walk and seafood dinner. Overnight in Negombo.' },
      { route: 'Negombo – Pinnawala – Dambulla', dayLabel: 'Day 2', description: 'Visit Pinnawala Elephant Orphanage. Drive to Dambulla and visit the Cave Temple. Overnight in Dambulla.' },
      { route: 'Dambulla – Sigiriya', dayLabel: 'Day 3', description: 'Morning climb of Sigiriya Rock Fortress. Afternoon at leisure or village tour by bullock cart. Overnight in Sigiriya.' },
      { route: 'Sigiriya – Polonnaruwa', dayLabel: 'Day 4', description: 'Full day exploring the ancient city of Polonnaruwa with its well-preserved ruins. Overnight in Sigiriya.' },
      { route: 'Sigiriya – Anuradhapura', dayLabel: 'Day 5', description: 'Drive to Anuradhapura and explore the sacred city, Sri Maha Bodhi, and ancient dagobas. Overnight in Anuradhapura.' },
      { route: 'Anuradhapura – Matale – Kandy', dayLabel: 'Day 6', description: 'Drive to Kandy via Matale, visiting a spice garden. Arrive in Kandy and visit the Temple of the Tooth. Overnight in Kandy.' },
      { route: 'Kandy Sightseeing', dayLabel: 'Day 7', description: 'Visit Royal Botanical Gardens, Kandy Lake walk, gem museum, and evening Kandyan dance performance. Overnight in Kandy.' },
      { route: 'Kandy – Nuwara Eliya', dayLabel: 'Day 8', description: 'Scenic train or road journey through tea country to Nuwara Eliya. Visit a tea factory and Hakgala Botanical Garden. Overnight in Nuwara Eliya.' },
      { route: 'Nuwara Eliya – Ella', dayLabel: 'Day 9', description: 'Drive to Ella, stopping at Rawana Falls. Explore Nine Arches Bridge and Little Adam\'s Peak. Overnight in Ella.' },
      { route: 'Ella – Yala', dayLabel: 'Day 10', description: 'Morning at Ella. Afternoon drive to Yala region. Evening at leisure. Overnight near Yala.' },
      { route: 'Yala Safari', dayLabel: 'Day 11', description: 'Full day safari in Yala National Park. Spot leopards, elephants, bears, and exotic birds. Overnight near Yala.' },
      { route: 'Yala – Mirissa', dayLabel: 'Day 12', description: 'Drive along the coast to Mirissa. Afternoon at the beach. Optional whale watching excursion. Overnight in Mirissa.' },
      { route: 'Mirissa – Galle', dayLabel: 'Day 13', description: 'Morning on the beach. Afternoon drive to Galle and explore the historic Galle Fort, a UNESCO site. Overnight in Galle.' },
      { route: 'Galle – Colombo', dayLabel: 'Day 14', description: 'Drive to Colombo for a city tour including Gangaramaya Temple, Pettah Market, Galle Face Green, and Independence Square. Overnight in Colombo.' },
      { route: 'Colombo – Airport', dayLabel: 'Day 15', description: 'Morning at leisure for last-minute shopping. Transfer to the airport for departure.' }
    ]
  }
];
