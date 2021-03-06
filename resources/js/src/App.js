import './App.css';
import Service from './components/Service/Service';
import ServiceContainer from './components/Service/ServiceContainer';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import  { Heading, ContactMethods,QRCode} from './components/Connect/index'
import ContactFormContainer from './components/Connect/ContactForm/ContactFormContainer';
import Header from './../src/components/Header/Header';

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/services" element={<ServiceContainer />} />
        <Route path="/contacts" element={<ContactFormContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
