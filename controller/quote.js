import quoteService from '../service/quote.js'
class QuoteController {
    async quoteList(req,res) {
        try {
            const quotes = await quoteService.quoteList()
            console.log('running')
            res.status(200).json(quotes)
        }

        catch (err) {
            console.error(err)
        }
    }
    async quoteSingle(req,res) {
        const {id} = req.params;
        try {
            const quote = await quoteService.quoteSingle(id)
            if (quote) {res.json(quote)}
    
            else {
                res
                .status(404)
                .json({"message": "Quote with that id does not exist"})
            }
        }

        catch (err) {
            console.error(err)
        }
    }
    async createQuote(req,res) {
        try {
            const id = await quoteService.createQuote(req.body)
            res.status(201).json(id)
        }

        catch (err) {
            console.error(err)
        }
    }

    async deleteQuote(req,res) {
        const {id} = req.params;
        try {
            let deleted = await quoteService.deleteQuote(id);
    
            if (deleted) {
            res.json({message: "Quote deleted"})}
        
            else {
            res.status(404).json({message: "Quote with this ID does not exist."})
            }
        }
        catch(err) {
            res
            .status(500)
            .json({message: `Quote could not be deleted ${err}`})
        }
    }

    async editQuote(req,res) {
        const editedQUOTE  = req.body;
        const {id} = req.params;
        
        if (editedQUOTE.title !== '' && editedQUOTE.text_body !== '' && editedQUOTE.img_url !== '') {
            try {
            let count = await quoteService.editQuote(id, editedQUOTE);

                if (count) {
                    res.status(200).json(editedQUOTE)
                }
        
                else { res.status(404).json({message:`The quote with the specified ID does not exist.`})}
            }
            catch(err) {
                
                    res.status(500).json({error: `The quote could not be updated ${err}`})
                
            }
        
        }
        
        else {
            res
            .status(400)
            .json({error: "missing title, description, or url"})
        }
    }
}

export default new QuoteController()