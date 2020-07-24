import React from 'react'

export default function ScoreCard({totals: {userTotal, computerTotal}}) {
    return (
        <>
            <div className="score-card">
                <span>
                    {userTotal} : {computerTotal}
                </span>
            </div>
            <div className="role user-label">You</div>
            <div className="role comp-label">Computer</div>
        </>
    )
}