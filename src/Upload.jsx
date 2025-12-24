import { useLocation } from "react-router-dom";

function Upload() {
  const location = useLocation();
  const file = location.state?.file; // هنا الصورة

  return (
    <div>
      {file && <img src={file} alt="uploaded" style={{ width: "300px" }} />}
    </div>
  );
}

export default Upload;
