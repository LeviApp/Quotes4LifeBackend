import quoteDAO from "../dao/quote";


class QuoteService {
    quoteList() {
        return quoteDAO.quoteList();
    }
    quoteSingle(id) {
        return quoteDAO.quoteSingle(id);
    }
    createQuote(quote) {
        const {title, text_body, img_url} = quote;
        return quoteDAO.createQuote(title,text_body,img_url);
    }
    deleteQuote(id) {
        return quoteDAO.deleteQuote(id);
    }

    editQuote(id, quote) {
        return quoteDAO.editQuote(id, quote);
    }
}

module.exports = new QuoteService()