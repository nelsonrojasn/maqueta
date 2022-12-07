import React from "react"

function Footer()
{
    return (
        <footer className="text-center mt-2 bg-dark text-white pt-2 pb-2">
            <p>Dog CEO Challenge - {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;