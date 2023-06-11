import logo from "./imgs/logo rep loja.png"
import "./Register.css"

function createdMessage() {

    alert("Conta criada com sucesso!");

}

const Register = () => {
    return ( 

        <div className="registerPage">
            <div class = "overlap-group3">
                <div class = "rectangle-9"></div>
                <div class="overlap-group">

                    <img class="logo-rep-loja" src={ logo } alt="logo rep loja" />
                    <h1 class="title">Para Clothing</h1>

                </div>
                <div class="overlap-group1">

                    <div class="registerTitle">Cadastre-se</div>
                    <div class="email">Email</div>
                    <div class="rectangle-6">
                        <input type="text" className="emailInput" placeholder="example@example.com" />
                    </div>
                    <div className="info">Info</div>
                    <div className="container">
                        <input type="text" className="nameInput" placeholder="name" />
                    </div>
                    <div className="container">
                        <input type="text" className="adressInput" placeholder="adress" />
                    </div>
                    <div className="container">
                        <input type="text" className="phoneInput" placeholder="phone number" />
                    </div>
                    <div class="senha-container"></div>
                    <div class="senha">Senha</div>
                    <div class="senha-input">
                        <input type="text" className="passwordInput" placeholder="example" />
                    </div>


                    <div class="overlap-group2">
                        <button class="criarConta" onClick={createdMessage}>Criar Conta</button>
                    </div>
                    <a href="/login" className="loginBack">Voltar ao Login</a>
                </div>
            </div>
        </div>

     );
}
 
export default Register;