import "bootstrap/dist/js/bootstrap";
import './App.css';
import ForYou from "./components/ForYou";
import Header from './components/Header';
import Video from "./components/Video";
import NavTag from "./components/NavTag";

import WomanBag from './assets/woman-bag.png'
import GymBag from './assets/gym-bag.png'
import BoyBag from './assets/boy-bag.png'
import GirlBag from './assets/girl-bag.png'

const items = [
  {
    id: 1,
    title: "The Bag For The Woman",
    image: WomanBag,
    description: "Never settle for less",
    status: "available"
  },
  {
    id: 2,
    title: "The Bag For The Man",
    image: GymBag,
    description: "Those who wants more",
    status: "available"
  },
  {
    id: 3,
    title: "The Bag For The Girl",
    image: GirlBag,
    description: "Never settle for less",
    status: "upcoming"
  },
  {
    id: 4,
    title: "The Bag For The Boy",
    image: BoyBag,
    description: "Those who will want more",
    status: "upcoming"
  }
]

function App() {

  const productList = items.filter((item) => item.status === "available");
  const upcomingList = items.filter((item) => item.status === "upcoming");
  // console.log(productList);
  return (
    <div className="App">
      <div style={{minHeight: "100vh"}}>
        <Video />
        <Header />
      </div>
      <div className="main-body">
        <ForYou />
        < NavTag list={productList} title = "products"/>
        < NavTag list={upcomingList} title = "upcomings"/>
      </div>
      <div className="footer">
        <p className="my-0">The Bag @copyright 2020</p>
      </div>
    </div>
  );
}

export default App;
