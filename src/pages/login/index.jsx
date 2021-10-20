import { useState } from 'react';
import './styles.css';
import Logo from './../../assets/images/img-01.png';

export function LoginPage() {

    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState(false)
    const [ password, setPassword ] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        setError(false);

        if (email == 'teste@teste.com' && password == '123456') {
            console.log('clicou');
        } else 
            setError(true);
    }

    return (
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100">
                    <div class="login100-pic" data-tilt>
                        <img src={Logo} alt="IMG" />
                    </div>

                    <div class="login100-form">
                        <span class="login100-form-title">
                            Logar 
                        </span>

                        {error &&  <p class="error-login">Login ou Senha incorreto!</p>}

                        {/* EMAIL */}
                        <div class="wrap-input100">
                            <input class="input100" onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" />						
                        </div>

                        {/* SENHA */}
                        <div class="wrap-input100">
                            <input class="input100" type="password" onChange={(e)=> setPassword(e.target.value)}  placeholder="Senha" />
                        </div>
                        
                        <div class="container-login100-form-btn">
                            <button class="login100-form-btn" onClick={handleLogin}>
                                Logar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

