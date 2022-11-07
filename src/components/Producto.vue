<template>
    <div class="productContainer">
        <img :src="imagen" alt="producto" class="imagenPersonalizada">
        <div class="productTextContainer">
            <h1 class="productTitle">{{titulo}}</h1>
            <router-link :to="'/producto/'+id">

            <button type="button" class="btn btn-secondary">Ver Producto</button>
                        
             
                
            </router-link>
        </div>

    </div>
</template>

<script>

    export default  {
        props: ['titulo', 'id', 'imagen',]
    }

</script>


<style>

  

    

    
</style>