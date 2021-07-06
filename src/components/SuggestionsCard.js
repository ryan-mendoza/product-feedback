import React, { useEffect, useState } from 'react'
import axios from 'axios';

function SuggestionsCard() {

    const [suggestions, setSuggestions] = useState('');

    useEffect(() => {
        axios.get('data.json')
            .then((response) => {
                console.log(response.data.productRequests);
                setSuggestions(response.data.productRequests)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])



    return (
        <div className="suggestions__card">
            {suggestions && suggestions.map(suggestion => (

                <div className="cardData">
                    <p className="cardData__upvotes">{suggestion.upvotes}</p>
                    <h2>{suggestion.title}</h2>
                    <p className="suggestions__description">{suggestion.description}</p>
                </div>
                
            ))}
        </div>
    );
}

export default SuggestionsCard
