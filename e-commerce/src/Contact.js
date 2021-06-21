import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: ""
    })
    const InputEvent = (event) => {
        const { name, value } = event.target
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })

    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}`)
    }
    return (
        <div >
            <h1 className="text-center">Contact Us</h1>
            <div className="container contact_div  justify-content-center  align-items-center ">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <div className="row">
                            <div className="col-12  py-4 my-4">
                                <Form onSubmit={formSubmit}>
                                    <FormGroup>
                                        <Label for="exampleEmail" className="mt-3">Name</Label>
                                        <Input type="name" name="fullname" value={data.fullname} onChange={InputEvent} id="exampleName" placeholder="Enter Your Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail" className="mt-3">Email</Label>
                                        <Input type="email" name="email" value={data.email} onChange={InputEvent} id="exampleEmail" placeholder="Enter Your Email Id" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword" className="mt-3">Phone Number</Label>
                                        <Input type="number" name="phone" value={data.phone} onChange={InputEvent} id="examplePhone" placeholder="Enter Your Phone Number" />
                                    </FormGroup>


                                    <FormGroup>
                                        <Label for="exampleText" className="mt-3">Message</Label>
                                        <Input type="text" name="message" value={data.message} onChange={InputEvent} id="exampleText" />
                                    </FormGroup>

                                    <div className="vertical-center ">
                                        <Button className="my-3 " outline color="primary" >Submit</Button>
                                    </div>

                                </Form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;