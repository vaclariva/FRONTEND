// import React from "react";
// import "aos/dist/aos";
// import "./Cari.css";
// import Kategori from "./Kategori";
// import { Row, InputGroup, FormControl, Button } from "react-bootstrap";

// const Cari = () => {
//   return (
//     <div className="container-fluid mt-3">
//       {" "}
//       <Row className="mb-3">
//         <InputGroup className="input-group justify-content-start">
//           <FormControl type="text" className="form-control" placeholder="Search this blog" />
//           <div className="input-group-append">
//             <Button className="btn btn-secondary cari" type="button">
//               <i className="fa fa-search"></i>
//             </Button>
//           </div>
//         </InputGroup>
//       </Row>
//       <Kategori />
//     </div>
//   );
// };

// export default Cari;


import React, { useState } from "react";
import "aos/dist/aos";
import "./Cari.css";
import Kategori from "./Kategori";
import { Row, InputGroup, FormControl, Button } from "react-bootstrap";

const Cari = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  return (
    <div className="container-fluid mt-3">
      {" "}
      <Row className="mb-3">
        <InputGroup className="input-group justify-content-start">
          <FormControl
            type="text"
            className="form-control"
            placeholder="Cari Kategori..."
            onChange={handleSearch}
          />
          <div className="input-group-append">
            <Button className="btn btn-secondary cari" type="button">
              <i className="fa fa-search"></i>
            </Button>
          </div>
        </InputGroup>
      </Row>
      <Kategori searchText={searchText} />
    </div>
  );
};

export default Cari;
