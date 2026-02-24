// WEB COMPONENT
class ResultadoCotizacion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const cliente = this.getAttribute("cliente");
        const total = this.getAttribute("total");

        this.shadowRoot.innerHTML = `
            <style>
                .caja {
                    background: white;
                    margin: 20px auto;
                    padding: 15px;
                    width: 320px;
                    border-left: 6px solid #1e3a8a;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
                    text-align: center;
                }
                h3 {
                    color: #1e3a8a;
                }
            </style>

            <div class="caja">
                <h3>Cotización Generada</h3>
                <p><strong>Cliente:</strong> ${cliente}</p>
                <p><strong>Total a pagar:</strong> $${total}</p>
            </div>
        `;
    }
}

customElements.define("resultado-cotizacion", ResultadoCotizacion);

// EVENTO + VALIDACIÓN + MANIPULACIÓN SIN RECARGAR
document.getElementById("formCotizacion").addEventListener("submit", function(e) {

    e.preventDefault();

    const cliente = document.getElementById("cliente").value.trim();
    const tipo = document.getElementById("tipoReparacion").value;
    const urgencia = document.getElementById("urgencia").value;

    if (cliente === "" || tipo === "" || urgencia === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    const total = (parseFloat(tipo) * parseFloat(urgencia)).toFixed(2);

    const nuevoResultado = document.createElement("resultado-cotizacion");
    nuevoResultado.setAttribute("cliente", cliente);
    nuevoResultado.setAttribute("total", total);

    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";
    contenedor.appendChild(nuevoResultado);

});