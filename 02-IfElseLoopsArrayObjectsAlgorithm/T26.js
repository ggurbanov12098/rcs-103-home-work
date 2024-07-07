//26. let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"]; countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
function filterCountries(countries) {
    return countries.filter(country => 
        country.toLowerCase().startsWith('a') && country.toLowerCase().endsWith('a')
    );
}
let result = filterCountries(countries);
console.log(result);