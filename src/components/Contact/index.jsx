import React from "react";

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
        <div id="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                />
                <label htmlFor="message">Message</label>
                <input
                    type="text"
                    id="message"
                    name="message"
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Contact