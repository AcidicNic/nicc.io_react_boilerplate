import MainWrapper from "../components/MainWrapper";

function Home() {
  return (
    <MainWrapper tabTitle="Home">
      <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl sm:text-4xl font-bold">Home</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">meow</button>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default Home;