<template>
<div>
    <ul v-show="active">
      <li v-for="product in filteredProducts" >
        <p :id="product.fields.item_id">{{product.fields.item_name}}</p>
        <button v-bind:class="{ active: isActive }" @click="foodLocal(product.fields.item_id)">Add</button>
      </li>
    </ul>
</div>
</template>


<script>
    export default {
        data () {
            return {
                dayPart: 'Breakfest',
                isActive: true
            }
        },
        props: ['products','search','active'],
        methods: {
            foodLocal (id) {
                this.isActive = !this.active;

                let oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

                let newItem = {
                    'id': id
                }

                oldItems.push(newItem);
                localStorage.setItem('itemsArray', JSON.stringify(oldItems));
            }
        },
        computed: {
            filteredProducts () {
                if(this.products !== ''){
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
        },
        mounted () {
            
        }
    }

</script>