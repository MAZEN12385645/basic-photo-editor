import { useLocation, useNavigate } from "react-router-dom";

function Preview() {
  const location = useLocation();
  const navigate = useNavigate();

  const image = location.state?.image; // استرجاع الصورة

  if (!image) {
    return <h3>No image uploaded. <button onClick={() => navigate("/")}>Go Back</button></h3>;
  }

  return (
    <div>
      <h2>Preview Image</h2>
      <img src={image} alt="Uploaded" style={{ maxWidth: "300px", borderRadius: "8px" }} />
      <br />
      <button onClick={() => navigate("/")}>Upload Another</button>
    </div>
  );
}

export default Preview;
  