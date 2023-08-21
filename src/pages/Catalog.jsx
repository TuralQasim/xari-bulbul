import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import HowWork from "../components/HowWork";
import Map from "../components/Map";
import Lider from "../components/Lider";
import Reviews from "../components/Reviews";
import Product from "../components/Product";
import Range from "../components/Range";
import ScrollTop from "../components/ScrollTop";
import { GoChevronDown } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutSide } from "../hooks/useClickOutSide";

function Catalog({
  categories,
  products,
  pricesFilter,
  dinWords,
  language,
  linkCat,
  dispatch,
}) {
  const words = dinWords[language].catalog;
  const sortRef = useRef(null);
  const forSorting = (arr) => {
    if (sort == words.sortItem1) {
      const a = arr.sort((a, b) => {
        const c = a.title;
        const d = b.title;
        if (c < d) {
          return -1;
        }
        if (c > d) {
          return 1;
        }
        return 0;
      });
      return a;
    } else if (sort == words.sortItem2) {
      const a = arr.sort((a, b) => {
        return a.price - b.price;
      });
      return a;
    } else {
      const a = arr.sort((a, b) => {
        return b.price - a.price;
      });
      return a;
    }
  };
  const [values, setValues] = useState([pricesFilter[0], pricesFilter[1]]);
  const [sort, setSort] = useState(words.sortItem1);
  useEffect(() => {
    setSort(words.sortItem1);
  }, [language]);
  const [sortOpen, setSortOpen] = useState(false);
  const beforePricesProd = products.filter((a) => {
    if (linkCat) {
      return (
        a.category_id == linkCat && a.price > values[0] && a.price < values[1]
      );
    } else {
      return a.price > values[0] && a.price < values[1];
    }
  });
  const pricesProd = forSorting(beforePricesProd);
  const [checkedCat, setCheckedCat] = useState([]);
  const getCategory = (e) => {
    dispatch({
      type: "CHECK_CAT",
      payload: "",
    });
    if (e.target.checked == true) {
      setCheckedCat((arr) => [...arr, +e.target.value]);
    } else {
      setCheckedCat((arr) => arr.filter((a) => a != +e.target.value));
    }
  };
  const beforeCatProd = products.filter((a) => {
    if (linkCat) {
      return (
        a.category_id == linkCat && a.price > values[0] && a.price < values[1]
      );
    } else {
      return (
        checkedCat.includes(a.category_id) &&
        a.price > values[0] &&
        a.price < values[1]
      );
    }
  });

  const catProd = forSorting(beforeCatProd);
  useClickOutSide(sortRef, () => {
    if (sortOpen) {
      setSortOpen(false);
    }
  });
  return (
    <>
      <img src="./icons/flower_bg.svg" className="flower_cat" alt="" />
      <h1 className="container catalog_title">{words.catalog}</h1>
      <div className="catalog container">
        <div className="filter">
          <h2 className="filter_title">{words.category}</h2>
          <ul>
            {categories.map((a) => {
              return (
                <li key={a?.id}>
                  <label>
                    {" "}
                    <input type="checkbox" onClick={getCategory} value={a.id} />
                    {a?.category}
                  </label>
                </li>
              );
            })}
          </ul>
          <h2 className="filter_title">{words.price}</h2>
          <Range setValues={setValues} />
        </div>
        <div className="cataloq_products">
          <div className="cataloq_products_hero">
            <div className="sorting">
              <p>
                {words.sorting}{" "}
                <button onClick={() => setSortOpen(!sortOpen)}>
                  {sort} <GoChevronDown />
                </button>
              </p>
              {sortOpen && (
                <AnimatePresence>
                  <motion.ul
                    initial={{
                      y: 20,
                    }}
                    animate={{
                      y: 0,
                    }}
                    exit={{
                      y: 20,
                    }}
                    className="sort_dropdown"
                    ref={sortRef}
                  >
                    <p
                      className={
                        sort == `${words.sortItem1}` ? "sortP" : "notSort"
                      }
                      onClick={() => {
                        setSort(words.sortItem1), setSortOpen(false);
                      }}
                    >
                      {words.sortItem1}
                    </p>
                    <p
                      className={
                        sort == `${words.sortItem2}` ? "sortP" : "notSort"
                      }
                      onClick={() => {
                        setSort(words.sortItem2), setSortOpen(false);
                      }}
                    >
                      {words.sortItem2}
                    </p>
                    <p
                      className={
                        sort == `${words.sortItem3}` ? "sortP" : "notSort"
                      }
                      onClick={() => {
                        setSort(words.sortItem3), setSortOpen(false);
                      }}
                    >
                      {words.sortItem3}
                    </p>
                  </motion.ul>
                </AnimatePresence>
              )}
            </div>
            {checkedCat.length || linkCat ? (
              catProd.length ? (
                catProd.map((a) => {
                  return <Product key={a.id} data={a} />;
                })
              ) : (
                <h2 className="pro_not_found">{words.notFound}</h2>
              )
            ) : (
              pricesProd.map((a) => {
                return <Product key={a.id} data={a} />;
              })
            )}
          </div>
        </div>
      </div>
      <Lider />
      <Reviews />
      <HowWork />
      <Map />
      <ScrollTop />
    </>
  );
}

const t = (a) => a;
export default connect(t)(Catalog);
