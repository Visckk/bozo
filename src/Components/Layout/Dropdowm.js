import React, { useState } from 'react';
import Styles from "./Dropdowm.module.css"

const ButtonWithDropdown = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const [isOpen5, setIsOpen5] = useState(false);

  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };
  return (
  <div>
      <button className={Styles.btn} onClick={toggleDropdown1}>OBJETIVOS</button>
      {isOpen1 && (
        <div>
          <p>Criar tecnoligias táteis e de áudio inovadoras para pacilitar a interação de pessoas com deficiencia visual</p>
        </div>
      )}

    <button className={Styles.btn} onClick={toggleDropdown2}>COMO PRETENDEM FAZER ISSO?</button>
      {isOpen2 && (
     <div>
      <h3>1-Integração por comando de voz</h3>
      <p> Implementar um robusto sistema de rechonhecimento de voz para comandos intuitivos e independência na navegação</p>
      <h3>2-Feedback tátil preciso</h3>
      <p>Desenvolver mecanismos de feedback tátil preciso para representação clara do conteúdo na tela</p>
      <h3>3-Modo silencio e controles personalizados</h3>
      <p>Oferecer um "modo silencioso" e controles personalizáveis para ajustar o áudio de acordo com as prerências individuais</p>
      <h3>4-Compatibilidade universal</h3>
      <p>Assegurar que o monitor seja compativel com uma variedade de dispositivos e sistemas operacionais</p>
      <h3>5-Experiência de usuario inclusiva</h3>
      <p>Criar uma interface intuitiva que proporcione uma experiência eficiente e agradavel para pessoas com deficiencia visual</p>
     </div>
)}

<button className={Styles.btn} onClick={toggleDropdown3}>COMO SÂO FEITOS OS PERIFERICOS?</button>
{isOpen3 && (
  <div>
    <p>São usados swiths das quais as teclas estejam com relevos em forma de libras</p>
  </div>
)}
    <button className={Styles.btn} onClick={toggleDropdown4}>DATAS DE LANÇAMENTOS</button>
{isOpen4 && (
  <div>
    <p>nenhuma foi definida ainda</p>
  </div>
)}
    


  </div>
    
  );
};

export default ButtonWithDropdown;