// Clase Persona
class Persona {
    constructor() {
        this.nombre = '';
        this.apellido = '';
        this.telefono = '';
        this.direccion = '';
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getTelefono() {
        return this.telefono;
    }

    getDireccion() {
        return this.direccion;
    }
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    constructor() {
        super();
        this.codigo = '';
        this.nivelAcademico = '';
        this.sueldoBase = '';
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    setNivelAcademico(nivelAcademico) {
        this.nivelAcademico = nivelAcademico;
    }

    setSueldoBase(sueldoBase) {
        this.sueldoBase = sueldoBase;
    }

    getCodigo() {
        return this.codigo;
    }

    getNivelAcademico() {
        return this.nivelAcademico;
    }

    getSueldoBase() {
        return this.sueldoBase;
    }
}

// Clase Ventas que hereda de Empleado
class Ventas extends Empleado {
    constructor() {
        super();
        this.tipoContratacion = '';
        this.comisionVenta = '';
    }

    setTipoContratacion(tipoContratacion) {
        this.tipoContratacion = tipoContratacion;
    }

    setComisionVenta(comisionVenta) {
        this.comisionVenta = comisionVenta;
    }

    getTipoContratacion() {
        return this.tipoContratacion;
    }

    getComisionVenta() {
        return this.comisionVenta;
    }
}

// Manejo del formulario
document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const venta = new Ventas();

    // Asignar valores usando métodos set
    venta.setNombre(document.getElementById('nombre').value);
    venta.setApellido(document.getElementById('apellido').value);
    venta.setTelefono(document.getElementById('telefono').value);
    venta.setDireccion(document.getElementById('direccion').value);
    venta.setCodigo(document.getElementById('codigo').value);
    venta.setNivelAcademico(document.getElementById('nivelAcademico').value);
    venta.setSueldoBase(document.getElementById('sueldoBase').value);
    venta.setTipoContratacion(document.getElementById('tipoContratacion').value);
    venta.setComisionVenta(document.getElementById('comisionVenta').value);

    // Mostrar valores usando métodos get
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${venta.getNombre()}</p>
        <p><strong>Apellido:</strong> ${venta.getApellido()}</p>
        <p><strong>Teléfono:</strong> ${venta.getTelefono()}</p>
        <p><strong>Dirección:</strong> ${venta.getDireccion()}</p>
        <p><strong>Código:</strong> ${venta.getCodigo()}</p>
        <p><strong>Nivel Académico:</strong> ${venta.getNivelAcademico()}</p>
        <p><strong>Sueldo Base:</strong> ${venta.getSueldoBase()}</p>
        <p><strong>Tipo de Contratación:</strong> ${venta.getTipoContratacion()}</p>
        <p><strong>Comisión de Venta:</strong> ${venta.getComisionVenta()}</p>
    `;
});