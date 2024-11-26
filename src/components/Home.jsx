import Center from "./Center";
import Footer from "./Footer";
import Leftside from "./Lefside";
import Navbar from "./Navbar";
import RightSide from "./Rightside";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <Navbar></Navbar>

        <div class="container my-4">
          <div class="row">
            <div class="col">
              <Leftside></Leftside>
            </div>
            <div class="col">
              {" "}
              <Center></Center>
            </div>
            <div class="col">
              {" "}
              <RightSide></RightSide>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
