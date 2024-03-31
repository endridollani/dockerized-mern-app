import agent from "./agent";

export namespace CarApiClient {
    export const getCars = async () => {
        return agent.post("/cars");
    }
}