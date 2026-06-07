export default function handler(req, response) {
    // Accettiamo solo richieste di tipo POST
    if (req.method === 'POST') {
        // Estraiamo i dati inviati dal frontend
        const { nome, cognome } = req.body;

        // Qui in futuro potrai salvare i dati in un database (es. Supabase, MongoDB)
        console.log(`Dati ricevuti su Vercel: ${nome} ${cognome}`);

        // Rispondiamo al frontend con un messaggio di successo
        return response.status(200).json({ 
            status: 'successo', 
            messaggio: `Ciao ${nome} ${cognome}, dati ricevuti su Vercel!` 
        });
    } else {
        // Se qualcuno prova a fare un accesso diverso (es. GET), diamo errore
        response.setHeader('Allow', ['POST']);
        return response.status(405).end(`Metodo ${req.method} non consentito`);
    }
