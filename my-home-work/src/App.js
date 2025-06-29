
import ImageComponent from './components/ImageComponent';
import ListsComponent from './components/ListsComponent';
import ParagraphsComponent from './components/ParagraphsComponent';
import VideoComponent from './components/VideoComponent';
import RandomPharse from './components/RandomPharse';
import Content from './components/Content';
import cat from '../src/assets/img/190739132.jpg'
function App() {
  return (
    <div className="App">
      <h1>My Home Projekt</h1>
      <ImageComponent/>
      <VideoComponent/>
      <ParagraphsComponent/>
      <ListsComponent/>
      <RandomPharse/>
    
    </div>

  );
}
const cardsData = [
  {
    id: 1,
    title: 'Смартфон Samsung Galaxy S21',
    price: 69990,
    inStock: true,
    imageUrl: 'https://via.placeholder.com/250x150?text=Samsung',
  },
  {
    id: 2,
    title: 'Наушники Apple AirPods Pro',
    price: 19990,
    inStock: false,
    imageUrl: 'https://via.placeholder.com/250x150?text=AirPods',
  },
  {
    id: 3,
    title: 'Ноутбук ASUS VivoBook 15',
    price: 54990,
    inStock: true,
    imageUrl: 'https://via.placeholder.com/250x150?text=ASUS',
  },
]
export default App;
