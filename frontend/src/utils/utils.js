// Pone en mayúscula la primera letra de cada palabra.
export const capitalize = (string) => {

    let changed = string.replace(string[0], string[0].toUpperCase())

    return changed;
}