import MainWrapper from "../components/MainWrapper";
import PhoneInput from "react-phone-number-input/input";

function Section0() {
  return (
    <MainWrapper tabTitle="Section0">

      <div className="max-w-md mx-5">

        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">sign up</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
            ipsa culpa autem, at itaque nostrum!
          </p>
        </div>
        
        <form className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered rounded-lg" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email <span className="text-primary font-bold rounded-lg">*</span></span>
            </label>

            <input type="email" placeholder="email" className="input input-bordered rounded-lg" required />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <PhoneInput
              country="US"
              value={""}
              onChange={() => { }}
              maxLength={16}
              placeholder="(222) 222-2222"
              className="input input-bordered col-span-6 sm:col-span-3 rounded-lg" />
          </div>
          <div className="flex mt-4">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary" required />
              <span className="flex-none ml-2 label-text text-left">blah blah blah blah blah <span className="text-primary font-bold">*</span></span>
            </label>
            <div className="form-control grow ">
              <button className="btn btn-primary ml-auto px-7 pt-1">Sign Up</button>
            </div>
          </div>
          
        </form>

      </div>

    </MainWrapper>
  );
}

export default Section0;
