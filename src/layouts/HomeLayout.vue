<template>
    <div>
        <NavBar />
        <div class="catalogo">
            <div class="productoWrapper" v-for="(elemento, indice) in productos" :key="indice">
                <Producto :titulo="elemento.title"   :id="indice+1" :imagen="elemento.image"/>
            </div>
        </div>
    </div>
</template>

<script>
import Producto from '../components/Producto.vue'
export default {
    components: { Producto },
    data () {
        return {
            productos: []
        }
    },
    methods: {
        async obtenerProductos () {
            await fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=> this.productos = json)
                console.log(this.productos)
        }
    },
    mounted () {
        this.obtenerProductos()
    }
}

</script>
<style>

    .catalogo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 10px;
        flex-wrap: wrap;
        gap: 20px;
    }    

   h1.productTitle {
    margin-top: 30px;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    padding: 8px;
    
    }

    .productoWrapper {
       
     flex: 1;
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1px darkgrey;
     
   }

   .productContainer {

        max-width: 300px;
        border: outset;
        padding: 11px;
        height: 606px;
        box-sizing: content-box;
    }      

       
    .imagenPersonalizada {
    max-width: 266px;
    height: 328px;
    padding: 29px;
}
   

    img {
    vertical-align: revert;
    border-style: outset;
}

.nav  {
    color: #fff;    
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    padding: 10px;
    margin: 73px;
}



</style>