

export default function Contact() {
 
    return (
        <>
            <h1 className="my-5 text-center">Contact Page</h1>

            <form className="row g-3 needs-validation container my-5 mx-auto w-25">
                <div className="col-md-12">
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-12">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                </div>
                <div className="col-md-12">
                    <label className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>

                
            </form>
        </>
    )
}