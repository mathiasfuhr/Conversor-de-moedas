const button = document.getElementById('convert-button');
const select = document.getElementById('curreny-select');

const dolar = 4.93;
const euro = 5.37;
const bitcoin = 130.051;

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text');
    const currenctValueText = document.getElementById('currency-value');


    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);


    if (select.value === "US$ Dólar Americano") {
        currenctValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar);
    } 
    
    if (select.value === "Bitcoin") {
        currenctValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin);
        }
    
};

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.getElementById('currency-img');

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano';
        currencyImg.src = "./assets/images/estados-unidos.svg"
    };

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = "./assets/images/Euro.svg"
    };

    if(select.value === 'Bitcoin'){
        currencyName.innerHTML = 'Bitcoin;'
        currencyImg.src = "./assets/images/Bitcoin.svg";
    }
}


button.addEventListener('click', convertValues);
select.addEventListener('change', changeCurrency);