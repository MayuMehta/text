import React from 'react'

export default function Feedback(props) {
  return (
    <div className={`min-vh-100 text-${props.textColor} d-flex justify-content-center align-items-center`}>
        <div className='border rounded p-3'>
            <h2>Feedback</h2>
            <p>We value your feedback! Please let us know your thoughts and suggestions.</p>
            <form>
                <label htmlFor="name" className="fw-bold">Name:</label>
                <br />
                <input type="text" className="w-100 mb-2"/>
                <br />
                <label htmlFor="email" className="fw-bold">Email:</label>  
                <br />
                <input type="email" className="w-100 mb-2"/>
                <br />
                <label htmlFor="feedback" className="fw-bold">Feedback:</label>
                <br />
                <textarea name="feedback" id="feedback" className="w-100 mb-2" rows={5}></textarea>
                <br />
                <input type="submit" value="Submit" className="btn btn-success"/>
            </form>
        </div>
    </div>
  )
}
