export default function handler(req, response) {
    // Gestione della Privacy e Sicurezza dei metodi HTTP
    if (req.method !== 'POST') {
        response.setHeader('Allow', ['POST']);
        return response.status(405).end(`Metodo ${req.method} non consentito`);
    }

    // Estraiamo in modo sicuro le coordinate inviate dal body della richiesta JSON
    const { latitudine, longitudine } = req.body;

    // Validazione base dei dati ricevuti
    if (!latitudine || !longitudine) {
        return response.status(400).json({ 
            status: 'errore', 
            messaggio: 'riprova' 
        });
    }

    // Nota lato privacy: Questo log sarà visibile SOLO a te nella dashboard di Vercel.
    // Gli utenti esterni o malintenzionati non possono vedere questi log.
    console.log(`[LOG SICURO] Nuova coordinata ricevuta: Lat ${latitudine}, Lon ${longitudine}`);

    // Risposta inviata al client
    return response.status(200).json({ 
        status: 'successo', 
        messaggio: 'riprova' 
    });
}
