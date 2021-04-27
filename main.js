new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    lineColors: ['#1c4a5f'],
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2011', value: 3 }, 
      { year: '2012', value: 9 },
      { year: '2013', value: 17 },
      { year: '2014', value: 6 },
      { year: '2015', value: 8 },
      { year: '2016', value: 15 },
      { year: '2017', value: 2 },
      { year: '2018', value: 5 },
      { year: '2019', value: 7 },
      { year: '2020', value: 20 },
      { year: '2021', value: 25 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });

  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ],
    colors: ['#F42A26', '#064e53', '#122942'],
    labelColor: '#b9b8b8'
  });