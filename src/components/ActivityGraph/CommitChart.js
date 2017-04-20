import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Water Bespaard * 100 = Liter','Koeien bespaard'],
      datasets: [
        {
          backgroundColor: '#e2e2e2',
          data: [15, 2]
        }
      ],
       options: {
        animation:{
            animateScale:true
        }
    }
    }, {responsive: true, maintainAspectRatio: false, legend: false})
  }
});