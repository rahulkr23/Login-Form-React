import React, { useState } from 'react';

const App = () => {

    // setname is a fn jo hold karta hai updated data ko
    // name is current data

    const [name, setName] = useState("");

    const [lastName, setLastName] = useState("");

    const [fullName, setFullName] = useState("");

    const [lastNamenew, setLastNameNew] = useState("");

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    };


    const onSubmit = (event) => {
        event.preventDefault(); // preventDefault -form ko krnge submit default behavir hai prevent kro wo default behaviour nhi chyea
        setFullName(name);
        setLastNameNew(lastName);
    };
    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1> Fill The Form  {fullName} {lastNamenew} </h1>{/* jab hm ak input field pe kam kr rhe h toh ye jo element h isko form control nhi kr rha h isko react control karta hai */}

                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={inputEvent}
                            value={name} />
                        <br />

                        <input
                            type="text"
                            placeholder="Enter Your Last Name"
                            onChange={inputEventTwo}
                            value={lastName} />


                        <button type="submit"> Submit Form </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default App;