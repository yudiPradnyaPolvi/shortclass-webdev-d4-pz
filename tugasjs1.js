const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];
const findCountry = countries.filter((countries)=>countries.includes('Indo'));
if (findCountry === 'Indo'){
    console.log('Ada')
}else if (findCountry === 'Indonesia'){
    console.log('Ada');
}
else{
    console.log('tidak ada');
}