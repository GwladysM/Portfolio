import React from "react";
import './contact.scss';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        form.reset();

        console.log("envoyé");
    };

    const pdfPath = process.env.PUBLIC_URL + '/Gwladys_Morlier_CV_2024.pdf';

    return (
        <div id="contact" className="contact__container">
            <h2>Contact</h2>
            <div className="contact">
                <form
                    className="contact__form"
                    action="https://api.staticforms.xyz/submit"
                    method="post">
                    <input type="hidden" name="accessKey" value="75ca14ec-1452-4f64-9774-3f5b77294dc5" />
                    <input type="hidden" name="redirectTo" value="https://gwladysm.github.io/Portfolio" />
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                    />
                    <button type="submit" onSubmit={handleSubmit}>Envoyer</button>
                </form>
                <div className="contact__info">
                    <p>Gwladys Morlier</p>
                    <p>Développeur Web - Front-End</p>
                    <p>gwladys.morlier@hotmail.fr</p>
                    <a href={pdfPath} target='_blank' rel="noreferrer" className="moncv">
                        Mon C.V.
                        <img src="./assets/vue.png" alt="Voir mon C.V." />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact