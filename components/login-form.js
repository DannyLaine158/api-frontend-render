class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = /*html*/`
        <div class="container">
            <div class="row center-row">
                <div class="col s12 m8 l6 offset-m2 offset-l3">
                    <div class="card white z-depth-4">
                        <h5 class="center-align blue-text text-darken-3">Iniciar Sesión</h5>
                        <div class="card-content">
                            <div class="input-field">
                                <input autofocus type="text" id="username" autocomplete="off">
                                <label for="username">Nombre de Usuario</label>
                            </div>
                            <div class="input-field">
                                <input type="password" id="password" autocomplete="off">
                                <label for="password">Contraseña</label>
                            </div>
                            <button id="btnLogin"
                                class="btn waves-effect waves-light">Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('login-form', LoginForm);