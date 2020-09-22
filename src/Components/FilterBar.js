import React, { useEffect } from "react";
import { useState } from "react";
//import data from "./data.js";
import { connect } from "react-redux";
import data from "./data";
function FilterBar(props) {
  const { products } = props;
  const [brands, setBrands] = useState(
    [...new Set(products.map((data) => data.brand))].map((brand) => {
      return {
        name: brand,
        isChecked: false,
      };
    })
  );
  useEffect(
    () =>
      setBrands(
        [...new Set(products.map((data) => data.brand))].map((brand) => {
          return {
            name: brand,
            isChecked: false,
          };
        })
      ),
    [products]
  );
  console.log("brands", brands);
  const [categories, setCategory] = useState(
    [...new Set(products.map((data) => data.category))].map((category) => {
      return {
        name: category,
        isChecked: false,
      };
    })
  );
  useEffect(
    () =>
      setCategory(
        [...new Set(products.map((data) => data.category))].map((category) => {
          return {
            name: category,
            isChecked: false,
          };
        })
      ),
    [products]
  );
  console.log("category", categories);
  const [price, setPrice] = useState(products);
  useEffect(() => setPrice(products), [products]);
  const checkedValues = (array) =>
    array.filter((item) => item.isChecked === true);
  const mappingValues = (array) => array.map((item) => item.name);

  function handlePriceChange(min, max) {
    const filteredPriceData = products.filter(
      (data) =>
        (min ? data.price > min : true) && (max ? data.price <= max : true)
    );
    setPrice(filteredPriceData);

    handleFilter(
      filteredPriceData,
      mappingValues(checkedValues(brands)),
      mappingValues(checkedValues(categories))
    );
  }
  function handleChangeBrand(event) {
    // console.log(event.target);
    brands.forEach((brand) => {
      if (brand.name === event.target.value) {
        brand.isChecked = event.target.checked;
      }
    });
    setBrands(brands);
    console.log("checkedBrands", mappingValues(checkedValues(brands)));
    handleFilter(
      price,
      mappingValues(checkedValues(brands)),
      mappingValues(checkedValues(categories))
    );
  }
  function handleChangeCategory(event) {
    // console.log(event.target);
    categories.forEach((categories) => {
      if (categories.category === event.target.value) {
        categories.isChecked = event.target.checked;
      }
    });
    setCategory(categories);
    handleFilter(
      price,
      mappingValues(checkedValues(brands)),
      mappingValues(checkedValues(categories))
    );
  }

  function handleFilter(filteredPriceData, checkedBrands, checkedCategory) {
    let filteredList = [];
    if (checkedBrands.length === 0 && checkedCategory.length === 0) {
      filteredList = filteredPriceData;
    } else if (checkedBrands.length > 0 && checkedCategory.length === 0) {
      filteredList = filteredPriceData.filter((data) =>
        checkedBrands.includes(data.brand)
      );
    } else if (checkedBrands.length === 0 && checkedCategory.length > 0) {
      filteredList = filteredPriceData.filter((data) =>
        checkedCategory.includes(data.category)
      );
    } else if (checkedBrands.length > 0 && checkedCategory.length > 0) {
      filteredList = filteredPriceData.filter(
        (data) =>
          checkedBrands.includes(data.brand) &&
          checkedCategory.includes(data.category)
      );
    }
    const action = {
      type: "FILTERED_LIST",
      payload: filteredList,
    };
    console.log("filteredList", filteredList);
    props.dispatch(action);
  }

  return (
    <div className="mainFrame-filters">
      <h5 className="filters-title mb-4">Filters</h5>
      <section class="mb-4">
        <div class="md-form md-outline mt-0 d-flex justify-content-between align-items-center">
          <input
            type="text"
            id="search12"
            class="form-control mb-0"
            placeholder="Search..."
          />

          <button class="btn btn-flat btn-md px-3 waves-effect">
            <i class="fas fa-search fa-lg"></i>
          </button>
        </div>
      </section>
      <div className="filters-content">
        <div>
          <section class="mb-4">
            <div className="filters">
              <h6 class="font-weight-bold mb-3">Brand</h6>
            </div>
            <div>
              <div>
                <input type="checkbox" id="all" />

                <label for="all">All</label>
              </div>
              {brands.map((item, i) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      id={i}
                      value={item.name}
                      onChange={handleChangeBrand}
                      //{() => props.handleBrandFilter(item.name)}
                    />
                    <label for={i}>{item.name}</label>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div>
          <section class="mb-4">
            <div className="filters">
              <h6 class="font-weight-bold mb-3">Price</h6>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(null, null)}
              />
              <label for="new">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(null, 25)}
              />
              <label for="new">under 25 dollars</label>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(25, 50)}
              />
              <label for="new">25 - 50 dollars</label>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(50, 100)}
              />
              <label for="new">50 - 100 dollars</label>
            </div>
            <div>
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(100, null)}
              />
              <label for="new">100 and above dollars</label>
            </div>
          </section>
        </div>
        <div>
          <section class="mb-4">
            <div className="filters">
              <h6 class="font-weight-bold mb-3">Category</h6>
            </div>
            <div>
              {categories.map((item, i) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      id={i}
                      value={item.name}
                      onChange={handleChangeCategory}
                    />
                    <label for={i}>{item.name}</label>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div>
          <div className="filters">
            <h6>Lorem ipsum</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
//export default FilterBar;
