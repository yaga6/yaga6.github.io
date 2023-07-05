// 1.使用迴圈從dom元素中取出資料並加到一個新陣列中,然後清除container中的內容
// 1-1.以當前資料結構來說沒辦法使用迴圈,可以直接使用querySelector
// 2.從剛剛建立的迴圈中取出英雄資料並用文字顯示
// 3.從剛剛建立的Array中將資料加入表格呈現
window.onload = function () {
    // =====第一個按鈕
    let container = document.querySelector("#container")//指向要使用query操作的範圍
    let cards = container.querySelectorAll(".card")//指向該範圍要操作的物件(class="card")
    let heroArray = []//先宣告準備接資料(會是陣列中包物件),heroArray我要讓他全域活著,所以放在這邊
    let btnCreateHeroArray = document.getElementById("createhero")//指向DOM元素,等著關聯event

    btnCreateHeroArray.addEventListener("click", function () {
        // =====
        cards.forEach(card => {
            let title = card.querySelector(".card-title")
            let text = card.querySelector(".card-text")
            let img = card.querySelector("img")//('#myId')('.myClass')('div')
            let hero = { name: title.innerText, description: text.innerText, pic: img.src }
            heroArray.push(hero)//用於陣列的方法
            //heroArray.append(hero)//用於DOM的方法
        })
        // =====
        alert("英雄聯盟腳色的陣列資料已建立")
        container.innerHTML = "";
        //清除container
    })
    // =====第一個按鈕

    // =====第二個按鈕
    let btnCreateHeroList = document.getElementById("listhero")

    btnCreateHeroList.addEventListener("click", function () {
        if (heroArray.length == 0) {
            alert("必須先先建立陣列資料");
            return;
        }//給直接按第二個按鈕的一個提示

        heroArray.forEach((hero) => {
            let li = document.createElement("li")
            li.append(JSON.stringify(hero))//轉JSON然後塞進去
            document.body.append(li)
        })
    })
    // =====第二個按鈕

    // =====第三個按鈕
    //預計樣式
    /* <thead>
        <tr>
            <th>名稱</th>
            <th>故事</th>
            <th>腳色圖片</th>
        </tr>
    </thead>
        <tbody>
        <tr>
            <td>1 : Aatrox - 厄薩斯</td>
            <td>XXXXXXXX</td>
            <td>圖片</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody> */
    let table = document.createElement('table')
    table.classList.add("table", "table-bordered", "table-striped", "table-dark")
    //設定css裝飾的同時也設定了同樣名稱的class
    //table.id = 'lolTable'; // 為table元素設定id的方法,這邊可以不用
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let tableTitleData = ["名稱", "故事", "腳色圖片"];
    let theadTR = document.createElement("tr")

    let showHeroListByTable = document.getElementById("tablehero")

    showHeroListByTable.addEventListener("click", function () {
        if (heroArray.length == 0) {
            alert("必須先先建立陣列資料");
            return;
        }//給直接按第三個按鈕的一個提示

        result.innerHTML = "";

        tableTitleData.forEach((title) => {
            let th = document.createElement("th")
            th.innerText = title
            theadTR.append(th)
        })
        thead.append(theadTR)
        table.append(thead)

        heroArray.forEach((hero) => {
            let tr = document.createElement('tr')
            let name = hero.name
            let desc = hero.description
            let url = hero.pic
            tr.innerHTML = `
                 <td>${name}</td>
                 <td>${desc}</td>
                 <td><img src="${url}" alt="${name}"></td>
                 `;//這語法不錯,以後可多用
            tbody.append(tr)
        })
        table.append(tbody);

        result.append(table);
    })
    // =====第三個按鈕
}