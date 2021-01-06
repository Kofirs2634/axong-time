our(); their();
setInterval(() => {
    our();
    their()
}, 10)

function lead(x) {
    return '00'.substr(String(x).length) + x
}
function our() {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    let d = new Date()
    $('.ourtime').text(`${d.getUTCDate()} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()} ${lead(d.getUTCHours())}:${lead(d.getUTCMinutes())}:${lead(d.getUTCSeconds())} UTC`)
}
function their() {
    const months = ['primum', 'secundum', 'tetrium', 'quartum', 'quintum', 'sextum', 'septimum', 'octavum', 'nonum', 'decimum', 'undecimum', 'duodecimum']
    let si = (Date.now() / 1000 - 946684800) / 0.87093,
        py = si / 336e5,
        pm = py % 1 * 12,
        pd = pm % 1 * 28,
        ph = pd % 1 * 10,
        pmi = ph % 1 * 100,
        ps = pmi % 1 * 100,
        y = 500 + Math.floor(py),
        m = 1 + Math.floor(pm),
        d = 1 + Math.floor(pd);
    $('.theirtime').text(`${d} ${months[m - 1]} ${y} ${lead(Math.floor(ph))}:${lead(Math.floor(pmi))}:${lead(Math.floor(ps))} APT`)
}