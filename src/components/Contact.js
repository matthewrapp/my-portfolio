import React from "react";

// const encode = (data) => {
//     return Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
// }

// class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             message: ''
//         }
//     }

//     handleSubmit = (e) => {
//         fetch("/", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: encode({ "form-name": "contact", ...this.state}),
//         })
//         .then((res) => {
//             console.log(res)
//             alert('Message Sent!')
//         })
//         .catch(err => {
//             alert(err)
//         })
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     render() {
//         const { name, email, message } = this.state;
//         return (
//             <form
//             netlify
//             name="contact"
//             onSubmit={this.handleSubmit}        
//             className="lg:w-3/3 md:w-2/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//             <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
//                 Hire Me
//             </h2>
//             <p className="leading-relaxed mb-5">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
//                 suscipit officia aspernatur veritatis. Asperiores, aliquid?
//             </p>
//             <input type="hidden" name="form-name" value="contact" />
//             <div className="relative mb-4">
//                 <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//                 Name
//                 </label>
//                 <input
//                 value={name}
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 onChange={this.handleChange}            
//                 />
//             </div>
//             <div className="relative mb-4">
//                 <label htmlFor="email" className="leading-7 text-sm text-gray-400">
//                 Email
//                 </label>
//                 <input
//                 value={email}
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 onChange={this.handleChange}   
//                 />
//             </div>
//             <div className="relative mb-4">
//                 <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-400">
//                 Message
//                 </label>
//                 <textarea
//                 value={message}
//                 id="message"
//                 name="message"
//                 className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                 onChange={this.handleChange}        
//                 />
//             </div>
//             <button
//                 type="submit"
//                 className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Submit
//             </button>
//             </form>
//         )
//     }
// }

// export default Contact;

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
        .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    function clearState() {
        console.log('here')
        setName('');
        setEmail('');
        setMessage('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
        .then(res => res.json())
        .then(data => console.log(data))
        // .then(res => {
        //     if (res.status !== 200) {
        //         setName("");
        //         alert(res.statusText);
        //         return
        //     } else {
        //         setName("");
        //         alert('Message Sent!');
        //         return
        //     }
        // })
        .catch((error) => alert(error));
    }


    return (
        <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <form
            netlify
            name="contact"
            onSubmit={handleSubmit}        
            className="lg:w-3/3 md:w-2/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                Hire Me
            </h2>
            <p className="leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
                </label>
                <input
                value={name}
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}            
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
                </label>
                <input
                value={email}        
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}            
                />
            </div>
            <div className="relative mb-4">
                <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
                </label>
                <textarea
                value={message}
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}        
                />
            </div>
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
            </button>
            </form>
        </div>
        </section>
    );
}