import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import { useLogin } from "../../context/LoginProvider";
import FirstContent from "./components/FirstContent/FirstContent";
import Section from "./components/Section";
import lorem from "./utils/lorem";

// import logosImg from "./utils/logos";

function Home() {
  const [sections, setSections] = useState([]);
  const [logos, setLogos] = useState([]);
  const { login } = useLogin();
  const navigate = useNavigate();

  const getSections = async () => {
    const res = await import("./utils/sections.json");
    const data = res.default;
    let arr = [];
    data.map((d) => {
      const { title } = d;
      arr.push(title);
    });

    arr.map((a) => setSections((curr) => curr.concat(a)));
  };

  const getLogos = () => {
    setLogos((currentLogo) => currentLogo.concat(logosImg.venom));
  };

  useEffect(() => {
    // getLogos();
    getSections();
  }, []);

  useEffect(() => () => setSections([]), []);

  useEffect(() => {
    if (!login){
      navigate("/profiles")
    }
  }, []);

  return (
    <div>
      <Navbar />

      <main>
        <FirstContent description={lorem} />
        {sections.map((section, index) => (
          <Section title={section} movies={logos} key={index} />
        ))}
      </main>
    </div>
  );
}

export default Home;
