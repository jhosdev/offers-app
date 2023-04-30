//json-server --watch src/assets/db.json

export interface Offer {
    id: number,
    title: string,
    description: string,
    points: number,
    businessId: number,
}
