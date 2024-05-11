function Time() {
    // let date = new Date().toLocaleString() + ","
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return(
        <h2>
            {hours}:{minutes}:{seconds} PM;
        </h2>
    );
}

export default Time;