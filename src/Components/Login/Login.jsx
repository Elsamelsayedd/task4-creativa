import React, { Component } from "react";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            click: false,
            time: new Date().toLocaleDateString(),
            date: new Date().toLocaleTimeString()
        }
    }

    handeleEmail = (eventInfo) => {

        this.setState({
            email: eventInfo.target.value
        })
        console.log(eventInfo.target.value);

    }

    handelePassword = (eventInfo) => {
        this.setState({
            password: eventInfo.target.value
        })
        console.log(eventInfo.target.value);
    }

    handeleClick = (eventInfo) => {
        console.log(eventInfo);


        this.setState({
            click: true
        })

    }

    render() {
        return (
            <>
                <h1 className="text-center font-bold text-4xl mt-5">Login</h1>

                <form className="w-1/2 mx-auto my-14">

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" value={this.state.email} onChange={this.handeleEmail} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input type="password" value={this.state.password} onChange={this.handelePassword} name="Password" id="Password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="Password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
                    </div>
                    <button type="button" onClick={this.handeleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                </form>



                {this.state.click ? <div className="my-10 text-center bg-gray-500 py-20">
                    <h1 className="text-3xl"><span className="font-bold">Welcome:</span> {this.state.email}</h1>
                    <p><span className="font-bold">You are signed up to the website at:</span> {`${this.state.time} ${this.state.date}`}</p>

                </div> : ''}
            </>
        )
    }
}

export default Login