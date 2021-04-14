import React, { useState } from 'react';

const App = () => {

  
    // name is current data

    const [name, setName] = useState(""); //set name data hold

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
        event.preventDefault(); 
        setFullName(name);
        setLastNameNew(lastName);
    };
    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>
                        <h1> Fill The Form  {fullName} {lastNamenew} </h1>

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
