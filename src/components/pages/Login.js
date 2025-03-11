import React, { useEffect, useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  useEffect( () => {
    if(localStorage.getItem('token')){
      navigate('/');
    }
  }, [navigate])

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState (false);

    const handleChange = (e) => {
      setForm({
        ...form, 
       [e.target.name] : e.target.value
    });

  }
  

    const handleLogin = (e) => {
      e.preventDefault();
      setError("");
      setIsLoading(true);

      fetch(
        'https://frontend.internetskimarketing.eu/backend/wp-json/jwt-auth/v1/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        }
      
      )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setForm({
          username: "",
          password: ""
        });
        if(data?.code) {
          setError("Neispravni podaci, pokušajte ponovno");
          return;
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.user_display_name);
        navigate('/');
        window.location.reload();
      });
    }

    return(

    <>
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-6 login-intro">
      <img src="img/lana.jpg" width="300" height="450" alt="lana_na_klupi"/>
      <div className="login-text">
        <h1>Dobro došli na stranicu udruge "Dajmo da šeću"</h1>
        <p>Prijavite se na naš newsletter</p>
      </div>
    </div>
    <div className="col-md-6 login-form">
      <div className="">
       <form className={isLoading ? "loading" : ""} onSubmit={handleLogin} >
       <label>E-mail</label>
       <input type="text" name="username" value={form.username} onChange={handleChange} required className="mb-4" />
       <label>Lozinka</label>
       <input type="password" name="password" value={form.password }onChange={handleChange} required className="mb-4" />
       <p className="test-end" mb-4 mt-1>
        <Link to="#">Zaboravili ste lozinku?</Link>
        </p>
       <button type="submit">Prijava</button>

       { error ? <p className="alert alert-danger">{error}</p> : "" }

       </form>
     </div>
    </div>
 </div>
</div>
</>

    );
};

export default Login;