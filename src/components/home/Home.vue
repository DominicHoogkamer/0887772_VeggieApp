<template>
<div>
        <section class="hero home-header is-primary is-medium">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                <strong>What did you eat?</strong>
              </h1>
              <h2 class="subtitle">
                So we have a better understanding of your progress as a veggie
              </h2>
            </div>
          </div>
        </section>
        <div class="search-container">
          <input type="text" v-model="searchString" placeholder="Search for food" @keyup="fillArray">
          <i class="fa fa fa-search fa-lg"></i>
        </div>
        <ProductList :products="products"  :searchActive="searchActive" :search="searchString" :active="active"></ProductList>      
    </div>
    </div>
</template>

<script>
import ProductList from '@/components/home/ProductList'

export default {
    data () {
        return {
            active: false,
            searchActive: false,
            searchString: '',
            products: [{
            }]
        }
    },
    components: {
        ProductList
    },
    methods: {
      fillArray () {
        this.$http.get(`https://api.nutritionix.com/v1_1/search/${this.searchString}?results=0%3A5&?fields=item_name%2Citem_id%2Cbrand_name&appId=e04cdea6&appKey=a9e5f13309aa5afb4086ab88774eab9f`)
        .then(response => {
          this.products = response.body.hits
          this.addInput();
        }, error => {
          console.log(error);
        });       
      },
      addInput () {
        if(this.searchString !== '') {
          this.active = true
          this.searchActive = true
        } else {
          this.active = false
          this.searchActive = false
        }
      }
    }
}

</script>

<style>
html {
    position: relative;
    min-height: 100%;  
}

body {
  margin: 0 0 40px;
  background: #f7f7f7!important;
  height: 100%;
}

.home-header {
    background-image: url('https://images.unsplash.com/photo-1489444444961-d0fda97f0986');
  background-size: cover;
  padding: 40px 0 50px 0;
}


#app {
 
  text-align: center;
}

.search-container {
  position:relative;
}

.fa-search {
  position:absolute;
  left: 62px;
  top: -4px;
}

input {
  margin-top: 20px;
  margin-bottom: 20px;
  border:none;
  padding: 15px 15px 15px 45px;
  font-size: 20px;
  color: #5b5b5d;
  box-shadow: -1px 4px 27px -5px rgba(0,0,0,0.2);
      position: relative;
    top: -46px;
  
}
::-webkit-input-placeholder {
    color:    #5b5b5d;
}
input:focus{
  outline: none;
}

.card-container{
  padding: 0 20px 0 20px;

}

.card {
      border-bottom: 1px solid rgba(10,10,10,.1);
      box-shadow: none;
      text-align:left;
        box-shadow: -1px 4px 27px -5px rgba(0,0,0,0.2);

}
</style>