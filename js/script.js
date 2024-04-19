document.addEventListener('DOMContentLoaded', function () {
    // PRIMER EJERCICIO
    // se captura el submit
    document.getElementById('formulario').addEventListener('submit', function (event) {
        event.preventDefault();
        //se traen los datos del html
        let inputNumero = document.getElementById('numeroCaptado').value;
        // se guarda el resultado de la funcion en una variable
        let resultado = sumarN(inputNumero);
        alert("el Resultado de la Suma es: " + resultado)
        //se blanquea el input en el HTML
        document.getElementById('numeroCaptado').value = "";
    })
    //se crea una funcion 
    function sumarN(inputNumero) {
        // se utiliza un acumulador
        let acumulador = 0
        // se usa un for para poder saber hasta que numero haria la sumatoria
        for (let i = 1; i <= inputNumero; i++) {
            acumulador += i;
        }

        //se retorna el acumulador
        return acumulador;



    }
    // SEGUNDO EJERCICIO
    //se captura el segundo submit
    document.getElementById('form-primo').addEventListener('submit', function (event2) {
        event2.preventDefault();
        //se trae el resultado obtenido en la funcion
        let primo = document.getElementById('numeroPrimo').value;
        let res = esPrimo(primo)
        //se muestra con alert el resultado
        if (res == 1) {
            alert("El Numero es Primo");
        }
        else {
            alert("El Numero No es Primo");
        }

    });
    // se crea una funcion
    function esPrimo(primo) {

        let divisor = 1;
        let contador = 0;
        //se usa un while ya que mientras el divisor sea menor o igual al numero primo podre saber si aun es un numero primo
        while (divisor <= primo) {
            if (primo % divisor == 0) {
                contador++;
            }
            divisor++;
        }
        //se retorna 1 o 2 de acuerdo a False o true
        if (contador == 2) {
            return 1;
        }
        else {
            return 2;
        }
    }
    // TERCER EJERCICIO
    // se toma el evento del tercer submit
    document.getElementById('form-numeroMaximo').addEventListener('submit', function (event3) {
        event3.preventDefault();
        //capturo el numero desde HTML
        let maximo = document.getElementById('numeroMaximo').value;

        //se guarda en una variable el resultado de la funcion
        let resu = cuentaRegresiva(maximo)

        alert("El Resultado de la Funcion es: " + resu);
        //se blanquea el input en el HTML
        document.getElementById('numeroMaximo').value = "";

    });


    //se crea la funcion cuenta regresiva
    function cuentaRegresiva(maximo) {

        let contar = '';
        let mensaje = '';
        //se usa un for para saber desde donde comenzar a restar
        for (contar = maximo; contar > 0; contar--) {
            //se crea esta variable para que muestre el valor y una coma al final
            mensaje += contar + ", ";
        }

        mensaje += contar;   //Evita la coma al final
        return mensaje;
    }
    // CUARTO EJERCICIO
    document.getElementById('form-buscarPar').addEventListener('submit', function (event4) {
        event4.preventDefault();
//se trae el dato desde HTML
        let entero = document.getElementById('numeroEntero').value;
        //se comprueba que el numnero no sea menor a 10
        if (entero < 10) {
            alert("Debe Ingresar un Numero Entero Mayor a 10");
            return
        }
        //sino es entra a la funcion
        else {
            let resu = sumaDePares(entero)
            alert("La Suma en el Rango es de: " + resu);
            //se blanquea el input en el HTML
            document.getElementById('numeroEntero').value = "";
        }

    });
    //se crea la funcion para solamente sumar los pares si tuviere entre en rango 
    function sumaDePares(x) {
        var suma = 0
        //se usa un formpara sumar desde 1 hasta el numero ingresado
        for (var i = 1; i <= x; i++) {
            //significa que cada vez que "i" es divisible por 2 (también conocido como número par), devuelve un 0
            if (i % 2 == 0) {
                //+= se puede usar para concatenar la expresión String de su derecha a la propiedad o la variable String de su izquierda y asigna el resultado a la variable o propiedad de su izquierda
                suma += i
            }
        }
        //se retorna el valor 
        return suma
    }



    // QUINTO EJERCICIO
    document.getElementById('form-multiplicacion').addEventListener('submit', function (event5) {
        event5.preventDefault();
        //se captura el multiplo ingresado en HTML
        let multiplo = document.getElementById('numeroMultiplo').value;

        //se ejecita la Funcion con el Multiplo anterior
        TablaMultiplicar(multiplo);


    });

    // se crea la funcion
    function TablaMultiplicar(multiplo) {
        //se muestra en HTML el mensaje 
        document.write("<h2>Tabla de multiplicar del " + multiplo + "</h2>");
        //se muestra un <ul> en HTML
        document.write("<ul>");
        // se usa un for para hacer la tabla de multiplicar hasta el nunero 12
        for (i = 1; i <= 12; i++) {
            //se muestran estos valores hasta que se rompa el for
            document.write("<li>");
            document.write(multiplo + " x " + i + "= " + multiplo * i);
            document.write("</li>");
        }
        //se cierra el <ul>
        document.write("</ul>");
    }

})

