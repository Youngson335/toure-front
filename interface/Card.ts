export default interface CardDraft {
    id: number,
    discount: number,
    liked: boolean,
    rating: 1 | 2 | 3| 4 | 5,
    date: string,
    night: number,
    name: string,
    location: string,
    price: number,
    services: [
        "ticket",
        "housing",
        "documents",
        "travel"
    ],
    place: number
}