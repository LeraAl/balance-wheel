
/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

////////////////////////////////////////////////////////////// 
//////////////////////// Set-Up ////////////////////////////// 
////////////////////////////////////////////////////////////// 

var margin = { top: 100, right: 100, bottom: 100, left: 100 },
    width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

////////////////////////////////////////////////////////////// 
////////////////////////// Data ////////////////////////////// 
////////////////////////////////////////////////////////////// 

var data = [
    [
        { axis: "Личные отношения", value: Math.ceil(Math.random() * 10) },
        { axis: "Семья", value: Math.ceil(Math.random() * 10) },
        { axis: "Друзья", value: Math.ceil(Math.random() * 10) },
        { axis: "Яркость жизни", value: Math.ceil(Math.random() * 10) },
        { axis: "Энергия (отдых)", value: Math.ceil(Math.random() * 10) },
        { axis: "Работа", value: Math.ceil(Math.random() * 10) },
        { axis: "Быт", value: Math.ceil(Math.random() * 10) },
        { axis: "Финансы", value: Math.ceil(Math.random() * 10) },
        { axis: "Здоровье", value: Math.ceil(Math.random() * 10) },
        { axis: "Саморазвитие", value: Math.ceil(Math.random() * 10) },
    ],
];
////////////////////////////////////////////////////////////// 
//////////////////// Draw the Chart ////////////////////////// 
////////////////////////////////////////////////////////////// 

var color = d3.scale.ordinal()
    .range(["#00A0B0"]);
// "#EDC951", "#CC333F", 
var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 10,
    levels: 5,
    roundStrokes: true,
    color: color
};
//Call function to draw the Radar chart
RadarChart(".radarChart", data, radarChartOptions);


data[0].forEach((d, i) => {
    let div = document.createElement('div');
    div.classList.add("slidecontainer");

    let p = document.createElement('p');
    p.innerText = `${d.axis}: ${d.value}`;

    let input = document.createElement('input');
    input.min = 0;
    input.max = 10;
    input.value = d.value;
    input.type = 'range';

    input.oninput = function() {
        p.innerText = `${d.axis}: ${input.value}`;
        data[0][i].value = input.value;
        RadarChart(".radarChart", data, radarChartOptions);

    }

    div.appendChild(p);
    div.appendChild(input);


    document.body.appendChild(div);
})
