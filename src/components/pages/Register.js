import React, { useEffect, useState } from "react";

const Register = () => {
    const [ data, setData] = useState(null);

      useEffect(
             () => {
                 fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/pages/335')
                 .then(response => response.json())
                 .then(data => setData(data))
             }, []
         );

    if(!data) return <p>Učitavanje...</p>;

    return(
    
    <>
    <div class="container-fluid">
    <div class="row">
    <div class="col-md-6 login-intro">
      <img src="img/logo-manji.jpg" />
      <div class="login-text">
        <h1>Dobro došli na stranicu Udruge pobjede</h1>
        <p>Prijavite se na naš newsletter</p>
      </div>
      <div class="cute-dog">
        <img src="img/treci_psic-manji.jpg" />
      </div>
    </div>
    <div class="col-md-6 login-form">
      <div class="">
       <h1>Napravite svoj račun</h1>
       <p>Registrirajte se za više pogodnosti</p>
       <label>Ime i prezime</label>
       <input type="text" placeholder="Upišite svoje ime i prezime" class="mb-4" />
       <label>Vaš grad</label>
       <input type="text" placeholder="Grad iz kojeg dolazite" class="mb-4" />
       <label>E-mail</label>
       <input type="text" placeholder="Upišite svoje e-mail" class="mb-4" />
       <label>Lozinka</label>
       <input type="password" placeholder="Upišite svoju lozinku" class="mb-4" />
       <p><a href="#">Zaboravili ste lozinku? </a></p>
       <button type="submit">Registracija</button>
     </div>
    </div>
 </div>
</div>
</>

     );
};

export default Register;