import logo from '../logo.svg';
import Header from './Header'
import Footer from './Footer'
import CreateBox from './CreateBox'
import CreateBoxes from './CreateBoxes';
import ProfileBox from './ProfileBox'
import '../App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="bigBox">
      <ProfileBox
        title ="Profile"
        note= "kevin Roderick Hartanto"
        image= "https://vignette.wikia.nocookie.net/jpop/images/8/8d/Reol_No_title-_cover.jpg/revision/latest?cb=20180410194526"
      />

      </div>
      <CreateBoxes/>
      <CreateBox
        
        titleText ="Notitle"
        noteText= "reol"
        title ="Snow song show"
        note="soraru"
        image= "https://img.discogs.com/-eZlsWbqPexkdcQWPKcCw0FM458=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13457189-1554573399-1473.jpeg.jpg"
        image2= "https://i.kym-cdn.com/entries/icons/original/000/015/559/It_Was_Me__Dio!.jpg"
      />
      <Footer/>
    </div>
  );
}

export default App;
