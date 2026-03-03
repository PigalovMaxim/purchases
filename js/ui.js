class UI {
    constructor() {
        this.chart = document.getElementById("chart");
        this.menu = document.querySelector(".container__bottomMenu");
        this.purchasesList = document.querySelector(".js-purchasesList");
        this.pages = [{ href: "index", label: "Траты" }, { href: "categories", label: "Категории" }];
    }

    init() {
        this.pages.forEach(page => {
            const button = document.createElement("a");
            button.href = `${page.href}.html`;
            button.classList.add("bottomMenu__button");
            if (document.body.dataset.page === page.href) {
                button.classList.add("bottomMenu__button_active");
            }
            button.textContent = page.label;
            this.menu.appendChild(button);
        });
    }

    createCategoriesChart() {
        new Chart(this.chart.getContext("2d"), {
            type: "doughnut",
            data: {
                labels: [
                    'Презервативы',
                    'Мороженное',
                    'Сырники и покупка облигаций Сирии'
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                    ],
                    hoverOffset: 4
                }]
            }
        });
    }

    createPurchasesList(purchases) {
        this.purchasesList.innerHTML = "";
        for (let i = 0; i < purchases.length; i++) {
            const purchase = document.createElement("div");
            purchase.classList.add("container__purchasesListItem");
            const image = document.createElement("img");
            image.src = purchases[i].categories.icon;
            image.alt = "purchases";
            image.classList.add("container__purchasesListItemImage");
            const info = document.createElement("div");
            info.classList.add("container__purchasesListItemInfo");
            const title = document.createElement("span");
            title.classList.add("container__purchasesListItemTitle");
            title.textContent = purchases[i].name;
            const price = document.createElement("span");
            price.classList.add("container__purchasesListItemPrice");
            price.textContent = `-${purchases[i].cost}р`;
            const date = document.createElement("span");
            date.classList.add("container__purchasesListItemDate");
            date.textContent = purchases[i].created_at;
            info.appendChild(title);
            info.appendChild(price);
            info.appendChild(date);
            purchase.appendChild(image);
            purchase.appendChild(info);
            purchase.appendChild(date);
            this.purchasesList.appendChild(purchase);
        }
    }
}
