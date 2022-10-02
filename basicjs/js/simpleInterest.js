function calculate() {
    let p = parseInt(document.getElementById("principal").value);
    console.log(p)
    let ar = parseFloat(document.getElementById("anualrate").value);
    console.log(ar)
    let year = parseInt(document.getElementById("year").value)
    console.log(year)
    let month = parseInt(document.getElementById("month").value)
    console.log(month)
    let days = parseInt(document.getElementById("days").value)
    console.log(days)

    let months = parseInt(document.getElementById("months").value)
    console.log(months)
    let time = year + (month / 12) + (days / 365);

    let si = (p * time * ar);
    console.log(si)

    document.getElementById("resut").value = si

}