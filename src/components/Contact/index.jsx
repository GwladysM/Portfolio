import React from "react";
import './contact.scss';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        form.reset();

        alert(`Name: ${name} Email: ${email} Message: ${message}`);
    };

    return (
        <div id="contact" className="contact__container">
            <h2>Contact</h2>
            <div className="contact">
                <form onSubmit={handleSubmit} className="contact__form">
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
                    <button type="submit">Envoyer</button>
                </form>
                <div className="contact__info">
                    <p>Gwladys Morlier</p>
                    <p>.</p>
                    <p>Développeur Web - Front-End</p>
                    <p>.</p>
                    <p>gwladys.morlier@hotmail.fr</p>
                </div>
            </div>
        </div>
    )
}

export default Contact