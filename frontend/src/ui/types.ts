export interface Car {
    _id: string;
    Name: string;
    Miles_per_Gallon: number;
    Cylinders: number;
    Displacement: number;
    Horsepower: number;
    Weight_in_lbs: number;
    Acceleration: number;
    Year: Date;
    Origin: string;
}

export namespace CarList {
    export interface CarListItem {
        key: string;
        car: Car;
    }

    export const mapToEntity = (cars: Car[]) => {
        return cars.map((car) => ({
            key: car._id,
            car: car
        }))
    }
}

export interface CarUIState {
    carList: CarList.CarListItem[];
    selectedIndex?: string;
}