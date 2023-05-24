import { useForm } from "@formcarry/react";

const ContactForm = () => {
	const { state, submit } = useForm({ id: '33uiWyGzH5' })

	if (state.submitted) {
		return (
			<div className="card">
				<div className="card-body">
					<p className="h4">Your message was sent!</p>
					<p className="mb-1">I'll be in touch with you shortly.</p>
				</div>
			</div>
		)
	}

	return (
		<form onSubmit={submit}>
			<div className="form-floating mb-4">
				<input
					type="text"
					className="form-control"
					id="name"
					name="name"
					placeholder="John Smith"
					required
				/>
				<label htmlFor="name">Name</label>
			</div>
			<div className="form-floating mb-4">
				<input
					type="email"
					className="form-control"
					id="email"
					name="email"
					placeholder="john.smith@example.com"
					required
				/>
				<label htmlFor="email">Email</label>
			</div>
			<div className='form-floating mb-4'>
				<select id="subject" name="subject" className="form-select" defaultValue={0} aria-label="Select a subject for your message">
					<option value="0" disabled>Select a subject</option>
					<option value="Career Opportunity">Career opportunity</option>
					<option value="Freelance Project">Freelance project</option>
					<option value="Request Resume">Request resume</option>
					<option value="Question about website">Question about AnnaBaker.dev</option>
					<option value="Other">Other</option>
				</select>
				<label htmlFor="subject">Message Subject</label>
			</div>
			<div className="form-floating mb-4">
				<textarea
					className="form-control"
					id="message"
					name="message"
					placeholder="Let me know what's up"
					required
				></textarea>
				<label htmlFor="name">Message</label>
			</div>
			<button type="submit" className="btn btn-outline-dark mt-5 a">send message</button>
		</form>
	)	
}

export default ContactForm;