const ui = new UI();
const db = new DB();
const analytic = new Analytic();

ui.init();
db.getPurchases().then(data => {
    ui.createPurchasesList(data);
});
