import React,{useState} from 'react';
import CitySelector from './CitySelector';
import CityCard from './CityCard';
import styles from './styles.module.css'


function App() {
 

  const citiesData = [

    {
      name: "Токио",

      description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",

      imageUrl: "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",

      facts: [

        "Токио - самый населенный мегаполис в мире.",

        "Здесь расположена самая высокая башня в Японии - Токийская башня.",

        "В Токио проходят множество культурных событий и фестивалей."

      ]

    },

    {

      name: "Киото",

      description: "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",

      imageUrl: "https://img3.teletype.in/files/a4/99/a4990a73-5fa4-4549-9725-3f6f52d1e534.jpeg",

      facts: [

        "В Киото насчитывается более 1600 буддийских храмов.",

        "Этот город был столицей Японии более тысячи лет."

      ]

    },

    {

      name: "Осака",

      description: "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",

      imageUrl: "https://funjapan.ru/sites/default/files/picture1/sights/3314-zamok-osaka-5318.jpg",

      facts: [

        "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",

        "Город является кулинарной столицей Японии."

      ]

    },

    {

      name: "Хоккайдо",

      description: "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",

      imageUrl: "https://i.pinimg.com/originals/e3/a9/10/e3a9104c6383e7e2480e7ddf96268e0f.jpg",

      facts: [

        "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",

        "Летом остров привлекает туристов своими цветущими лавандовыми полями."

      ]

    },

    {

      name: "Нагоя",

      description: "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",

      imageUrl: "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",

      facts: [

        "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",

        "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше."

      ]

    }

  ];
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (cityName) => {
    const city = citiesData.find((c) => c.name === cityName);
    setSelectedCity(city);
  };


  
  return (
    <div className={styles.appContainer}>
      <CitySelector cities={citiesData} onSelect={handleCitySelect} 
      />
      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  )
}

export default App
