const countriesData = {
  bn: { name: "Brunei", description: "A small but wealthy nation on the island of Borneo." },
  id: { name: "Indonesia", description: "An archipelago of over 17,000 islands known for its biodiversity and culture." },
  kh: { name: "Cambodia", description: "Home to the ancient Angkor Wat temple complex." },
  la: { name: "Laos", description: "A landlocked country known for mountainous terrain and Buddhist monasteries." },
  mm: { name: "Myanmar", description: "A nation with a rich cultural heritage and diverse ethnic groups." },
  my: { name: "Malaysia", description: "Known for a mix of modern cities and lush rainforests." },
  ph: { name: "Philippines", description: "An archipelago of over 7,000 islands known for its beaches and festivals." },
  sg: { name: "Singapore", description: "A global financial hub and island city-state." },
  th: { name: "Thailand", description: "A cultural hub famous for temples, food, and tropical islands." },
  tl: { name: "Timor-Leste", description: "A young nation with a strong sense of identity and scenic landscapes." },
  vn: { name: "Vietnam", description: "Rich in history, with stunning landscapes from Halong Bay to rice terraces." },
};

const params = new URLSearchParams(window.location.search);
const code = params.get("country");
const content = countriesData[code];

if (content) {
  document.getElementById("country-name").textContent = content.name;
  document.getElementById("tab-content").textContent = content.description;
} else {
  document.getElementById("country-name").textContent = "Country Not Found";
  document.getElementById("tab-content").textContent = "The requested country data is unavailable.";
}

const flagDiv = document.getElementById("flag");
flagDiv.style.backgroundImage = `url('/flags/${code}.svg')`;
document.getElementById("cover-photo").src = `/covers/${code}.jpg`;

