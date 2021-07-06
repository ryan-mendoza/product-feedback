import React from 'react'
import './Suggestions.css'
import SuggestionsCard from './SuggestionsCard'

function Suggestions() {
    return (
        <div className="suggestions">
            <h3>these are the suggestions</h3>
            {/* Suggestions Header */}
            <SuggestionsCard />
        </div>
    )
}

export default Suggestions
