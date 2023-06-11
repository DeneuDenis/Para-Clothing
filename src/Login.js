import './Login.css'
import logo from "./imgs/logo rep loja.png"

const Login = () => {
    return ( 

        <div class = "tela-1">
            <div class = "overlap-group3">
                <div class = "rectangle-9"></div>
                <div class="overlap-group">

                    <img class="logo-rep-loja" src={ logo } alt="logo rep loja" />
                    <h1 class="title">Para Clothing</h1>

                </div>
                <div class="overlap-group1">

                    <div class="fazer-login">Fazer login</div>
                    <a class="cadastrar" href='/register'>Cadastrar</a>
                    <div class="email">Email</div>
                    <div class="rectangle-6">
                        <input type="text" class="emailInput" placeholder="example@example.com" />
                    </div>
                    <div class="senha-container"></div>
                    <div class="senha">Senha</div>
                    <div class="senha-input">
                        <input type="text" class="passwordInput" placeholder="example" />
                    </div>

                    <div class="overlap-group2">
                        <button class="entrar">Entrar</button>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Login;