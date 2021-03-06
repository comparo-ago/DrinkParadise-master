class Combo{
    constructor(nombre, productos, descuento, relevance, id){
        this.nombre = nombre;
        this.productos = productos;
        this.precioTotal = 0;
        this.descuento = descuento;    /* cada combo tiene la posibilidad de tener un descuento propio. sin embargo, para este simulador, puse todos en 20% */
        this.relevance = relevance;    /* relevance es un valor (recibido desde un backend por ej) que define que tan visto/comprado es un producto. por defecto ordeno segun relevancia */
        this.id = id; 
    }

    calcPrecioTotal(){
        for (let i=0; i<this.productos.length;i++){
            this.precioTotal += this.productos[i].precio;
        }
        this.precioTotal -= Math.round((this.descuento / 100) * this.precioTotal);
    }

    inShopList(){
        let i = 0;
        for (const items of shopCart1.shopList){
            if (items == this.id){
                i++;
            }
        }
        
        return i;
    }
}


