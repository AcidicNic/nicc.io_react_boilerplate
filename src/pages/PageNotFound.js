import MainWrapper from "../components/MainWrapper";

function PageNotFound() {
  return (
    <MainWrapper tabTitle="404">
      <div className="select-none">
        <h1 className="text-9xl font-bold">404</h1>

        <p className="lg:text-3xl text-4xl font-bold tracking-tight my-3">Uh-oh!</p>

        <p className="">Page not found.</p>
      </div>
    </MainWrapper>
  );
}

export default PageNotFound;