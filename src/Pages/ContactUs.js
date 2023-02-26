import React from "react";
const ContactUs = () => {
//   const sendEmail = (e) =>{
//        e.preventDefault();
//        emailjs.sendForm('service_o6wjz6a', 'template_e2klmnl', e.target, 'lYpZLeRzAA4j2Tdju')
//        .then(res=>{
//         console.log(res)
//        }).catch(err=>
//         console.log(err))
//        ;
//   }
  return (
    <div className="mt-8 lg:mt-16">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src="https://static.vecteezy.com/system/resources/previews/003/578/834/non_2x/online-support-illustration-flat-design-concept-vector.jpg" class="hidden lg:block lg:max-w-lg maz-w-sm rounded-lg lg:ml-60" alt="" />
          <form>
          <div className="lg:ml-8">
            <h1 class="text-3xl font-bold text-center font-mono mb-4">Contact Us</h1>
            <div className="text-center">
              <input type="text" placeholder="Name" name="name" className="form-control input w-72 max-w-lg border rounded-full border-blue-400 mb-4" />
              <input type="email" placeholder="Email" name="user_email" className="form-control input w-72 max-w-xs border rounded-full border-blue-400 mb-4" />
              <textarea
                className="form-control textarea w-72 max-w-xs rounded-lg border border-blue-400"
                placeholder="Your message"
                name="message"
                rows={6}
              ></textarea>
            </div>
            <div className="flex justify-center">
            <input type="submit" value="Submit" class="form-control cursor-pointer py-1 px-4 border rounded-full border-red-500 text-white bg-red-500 font-semibold mt-3 mb-3">
              </input>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;