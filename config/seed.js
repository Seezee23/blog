require('dotenv').config();
require('./database');

const Travel = require('../models/travel');

Travel.deleteMany({})
  .then(() => {
    Travel.create(travelBlogs)
      .then((createdTravels) => {
        console.log('created Travels', createdTravels)
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
    console.log(err)
  })

const travelBlogs = [
    {title: 'Singapore', image: 'https://cdn.britannica.com/55/190455-050-E617F64E/Night-view-Singapore.jpg', 
    category: '0', attractions: "Gardens by the Bay, Marina Bay Sands, Singapore Flyer, Merlion, Clarke Quay, Sentosa."}, 
    {title: 'Bali', image: 'https://statics.dujiabieshu.com/statics/manager/ueditor/php/upload/image/20190613/b1977bb98da67d09fd3cd85f3dfedbe7601061.jpg', 
    category: '0', attractions: "Jimbaran Beach."},
    {title: 'Hong Kong', image: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Hong%20Kong/hong-kong-victoria-peak-pano-guide.jpg', 
    category: '1', attractions: "Victoria Peak, Victoria Harbour, Avenue of Stars."},
    {title: 'Taiwan', image: 'https://ceias.eu/wp-content/uploads/2022/11/Taipei_Skyline_2020.jpg', 
    category: '0', attractions: "Taipei 101, chiang Kai-shek Memorial Hall, Yehliu Geopark, Kenting National Park, Shilin Night Market, Gaomei Wetlands, ."},
    {title: 'Paris', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_août_2014_%282%29.jpg', 
    category: '0', attractions: "Eiffel Tower, Louvre Museum, Arc de Triomphe, Pont Alexandre III, Place de la Concorde, Champs-Elysees, Palace of Versailles."},
    {title: 'London', image: 'https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0', 
    category: '0', attractions: "Big Ben,  Tower of London, Buckingham Palace, Tower Bridge, Westminster Abbey, St. Paul's Cathedral, Kensington Palace."},
    {title: 'Rome', image: 'https://cdn.travelpulse.com/images/31aaedf4-a957-df11-b491-006073e71405/bb73aab8-f2bf-4278-88c3-33dd628df23f/630x355.jpg', 
    category: '2', attractions: "Colosseum, Trevi Fountain, Pantheon, St. Peter's Basilica, Spanish Steps, Sistine Chapel, Roman Forum, Neptune Fountain, Castel Sant'Angelo."},
    {title: 'Milan', image: 'https://media.timeout.com/images/105186767/image.jpg', 
    category: '2', attractions: "Duomo di Milano, Santa Maria delle Grazie, Pinacoteca di Brera, Arco della Pace, "},
    {title: 'Seattle', image: 'https://sph.washington.edu/sites/default/files/inline-images/Seattle-Rainier%201200x600_0.jpg', 
    category: '3', attractions: "Space Needle, Chihuly Garden and Glass, Pike Place Market, Kerry Park, Olympic Sculpture Park, Golden Garden Park, Poineer Square, The Gum Wall."},
    {title: 'Los Angeles', image: 'https://cdn.britannica.com/40/94540-050-789B2064/Palm-trees-skyline-Los-Angeles-background.jpg', 
    category: '3', attractions: "Universal Studios Hollywood, Griffith Park, Santa Monica Pier, Griffith Observatory, Hollywood Sign, The Grove, Universal CityWalk Hollywood, Walk Of Fame, Public Art Urban Light, "},
    {title: 'San Francisco', image: 'https://cdn.travelpulse.com/images/d3a9edf4-a957-df11-b491-006073e71405/e864929d-127a-4caf-9a15-7f9cd45160f0/630x355.jpg', 
    category: '3', attractions: "Golden Gate Bridge, Palace of Fine Arts, Pier 39, Fisherman's Wharf, Chinatown, Lombard Street."},
    {title: 'Beijing', image: 'https://cdn.britannica.com/20/20120-050-89764C76/Tiananmen-entryway-Imperial-City-China-Beijing.jpg', 
    category: '1', attractions: "Great Wall of China, Tiananmen Square, Temple of Heaven, Forbidden City, The Palace Museum, Beijing Olympic Park."},
    {title: 'Shanghai', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Shanghai_skyline_from_the_bund.jpg/690px-Shanghai_skyline_from_the_bund.jpg', 
    category: '1', attractions: "Oriental Pearl TV Tower, China Art Museum, Huangpu River, People's Square."},
    {title: 'Hangzhou', image: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Hangzhou.jpg', 
    category: '1', attractions: "Xi Lake."},
    {title: 'Florence', image: 'https://media.architecturaldigest.com/photos/5d63f64b7a901900093b26ea/16:9/w_2560%2Cc_limit/GettyImages-1145040590.jpg', 
    category: '2', attractions: "Uffizi Gallery, Cathedral of Santa Maria del Fiore, Palazzo Vecchio, Pitti Palace, Piazzale Michelangelo."},
    {title: 'Banff', image: 'https://banfflakelouise.bynder.com/m/75af179b9b922d9d/2000x1080_jpg-2019_BanffAve_Winter_PaulZizka.jpg', 
    category: '4', attractions: "Lake Minnewanka, Town of Banff, Vermilion Lakes, Lake Louise, Peyto Lake, Moraine Lake, Banff Gondola, Bow Lake, Banff Upper Hot Springs."},
    {title: 'Vancouver', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1200px-Concord_Pacific_Master_Plan_Area.jpg', 
    category: '4', attractions: "Capilano Suspension Bridge Park, Stanley Park, Dr. Sun Yat-Sen Classical Chinese Garden, Granville Island, Gastown, Gastown Steam Clock."},
    {title: 'Toronto', image: 'https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/north-america/canada/toronto/destinations-toronto-banner-mobile-1024x553.jpg', 
    category: '4', attractions: "CN Tower, Casa Loma, Kensington Market, Niagara Falls, Chinatown."},
    {title: 'Florida', image: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1300/2304/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/attractions/cinderella-castle/cinderella-castle-2x1.jpg?2022-03-10T19:40:10+00:00', 
    category: '3', attractions: "Magic Kingdom, Epcot, Hollywood Studios, Animal Kingdom."},
  ];
