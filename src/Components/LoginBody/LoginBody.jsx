import tenis1 from "../../assets/tenis1.png"
import tenis2 from "../../assets/tenis2.png"
import icons from "../../assets/links.png"
import "./LoginBody.css"

function LoginBody() {

  return (
    <>
      <section id="loginBodyContainer">
        <div id="formContainer">
          <div id="loginTitles">
            <h1>Acesse sua conta</h1>
            <p>Novo cliente? Então registre-se <a href=""></a></p>
          </div>
          <div id="loginForm">
            <label htmlFor="">Login *</label>
            <input type="email" name="" id="" placeholder="Digite seu login ou email"/>

            <label htmlFor="">Senha *</label>
            <input type="password" name="" id="" placeholder="Digite sua senha"/>

            <a href="">Esqueci minha senha</a>
            <button>Acessar Conta</button>

            <div id="icons">
              <a href="">Ou faça login com</a>
              <img src={icons} alt="" />
            </div>
          </div>
        </div>
        <div id="containerTenis">
          <img src={tenis1} alt=""/>
          <img src={tenis2} alt=""/>
        </div>
      </section>
    </>
  )
}

export default LoginBody