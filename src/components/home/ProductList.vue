<template>
<div class="container" v-if="searchActive">
    <p>Search Results</p>
    <ul class="card-container">
      <li  v-for="product in filteredProducts" class="card">
      <div class="card-content">
        <p class="content"><strong>{{product.fields.item_name}}</strong></p>
        <p>Item info</p>
        <a class="button is-light" @click="foodLocal(product.fields.item_id,product.fields.item_name)">Add</a>
      </div>
      </li>
    </ul>
</div>
</template>


<script>
    export default {
        data () {
            return {
                dayPart: 'Breakfest',
                isActive: true            }
        },
        props: ['products','search','active','searchActive'],
        methods: {
            foodLocal (id,name) {
                this.isActive = !this.active;
                let newItem = {}

                let oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];

                newItem ={
                    'products': [
                        {
                            'daypart': this.dayPart,
                            'name': name,
                            'id': id                        }
                    ]
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
        }

    }

</script>
