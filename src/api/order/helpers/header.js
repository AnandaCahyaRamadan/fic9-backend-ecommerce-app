require('dotenv').config();

const generateToken = () => {
    // const xendit_api_key = "xnd_development_RprMQzjeoLm2Mi2YWQeDlcDuJ5nrTegOanZ6V8BbpjyCqBkANuOF1EXmEt8ic2" + ":";
    const xendit_api_key = process.env.XENDIT_KEY + ":";
    const base64 = Buffer.from(xendit_api_key).toString('base64');
    return base64;
}

exports.xenditHeaders = {
    'Authorization':'Basic '+generateToken(),
    'Content-Type':'application/json',
}