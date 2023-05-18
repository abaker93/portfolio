const Contact = () => {
	return (
		<form>
			<div className="form-floating mb-4">
				<input
					type="text"
					className="form-control"
					id="name"
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
					placeholder="john.smith@example.com"
					required
				/>
				<label htmlFor="email">Email</label>
			</div>
			<div className='form-floating mb-4'>
				<select id="subject" className="form-select" defaultValue={0} aria-label="Select a subject for your message">
					<option value="0" disabled>Select a subject</option>
					<option value="1">Career opportunity</option>
					<option value="2">Freelance project</option>
					<option value="3">Request resume</option>
					<option value="4">Question about AnnaBaker.dev</option>
					<option value="5">Other</option>
				</select>
				<label htmlFor="subject">Message Subject</label>
			</div>
			<div className="form-floating mb-4">
				<textarea
					className="form-control"
					id="message"
					placeholder="Let me know what's up"
					required
				></textarea>
				<label htmlFor="name">Message</label>
			</div>
			<button type="submit" className="btn btn-outline-dark mt-5 a">send message</button>
		</form>
	)	
}

export default Contact;