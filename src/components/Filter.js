import React from 'react';

function Filter({setFilteredProducts}) {

  const handleTypeChange = (event) => {
   setFilteredProducts(event.target.value)
  };

  return (
    <div className="row my-3">
      <div className="col-md-6">
        <label htmlFor="productType" className="form-label" style={{marginRight:'3rem',fontSize:'medium',fontWeight:'700'}}>
          Product Type
        </label>
        <select className="form-select" id="productType" onChange={handleTypeChange}>
          <option value="">All Types</option>
          <option value="T-shirt">T-Shirt</option>
          <option value="pants">Pants</option>
          <option value="shirts">Shirts</option>
          <option value="jeans">Jeans</option>
        </select>
      </div>
    </div>
  )
};

export default Filter;