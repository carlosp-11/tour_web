export const rentPrices = [
    { value: 0, label: "0 €" },
    ...Array.from({ length: 15 }, (_, i) => {
        const price = (i + 1) * 100;
        return { value: price, label: price >= 1000 ? `${price.toLocaleString("es-ES")} €` : `${price} €` };
    }),
    { value: "9999", label: "+ 1500 €" }
];

export const sellPrices = [
    { value: 0, label: "0 €" },
    ...Array.from({ length: 15 }, (_, i) => {
        const price = (i + 1) * 20000;
        return { value: price, label: price >= 1000 ? `${price.toLocaleString("es-ES")} €` : `${price} €` };
    }),
    { value: "99999999", label: "+ 300000 €" }
];

