// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  y: [38.9, 40.74, 42.69, 45.32, 45.48, 46.91, 50.16, 50.02, 51.02, 51.53, 53.08, 52.87, 54.27, 55.07, 57.59, 59.53, 60.54, 62.22, 63.91, 66.98], 
  line: {
    color: 'rgb(255, 0, 0)', 
    width: 4
  }, 
  name: 'Switzerland', 
  type: 'scatter', 
  uid: '3f409d'
};
trace2 = {
  x: [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  y: [19.52, 20.51, 21.95, 23.49, 24.14, 25.64, 26.92, 27.23, 28.06, 28.48, 29.21, 28.82, 29.57, 30.08, 31.66, 32.94, 33.74, 35.23, 37.94, 40.88], 
  line: {
    color: 'rgb(0, 51, 153)', 
    width: 4
  }, 
  name: 'EU-15', 
  type: 'scatter', 
  uid: '977813'
};
trace3 = {
  x: [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  y: [10.73, 11.53, 12.66, 13.65, 14.04, 15.02, 15.72, 15.94, 16.46, 16.94, 17.55, 17.63, 18.39, 18.98, 20.18, 21.22, 21.7, 23.06, 25.07, 27.51], 
  line: {
    color: 'rgb(111, 110, 107)', 
    width: 4
  }, 
  name: 'OECD', 
  type: 'scatter', 
  uid: 'db1d7e'
};
trace4 = {
  x: [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  y: [13.82, 14.71, 16.1, 17.21, 17.29, 17.88, 18.47, 18.45, 18.47, 18.08, 18.09, 17.41, 17.72, 18, 20.31, 20.36, 20.06, 20.99, 22.73, 24.49], 
  line: {
    color: 'rgb(170, 0, 255)', 
    width: 4
  }, 
  name: 'Asia Pacific', 
  type: 'scatter', 
  uid: '06c889', 
  visible: 'legendonly'
};
trace5 = {
  x: [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  y: [29.46, 29.85, 30.54, 31.69, 31.79, 32.28, 32.85, 32.32, 33.73, 33.93, 33.31, 31.04, 29.94, 30.06, 31, 32.55, 32.59, 33.81, 37.25, 39.98], 
  line: {
    color: 'rgb(46, 125, 50)', 
    width: 4
  }, 
  name: 'Latin America', 
  type: 'scatter', 
  uid: '93b32d', 
  visible: 'legendonly'
};
trace6 = {
  x: [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  y: [25.18, 24.91, 26.32, 26.84, 27.4, 26.92, 26.81, 25.9, 25.06, 24.71, 24.32, 22.75, 23.02, 23.29, 25.72, 27.24, 28.15, 30.48, 34.2, 36.59], 
  line: {
    color: 'rgb(255, 196, 0)', 
    width: 4
  }, 
  name: 'Middle East', 
  type: 'scatter', 
  uid: 'fc259c', 
  visible: 'legendonly'
};
trace7 = {
  x: [1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  y: [19.97, 22.41, 23.93, 25.91, 26.42, 29.8, 29.79, 30.15, 31.11, 31.69, 31.76, 30.59, 28.37, 27.93, 28.32, 28.55, 29.4, 30.18, 30.26, 30.95], 
  line: {
    color: 'rgb(255, 64, 129)', 
    width: 4
  }, 
  name: 'Russia', 
  type: 'scatter', 
  uid: 'f08cc6', 
  visible: 'legendonly'
};
data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];
layout = {
  annotations: [
    {
      x: 2012, 
      y: 1.5, 
      arrowhead: 4, 
      ax: 0, 
      ay: -30, 
      showarrow: true, 
      text: 'bill', 
      xref: 'x', 
      yref: 'y'
    }, 
    {
      x: 2014, 
      y: 1.5, 
      arrowhead: 4, 
      ax: 0, 
      ay: -30, 
      showarrow: true, 
      text: 'referendum', 
      xref: 'x', 
      yref: 'y'
    }
  ], 
  title: 'International collaboration', 
  xaxis: {
    autorange: true, 
    range: [1996, 2015], 
    title: 'Year', 
    type: 'linear'
  }, 
  yaxis: {
    autorange: true, 
    range: [0.611934900542, 70.4730560579], 
    title: 'International collaboration per paper (%)', 
    type: 'linear'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});
