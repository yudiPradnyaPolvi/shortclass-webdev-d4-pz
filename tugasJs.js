const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];

function findCountry(searchTerm) {
  const searchTermLower = searchTerm.toLowerCase();

  for (const country of countries) {
    const countryLower = country.toLowerCase();

    if (countryLower.includes(searchTermLower)) {
      return 'Ada';
    }
  }

  return 'Tidak Ada';
}

console.log(findCountry('Indonesia')); 
console.log(findCountry('Indo'));
console.log(findCountry('indo'))