const timeConversion = (s = '12:40:22AM') => {
    const time = s.slice(0, 8).split(':');
    const convertHour = +time[0] + 12;
    const format24 = time[0].replace(time[0], convertHour);
    console.log(typeof format24)

    if (s.includes('PM')) {

        if (+time[0] === 12) {
            time[0] = "12";
            return time.join(":");
        }
        
        time.shift();
        time.unshift(format24);
        
        return time.join(":");
        
    } else if (s.includes("AM")) {
        
        if (+time[0] === 12) {
            time[0] = "00";
            return time.join(":");
        }
        time.shift();
        time.unshift(format24);
       return s.replace("AM", '');
    }
}

console.log(timeConversion());
