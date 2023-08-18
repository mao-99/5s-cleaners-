import { useState } from "react";
import LocationInput from "./locationInput";
import Script from "next/script";


export default function BookingForm() {
    const [serviceName, setServiceName] = useState('');
    
    const handleServiceChange = (e) => {
        setServiceName(e.target.value);
    };

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log('Form submitted');
        console.log('Service Name:', serviceName);

        const formData = new FormData(e.target);
        console.log(formData);
    }
    return (
        <div>
            <section id="main">
                <div className="container">
                    <section>
                        <header className="major">
                            <h2>Booking Form</h2>
                        </header>
                        <div className="row">
                            <form onSubmit={handleFormSubmit}>
                                <div className="mb-3">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" htmlFor="inputGroupSelect01">Service</span>
                                        <select className="form-select" id="inputGroupSelect01" onChange={handleServiceChange}>
                                            <option defaultValue>Select A Service</option>
                                            <option value="Home/Industrial Cleaning">Home/Industrial Cleaning</option>
                                            <option value="Event/Social Cleaning">Event/Social Cleaning</option>
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text">First and last name</span>
                                        <input type="text" aria-label="First name" className="form-control form-control-lg"/>
                                        <input type="text" aria-label="Last name" className="form-control form-control-lg"/>
                                    </div>
                                    <br />
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Email Address</span>
                                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                    </div>
                                    <br/>
                                    <div className="row g-3">
                                        <div className='col-md-6'>
                                            <div className="input-group input-group-lg">
                                                <span className="input-group-text">Phone Number</span>
                                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                            </div>  
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="input-group mb-3 input-group-lg">
                                                <span className="input-group-text" htmlFor="appointmentDate">Appointment Date</span>
                                                <input type="date" className="form-control" id="appointmentDate"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <LocationInput></LocationInput>
                                    </div>
                                    <div className="input-group  mb-3input-group-lg">
                                        <span className="input-group-text">Note</span>
                                        <textarea className="form-control " aria-label="With textarea"></textarea>
                                    </div>
                                    <div className="input-group mb-3 input-group-lg">
                                        <input type="file" className="form-control" id="inputGroupFile01" multiple/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
