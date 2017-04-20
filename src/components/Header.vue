<template>
    <div id="bottom-footer">
    <div class="columns is-mobile">
        <router-link to="/" activeClass="active" class="column"><div ><i class="fa fa fa-plus fa-lg"></i></div></router-link>
        <router-link to="/products" activeClass="active" class="column"><div ><i class="fa fa fa-list fa-lg"></i></div></router-link>
        <router-link to="/products/info" activeClass="active" class="column"><div><i class="fa fa fa-pie-chart fa-lg"></i></div></router-link>
        <div class="column" @click="refreshStorage"><i class="fa fa fa-refresh fa-lg"></i></div>
    </div>
    </div>
</template>

<script>
    export default {
        methods: {
            refreshStorage(){
                localStorage.clear();
            }
        }
    }
</script>

<style scoped>
#bottom-footer {
    position: fixed; 
    bottom: 0px; 
    width: 100%;
    background-color: #FFF;
    box-shadow: -1px 4px 27px -5px rgba(0,0,0,0.2);
}

.columns {
    padding: 15px;
    
}

a {
    color: #363636
}

a:hover {
    color: #00d1b2;
}

.active{
    
}
</style>