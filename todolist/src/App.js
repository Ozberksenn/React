import "./App.css";
import Header from "./Components/Header/Header";
import List from "./Components/List/list";
import Footer from "./Components/Footer/Footer";
import FooterInfo from "./Components/FooterInfo/FooterInfo";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div>
      <section className="todoapp">
        <Header list={list} setList={setList} />
        <section className="main">
          <List list={list} setList={setList} />
        </section>
        {/* This footer should hidden by default and shown when there are todos */}
        <Footer list={list} />
      </section>
      <FooterInfo />
    </div>
  );
}

export default App;
