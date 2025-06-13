const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('\n--- Clasificador de Números ---');
    console.log('1. Determinar si es par o impar');
    console.log('2. Determinar si es positivo, negativo o cero');
    console.log('3. Determinar si es múltiplo de 5');
    console.log('4. Determinar si es divisible entre 3 y 4 al mismo tiempo');
    console.log('5. Salir');
}

function preguntarOperacion() {
    mostrarMenu();
    rl.question('Seleccione una opción (1-5): ', (opcion) => {
        if (opcion === '5') {
            console.log('¡Hasta luego!');
            rl.close();
            return;
        }
        rl.question('Ingrese un número: ', (inputNumero) => {
            const numero = Number(inputNumero);
            if (isNaN(numero)) {
                console.log('Por favor, ingrese un número válido.');
                preguntarOperacion();
                return;
            }
            switch (opcion) {
                case '1':
                    if (numero % 2 === 0) {
                        console.log(`El número ${numero} es PAR.`);
                    } else {
                        console.log(`El número ${numero} es IMPAR.`);
                    }
                    break;
                case '2':
                    if (numero > 0) {
                        console.log(`El número ${numero} es POSITIVO.`);
                    } else if (numero < 0) {
                        console.log(`El número ${numero} es NEGATIVO.`);
                    } else {
                        console.log('El número es CERO.');
                    }
                    break;
                case '3':
                    if (numero % 5 === 0) {
                        console.log(`El número ${numero} es múltiplo de 5.`);
                    } else {
                        console.log(`El número ${numero} NO es múltiplo de 5.`);
                    }
                    break;
                case '4':
                    if (numero % 3 === 0 && numero % 4 === 0) {
                        console.log(`El número ${numero} es divisible entre 3 y 4 al mismo tiempo.`);
                    } else {
                        console.log(`El número ${numero} NO es divisible entre 3 y 4 al mismo tiempo.`);
                    }
                    break;
                default:
                    console.log('Opción no válida.');
            }
            preguntarOperacion();
        });
    });
}

preguntarOperacion();