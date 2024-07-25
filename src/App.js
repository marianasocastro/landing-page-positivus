import Header from '../src/components/Header/Header';
import Heading from  '../src/components/Heading/Heading';
import Cards from '../src/components/Cards/Cards';
import './App.scss';


function App() {
  return (
    <>
      <Header/>
      <Heading 
      title="Services" 
      text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <Cards/>
    </>
  )
}

export default App;
