import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Iron','Protein','Vitamine D'],
      datasets: [
        {
          backgroundColor: '#e2e2e2',
          data: [60, 20,20]
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