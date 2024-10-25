import React, { useState } from 'react';
import './App.css';



const App = () => {
  const [produkty, setProdukty]=useState({
  
      nr: ["1","2","3","4","5","6","7","8"],
      zdj: ["gruszka.jpg","koper.jpg","marchew.jpg","morela.jpg","owoce.jpg","papaja.jpg","papryka.jpg","ziemniak.jpg"],
      nazwa: ["gruszka","koper","marchew","morela","owoce","papaja","papryka","ziemniak"],
      opis: ["Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum","Lorem Ipsum"],
      liczba: ["23","145","67","89","12","78","199","34"],
      cena: ["0,5 zł", "2.5 zł", "4.75 zł", "1 zł", "3.2 zł", "7.1 zł", "8.9 zł", "10 zł"]

    


  });

  return (
    <div>
        <nav> 
        <ol>
            <li><a href="">warzywa</a></li>
            <li><a href="">owoce</a></li>
            <li><a href="">soki</a></li>
            </ol>
            <h1>Internetowy sklep z eko-warzywami</h1></nav>
    <div>
  {Object.values(produkty.nr).map((_, index) => (
    <div className='produkt' id={index} key={index}>
      <img id="zdjecie" src={produkty.zdj[index]} alt={produkty.nazwa[index]} />
      <div id="kontener"><h2 id="nazwa">{produkty.nazwa[index]}</h2></div>
      <p id="opis">opis: {produkty.opis[index]}</p>
      <p id="liczba">na stanie: {produkty.liczba[index]}</p>
      <h3 id="cena">{produkty.cena[index]}</h3>
    </div>
  ))}
</div>

      
        
    </div>
  );
};

export default App;
