export interface Car {
    id: string;
    brand: string;
    description: string;
    price: number;
    carState: string;
    currency: {
        id: string;
        name: string;
        symbol: string;
    }
}