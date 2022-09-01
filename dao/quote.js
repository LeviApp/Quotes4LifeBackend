import db from "../dbConfig";

class QuoteDAO {

    async quoteList() {
        try {
            return db('quotes');
        }
        catch (err) {
            console.log("Something went wrong.", err)
        }
    }

    async quoteSingle(id) {
        try {
            return db('quotes')
            .where('id', id).first();
        }
        catch (err) {
            console.log("Something went wrong.", err)
        }
    }
    
    async createQuote(title,text_body,img_url) {

    try {
        const [id] = await db('quotes')
        .insert({
            title: title,
            text_body: text_body,
            img_url: img_url
        })
        .returning('id')

    }

    catch (err) {
        console.log("Something went wrong.", err)
    }
    }

    async deleteQuote(id) {

        try {
            return db('quotes')
            .where('id', id)
            .first()
            .del();
        }
    
        catch (err) {
            console.log("Something went wrong.", err)
        }
        }

    async editQuote(id, quote) {

        try {
            return db('quotes').where('id', id).first().update(quote);
        }
    
        catch (err) {
            console.log("Something went wrong.", err)
        }
        }
}

module.exports = new QuoteDAO()
