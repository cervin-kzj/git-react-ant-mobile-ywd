export const FormatTimestamp = (timestamp) => {
    let date = new Date(parseInt(timestamp));
    let year = date.getFullYear();
    let month = ((date.getMonth() + 1) + "").padStart(2, "0");
    let day = (date.getDate() + "").padStart(2, "0");
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

