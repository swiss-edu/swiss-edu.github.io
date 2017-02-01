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
  x: [26.815, 26.71125, 17.395, 16.6085714286, 15.5671428571, 14.0584444444, 13.9915789474, 12.57, 10.185, 9.72666666667, 9.26055555556, 7.93, 7.824, 7.76068965517, 7.75777777778, 6.95, 6.76944444444, 6.46023890785, 6.3, 6.03], 
  y: [13, 163, 28, 228, 1107, 5201, 862, 44, 97, 486, 12726, 216, 920, 848, 116, 40, 252, 10222, 5831, 51], 
  mode: 'markers+text', 
  name: 'markers', 
  text: ['BAHRAIN', 'ETHIOPIA', 'MACAU', 'NIGERIA', 'COLOMBIA', 'TAIWAN', 'SAUDI ARABIA', 'JAMAICA', 'SRI LANKA', 'ICELAND', 'SOUTH KOREA', 'LEBANON', 'CYPRUS', 'MALAYSIA', 'UNITED ARAB EMIRATES', 'REUNION', 'PHILIPPINES', 'CHINA', 'NORWAY', 'MALTA'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:113:96f664', 
  type: 'scatter', 
  uid: '2354af', 
  xsrc: 'Merinorus:113:3d946a', 
  ysrc: 'Merinorus:113:5124df'
};
trace2 = {
  x: [1.7495, 4.77583783784, 2.15947368421, 2.65215189873, 3.56934191176, 2.24164285714, 5.23988764045, 2.97754098361, 3.401125, 2.745625, 2.66076923077, 3.29733333333, 4.651, 3.1943442623, 9.26055555556, 3.65830508475, 2.10947368421, 3.91514563107, 6.46023890785, 2.871], 
  y: [232666, 184339, 103366, 82085, 74392, 72141, 27768, 26390, 25740, 21339, 17715, 16076, 13476, 13304, 12726, 11432, 11291, 10645, 10222, 8421], 
  mode: 'markers+text', 
  name: 'markers', 
  text: ['SWITZERLAND', 'UNITED STATES', 'GERMANY', 'ITALY', 'UNITED KINGDOM', 'FRANCE', 'JAPAN', 'CANADA', 'SPAIN', 'NETHERLANDS', 'BELGIUM', 'SWEDEN', 'AUSTRALIA', 'TURKEY', 'SOUTH KOREA', 'POLAND', 'AUSTRIA', 'BRAZIL', 'CHINA', 'DENMARK'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:113:21a771', 
  type: 'scatter', 
  uid: 'd85a51', 
  xsrc: 'Merinorus:113:3d8669', 
  ysrc: 'Merinorus:113:b79927'
};
data = [trace1, trace2];
layout = {
  showlegend: false, 
  title: 'Top 20 Countries that Co-Publish the Most and Top 20 Countries That Co-Publish the Best with Switzerland (1980-2015)', 
  titlefont: {size: 12}, 
  xaxis: {
    range: [0, 20], 
    title: 'Quality - Average Citation Impact of Co-Publications listed in Web of Science (1980-2015)', 
    titlefont: {size: 0}, 
    type: 'linear'
  }, 
  yaxis: {
    autorange: true, 
    range: [0.8352139136, 5.64546236221], 
    title: 'Quantity - Number of Co-Publications listed in Web of Science (1980-2015)', 
    titlefont: {size: 10}, 
    type: 'log'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});