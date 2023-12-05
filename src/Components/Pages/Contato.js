import styles from './Contato.module.css'

function Contato(){
    return <div class={styles.Contato}>
    <h2 class="w3-text-light-grey">Contact Me</h2>
   

    <div className="Conteudo">
      
      <p className={styles.p}>
      Brasil,Sp
        </p>
      <p>
       Telefone:55 (11)0000000
        </p>
      <p>
         Email: LuveViewTech@mail.com
        </p>

    </div>
    

    <form action="/action_page.php" target="_blank">
      <p><input className={styles.input} type="text" placeholder="Name" required name="Name"/></p>
      <p><input className={styles.input} type="text" placeholder="Email" required name="Email"/></p>
      <p><input className={styles.input} type="text" placeholder="Subject" required name="Subject"/></p>
      <p><input className={styles.input} type="text" placeholder="Message" required name="Message"/></p>
      <p>
        <button className={styles.Contact_btn} >
         SEND MESSAGE
        </button>
      </p>
    </form>
    
  
  </div>
}

export default Contato