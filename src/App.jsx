import { useState } from "react";
import Video from "./components/video";
import Introduction from "./components/introduction";
import Values from "./components/values";
import Schedule from "./components/schedule";
import Timeline from "./components/timeline";
import Prize from "./components/prize";
import Apply from "./components/apply";
import Faq from "./components/faq";
import Host from "./components/host";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  const [language, setLanguage] = useState("KR"); 

  const toggleLanguage = () => {
    setLanguage(language === 'KR' ? 'EN' : 'KR');
  };

  return (
    <>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Video />
      <Introduction language={language} />
      <Values language={language} />
      <Schedule language={language} />
      <Timeline language={language} />
      <Prize language={language} />
      <Apply language={language} />
      <Faq language={language} />
      <Host language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  );
}

export default App
