<template>
<div>
    <div class="container">
        <img src="../assets/logo.png" alt="logo" class="logo">
        <div class="menu">
            <ul class="listContainer">
                <router-link to="/">
                    <li class="list-item">Home</li>
                </router-link>
                <router-link to="contacto">
                    <li class="list-item">Contacto</li>
                </router-link>
                <router-link to="Categorias">
                <li class="list-item">Categorias</li>
                </router-link>                
            </ul>
        </div>
    </div>    
</div>
</template>

<script>


</script>



<style>

    .container {
        max-width: inherit;
        background: #3f373738;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem;
    }

    .listContainer {
        display: flex;
        flex-direction: row;
        gap: 45px;
        list-style: none;
        color: white;
        font-size: 24px;
    }

    .logo {
        width: 50px;
        
    }

    

</style>

