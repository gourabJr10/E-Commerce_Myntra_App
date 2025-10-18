import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";

function Profile() {
  return (
    <>
      <div className="text-center mt-4">
        <img
          src="images/Gourab_dp.jpeg"
          className="rounded-circle image mb-3"
          alt="Gourab_Rajak"
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />

        <h3 className="fw-bold text-center">{`Gourab Rajak, (Website Developer)`}</h3>

<div className="d-flex justify-content-center mb-1">
  <p className="me-3 mb-0">
    <strong>Age:</strong> 22
  </p>
  <p className="mb-0">
    <strong><FaLocationDot />:</strong> {`Howrah(West Bengal)`}
  </p>
</div>
<p className="mb-1 text-center"><strong><IoSchoolSharp />:</strong>{`Techno Bengal Institute Of Technology(B.Tech in Computer Science and Engineering)`}</p>
<p className="mb-1 text-center"><strong>Email:</strong> gourabrjk@gmail.com</p>
<p className="mb-3 text-center"><strong>Contact No:</strong> +91- 7595819211</p>



        {/* Social Links */}
        <div className="d-flex justify-content-center gap-3">
          <a href="https://www.instagram.com/_gourab_jr10?igsh=MTVvYmYzZXJ6NXpmcQ==" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
          <GrInstagram />
          </a>
          <a href="https://www.facebook.com/share/1M49mKvU9u/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/gourab-rajak-7907ba290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <GrLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default Profile;

