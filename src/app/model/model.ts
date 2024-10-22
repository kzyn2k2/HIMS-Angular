import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexStroke, ApexNonAxisChartSeries, ApexResponsive, ApexDataLabels, ApexFill, ApexPlotOptions, ApexYAxis, ApexGrid } from "ng-apexcharts"

export type Pager<T> = {
    data: T[],
    totalItems: number,
    totalPages: number
}

export type LineChartOptions = {
  series: ApexAxisChartSeries,
  chart: ApexChart,
  xaxis: ApexXAxis,
  title: ApexTitleSubtitle,
  grid: ApexGrid,
  dataLabels: ApexDataLabels
  stroke: ApexStroke,
}

export type PieChartOptions = {
    series: ApexNonAxisChartSeries,
    chart: ApexChart,
    responsive: ApexResponsive[],
    labels: any
}

export type BarCharOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};