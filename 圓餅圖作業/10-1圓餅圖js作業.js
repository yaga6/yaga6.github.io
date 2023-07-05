let marketingShare = {
    version: "v1.0",
    publish: "2021/12/31",
    titles: ["排名", "公司", "國別", "市佔率"],
    data: [
        { Ranking: 1, Name: "台積電", Country: "台灣", Ratio: 53.1 },
        { Ranking: 2, Name: "三星電子", Country: "韓國", Ratio: 17.3 },
        { Ranking: 3, Name: "聯電", Country: "台灣", Ratio: 7.2 },
        { Ranking: 4, Name: "格羅方德", Country: "美國", Ratio: 6.1 },
        { Ranking: 5, Name: "中芯國際", Country: "中國", Ratio: 5.3 },
        { Ranking: 6, Name: "華虹半導體", Country: "中國", Ratio: 2.6 },
        { Ranking: 7, Name: "力積電", Country: "台灣", Ratio: 1.8 },
        { Ranking: 8, Name: "世界先進", Country: "台灣", Ratio: 1.4 },
        { Ranking: 9, Name: "高塔半導體", Country: "以色列", Ratio: 1.4 },
        { Ranking: 10, Name: "東部高科", Country: "南韓", Ratio: 1 },
    ],
};

window.onload = function () {
    createArrayData();
    // 下面這邊把它改成動態選擇圖表類型
    drawChart("bar", companies, data);
    // =========
    CreateThead(marketingShare.titles);
    CreateTbody(Tbody2dArray);
    // table.append();
};
//找出資料加到companies與data陣列中好處理資料
let companies = [], data = [];
function createArrayData() {
    marketingShare.data.forEach((item1) => {
        companies.push(item1.Name);
        data.push(item1.Ratio);
    });
}

//   ==========
//1.獲取或創建要插入新元素的元素。(原本用這個寫但是回傳值有問題)
// let table = document.getElementsByClassName(
//     "table table-bordered table-striped"
// );
let table = document.getElementById("container");//我給table一個id然後抓出來
//2.創建新的元素。
let thead = document.createElement("thead");//建立DOM元素
let tbody = document.createElement("tbody");//建立DOM元素
//3.用資料來生成表頭,並且將資料append到table中
function CreateThead(titleArray) {
    let theadTR = document.createElement("tr");//建立DOM元素,這個準備放在thead裡面
    marketingShare.titles.forEach((title) => {
        let th = document.createElement("th");//建立DOM元素(總共創4個),準備放在theadTR裡面
        th.innerText = title;//titles陣列中每個傳進來的值都會加到th中
        theadTR.append(th);//將每個th元素加入tr中
    });
    thead.append(theadTR);//將tr加入thead
    table.append(thead);//將thead加入table
}
//4-1.前置作業,預先生成一個二維陣列才好操作
let Tbody2dArray = [];
marketingShare.data.forEach(companies1 => {
    let companiesData = Object.values(companies1)//抓出每個物件中的資料,形成一維陣列
    Tbody2dArray.push(companiesData)//塞進之後要用的二維陣列中
})
//4-2.用資料來生成表格內容,並append到table中
function CreateTbody(Tbody2dArray) {
    Tbody2dArray.forEach((companies) => {
        let tr = document.createElement("tr");
        companies.forEach((rowdata) => {
            let td = document.createElement("td");
            td.innerText = rowdata;
            tr.append(td);
        });
        tbody.append(tr);
    });
    table.append(tbody);
}
// ==========

//第一個參數為公司陣列, 第二個參數為資料陣列
function drawChart(chartType, companyArray, dataArray) {
    //Pie Chart圓餅圖
    let ctxPie = document.getElementById("mkShare");
    var pieChart = new Chart(ctxPie, {
        type: chartType,
        data: {
            labels: companyArray,
            datasets: [
                {
                    data: dataArray,
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255,75,50)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                        "rgb(255, 138, 64)",
                        "rgb(142, 65, 64)",
                        "rgb(59, 72, 64)",
                    ],
                },
            ],
        },
        options: {
            responsive: true,
            title: {
                display: true,
                fontSize: 26,
                text: "2021年全球晶圓代工市佔率%",
            },
            tooltips: {
                mode: "point",
                intersect: true,
            },
            legend: {
                position: "bottom",
                labels: {
                    fontColor: "black",
                },
            },
        },
    });
}