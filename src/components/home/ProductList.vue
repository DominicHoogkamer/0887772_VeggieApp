<template>
<div>
    <ul>
      <li v-for="product in filteredProducts" >
        <p :id="product.fields.item_id">{{product.fields.item_name}}</p>
        <button class="add-button" @click="foodLocal(product.fields.item_id,product.fields.item_name)">Add</button>
      </li>
    </ul>
</div>
</template>


<script>
    export default {
        data () {
            return {
                dayPart: 'Breakfest',
                isActive: true,
                seachActive: false
            }
        },
        props: ['products','search','active'],
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
                            'id': id
                        }
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