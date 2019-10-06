import Chart from './Chart';

class Analytic {
  constructor(date) {
    this.date = date;
    this.charts = [];
  }

  initCharts() {
    this.addChart(19, 'пн', 15);
    this.addChart(20, 'вт', 11);
    this.addChart(21, 'ср', 18);
    this.addChart(22, 'чт', 39);
    this.addChart(23, 'пт', 45);
    this.addChart(24, 'сб', 73);
    this.addChart(25, 'вс', 34);
  }

  addChart(day, dayOfWeek, count) {
    const newChart = new Chart(day, dayOfWeek, count);
    this.charts.push(newChart);
  }

  // Фунация подсчета процентов у каждого чарта
  calcChartsWidth() {
    // находим максимум - это будет 100 % величина
    let maxCount = 0;
    for (let i = 0; i < this.charts.length; i++) {
      if (this.charts[i].count > maxCount) {
        maxCount = this.charts[i].count;
      }
    }
    // выставляем процент у каждого чарта
    for (let i = 0; i < this.charts.length; i++) {
      this.charts[i].width = Math.floor(this.charts[i].count * 100 / maxCount);
    }
  }
}

export default Analytic;