<template>
    <div id="bottom-footer">
    <div class="columns is-mobile">
        <div class="column active"><i class="fa fa fa-plus fa-lg"></i></div>
        <div class="column"><i class="fa fa fa-list fa-lg"></i></div>
        <div class="column"><i class="fa fa fa-pie-chart fa-lg"></i></div>
        <div class="column"><i class="fa fa fa-refresh fa-lg"></i></div>
    </div>
    </div>
</template>

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
    color: #dbdbdb;
}

.active{
    color: #23d160;
}
</style>