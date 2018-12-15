const os = require('os')
function getIp() {
    const net = os.networkInterfaces();
    let ipv4;
    try{
        Object.values(net).forEach(element => {
            element.forEach(v => {
                if(v.family === 'IPv4' && !v.internal){
                    ipv4 = v.address;
                    throw 'break'
                } 
            })
        });
    } catch(e) {
        console.error('There was an error', e)
    }
    return ipv4;
}
module.exports = getIp()