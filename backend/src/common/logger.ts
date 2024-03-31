export default (msg: string) => {
    const t = new Date();
    let hour = t.getHours().toString();
    let minutes = t.getMinutes().toString();

    hour = hour.length > 1  ? hour : `0${hour}`;
    minutes = minutes.length > 1 ? minutes : `0${minutes}`;

    console.log(`[LOG]-[${hour}:${minutes}] ${msg}`);
}