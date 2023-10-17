# Proyecto-Convert-USD-to-MXN-ICP-
Mi proyecto es un conversor básico de dólares a pesos mexicanos que se ejecuta dentro de un canister. Este canister utiliza dos funciones básicas para llevar a cabo la conversión.

La primera función, llamada "setMessage", se encarga de obtener la cantidad de dólares que se desean convertir. (El usuario proporciona la cantidad de dólares como entrada a través de esta función.)

La segunda función, llamada "getMessage", realiza la conversión de dólares a pesos mexicanos. Esta función toma la cantidad de dólares ingresada previamente por el usuario y la multiplica por el tipo de cambio (previamente establecido). El resultado de esta multiplicación es el equivalente en pesos mexicanos.

# Running the project locally
If you want to test your project locally, you can use the following commands:
```
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```
