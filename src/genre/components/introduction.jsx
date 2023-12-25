import React from 'react'

export const Introduction = ({ title, children }) => {
    return (
        <article className="bg-neutral-300 p-4 rounded-xl m-5 ">
            <h2 className="text-center text-4xl font-semibold uppercase">
                {title}
            </h2>
            <p className="mt-2">
                {children}
            </p>
        </article>
    )
}
