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
  x: [1.7495, 3.56934191176, 2.24164285714, 2.65215189873, 2.15947368421, 2.871, 3.401125, 3.545, 2.66076923077, 3.29733333333, 2.745625, 6.3, 2.48260869565, 3.65830508475, 2.10947368421, 3.27037037037, 2.506875, 2.96446428571, 3.006875, 2.63777777778, 5.74888888889, 4.32421052632, 5.74260869565, 2.51, 2.39333333333, 1.9848, 9.72666666667, 2.76727272727, 3.04222222222, 1.8475, 3.35, 6.03, 1.74818181818, 1.19857142857, 4.85], 
  y: [232666, 74392, 72141, 82085, 103366, 8421, 25740, 7756, 17715, 16076, 21339, 5831, 8374, 11432, 11291, 8104, 6302, 6615, 6932, 4624, 3851, 3070, 2731, 1610, 2566, 4351, 486, 798, 591, 130, 126, 51, 227, 54, 7], 
  mode: 'markers+text', 
  name: 'Europe', 
  text: ['SWITZERLAND', 'UNITED KINGDOM', 'FRANCE', 'ITALY', 'GERMANY', 'DENMARK', 'SPAIN', 'FINLAND', 'BELGIUM', 'SWEDEN', 'NETHERLANDS', 'NORWAY', 'CZECH REPUBLIC', 'POLAND', 'AUSTRIA', 'GREECE', 'HUNGARY', 'RUSSIA', 'PORTUGAL', 'SLOVENIA', 'SLOVAKIA', 'IRELAND', 'BULGARIA', 'SERBIA', 'CROATIA', 'ROMANIA', 'ICELAND', 'LITHUANIA', 'ESTONIA', 'LATVIA', 'LUXEMBOURG', 'MALTA', 'UKRAINE', 'BELARUS', 'ALBANIA'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:107:c5626e', 
  type: 'scatter', 
  uid: '820af8', 
  xsrc: 'Merinorus:107:87e9d6', 
  ysrc: 'Merinorus:107:00e68a'
};
trace2 = {
  x: [4.77583783784, 2.97754098361, 3.81264705882, 12.57, 1.04], 
  y: [184339, 26390, 2847, 44, 16], 
  mode: 'markers+text', 
  name: 'North America', 
  text: ['UNITED STATES', 'CANADA', 'MEXICO', 'JAMAICA', 'CUBA'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:107:2c807b', 
  type: 'scatter', 
  uid: '50a5a3', 
  xsrc: 'Merinorus:107:2e10a3', 
  ysrc: 'Merinorus:107:7c08d4'
};
trace3 = {
  x: [3.91514563107, 2.25117647059, 3.78666666667, 15.5671428571, 3.855, 4.31666666667, 4.82333333333, 2, 4.00857142857, 1.925], 
  y: [10645, 2928, 2984, 1107, 308, 123, 69, 42, 58, 15], 
  mode: 'markers+text', 
  name: 'South America', 
  text: ['BRAZIL', 'ARGENTINA', 'CHILE', 'COLOMBIA', 'PERU', 'VENEZUELA', 'URUGUAY', 'BOLIVIA', 'ECUADOR', 'PARAGUAY'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:107:bbcf07', 
  type: 'scatter', 
  uid: 'cbac23', 
  xsrc: 'Merinorus:107:e74def', 
  ysrc: 'Merinorus:107:c9810f'
};
trace4 = {
  x: [2.59], 
  y: [76], 
  mode: 'markers+text', 
  name: 'Central America', 
  text: ['COSTA RICA'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:107:a76f74', 
  type: 'scatter', 
  uid: '409f4f', 
  xsrc: 'Merinorus:107:672a0e', 
  ysrc: 'Merinorus:107:9d9a66'
};
trace5 = {
  x: [5.23988764045, 3.08545454545, 14.0584444444, 9.26055555556, 3.02297297297, 1.25, 6.46023890785, 3.1943442623, 3.11, 3.31, 7.824, 3.98875, 3.55720930233, 2.71517241379, 5.90227272727, 4.936, 13.9915789474, 7.76068965517, 1.53571428571, 6.76944444444, 10.185, 7.93, 7.75777777778, 3.5975, 2.105, 2.17125, 4.426, 1.685, 26.815, 3.97, 1.6825, 17.395, 2.64, 0.466666666667, 0], 
  y: [27768, 7369, 5201, 12726, 7769, 1560, 10222, 13304, 1585, 1330, 920, 1540, 1581, 1428, 2147, 539, 862, 848, 650, 252, 97, 216, 116, 61, 81, 145, 93, 53, 13, 37, 14, 28, 6, 13, 1], 
  mode: 'markers+text', 
  name: 'Asia', 
  text: ['JAPAN', 'ISRAEL', 'TAIWAN', 'SOUTH KOREA', 'INDIA', 'ARMENIA', 'CHINA', 'TURKEY', 'SINGAPORE', 'GEORGIA', 'CYPRUS', 'HONG KONG', 'PAKISTAN', 'THAILAND', 'IRAN', 'QATAR', 'SAUDI ARABIA', 'MALAYSIA', 'VIETNAM', 'PHILIPPINES', 'SRI LANKA', 'LEBANON', 'UNITED ARAB EMIRATES', 'KUWAIT', 'MONGOLIA', 'INDONESIA', 'JORDAN', 'OMAN', 'BAHRAIN', 'BANGLADESH', 'KAZAKHSTAN', 'MACAU', 'AZERBAIJAN', 'UZBEKISTAN', 'IRAQ'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:107:2f6a66', 
  type: 'scatter', 
  uid: 'aba940', 
  xsrc: 'Merinorus:107:c518e8', 
  ysrc: 'Merinorus:107:9fcdb0'
};
trace6 = {
  x: [4.651, 5.68909090909], 
  y: [13476, 2493], 
  mode: 'markers+text', 
  name: 'Australia', 
  text: ['AUSTRALIA', 'NEW ZEALAND'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:107:a93423', 
  type: 'scatter', 
  uid: 'f52dc3', 
  xsrc: 'Merinorus:107:09f486', 
  ysrc: 'Merinorus:107:5e9935'
};
trace7 = {
  x: [3.69347826087, 2.99692307692, 3.73181818182, 3.1325, 16.6085714286, 3.33714285714, 5.29, 5.24272727273, 26.71125, 1.67, 1.44, 1.63, 3.98666666667, 2.68, 2.42703703704, 6.95, 1.98, 1.85, 4.97, 1.25375, 2.4, 2.17, 0.94], 
  y: [5143, 1606, 1617, 223, 228, 427, 89, 249, 163, 75, 93, 159, 72, 46, 140, 40, 57, 24, 12, 126, 10, 12, 10], 
  mode: 'markers+text', 
  name: 'Africa', 
  text: ['SOUTH AFRICA', 'EGYPT', 'MOROCCO', 'UGANDA', 'NIGERIA', 'GHANA', 'ZAMBIA', 'KENYA', 'ETHIOPIA', 'ZIMBABWE', 'MALAWI', 'CAMEROON', 'TANZANIA', 'SUDAN', 'ALGERIA', 'REUNION', 'SENEGAL', 'BOTSWANA', 'NAMIBIA', 'TUNISIA', 'MAURITIUS', 'RWANDA', 'LIBYA'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:107:438775', 
  type: 'scatter', 
  uid: '84657d', 
  xsrc: 'Merinorus:107:cbb344', 
  ysrc: 'Merinorus:107:936d6c'
};
trace8 = {
  x: [3.22], 
  y: [14], 
  mode: 'markers+text', 
  name: 'Oceania', 
  text: ['FIJI'], 
  textfont: {size: 7}, 
  textposition: 'top center', 
  textsrc: 'Merinorus:107:763d85', 
  type: 'scatter', 
  uid: '1752e0', 
  xsrc: 'Merinorus:107:685105', 
  ysrc: 'Merinorus:107:b32b6d'
};
data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];
layout = {
  showlegend: true, 
  title: 'The Number and Quality of Co-Publicatins with Switzerland of Various Countries (1980-2015)', 
  titlefont: {size: 12}, 
  xaxis: {
    range: [0, 20], 
    title: 'Quality - Average Citation Impact of Co-Publications listed in Web of Science (1980-2015)', 
    titlefont: {size: 8}, 
    type: 'linear'
  }, 
  yaxis: {
    autorange: true, 
    range: [-0.357497336465, 5.72423025997], 
    title: 'Quantity - Number of Co-Publications listed in Web of Science (1980-2015)', 
    titlefont: {size: 8}, 
    type: 'log'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});