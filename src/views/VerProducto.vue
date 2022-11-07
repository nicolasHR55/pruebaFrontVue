<template>
    <div>
        <div >
            <Producto :titulo="this.producto.title" :imagen="this.producto.image"/>
            
        </div>
    </div>
</template>

<script>
import Producto from '@/components/Producto.vue';
    export default {
        components: {Producto},
        data () {
            return {
                producto: {}

            }
        },
        beforeCreate () {
            fetch('https://fakestoreapi.com/products/'+ this.$route.params.id)
            .then(res=>res.json())
            .then(json=> this.producto = json)

            console.log(this.producto, this.$route.params.id)
            
        }
    }

</script>