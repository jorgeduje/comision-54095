import logo from "../images/images.jfif";

const Home = () => {
  return (
    <div>
      <h1 style={{ color: "peru", fontSize: "1rem", marginTop: "10px" }}>
        Home
      </h1>
      <h2>subtitulo</h2>

      <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1710859825/images_yvdgou.jpg"
        alt=""
      />
      {/* <img src="/public/images.jfif" alt="" /> */}
      {/* <img src={logo} alt="" /> */}
    </div>
  );
};

export default Home;
