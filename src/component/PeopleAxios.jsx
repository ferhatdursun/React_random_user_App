import axios from "axios";
import { useState, useEffect } from "react";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";

const People = () => {
  const [kisi, setKisi] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setKisi(res.data.results[0]));
  };
  console.log(kisi);
  return (
    <div className="container_1">
      <div className="container">
        <div className="üst_1">
          <img className="foto" src={kisi.picture?.large} alt="" />
          <h3 className="kisi_name">
            {kisi.name?.title} {kisi.name?.first} {kisi.name?.last}
          </h3>
        </div>
        <div className="üst_2">
          <img src={email} width="40px" alt="" />
          <h3> {kisi.email}</h3>
        </div>
        <div className="üst_3">
          <img src={phone} width="40px" alt="" />
          <h3>{kisi.phone}</h3>
        </div>
        <div className="üst_4">
          <img src={location} width="40px" alt="" />
          <h3>
            {kisi.location?.city} - {kisi.location?.country}
          </h3>
        </div>
        <div className="üst_5">
          <h3>Age:{kisi.dob?.age}</h3>
        </div>
        <div className="üst_6">
          <h3>Register Date:{kisi.registered?.date.slice(0, 10)}</h3>
        </div>
      </div>
      <button className="btn-lg button btn-success" onClick={getUser}>
        Ferhat
      </button>
    </div>
  );
};
export default People;
