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
  x: [1.7495, 4.77583783784, 3.56934191176, 2.24164285714, 2.65215189873, 2.15947368421, 2.97754098361, 2.871, 3.401125, 3.545, 2.66076923077, 3.29733333333, 2.745625, 5.23988764045, 4.651, 6.3, 2.48260869565, 3.65830508475, 2.10947368421, 3.08545454545, 3.27037037037, 2.506875, 2.96446428571, 3.69347826087, 3.006875, 3.91514563107, 14.0584444444, 9.26055555556, 2.63777777778, 3.02297297297, 1.25, 5.74888888889, 4.32421052632, 6.46023890785, 5.74260869565, 2.51, 5.68909090909, 3.1943442623, 2.25117647059, 2.39333333333, 3.78666666667, 1.9848, 3.11, 3.31, 9.72666666667, 3.81264705882, 7.824, 3.98875, 2.76727272727, 3.04222222222, 15.5671428571, 2.99692307692, 3.55720930233, 2.71517241379, 3.73181818182, 5.90227272727, 4.936, 3.1325, 13.9915789474, 7.76068965517, 1.53571428571, 3.855, 16.6085714286, 6.76944444444, 10.185, 3.33714285714, 7.93, 5.29, 5.24272727273, 26.71125, 12.57, 1.8475, 4.31666666667, 7.75777777778, 2.59, 4.82333333333, 1.67, 1.44, 1.63, 3.98666666667, 3.5975, 2.68, 3.35, 2.105, 2.17125, 2.42703703704, 6.03, 4.426, 1.74818181818, 6.95, 1.98, 2, 1.685, 26.815, 4.00857142857, 1.85, 1.925, 4.97, 3.97, 1.25375, 1.19857142857, 4.85, 3.22, 1.04, 1.6825, 17.395, 2.4, 2.64, 2.17, 0.466666666667, 0.94, 0], 
  y: [232666, 184339, 74392, 72141, 82085, 103366, 26390, 8421, 25740, 7756, 17715, 16076, 21339, 27768, 13476, 5831, 8374, 11432, 11291, 7369, 8104, 6302, 6615, 5143, 6932, 10645, 5201, 12726, 4624, 7769, 1560, 3851, 3070, 10222, 2731, 1610, 2493, 13304, 2928, 2566, 2984, 4351, 1585, 1330, 486, 2847, 920, 1540, 798, 591, 1107, 1606, 1581, 1428, 1617, 2147, 539, 223, 862, 848, 650, 308, 228, 252, 97, 427, 216, 89, 249, 163, 44, 130, 123, 116, 76, 69, 75, 93, 159, 72, 61, 46, 126, 81, 145, 140, 51, 93, 227, 40, 57, 42, 53, 13, 58, 24, 15, 12, 37, 126, 54, 7, 14, 16, 14, 28, 10, 6, 12, 13, 10, 1], 
  mode: 'markers+text', 
  name: 'markers', 
  text: ['Europe', 'North America', 'Europe', 'Europe', 'Europe', 'Europe', 'North America', 'Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Asia', 'Australia', 'Europe', 'Europe', 'Europe', 'Europe', 'Asia', 'Europe', 'Europe', 'Europe', 'Africa', 'Europe', 'South America', 'Asia', 'Asia', 'Europe', 'Asia', 'Asia', 'Europe', 'Europe', 'Asia', 'Europe', 'Europe', 'Australia', 'Asia', 'South America', 'Europe', 'South America', 'Europe', 'Asia', 'Asia', 'Europe', 'North America', 'Asia', 'Asia', 'Europe', 'Europe', 'South America', 'Africa', 'Asia', 'Asia', 'Africa', 'Asia', 'Asia', 'Africa', 'Asia', 'Asia', 'Asia', 'South America', 'Africa', 'Asia', 'Asia', 'Africa', 'Asia', 'Africa', 'Africa', 'Africa', 'North America', 'Europe', 'South America', 'Asia', 'Central America', 'South America', 'Africa', 'Africa', 'Africa', 'Africa', 'Asia', 'Africa', 'Europe', 'Asia', 'Asia', 'Africa', 'Europe', 'Asia', 'Europe', 'Africa', 'Africa', 'South America', 'Asia', 'Asia', 'South America', 'Africa', 'South America', 'Africa', 'Asia', 'Africa', 'Europe', 'Europe', 'Oceania', 'North America', 'Asia', 'Asia', 'Africa', 'Asia', 'Africa', 'Asia', 'Africa', 'Asia'], 
  textfont: {size: 12}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:105:cb078a', 
  type: 'scatter', 
  uid: '63a1bd', 
  xsrc: 'Merinorus:105:7d33ed', 
  ysrc: 'Merinorus:105:98fae1'
};
data = [trace1];
layout = {
  showlegend: false, 
  title: 'Co-Publication Quantity and Quality of various continents with Switzerland (1980-2015)', 
  xaxis: {
    range: [0, 6], 
    title: 'Quality - Average Citation Impact of Co-Publications listed in Web of Science (1980-2015)', 
    titlefont: {size: 10}, 
    type: 'linear'
  }, 
  yaxis: {
    autorange: true, 
    range: [-0.357497336465, 5.72423025997], 
    title: 'Quantity - Number of Co-Publications listed in Web of Science (1980-2015)', 
    titlefont: {size: 10}, 
    type: 'log'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});