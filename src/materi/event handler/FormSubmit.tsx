const FormSubmit = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // mencegah reload halaman
        console.log('Form submitted');
        alert('Form Submitted!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormSubmit
