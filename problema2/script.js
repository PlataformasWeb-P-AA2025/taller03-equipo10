$(document).ready(function () {
    // Activa el widget datepicker en el campo "fecha"
    $("#fecha").datepicker({
        dateFormat: "mm/dd/yy"
    });

    // Evento para capturar los valores ingresados y mostrarlos
    $("#generar").click(function () {
        const nombre = $("#nombre").val();
        const apellido = $("#apellido").val();
        const fecha = $("#fecha").val();

        // Muestra los valores en la consola
        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
        console.log("Fecha de Nacimiento:", fecha);

        // Muestra los valores en la columna adjunta
        const lista = $("#lista");
        lista.empty();
        lista.append(`<li>Nombre: ${nombre}</li>`);
        lista.append(`<li>Apellido: ${apellido}</li>`);
        lista.append(`<li>Fecha de Nacimiento: ${fecha}</li>`);
    });
});
