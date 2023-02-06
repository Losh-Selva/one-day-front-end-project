import Quote from './Quote';

const QuoteList = ({quotes}) => {

    const narutoQuotes = quotes.filter(element => element.anime === "Naruto" || element.anime === "Bleach" || element.anime === "One Piece")

    const quoteComponents = narutoQuotes.map((entry, i) => {
        return <Quote 
                key={i} 
                character={entry.character}
                quote={entry.quote} 
                />
    })
    return (
        <>
           {quoteComponents[0]}
        </>
        

    )
}

export default QuoteList;