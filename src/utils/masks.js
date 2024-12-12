export const removerAcentos = (palavra) => palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const formatKey = (key) => removerAcentos(key).trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-")

export const apenasNumeros = (value) => value?.replace(/\D/gim, '');