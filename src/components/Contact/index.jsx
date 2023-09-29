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
                <form
                    onSubmit={handleSubmit}
                    className="contact__form"
                    action="https://api.staticforms.xyz/submit"
                    method="post">
                    <input type="hidden" name="accessKey" value="75ca14ec-1452-4f64-9774-3f5b77294dc5" />
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
                    <p>Développeur Web - Front-End</p>
                    <p>gwladys.morlier@hotmail.fr</p>
                    <a href="afficher-mon-cv" target='_blank'>
                        <button className="moncv">
                            Mon Curriculum Vitae
                            <img src="/assets/vue.png" alt="Voir mon C.V." />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact