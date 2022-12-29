// Pone en mayúscula la primera letra de cada palabra.
export const capitalize = (string) => {
    let changed = string.replace(string[0], string[0].toUpperCase())
    return changed;
}

export const translateEstates = (estate) => {
    switch (estate) {
        case 'casa': return 'house';
        case 'departamento': return 'apartment';
        case 'departamento-tipo-ph': return 'phApartment';
        case 'cochera': return 'garage';
        case 'oficina-consultorio': return 'office';
        case 'local': return 'shop';
        case 'galpon': return 'shed';
        case 'fondo-de-comercio': return 'goodwill';
        case 'campo': return 'field';
        case 'quinta': return 'countryHouse';
        case 'lote-terreno': return 'terrain';
        case 'hotel': return 'hotel';
        case 'parcelas-nichos-bovedas': return 'plotsNichesVaults';
        case 'camas-nauticas': return 'nauticalBeds';
    }
}