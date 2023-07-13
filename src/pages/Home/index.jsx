import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';



function Home() {
  const text = 'Chez vous, partout et ailleurs'
 
  
  return (
    <div className="Home">
      <Banner text={text} />
      <Gallery/>
    </div>
  );
}

export default Home;
