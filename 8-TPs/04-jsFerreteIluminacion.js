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
    var marcaElegida;
    var precio;
    var precioFinal;
    var impuesto;
    var precioConDescuento;
     
    //Inicializacion
    cantidad = txtIdCantidad.value;
    cantidad = parseInt(cantidad);
    marcaElegida = Marca.value;
    precio = 35;
    precioFinal = precio * cantidad;


    //Condicionales
    /*
    if(cantidad > 5)
    {
        precioFinal *= 0.5;
    }
    else
    {
        
        if(cantidad == 5)
        {
            
            if(marcaElegida == 'ArgentinaLuz')
            {
                precioFinal *= 0.6;
            }
            else
            {
                precioFinal *= 0.7;
            }
        }
        else
        {

            if(cantidad == 4)
            {

                if(marcaElegida == 'ArgentinaLuz' || marcaElegida == 'FelipeLamparas')
                {
                    precioFinal *= 0.75;
                }
                else
                {
                    precioFinal *= 0.8;
                }
            }
            else
            {
                
                if(cantidad == 3)
                {

                    if(marcaElegida == 'ArgentinaLuz')
                    {
                        precioFinal *= 0.85;
                    }
                    else
                    {
                        
                        if(marcaElegida == 'FelipeLamparas')
                        {
                            precioFinal *= 0.9;
                        }
                        else
                        {
                            precioFinal *= 0.95;
                        }
                    }
                }
            }
        }
    }


    if(precioFinal > 120)
    {
        impuesto = precioFinal * 0.1;
        precioFinal = precioFinal + impuesto;
        alert(`IIBB Usted pago ${precioFinal.toFixed(2)}, siendo ${impuesto.toFixed(2)} el impuesto que se pagó`);
    }
    */



    //Switch
    switch(cantidad){
        case 5:

            switch(marcaElegida){
                case 'ArgentinaLuz':
                    precioFinal *= 0.6;
                break;
                default:
                    precioFinal *= 0.7;
            }
            break;

        case 4:
            
            switch(marcaElegida){
                case 'ArgentinaLuz':
                    precioFinal *= 0.75;
                    break;
                case 'FelipeLamparas':
                    precioFinal *= 0.75;
                    break;
                default:
                    precioFinal *= 0.8;
                    break;
            }
            break;

        case 3:

            switch(marcaElegida){
                case 'ArgentinaLuz':
                    precioFinal *= 0.85;
                    break;
                case 'FelipeLamparas':
                    precioFinal *= 0.9;
                    break;
                default:
                    precioFinal *= 0.95;
            }
            break;

        case 2:
            break;
        case 1:
            break;
        case 0:
            break;
        default:
            precioFinal *= 0.5;
            break;
    }
    
    //Switch
    switch(precioFinal){
        case 120:
            break;
        default:
            impuesto = precioFinal * 0.1;
            precioFinal = precioFinal + impuesto;
            alert('IIBB Usted pago ' + precioFinal.toFixed(2) + ', siendo ' + impuesto.toFixed(2) + ' el impuesto que se pago');
    }


    txtIdprecioDescuento.value = precioFinal.toFixed(2);
    

    
}
