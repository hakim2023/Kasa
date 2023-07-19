import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';



function Home() {
  const text = 'Chez vous, partout et ailleurs'
 
  
  return (
    <>
      <Banner text={text} />
      <Gallery/>
    </>
  );
}

export default Home;
