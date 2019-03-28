    
    const dataset = [
      [
        "1947-01-01",
        243.1
      ],
      [
        "1947-04-01",
        246.3
      ],
      [
        "1947-07-01",
        250.1
      ],
      [
        "1947-10-01",
        260.3
      ],
      [
        "1948-01-01",
        266.2
      ],
      [
        "1948-04-01",
        272.9
      ],
      [
        "1948-07-01",
        279.5
      ],
      [
        "1948-10-01",
        280.7
      ],
      [
        "1949-01-01",
        275.4
      ],
      [
        "1949-04-01",
        271.7
      ],
      [
        "1949-07-01",
        273.3
      ],
      [
        "1949-10-01",
        271
      ],
      [
        "1950-01-01",
        281.2
      ],
      [
        "1950-04-01",
        290.7
      ],
      [
        "1950-07-01",
        308.5
      ],
      [
        "1950-10-01",
        320.3
      ],
      [
        "1951-01-01",
        336.4
      ],
      [
        "1951-04-01",
        344.5
      ],
      [
        "1951-07-01",
        351.8
      ],
      [
        "1951-10-01",
        356.6
      ],
      [
        "1952-01-01",
        360.2
      ],
      [
        "1952-04-01",
        361.4
      ],
      [
        "1952-07-01",
        368.1
      ],
      [
        "1952-10-01",
        381.2
      ],
      [
        "1953-01-01",
        388.5
      ],
      [
        "1953-04-01",
        392.3
      ],
      [
        "1953-07-01",
        391.7
      ],
      [
        "1953-10-01",
        386.5
      ],
      [
        "1954-01-01",
        385.9
      ],
      [
        "1954-04-01",
        386.7
      ],
      [
        "1954-07-01",
        391.6
      ],
      [
        "1954-10-01",
        400.3
      ],
      [
        "1955-01-01",
        413.8
      ],
      [
        "1955-04-01",
        422.2
      ],
      [
        "1955-07-01",
        430.9
      ],
      [
        "1955-10-01",
        437.8
      ],
      [
        "1956-01-01",
        440.5
      ],
      [
        "1956-04-01",
        446.8
      ],
      [
        "1956-07-01",
        452
      ],
      [
        "1956-10-01",
        461.3
      ],
      [
        "1957-01-01",
        470.6
      ],
      [
        "1957-04-01",
        472.8
      ],
      [
        "1957-07-01",
        480.3
      ],
      [
        "1957-10-01",
        475.7
      ],
      [
        "1958-01-01",
        468.4
      ],
      [
        "1958-04-01",
        472.8
      ],
      [
        "1958-07-01",
        486.7
      ],
      [
        "1958-10-01",
        500.4
      ],
      [
        "1959-01-01",
        511.1
      ],
      [
        "1959-04-01",
        524.2
      ],
      [
        "1959-07-01",
        525.2
      ],
      [
        "1959-10-01",
        529.3
      ],
      [
        "1960-01-01",
        543.3
      ],
      [
        "1960-04-01",
        542.7
      ],
      [
        "1960-07-01",
        546
      ],
      [
        "1960-10-01",
        541.1
      ],
      [
        "1961-01-01",
        545.9
      ],
      [
        "1961-04-01",
        557.4
      ],
      [
        "1961-07-01",
        568.2
      ],
      [
        "1961-10-01",
        581.6
      ],
      [
        "1962-01-01",
        595.2
      ],
      [
        "1962-04-01",
        602.6
      ],
      [
        "1962-07-01",
        609.6
      ],
      [
        "1962-10-01",
        613.1
      ],
      [
        "1963-01-01",
        622.7
      ],
      [
        "1963-04-01",
        631.8
      ],
      [
        "1963-07-01",
        645
      ],
      [
        "1963-10-01",
        654.8
      ],
      [
        "1964-01-01",
        671.1
      ],
      [
        "1964-04-01",
        680.8
      ]
    ];
    
    const padding = 40
    const w = 920 - (padding*2);
    const h = 880 - (padding*2);

    // User Story #1: My chart should have a title with a corresponding id="title".
    const chart = d3.select('body')
                    .append('svg')
                    .attr('width', w)
                    .attr('height', h)
                    .attr('id', 'title')
                    console.log(chart)

    // User Story #2: My chart should have a g element x-axis with a corresponding id="x-axis".

    //todo chech out
    // var xScale = d3.scaleBand().range([0, width]).padding(0.2).round(true); 

    const xScale = d3.scaleTime()
    .domain([ new Date (dataset[0][0]), new Date(dataset[dataset.length-1][0]) ])
    .range([padding, w-padding]);
    const xAxis = d3.axisBottom(xScale);

    console.log([dataset[0][0],dataset[dataset.length-1][0]])

    chart.append("g")
          .attr('id', 'x-axis')
          .attr("transform", "translate(0,"+(h-padding)+")")
          .call(xAxis);

    // User Story #3: My chart should have a g element y-axis with a corresponding id="y-axis".
    const yScale = d3.scaleLinear()
                      .domain( [0,d3.max(dataset, (d)=>d[1])] )
                      .range([padding,h-padding]);
    const yAxis = d3.axisLeft(yScale);

    console.log(d3.max(dataset, (d) => d[1]))
    chart.append("g")
          .attr('id', 'y-axis')
          .attr("transform", "translate("+ padding+",0)")
          .call(yAxis);

    // User Story #4: Both axes should contain multiple tick labels, each with the corresponding class="tick".

    //todo

    // User Story #5: My chart should have a rect element for each data point class="bar" displaying the data.
    let rect_width = w / 15
    chart
      .selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(new Date(d[0])))
      .attr("y", (d) => yScale(d[1]) - padding)
      .attr("width", rect_width)
      .attr("height", (e) => h - yScale(e[1]))
      .attr('class', 'bar')

      // dataset.forEach(e => console.log(xScale( new Date (e[0]))))

      // User Story #6: Each bar should have the properties data-date and data-gdp containing date and GDP values.


      // User Story #7: The bar elements' data-date properties should match the order of the provided data.
      
      
      // User Story #8: The bar elements' data-gdp properties should match the order of the provided data.
                          
  