const Quote = ({quote, character}) => {

    return (
        <>
        <h3>Here's your character:</h3>
        <p>{character}</p>
        <h3>The quote that most relates to you:</h3>
         <p>{quote}</p>
        </>
    )
}

export default Quote;
