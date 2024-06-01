import Image from "next/image";
import Header from './components/header';
import Main from './components/main';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';


export default function Home() {
  return (
    <div className="App">
      <Header />
        <Main />
        <Work />
        <Contact />
      <Footer />
    </div>
  );
}
