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
  x: [26.815, 26.71125, 17.395, 16.6085714286, 15.5671428571, 14.0584444444, 13.9915789474, 12.57, 10.185, 9.72666666667], 
  y: [13, 163, 28, 228, 1107, 5201, 862, 44, 97, 486], 
  mode: 'markers+text', 
  name: 'markers', 
  text: ['BAHRAIN', 'ETHIOPIA', 'MACAU', 'NIGERIA', 'COLOMBIA', 'TAIWAN', 'SAUDI ARABIA', 'JAMAICA', 'SRI LANKA', 'ICELAND'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:111:255bdd', 
  type: 'scatter', 
  uid: '74c44f', 
  xsrc: 'Merinorus:111:c96a02', 
  ysrc: 'Merinorus:111:4465ca'
};
trace2 = {
  x: [1.7495, 4.77583783784, 2.15947368421, 2.65215189873, 3.56934191176, 2.24164285714, 5.23988764045, 2.97754098361, 3.401125, 2.745625], 
  y: [232666, 184339, 103366, 82085, 74392, 72141, 27768, 26390, 25740, 21339], 
  mode: 'markers+text', 
  name: 'markers', 
  text: ['SWITZERLAND', 'UNITED STATES', 'GERMANY', 'ITALY', 'UNITED KINGDOM', 'FRANCE', 'JAPAN', 'CANADA', 'SPAIN', 'NETHERLANDS'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:111:1725be', 
  type: 'scatter', 
  uid: 'ab7988', 
  xsrc: 'Merinorus:111:8e9da1', 
  ysrc: 'Merinorus:111:22b649'
};
data = [trace1, trace2];
layout = {
  showlegend: false, 
  title: 'Top 10 Countries that Co-Publish the Most and Top 10 Countries That Co-Publish the Best with Switzerland (1980-2015)', 
  titlefont: {size: 12}, 
  xaxis: {
    range: [0, 20], 
    title: 'Quality - Average Citation Impact of Co-Publications listed in Web of Science (1980-2015)', 
    titlefont: {size: 0}, 
    type: 'linear'
  }, 
  yaxis: {
    autorange: true, 
    range: [0.830873365, 5.64980291081], 
    title: 'Quantity - Number of Co-Publications listed in Web of Science (1980-2015)', 
    titlefont: {size: 10}, 
    type: 'log'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});