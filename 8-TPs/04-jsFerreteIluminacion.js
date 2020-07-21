/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //Declaracion
    var cantidad;
    var seleccion;
    var precio;
    var precioFinal;
    var precioConImpuesto;
     
    //Inicializacion
    cantidad = txtIdCantidad.value;
    seleccion = Marca.value;
    precio = 35;
    precioFinal = precio * cantidad;

    

    //Parseo
    cantidad = parseInt(cantidad);

    //Condicionales
    if(cantidad > 5){
        precioFinal *= 0.5;
    }
    else{
        if(cantidad == 5){
            
            if(seleccion == 'ArgentinaLuz'){
                precioFinal *= 0.6;
            }
            else{
                precioFinal *= 0.7;
            }
        }
        else{

            if(cantidad == 4){

                if(seleccion == 'ArgentinaLuz' || seleccion == 'FelipeLamparas'){
                    precioFinal *= 0.75;
                }
                else{
                    precioFinal *= 0.8;
                }
            }
            else{
                
                if(cantidad == 3){

                    if(seleccion == 'ArgentinaLuz'){
                        precioFinal *= 0.85;
                    }
                    else{
                        if(seleccion == 'FelipeLamparas'){
                            precioFinal *= 0.9;
                        }
                        else{
                            precioFinal *= 0.95;
                        }
                    }
                }
            }
        }
    }

    if(precioFinal >= 120){
        precioConImpuesto = precioFinal * 0.1;
        precioFinal *= 1.10
        alert(`IIBB Usted pago ${precioFinal.toFixed(2)}, siendo ${precioConImpuesto.toFixed(2)} el impuesto que se pagó`);
    }


    txtIdprecioDescuento.value = precioFinal.toFixed(2);
}