document.addEventListener("DOMContentLoaded", () => {
  const tabContent = document.getElementById("tab-content");
  const tabs = document.querySelectorAll(".tab");

const countryTabsData = {
bn: {
      overview: [
        {
          title: "Absolute Monarchy",
          text: "Brunei is one of the few remaining absolute monarchies in the world. The Sultan holds full executive authority, serving as both the head of state and government. This centralized governance structure has helped maintain stability and continuity in national policies. While modern in many aspects, Brunei retains traditional elements of Malay Islamic Monarchy (MIB), emphasizing Islamic values, Malay culture, and royal authority.",
          image: "/images/bn/overview1.jpg"
        },
        {
          title: "Culture",
          text: "Brunei’s culture is deeply influenced by Islam, the official religion, which shapes daily life, attire, and social norms. Traditional arts such as silat (martial arts), songket weaving, and brasswork are preserved and promoted through cultural centers and festivals. Public conduct is modest and conservative, and celebrations like Hari Raya Aidilfitri are widely observed with open houses, traditional food, and community gatherings.",
          image: "/images/bn/overview2.jpg"
        },
        {
          title: "Wealth from Oil and Gas",
          text: "Brunei’s economy is heavily reliant on petroleum and natural gas, which account for the vast majority of its GDP and export earnings. The country's wealth from hydrocarbons has enabled it to offer citizens free healthcare, education, and subsidized housing. However, in recent years, Brunei has taken steps to diversify its economy, investing in sectors like tourism, halal manufacturing, and Islamic finance.",
          image: "/images/bn/overview3.jpg"
        }
      ],
      tourist: [
        {
          title: "Sultan Omar Ali Saifuddien Mosque",
          text: "A symbol of Islamic architecture in Brunei, this mosque features golden domes and a marble-clad structure surrounded by a man-made lagoon. Located in Bandar Seri Begawan, it's one of the most iconic landmarks in Southeast Asia.",
          image: "/images/bn/tourist1.jpg"
        },
        {
           title: "Kampong Ayer",
           text: "Known as the \"Venice of the East,\" this historic water village is built on stilts along the Brunei River. It's home to thousands of residents and includes schools, mosques, and shops—all accessible by wooden walkways and boats.",
           image: "/images/bn/tourist2.jpg"
        },
        {
           title: "Ulu Temburong National Park",
           text: "Often called the \"Green Jewel of Brunei,\" this rainforest reserve offers pristine biodiversity, canopy walks, and river treks. It’s accessible only by boat and protected under Brunei's strong conservation laws.",
           image: "/images/bn/tourist3.jpg"
        }
      ],
      cuisine: [
        {
          title: "Nasi Katok",
          text: "A beloved local dish consisting of plain rice, a piece of fried chicken, and spicy sambal. It's known for its simplicity, affordability, and 24/7 availability from roadside stalls across Brunei.",
          image: "/images/bn/cuisine1.jpg"
        },
        {
           title: "Ambuyat",
           text: "A sticky, starchy dish made from sago palm starch. It’s eaten with a bamboo fork and dipped in various sour and spicy sauces. Ambuyat is traditionally shared during communal meals.",
           image: "/images/bn/cuisine2.jpg"
        },
        {
           title: "Hati Buyah",
           text: "A spicy stir-fried dish made from beef lungs, often seasoned with soy sauce, chili, and garlic. It's a popular street food, especially enjoyed by locals during festive occasions.",
           image: "/images/bn/cuisine3.jpg"
        }
      ],
      practices: [
        {
          title: "Islamic Etiquette",
          text: "As an Islamic nation, Brunei follows religious customs that include modest dressing, daily prayers, and respect for religious practices such as fasting during Ramadan. Alcohol is banned, and public behavior is expected to align with Islamic values.",
          image: "/images/bn/practices1.jpg"
        },
        {
           title: "Royal Respect",
           text: "The Sultan and royal family are deeply revered in Brunei. Images of the Sultan are displayed in public places, and citizens are expected to show deference to royal ceremonies and protocols, including standing for the national anthem and royal processions.",
           image: "/images/bn/practices2.jpg"
        },
        {
           title: "Ramadan Observance",
           text: "During the holy month of Ramadan, Muslims in Brunei fast from dawn to dusk. The pace of life slows down during the day, and after sunset, families and communities gather for Iftar (breaking of the fast), often with traditional Bruneian dishes.",
           image: "/images/bn/practices3.jpg"
        }
      ]
    },
   kh: {
     overview: [
       {
         title: "Kingdom of Temples",
         text: "Cambodia is often referred to as the 'Land of Temples' due to its rich history as the heart of the ancient Khmer Empire. The country is home to Angkor Wat, the largest religious monument in the world. Its landscapes include the Mekong River, vast rice paddies, lowland plains, and Tonlé Sap — Southeast Asia’s largest freshwater lake.",
         image: "/images/kh/overview1.jpg"
       },
       {
         title: "Cultural Heritage",
         text: "Khmer culture is deeply rooted in Hindu-Buddhist traditions and royal legacy. From classical Apsara dance to silk weaving and stone carving, Cambodian art and performance are vibrant expressions of its past. Theravāda Buddhism plays a central role in daily life, guiding values, rituals, and festivals.",
         image: "/images/kh/overview2.jpg"
       },
       {
         title: "Post-Conflict Growth",
         text: "After decades of conflict and rebuilding, Cambodia is undergoing steady development. Phnom Penh and Siem Reap are modernizing rapidly, while tourism, textiles, and agriculture drive the economy. Despite facing poverty and infrastructure challenges, the youth-led population brings energy and ambition to the nation's future.",
         image: "/images/kh/overview3.jpg"
       }
     ],
     tourist: [
       {
         title: "Angkor Wat",
         text: "This iconic 12th-century temple complex is Cambodia’s most treasured national symbol. A UNESCO World Heritage site, Angkor Wat features vast stone carvings, grand galleries, and a spiritual ambiance that draws millions of visitors each year.",
         image: "/images/kh/tourist1.jpg"
       },
       {
         title: "Bayon Temple",
         text: "Located in Angkor Thom, Bayon is famed for its many stone faces smiling in all directions. The temple reflects the blend of spiritual and political vision of King Jayavarman VII and is a must-see archaeological wonder.",
         image: "/images/kh/tourist2.jpg"
       },
       {
         title: "Tonlé Sap Lake",
         text: "This massive freshwater lake is crucial to Cambodia's ecology and economy. Its floating villages, diverse birdlife, and seasonal flooding make it a unique destination for ecotourism and cultural immersion.",
         image: "/images/kh/tourist3.jpg"
       }
     ],
     cuisine: [
       {
         title: "Amok Trey",
         text: "One of Cambodia’s national dishes, this steamed fish curry is made with coconut milk, kroeung (a local spice paste), and eggs, served in banana leaf cups. It’s aromatic, creamy, and deeply flavorful.",
         image: "/images/kh/cuisine1.jpg"
       },
       {
         title: "Bai Sach Chrouk",
         text: "A popular breakfast dish consisting of grilled pork served over rice, often accompanied by pickled vegetables and clear soup. Simple yet savory, it’s a Cambodian comfort food staple.",
         image: "/images/kh/cuisine2.jpg"
       },
       {
         title: "Nom Banh Chok",
         text: "Also known as Khmer noodles, this dish features rice noodles topped with a green fish curry gravy and fresh herbs. It’s traditionally eaten in the morning and is a favorite among locals.",
         image: "/images/kh/cuisine3.jpg"
       }
     ],
     practices: [
       {
         title: "Buddhist Offerings",
         text: "Making daily offerings to monks and temples is a central practice in Cambodian Buddhism. People often give food, incense, or flowers to gain merit and show respect to spiritual leaders.",
         image: "/images/kh/practices1.jpg"
       },
       {
         title: "Khmer New Year",
         text: "Celebrated in mid-April, Khmer New Year (Chaul Chnam Thmey) is the most important national holiday. It includes water blessings, traditional games, temple visits, and joyful celebrations that blend Buddhist and folk traditions.",
         image: "/images/kh/practices2.jpg"
       },
       {
         title: "Respect for Ancestors",
         text: "Cambodians honor their ancestors during festivals like Pchum Ben, where families gather to make food offerings and pay respects to the spirits of the deceased. This tradition reinforces family bonds and spiritual beliefs.",
         image: "/images/kh/practices3.jpg"
       }
     ]
   }, la: {
     overview: [
       {
         title: "Landlocked Serenity",
         text: "Laos is the only landlocked country in Southeast Asia, bordered by five nations. Its geography is defined by lush mountains, river valleys, and the mighty Mekong River that flows through its heart. The country’s natural beauty includes waterfalls, caves, and forested highlands that remain relatively untouched.",
         image: "/images/la/overview1.jpg"
       },
       {
         title: "Buddhist Way of Life",
         text: "Theravāda Buddhism is central to Lao culture, influencing everything from architecture and education to daily routines. Monasteries are integral to each community, and monks play vital roles in preserving traditions and spiritual guidance.",
         image: "/images/la/overview2.jpg"
       },
       {
         title: "Slow Development, Rich Heritage",
         text: "Laos remains one of Southeast Asia’s least developed nations, yet it maintains a strong cultural identity rooted in history and tradition. The government promotes eco-tourism and sustainable growth while preserving local customs and natural landscapes.",
         image: "/images/la/overview3.jpg"
       }
     ],
     tourist: [
       {
         title: "Luang Prabang",
         text: "A UNESCO World Heritage city, Luang Prabang is known for its well-preserved architecture, Buddhist temples, and the morning alms-giving ritual. Nestled between rivers and mountains, it blends spirituality and colonial charm.",
         image: "/images/la/tourist1.jpg"
       },
       {
         title: "Kuang Si Falls",
         text: "Located near Luang Prabang, this multi-tiered waterfall is a breathtaking natural attraction with turquoise pools perfect for swimming. Surrounded by forest trails, it offers a serene retreat into nature.",
         image: "/images/la/tourist2.jpg"
       },
       {
         title: "Plain of Jars",
         text: "Scattered across the Xieng Khouang Plateau, the mysterious megalithic stone jars date back to the Iron Age. Their purpose remains unknown, making them one of Laos’s most intriguing archaeological sites.",
         image: "/images/la/tourist3.jpg"
       }
     ],
     cuisine: [
       {
         title: "Laap",
         text: "Often considered Laos’s national dish, laap is a minced meat salad made with herbs, lime juice, fish sauce, and toasted rice powder. It can be prepared with chicken, beef, pork, or fish, and is typically served with sticky rice.",
         image: "/images/la/cuisine1.jpg"
       },
       {
         title: "Tam Mak Hoong",
         text: "This Lao-style green papaya salad is spicy, sour, and savory, made with fermented fish sauce, chili, garlic, and lime. It's similar to Thailand’s som tam but with a bolder, funkier flavor unique to Laos.",
         image: "/images/la/cuisine2.jpg"
       },
       {
         title: "Khao Niew (Sticky Rice)",
         text: "Sticky rice is a staple of Lao cuisine, traditionally steamed in bamboo baskets and eaten with hands. It accompanies nearly every meal and reflects the country’s culinary identity and community dining culture.",
         image: "/images/la/cuisine3.jpg"
       }
     ],
     practices: [
       {
         title: "Morning Alms-Giving",
         text: "Each morning, locals in towns like Luang Prabang offer food to passing monks as a spiritual practice. This ritual, called 'Tak Bat', is a symbol of humility, devotion, and the tight bond between communities and monasteries.",
         image: "/images/la/practices1.jpg"
       },
       {
         title: "Baci Ceremony",
         text: "This traditional ritual is performed to welcome guests, celebrate major life events, or bless a journey. It involves the tying of white cotton strings around the wrists to preserve spiritual well-being and good fortune.",
         image: "/images/la/practices2.jpg"
       },
       {
         title: "Respectful Gestures",
         text: "Laotians greet each other with a 'nop'—hands pressed together with a slight bow—especially in formal or religious contexts. Respect for elders and modesty in behavior and dress are key aspects of Lao etiquette.",
         image: "/images/la/practices3.jpg"
       }
     ]
   }, id: {
     overview: [
       {
         title: "Archipelago Nation",
         text: "Indonesia is the world’s largest archipelagic state, comprising over 17,000 islands spread across the equator. It spans three time zones and is home to hundreds of ethnic groups and languages. The country’s unique geography ranges from lush rainforests and active volcanoes to coral reefs and savannahs, offering immense biodiversity and natural beauty.",
         image: "/images/id/overview1.jpg"
       },
       {
         title: "Cultural Diversity",
         text: "With over 300 ethnic groups, Indonesia’s cultural tapestry is rich and vibrant. Each region has distinct traditions, from Balinese Hinduism and Javanese court arts to the Toraja funerary rituals in Sulawesi. National mottos like “Bhinneka Tunggal Ika” (Unity in Diversity) highlight the country’s commitment to harmony among its diverse peoples.",
         image: "/images/id/overview2.jpg"
       },
       {
         title: "Economic Growth and Challenges",
         text: "Indonesia has emerged as a major Southeast Asian economy, driven by manufacturing, agriculture, and natural resources. Urban hubs like Jakarta, Surabaya, and Bandung are rapidly developing, but the country also faces challenges such as infrastructure gaps, environmental degradation, and wealth inequality. Digital innovation and e-commerce are on the rise, shaping a youthful, connected population.",
         image: "/images/id/overview3.jpg"
       }
     ],
     tourist: [
       {
         title: "Borobudur Temple",
         text: "The largest Buddhist temple in the world, Borobudur is a 9th-century marvel located in Central Java. Its intricate stone carvings and majestic stupas attract millions of pilgrims and tourists each year.",
         image: "/images/id/tourist1.jpg"
       },
       {
         title: "Bali",
         text: "Renowned for its beaches, temples, and vibrant arts scene, Bali is Indonesia’s top tourist destination. Visitors flock to Ubud for its cultural charm and to Kuta or Seminyak for world-class surfing and nightlife.",
         image: "/images/id/tourist2.jpg"
       },
       {
         title: "Komodo National Park",
         text: "A UNESCO World Heritage site, this park is home to the iconic Komodo dragon. Beyond wildlife, it offers pristine beaches, coral reefs, and stunning trekking trails across rugged islands.",
         image: "/images/id/tourist3.jpg"
       }
     ],
     cuisine: [
       {
         title: "Rendang",
         text: "Originating from the Minangkabau people of West Sumatra, rendang is a slow-cooked beef dish simmered in coconut milk and rich spices. It’s known for its tender texture and deep, complex flavor.",
         image: "/images/id/cuisine1.jpg"
       },
       {
         title: "Nasi Goreng",
         text: "This Indonesian-style fried rice is flavored with kecap manis (sweet soy sauce), garlic, shallots, and chili, and often topped with a fried egg and accompaniments like satay or shrimp crackers.",
         image: "/images/id/cuisine2.jpg"
       },
       {
         title: "Satay",
         text: "Skewered and grilled meats served with a savory peanut sauce, satay is a favorite across the archipelago. Variants include chicken, beef, lamb, and even seafood, often marinated in turmeric and other spices.",
         image: "/images/id/cuisine3.jpg"
       }
     ],
     practices: [
       {
         title: "Gotong Royong",
         text: "This traditional value emphasizes mutual cooperation and communal support. From building houses to organizing events, villagers work together to strengthen community bonds.",
         image: "/images/id/practices1.jpg"
       },
       {
         title: "Removing Shoes Indoors",
         text: "It’s customary to remove shoes before entering homes, mosques, and certain traditional establishments. This practice reflects cleanliness and respect.",
         image: "/images/id/practices2.jpg"
       },
       {
         title: "Respect for Elders",
         text: "Politeness and deference to elders are deeply embedded in Indonesian society. Younger people often use respectful language and gestures such as bowing the head or placing the hand on the chest during greetings.",
         image: "/images/id/practices3.jpg"
       }
     ]
   }, mm: {
     overview: [
       {
         title: "Golden Land of Pagodas",
         text: "Known as the 'Golden Land' for its thousands of gilded pagodas, Myanmar features a unique blend of mountainous terrain, river valleys, and coastal regions. The Irrawaddy River runs through the country, supporting agriculture and transportation.",
         image: "/images/mm/overview1.jpg"
       },
       {
         title: "Cultural Mosaic",
         text: "Myanmar is home to over 135 ethnic groups, each with its own language, attire, and customs. This diversity is reflected in its traditional dance, textiles, music, and ceremonies. Buddhism strongly influences daily life, especially in rural areas.",
         image: "/images/mm/overview2.jpg"
       },
       {
         title: "Transition and Tradition",
         text: "After decades of military rule and isolation, Myanmar began transitioning toward democracy in the 2010s, though political instability continues. Despite modern influences, traditional village life, spirituality, and local crafts remain core to national identity.",
         image: "/images/mm/overview3.jpg"
       }
     ],
     tourist: [
       {
         title: "Bagan",
         text: "Once the capital of a great ancient kingdom, Bagan is famous for its vast plain dotted with over 2,000 temples and pagodas. Sunrise hot air balloon rides offer a stunning panoramic view of this historical treasure.",
         image: "/images/mm/tourist1.jpg"
       },
       {
         title: "Shwedagon Pagoda",
         text: "Located in Yangon, this iconic golden stupa is Myanmar’s most sacred Buddhist site. Standing at 99 meters tall, it’s said to enshrine relics of the Buddha and glows magnificently at sunset.",
         image: "/images/mm/tourist2.jpg"
       },
       {
         title: "Inle Lake",
         text: "Famous for its floating villages, leg-rowing fishermen, and scenic beauty, Inle Lake is a peaceful destination surrounded by mountains. It offers a glimpse into the unique lifestyles of the Intha people.",
         image: "/images/mm/tourist3.jpg"
       }
     ],
     cuisine: [
       {
         title: "Mohinga",
         text: "Widely considered the national dish, Mohinga is a rice noodle soup made with fish broth, banana stem, and aromatic spices. It’s typically enjoyed as a hearty breakfast across the country.",
         image: "/images/mm/cuisine1.jpg"
       },
       {
         title: "Tea Leaf Salad (Lahpet Thoke)",
         text: "This unique salad combines fermented tea leaves with roasted peanuts, garlic, sesame seeds, and fresh vegetables. It’s a staple dish often served during social gatherings and ceremonies.",
         image: "/images/mm/cuisine2.jpg"
       },
       {
         title: "Shan Noodles",
         text: "A specialty of the Shan State, this dish features rice noodles topped with marinated pork or chicken, garlic oil, and pickled vegetables. It's simple, savory, and widely loved across Myanmar.",
         image: "/images/mm/cuisine3.jpg"
       }
     ],
     practices: [
       {
         title: "Thanaka Tradition",
         text: "Thanaka is a yellowish-white cosmetic paste made from ground tree bark. Worn mostly by women and children, it’s applied to the face for beauty, sun protection, and cooling effect.",
         image: "/images/mm/practices1.jpg"
       },
       {
         title: "Shinbyu (Novitiation Ceremony)",
         text: "Boys in Myanmar often enter monastic life temporarily in a rite of passage called Shinbyu. Dressed as princes, they are paraded to monasteries in vibrant, community-wide celebrations.",
         image: "/images/mm/practices2.jpg"
       },
       {
         title: "Pagoda Etiquette",
         text: "Visitors to pagodas are expected to remove shoes, dress modestly, and show reverence. Many people kneel in prayer or meditate at shrines, and walking clockwise around a stupa is considered respectful.",
         image: "/images/mm/practices3.jpg"
       }
     ]
   }, my: {
     overview: [
       {
         title: "Cultural Crossroads",
         text: "Malaysia is a diverse nation where Malay, Chinese, Indian, and indigenous cultures intersect. This multiculturalism is reflected in its festivals, languages, religions, and cuisine. The country is split into Peninsular Malaysia and Malaysian Borneo, both offering rich biodiversity and distinct traditions.",
         image: "/images/my/overview1.jpg"
       },
       {
         title: "Modern Cities & Ancient Forests",
         text: "Kuala Lumpur’s skyline symbolizes Malaysia’s rapid development, but the country also treasures its ancient rainforests and national parks. The mix of urban innovation and ecological conservation defines Malaysia’s dynamic character.",
         image: "/images/my/overview2.jpg"
       },
       {
         title: "Economic Diversity",
         text: "Malaysia’s economy thrives on exports, including electronics, petroleum, and palm oil. The government promotes Vision 2030 for sustainable growth and digital advancement. Tourism, education, and Islamic finance also play key roles in national development.",
         image: "/images/my/overview3.jpg"
       }
     ],
     tourist: [
       {
         title: "Petronas Twin Towers",
         text: "Located in Kuala Lumpur, these iconic twin skyscrapers are among the tallest in the world. They represent Malaysia’s global ambitions and offer stunning city views from the skybridge and observation deck.",
         image: "/images/my/tourist1.jpg"
       },
       {
         title: "Langkawi",
         text: "An archipelago of 99 islands, Langkawi is known for its sandy beaches, mangroves, and luxury resorts. It’s a duty-free paradise with eco-tourism activities like island-hopping, snorkeling, and jungle trekking.",
         image: "/images/my/tourist2.jpg"
       },
       {
         title: "Cameron Highlands",
         text: "Famous for its cool climate, tea plantations, and strawberry farms, this highland retreat offers scenic landscapes and colonial charm. It’s a favorite getaway for both locals and tourists.",
         image: "/images/my/tourist3.jpg"
       }
     ],
     cuisine: [
       {
         title: "Nasi Lemak",
         text: "Malaysia’s unofficial national dish, nasi lemak consists of fragrant coconut rice served with sambal (spicy chili paste), boiled egg, peanuts, anchovies, and cucumber. Variants may include fried chicken or rendang.",
         image: "/images/my/cuisine1.jpg"
       },
       {
         title: "Char Kway Teow",
         text: "A beloved street food, this stir-fried noodle dish features flat rice noodles with shrimp, egg, bean sprouts, and Chinese sausage, all tossed in a savory dark soy sauce over high heat.",
         image: "/images/my/cuisine2.jpg"
       },
       {
         title: "Roti Canai",
         text: "This flaky flatbread is of Indian-Muslim origin and is typically served with dhal or curry. It’s a breakfast staple and street food favorite known for its crisp outside and soft inside.",
         image: "/images/my/cuisine3.jpg"
       }
     ],
     practices: [
       {
         title: "Multicultural Festivities",
         text: "Malaysia celebrates a wide range of religious and cultural holidays, including Hari Raya Aidilfitri, Chinese New Year, and Deepavali. Open houses during these times welcome neighbors and friends of all backgrounds.",
         image: "/images/my/practices1.jpg"
       },
       {
         title: "Respect for Elders",
         text: "Respect and family hierarchy are important in Malaysian culture. Younger people often greet elders with polite titles and handshakes or the traditional 'salam', sometimes accompanied by touching the elder’s hand to the forehead.",
         image: "/images/my/practices2.jpg"
       },
       {
         title: "Modesty and Dress",
         text: "In many social and religious settings, modest attire is expected. Particularly in rural or Muslim-majority areas, dressing conservatively and removing shoes before entering homes or places of worship is customary.",
         image: "/images/my/practices3.jpg"
       }
     ]
   }, ph: {
    overview: [
      {
        title: "Geography",
        text: "The Philippines is an archipelago composed of 7,641 islands, grouped into three main geographical divisions: Luzon, Visayas, and Mindanao. Its unique positioning in the Pacific Ring of Fire makes it prone to seismic and volcanic activity, but also blesses it with rich natural landscapes. The country features dramatic mountain ranges, vast coastal plains, tropical rainforests, and thousands of kilometers of white sand beaches. Notable geographical landmarks include Mount Apo—the highest peak in the country, the Chocolate Hills in Bohol, and the world-renowned Puerto Princesa Underground River. With over 36,000 kilometers of coastline, the Philippines has one of the longest and most biologically diverse marine territories in the world.",
        image: "/images/ph/overview1.jpg"
      },
      {
        title: "Culture",
        text: "The Philippines has witnessed rapid transformation in recent decades, driven by urbanization, digital innovation, and a growing middle class. Major cities like Metro Manila, Cebu, and Davao have become bustling centers of commerce, technology, and education. The Business Process Outsourcing (BPO) industry has turned the country into a global hub for customer service and IT support, providing millions of jobs. Despite challenges in infrastructure and income disparity, initiatives such as “Build, Build, Build” have aimed to modernize transportation and connectivity. The younger population, highly engaged in social media and technology, is pushing cultural trends and entrepreneurship forward, positioning the Philippines as a rising digital economy in Southeast Asia.",
        image: "/images/ph/overview2.jpg"
      },
      {
        title: "Modern Development",
        text: "The Philippines has witnessed rapid transformation in recent decades, driven by urbanization, digital innovation, and a growing middle class. Major cities like Metro Manila, Cebu, and Davao have become bustling centers of commerce, technology, and education. The Business Process Outsourcing (BPO) industry has turned the country into a global hub for customer service and IT support, providing millions of jobs. Despite challenges in infrastructure and income disparity, initiatives such as “Build, Build, Build” have aimed to modernize transportation and connectivity. The younger population, highly engaged in social media and technology, is pushing cultural trends and entrepreneurship forward, positioning the Philippines as a rising digital economy in Southeast Asia.",
        image: "/images/ph/overview3.jpg"
      }
    ],
    tourist: [
      {
        title: "Boracay Island",
        text: "The Philippines is an archipelago of 7,641 islands...",
        image: "/images/ph/tourist1.jpg"
      },
      {
         title: "Chocolate Hills",
         text: "The Philippines is an archipelago of 7,641 islands...",
         image: "/images/ph/tourist2.jpg"
      },
      {
         title: "Banaue Rice Terraces",
         text: "The Philippines is an archipelago of 7,641 islands...",
         image: "/images/ph/tourist3.jpg"
      }
    ],
    cuisine: [
      {
        title: "Adobo",
        text: "The Philippines is an archipelago of 7,641 islands...",
        image: "/images/ph/cuisine1.jpg"
      },
      {
         title: "Sinigang",
         text: "The Philippines is an archipelago of 7,641 islands...",
         image: "/images/ph/cuisine2.jpg"
      },
      {
         title: "Lechon",
         text: "The Philippines is an archipelago of 7,641 islands...",
         image: "/images/ph/cuisine3.jpg"
      }
    ],
    practices: [
      {
        title: "Bayanihan",
        text: "A traditional Filipino custom that highlights communal unity and cooperation. It is often symbolized by villagers helping a neighbor move an entire house by literally carrying it on their shoulders.",
        image: "/images/ph/practices1.jpg"
      },
      {
         title: "Fiestas",
         text: "Almost every town and city in the Philippines holds a fiesta, often in honor of a patron saint. These celebrations are vibrant displays of faith, food, music, and dance.",
         image: "/images/ph/practices2.jpg"
      },
      {
         title: "Harana",
         text: "An old courtship tradition where a man serenades his beloved under her window with a guitar and heartfelt songs. Although less common now, it remains a romanticized part of Filipino heritage.",
         image: "/images/ph/practices3.jpg"
      }
    ]
  }, sg: {
       overview: [
         {
           title: "City-State Marvel",
           text: "Singapore is a sovereign city-state located at the southern tip of the Malay Peninsula. Despite its small size, it boasts a high standard of living, world-class infrastructure, and a strategic global trade hub. The island is densely urbanized yet known for its cleanliness, efficiency, and lush green spaces.",
           image: "/images/sg/overview1.jpg"
         },
         {
           title: "Multicultural Harmony",
           text: "Home to a blend of Chinese, Malay, Indian, and Eurasian communities, Singapore is celebrated for its multicultural society. The government promotes racial and religious harmony, and each culture is reflected in festivals, language, attire, and food.",
           image: "/images/sg/overview2.jpg"
         },
         {
           title: "Smart Nation Vision",
           text: "Singapore has embraced technology and innovation through its Smart Nation initiative. From digital services to sustainable urban planning, the city-state is a leader in integrating tech with public services, making it one of the most advanced nations globally.",
           image: "/images/sg/overview3.jpg"
         }
       ],
       tourist: [
         {
           title: "Marina Bay Sands",
           text: "An architectural icon of Singapore, Marina Bay Sands is a luxury resort featuring a rooftop infinity pool, casino, shopping mall, and panoramic views of the skyline. Its SkyPark offers one of the most Instagrammed vistas in Asia.",
           image: "/images/sg/tourist1.jpg"
         },
         {
           title: "Gardens by the Bay",
           text: "This futuristic garden park features massive Supertree structures, climate-controlled domes, and floral displays. It's a symbol of Singapore’s fusion of nature and technology, attracting millions of visitors annually.",
           image: "/images/sg/tourist2.jpg"
         },
         {
           title: "Sentosa Island",
           text: "A popular leisure destination, Sentosa offers beaches, luxury resorts, theme parks, and attractions like Universal Studios Singapore. It’s a family-friendly getaway just minutes from downtown Singapore.",
           image: "/images/sg/tourist3.jpg"
         }
       ],
       cuisine: [
         {
           title: "Hainanese Chicken Rice",
           text: "This national favorite consists of poached chicken served with fragrant rice cooked in chicken broth, accompanied by garlic-chili sauce and soy sauce. It's simple, flavorful, and widely available at hawker centers.",
           image: "/images/sg/cuisine1.jpg"
         },
         {
           title: "Chilli Crab",
           text: "A signature seafood dish, chilli crab features mud crab stir-fried in a sweet, savory, and spicy tomato-based sauce. It's messy but delicious, often served with fried mantou buns.",
           image: "/images/sg/cuisine2.jpg"
         },
         {
           title: "Laksa",
           text: "A spicy noodle soup with Chinese and Malay influences, laksa combines rice noodles, coconut milk, sambal, shrimp, and herbs. Katong laksa is a popular Singaporean variant where the noodles are cut short for easy spoon-eating.",
           image: "/images/sg/cuisine3.jpg"
         }
       ],
       practices: [
         {
           title: "Multilingual Society",
           text: "Singapore recognizes four official languages—English, Malay, Mandarin, and Tamil. Multilingualism is part of daily life, reflected in schools, signage, and even casual conversations among locals.",
           image: "/images/sg/practices1.jpg"
         },
         {
           title: "National Courtesy Campaign",
           text: "Politeness and public responsibility are emphasized through initiatives like the National Courtesy Campaign. Singaporeans are encouraged to be respectful in public spaces, queue properly, and keep the environment clean.",
           image: "/images/sg/practices2.jpg"
         },
         {
           title: "Hawker Culture",
           text: "Eating at hawker centers is a daily ritual for many Singaporeans. These open-air food courts serve affordable, high-quality dishes from various cultures. In 2020, Singapore’s hawker culture was added to the UNESCO Intangible Cultural Heritage list.",
           image: "/images/sg/practices3.jpg"
         }
       ]
     }, th: {
       overview: [
         {
           title: "Land of Smiles",
           text: "Thailand is known for its warm hospitality, vibrant street life, and stunning temples. Geographically diverse, it features bustling cities, tropical beaches, mountainous regions, and fertile plains. Bangkok, the capital, is a major cultural and economic hub in Southeast Asia.",
           image: "/images/th/overview1.jpg"
         },
         {
           title: "Buddhism & Heritage",
           text: "Roughly 95% of Thais practice Theravāda Buddhism, which heavily influences national customs, holidays, and daily life. Thailand’s many temples, or ‘wats’, are central to community life and spiritual practice.",
           image: "/images/th/overview2.jpg"
         },
         {
           title: "Monarchy & Identity",
           text: "The Thai monarchy is deeply respected and plays a symbolic role in national unity. Cultural identity is also tied to traditional arts like Muay Thai, classical dance, and silk weaving, which are passed down through generations.",
           image: "/images/th/overview3.jpg"
         }
       ],
       tourist: [
         {
           title: "The Grand Palace",
           text: "Located in Bangkok, the Grand Palace was the official residence of Thai kings for over 150 years. It’s a dazzling complex of ornate buildings, with Wat Phra Kaew—the Temple of the Emerald Buddha—being its most revered site.",
           image: "/images/th/tourist1.jpg"
         },
         {
           title: "Phi Phi Islands",
           text: "Famous for crystal-clear waters and dramatic limestone cliffs, the Phi Phi Islands are a top beach destination. They offer snorkeling, diving, and breathtaking views, particularly at Maya Bay.",
           image: "/images/th/tourist2.jpg"
         },
         {
           title: "Chiang Mai Temples",
           text: "Northern Thailand’s Chiang Mai is a cultural hub, known for its over 300 temples, including the hilltop Wat Phra That Doi Suthep. The city is also famous for traditional handicrafts and its mountainous surroundings.",
           image: "/images/th/tourist3.jpg"
         }
       ],
       cuisine: [
         {
           title: "Pad Thai",
           text: "Thailand’s most famous dish, Pad Thai is a stir-fried noodle dish with tamarind sauce, shrimp or chicken, tofu, peanuts, bean sprouts, and lime. It's a perfect blend of sweet, sour, and savory flavors.",
           image: "/images/th/cuisine1.jpg"
         },
         {
           title: "Tom Yum Goong",
           text: "This hot and sour soup features shrimp, lemongrass, galangal, lime, and chili. It's a bold and aromatic dish that exemplifies Thai cuisine’s vibrant flavors.",
           image: "/images/th/cuisine2.jpg"
         },
         {
           title: "Green Curry (Gaeng Keow Wan)",
           text: "Made with coconut milk, green curry paste, and meat or tofu, this dish is rich, spicy, and slightly sweet. Thai basil and eggplant round out its bold flavors.",
           image: "/images/th/cuisine3.jpg"
         }
       ],
       practices: [
         {
           title: "Wai Greeting",
           text: "The traditional Thai greeting, known as the 'wai', involves pressing the palms together in a prayer-like gesture while bowing slightly. It's a sign of respect, used in greetings, farewells, and apologies.",
           image: "/images/th/practices1.jpg"
         },
         {
           title: "Respect for the Monarchy",
           text: "Thai people hold the royal family in high esteem. It is considered disrespectful to speak ill of the monarchy, and standing for the royal anthem in public venues is customary.",
           image: "/images/th/practices2.jpg"
         },
         {
           title: "Merit-Making",
           text: "Many Thais participate in merit-making—offering food to monks, releasing animals, or donating to temples—as a spiritual practice to gain good karma and improve their next life.",
           image: "/images/th/practices3.jpg"
         }
       ]
     },
    tl: {
      overview: [
        {
          title: "Island Nation Reborn",
          text: "Timor-Leste, also known as East Timor, occupies the eastern half of Timor Island in Southeast Asia. Gaining full independence in 2002, it’s one of the youngest nations in the world. The country features a rugged landscape with mountainous terrain, dense forests, and a pristine coastline along the Timor Sea.",
          image: "/images/tl/overview1.jpg"
        },
        {
          title: "Colonial & Indigenous Blend",
          text: "The culture of Timor-Leste is a unique blend of indigenous Austronesian traditions and Portuguese colonial influences. This fusion is reflected in its language, architecture, religious practices, and daily life.",
          image: "/images/tl/overview2.jpg"
        },
        {
          title: "Resilience & Development",
          text: "Despite challenges from past conflicts, Timor-Leste is steadily progressing with a focus on education, infrastructure, and tourism. Community-driven initiatives, sustainable farming, and eco-tourism are helping to shape its path forward.",
          image: "/images/tl/overview3.jpg"
        }
      ],
      tourist: [
        {
          title: "Jaco Island",
          text: "An uninhabited paradise off the eastern tip of Timor-Leste, Jaco Island is known for its white sandy beaches, crystal-clear waters, and vibrant coral reefs. It's perfect for snorkeling, diving, and eco-tourism.",
          image: "/images/tl/tourist1.jpg"
        },
        {
          title: "Cristo Rei of Dili",
          text: "Overlooking the capital city, this 27-meter tall statue of Christ stands atop a hill with panoramic views of the sea and city below. It’s a popular pilgrimage site and a symbol of peace.",
          image: "/images/tl/tourist2.jpg"
        },
        {
          title: "Atauro Island",
          text: "Located north of Dili, Atauro Island offers exceptional diving opportunities and a glimpse into Timorese village life. It’s a biodiversity hotspot both above and below the sea.",
          image: "/images/tl/tourist3.jpg"
        }
      ],
      cuisine: [
        {
          title: "Ikan Pepes",
          text: "A dish of fish marinated with turmeric, garlic, and local herbs, then wrapped in banana leaves and grilled. It reflects the country's Indonesian influence and coastal lifestyle.",
          image: "/images/tl/cuisine1.jpg"
        },
        {
          title: "Feijoada",
          text: "Adapted from Portuguese cuisine, Timorese feijoada is a stew of beans and pork or beef. It’s a popular meal during family gatherings and celebrations.",
          image: "/images/tl/cuisine2.jpg"
        },
        {
          title: "Batar Da’an",
          text: "A traditional corn, mung bean, and pumpkin stew, often eaten with rice. It’s a nutritious staple in rural communities, highlighting local farming traditions.",
          image: "/images/tl/cuisine3.jpg"
        }
      ],
      practices: [
        {
          title: "Tais Weaving",
          text: "Tais is a traditional handwoven textile used in ceremonies, gifts, and daily life. Each region has its own patterns and colors, often passed down through generations of women.",
          image: "/images/tl/practices1.jpg"
        },
        {
          title: "Catholic Faith & Rituals",
          text: "Around 97% of the population is Roman Catholic, a legacy of Portuguese colonization. Religious festivals, processions, and mass are central to community life, especially during Holy Week.",
          image: "/images/tl/practices2.jpg"
        },
        {
          title: "Uma Lulik (Sacred Houses)",
          text: "Traditional animist beliefs remain strong, especially in rural areas. Uma Lulik, or 'sacred houses', are important spiritual symbols where ancestral rituals and offerings are performed to maintain harmony with the spirit world.",
          image: "/images/tl/practices3.jpg"
        }
      ]
    }, tl: {
      overview: [
        {
          title: "Island Nation Reborn",
          text: "Timor-Leste, also known as East Timor, occupies the eastern half of Timor Island in Southeast Asia. Gaining full independence in 2002, it’s one of the youngest nations in the world. The country features a rugged landscape with mountainous terrain, dense forests, and a pristine coastline along the Timor Sea.",
          image: "/images/tl/overview1.jpg"
        },
        {
          title: "Colonial & Indigenous Blend",
          text: "The culture of Timor-Leste is a unique blend of indigenous Austronesian traditions and Portuguese colonial influences. This fusion is reflected in its language, architecture, religious practices, and daily life.",
          image: "/images/tl/overview2.jpg"
        },
        {
          title: "Resilience & Development",
          text: "Despite challenges from past conflicts, Timor-Leste is steadily progressing with a focus on education, infrastructure, and tourism. Community-driven initiatives, sustainable farming, and eco-tourism are helping to shape its path forward.",
          image: "/images/tl/overview3.jpg"
        }
      ],
      tourist: [
        {
          title: "Jaco Island",
          text: "An uninhabited paradise off the eastern tip of Timor-Leste, Jaco Island is known for its white sandy beaches, crystal-clear waters, and vibrant coral reefs. It's perfect for snorkeling, diving, and eco-tourism.",
          image: "/images/tl/tourist1.jpg"
        },
        {
          title: "Cristo Rei of Dili",
          text: "Overlooking the capital city, this 27-meter tall statue of Christ stands atop a hill with panoramic views of the sea and city below. It’s a popular pilgrimage site and a symbol of peace.",
          image: "/images/tl/tourist2.jpg"
        },
        {
          title: "Atauro Island",
          text: "Located north of Dili, Atauro Island offers exceptional diving opportunities and a glimpse into Timorese village life. It’s a biodiversity hotspot both above and below the sea.",
          image: "/images/tl/tourist3.jpg"
        }
      ],
      cuisine: [
        {
          title: "Ikan Pepes",
          text: "A dish of fish marinated with turmeric, garlic, and local herbs, then wrapped in banana leaves and grilled. It reflects the country's Indonesian influence and coastal lifestyle.",
          image: "/images/tl/cuisine1.jpg"
        },
        {
          title: "Feijoada",
          text: "Adapted from Portuguese cuisine, Timorese feijoada is a stew of beans and pork or beef. It’s a popular meal during family gatherings and celebrations.",
          image: "/images/tl/cuisine2.jpg"
        },
        {
          title: "Batar Da’an",
          text: "A traditional corn, mung bean, and pumpkin stew, often eaten with rice. It’s a nutritious staple in rural communities, highlighting local farming traditions.",
          image: "/images/tl/cuisine3.jpg"
        }
      ],
      practices: [
        {
          title: "Tais Weaving",
          text: "Tais is a traditional handwoven textile used in ceremonies, gifts, and daily life. Each region has its own patterns and colors, often passed down through generations of women.",
          image: "/images/tl/practices1.jpg"
        },
        {
          title: "Catholic Faith & Rituals",
          text: "Around 97% of the population is Roman Catholic, a legacy of Portuguese colonization. Religious festivals, processions, and mass are central to community life, especially during Holy Week.",
          image: "/images/tl/practices2.jpg"
        },
        {
          title: "Uma Lulik (Sacred Houses)",
          text: "Traditional animist beliefs remain strong, especially in rural areas. Uma Lulik, or 'sacred houses', are important spiritual symbols where ancestral rituals and offerings are performed to maintain harmony with the spirit world.",
          image: "/images/tl/practices3.jpg"
        }
      ]
    }, vn: {
      overview: [
        {
          title: "S-Shaped Wonder",
          text: "Vietnam is a long, narrow country stretching along the eastern coast of the Indochinese Peninsula. Its geography spans towering mountains in the north, lush river deltas in the south, and a long coastline lined with stunning beaches. The Red River and Mekong River are vital to agriculture and trade.",
          image: "/images/vn/overview1.jpg"
        },
        {
          title: "History & Resilience",
          text: "Vietnam has a rich history shaped by dynastic rule, colonialism, war, and reunification. From ancient kingdoms to modern nationhood, the Vietnamese people are known for their resilience and national pride, expressed in monuments, literature, and public life.",
          image: "/images/vn/overview2.jpg"
        },
        {
          title: "Cultural Diversity",
          text: "With over 50 ethnic groups, Vietnam’s culture is a vibrant mosaic. Traditional music, festivals, clothing, and languages vary across regions, particularly in the mountainous north and the Central Highlands.",
          image: "/images/vn/overview3.jpg"
        }
      ],
      tourist: [
        {
          title: "Ha Long Bay",
          text: "A UNESCO World Heritage Site, Ha Long Bay is known for its emerald waters and thousands of limestone karsts and isles. Cruises through the bay offer caves, floating villages, and unforgettable scenery.",
          image: "/images/vn/tourist1.jpg"
        },
        {
          title: "Hoi An Ancient Town",
          text: "This well-preserved trading port features yellow-walled buildings, lantern-lit streets, and a blend of Japanese, Chinese, and French colonial architecture. It’s a cultural gem and shopper’s paradise.",
          image: "/images/vn/tourist2.jpg"
        },
        {
          title: "Cu Chi Tunnels",
          text: "Located near Ho Chi Minh City, the Cu Chi Tunnels are part of an extensive network used by Viet Cong soldiers during the Vietnam War. Visitors can explore the narrow passageways and learn about wartime ingenuity.",
          image: "/images/vn/tourist3.jpg"
        }
      ],
      cuisine: [
        {
          title: "Phở",
          text: "Vietnam’s iconic noodle soup is made with fragrant beef or chicken broth, rice noodles, and herbs. A staple of Vietnamese breakfast, it's enjoyed across the country with regional variations.",
          image: "/images/vn/cuisine1.jpg"
        },
        {
          title: "Bánh Mì",
          text: "A Vietnamese sandwich made with a crispy baguette filled with pickled vegetables, pâté, meats, and fresh herbs. It reflects French influence fused with local flavors.",
          image: "/images/vn/cuisine2.jpg"
        },
        {
          title: "Gỏi Cuốn (Spring Rolls)",
          text: "Fresh spring rolls filled with shrimp, pork, vermicelli noodles, and herbs, wrapped in rice paper. Usually served with a hoisin-peanut dipping sauce, they’re a light and healthy snack or appetizer.",
          image: "/images/vn/cuisine3.jpg"
        }
      ],
      practices: [
        {
          title: "Ancestor Worship",
          text: "A core element of Vietnamese spirituality, ancestor worship involves offerings, altars, and ceremonies to honor deceased relatives. It’s practiced in most households regardless of religion.",
          image: "/images/vn/practices1.jpg"
        },
        {
          title: "Tết (Lunar New Year)",
          text: "Vietnam’s most important holiday, Tết celebrates the Lunar New Year with family reunions, traditional food, red decorations, and firecrackers. It marks a fresh start and a time for paying respects to ancestors.",
          image: "/images/vn/practices2.jpg"
        },
        {
          title: "Confucian Values",
          text: "Vietnamese society is heavily influenced by Confucian ideals such as respect for elders, filial piety, education, and social harmony. These values continue to shape interpersonal relationships and community expectations.",
          image: "/images/vn/practices3.jpg"
        }
      ]
    }
};

function loadTabContent(tab) {
  const country = countryTabsData[code];
  if (country && country[tab]) {
    let html = "";

    country[tab].forEach((section, index) => {
      const isEven = index % 2 === 0;
      html += `
        <div class="section-block ${isEven ? "left-image" : "right-image"}">
          <div class="img-block">
            <img src="${section.image}" alt="${section.title}" />
          </div>
          <div class="text-block">
            <h3>${section.title}</h3>
            <p>${section.text}</p>
          </div>
        </div>
      `;
    });

    tabContent.innerHTML = html;
  } else {
    tabContent.innerHTML = `<p>No content available for this section.</p>`;
  }
}

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      const selectedTab = btn.dataset.tab;
      loadTabContent(selectedTab);
    });
  });

  loadTabContent("overview");
});
