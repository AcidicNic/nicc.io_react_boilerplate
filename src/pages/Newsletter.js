import MainWrapper from '../components/MainWrapper';
import PhoneInput from 'react-phone-number-input/input';

function Newsletter() {
  return (
    <MainWrapper tabTitle="Newsletter">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-5/6 lg:ml-4">
            <h1 className="text-5xl font-bold">Newsletter</h1>
            <p className="py-6">this doesn't work yet!</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm  bg-base-200">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email <span className="text-primary font-bold">*</span></span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <PhoneInput
                  country="US"
                  value={''}
                  onChange={() => { }}
                  maxLength={16}
                  placeholder="(222) 222-2222"
                  className="input input-bordered" />
              </div>
              <div className="flex">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-primary" required />
                  <span className="flex-none ml-2 label-text text-left">blah blah blah <span className="text-primary font-bold">*</span></span>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default Newsletter;