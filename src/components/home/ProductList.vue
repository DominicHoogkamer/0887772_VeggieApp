<template>
    <ul v-show="active">
      <li v-for="product in filteredProducts" >
        <p :id="product.fields.item_id">{{product.fields.item_name}}</p>
        <button class="add-button">Add</button>
      </li>
    </ul>
</template>


<script>
    export default {
        props: ['products','search','active'],
        methods: {

        },
        computed: {
            filteredProducts () {
            let products_array = this.products,
                searchString = this.searchString;
            if(!searchString){
                return products_array;
            }
            searchString = searchString.trim().toLowerCase();
            products_array = products_array.filter((item) => {
                if(item.fields.item_name.toLowerCase().indexOf(searchString) !== -1){
                return item;
                }
            })
            return products_array;
            }
        }
    }

</script>