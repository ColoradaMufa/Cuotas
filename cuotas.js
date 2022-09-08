

const recuadro = document.createElement('img')
image.src  = imagen.recuadro;
const app=new Vue({
    el: '#app',
    data: {
        prodAll: [
            {   producto: {
                Nombre: "Ruana",
                Id: 0,
                Stock: 5,
                Precio: 2350,
                url,
                mensaje:"Hay stock",
                alertaProd: "alertaOk",
                //Para reseteo
                StockInicial: 5,
                mensajeInicial:"Hay stock",
                alertaInicial: "alertaOk"
            }},
            {producto: {
                Nombre: "Buzo",
                Id: 1,
                Stock: 10,
                Precio: 1700,
                imagesrc: "/pic",
                mensaje:"Hay stock",
                alertaProd: "alertaOk",
                //Para reseteo
                StockInicial: 10,
                mensajeInicial:"Hay stock",
                alertaInicial: "alertaOk"
            }},
            {producto: {
                Nombre: "Moño",
                Id: 2,
                Stock: 3,
                Precio: 450,
                Url: "",
                mensaje:"Hay stock",
                alertaProd: "alertaOk",
                //Para reseteo
                StockInicial: 3,
                mensajeInicial:"Hay stock",
                alertaInicial: "alertaOk"
            }}
        ],
        unidad: 1,
        sumaUnidades: 0,
        sumaPrecios: 0,
        carrito:[]
    },
    computed: {
        listaCarrito() {
            let salida='';
                for (productoSel of this.carrito) {
                    salida += productoSel;
                }
                salida += '';
                //console.log;  
                return salida;
        }
    },
    methods: {
        agregaProd(evento){
            console.log('Id es ' + evento.target.id);
            let target = evento.target.id
            let producto = this.prodAll[target].producto
            
            if(producto.Stock>0) { 
                producto.Stock -= 1;
                this.sumaUnidades += 1;
                this.sumaPrecios += producto.Precio;

                let = elemento= {
                nombre: producto.Nombre,
                cantidad:this.unidad,
                valor:"$ " + producto.Precio
                }
                this.carrito.push(elemento);
            }
            if (producto.Stock<=0) {
                producto.mensaje="No hay stock disponible";
                producto.alertaProd="alertaNok"
            }
            
        },
        limpiarCarrito(){
            this.carrito=[];
            this.sumaUnidades = 0;
            this.sumaPrecios = 0;

            for (item in this.prodAll) {
                this.prodAll[item].producto.Stock = this.prodAll[item].producto.StockInicial;
                this.prodAll[item].producto.mensaje = this.prodAll[item].producto.mensajeInicial;
                this.prodAll[item].producto.alertaProd = this.prodAll[item].producto.alertaInicial;
            }
        }
    }
})