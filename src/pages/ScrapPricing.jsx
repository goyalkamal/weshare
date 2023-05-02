import React, { useState } from "react";
import classNames from "classnames";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import {
  Search as SearchIcon,
  Menu as MenuIcon,
  Newspaper as NewspaperIcon,
  Construction as ConstructionIcon,
  Computer as ComputerIcon,
  Keyboard as KeyboardIcon,
} from "@mui/icons-material";

const CITIES = ["Delhi", "Chandigarh"];
const CATEGORIES = [
  {
    name: "Paper",
    icon: NewspaperIcon,

    description:
      "Paper is manufactured in thin sheets from the pulp of wood or other fibrous substances. Paper scrap includes newspaper, books cartons, magazines, Beverage carton etc.",

    imageUrl:
      "https://www.thekabadiwala.com/images/scrap-prices/scrap-paper.webp",

    items: [
      {
        name: "Newspaper",
        pricePerKg: 15,
      },
      {
        name: "Books",
        pricePerKg: 12,
      },
      {
        name: "Carton",
        pricePerKg: 13,
      },
      {
        name: "Magazines",
        pricePerKg: 7,
      },
      {
        name: "White Papers",
        pricePerKg: 7,
      },
      {
        name: "Grey Board",
        pricePerKg: 2,
      },
      {
        name: "Record Paper",
        pricePerKg: 7.5,
      },
      {
        name: "Plain Paper",
        pricePerKg: 0,
      },
      {
        name: "Rough Paper",
        pricePerKg: 0,
      },
      {
        name: "Carton (Commercial)",
        pricePerKg: 13,
      },
      {
        name: "Copy",
        pricePerKg: 7,
      },
      {
        name: "Used Beverage Carton (Tetra Pack)",
        pricePerKg: 5,
      },
    ],
  },
  {
    name: "Plastic",
    icon: KeyboardIcon,

    description:
      "Plastics are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. HDPE, LDPE, MLP, PVC, PP, PET etc. are types of plastics used for different purposes.",

    imageUrl:
      "https://www.thekabadiwala.com/images/scrap-prices/scrap-plastic.webp",

    items: [
      {
        name: "Soft Plastic",
        pricePerKg: 6,
      },
      {
        name: "Hard Plastic",
        pricePerKg: 1,
      },
      {
        name: "Mix Plastic",
        pricePerKg: 4,
      },
      {
        name: "Milk Covers",
        pricePerKg: 2,
      },
      {
        name: "Water/Oil Covers",
        pricePerKg: 0,
      },
      {
        name: "Polythene (Mix)",
        pricePerKg: 5,
      },
      {
        name: "HPP",
        pricePerKg: 0,
      },
      {
        name: "Plastic Jar (15ltr)",
        pricePerPiece: 10,
      },
      {
        name: "Fibre",
        pricePerKg: 4.5,
      },
      {
        name: "Plastic Jar (5ltr)",
        pricePerPiece: 3,
      },
      {
        name: "Polythene",
        pricePerKg: 8,
      },
      {
        name: "Plastic Bori",
        pricePerKg: 1,
      },
    ],
  },
  {
    name: "Metal",
    icon: ConstructionIcon,

    description:
      "Scrap metal are an important source of industrial metals and alloys, particularly in the production of steel, copper, lead, aluminum, and zinc. Smaller amounts of tin, nickel, magnesium, and precious metals are also recovered from scrap.",

    imageUrl:
      "https://www.thekabadiwala.com/images/scrap-prices/scrap-metal.webp",

    items: [
      {
        name: "Iron",
        pricePerKg: 15,
      },
      {
        name: "Tin",
        pricePerKg: 12,
      },
      {
        name: "Steel",
        pricePerKg: 22,
      },
      {
        name: "Brass",
        pricePerKg: 250,
      },
      {
        name: "Copper",
        pricePerKg: 240,
      },
      {
        name: "Aluminium",
        pricePerKg: 70,
      },
      {
        name: "Oil Tin 15 Ltr (Fresh)",
        pricePerPiece: 10,
      },
      {
        name: "Oil Tin 15 Ltr (Scrap)",
        pricePerPiece: 5,
      },
      {
        name: "Casting Aluminium",
        pricePerKg: 35,
      },
      {
        name: "Oil Tin 5 Ltr",
        pricePerPiece: 3,
      },
    ],
  },
  {
    name: "E-Waste",
    icon: ComputerIcon,

    description:
      "E-waste is electronic products that are unwanted, not working, and nearing or at the end of their “useful life.” It includes TV, refrigerator, mobile phones, printers etc.",

    imageUrl:
      "https://www.thekabadiwala.com/images/scrap-prices/scrap-e-waste.webp",

    items: [
      {
        name: "E-waste",
        pricePerKg: 8.5,
      },
      {
        name: "Fridge",
        pricePerPiece: 300,
      },
    ],
  },
  {
    name: "Others",
    icon: NewspaperIcon,

    description:
      "It includes beer bottles, women’s hair, mix-waste, tyre, mattresses etc.",

    imageUrl:
      "https://www.thekabadiwala.com/images/scrap-prices/scrap-others.webp",

    items: [
      {
        name: "Beer Bottles",
        pricePerPiece: 0.5,
      },
      {
        name: "Mix-waste",
        pricePerKg: 3,
      },
      {
        name: "Battery",
        pricePerKg: 70,
      },
      {
        name: "Tyre",
        pricePerKg: 3,
      },
    ],
  },
];

const ScrapPricing = (props) => {
  const [city, setCity] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchBoxFocused, setSearchBoxFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="scrap-pricing mt-8 mx-8">
      <h2 className="text-5xl text-center font-medium mb-8">Scrap Prices</h2>

      <div className="grid grid-cols-[10rem_1fr] gap-6">
        <FormControl fullWidth>
          <InputLabel id="city-select-label">City</InputLabel>
          <Select
            labelId="city-select-label"
            id="city-select"
            value={city}
            label="City"
            onChange={(event) => setCity(event.target.value)}
          >
            {CITIES.map((city, index) => (
              <MenuItem value={city} key={index}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div
          className={classNames("search-input-container", {
            selected: searchBoxFocused,
          })}
        >
          <div className="search-icon-container">
            <SearchIcon />
          </div>
          <input
            type="search"
            placeholder="Search any materials..."
            onFocus={() => setSearchBoxFocused(true)}
            onBlur={() => setSearchBoxFocused(false)}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value?.toLowerCase())}
          />
        </div>
      </div>

      <div className="category-list-container">
        <div
          className={classNames("category-list-item", {
            selected: selectedCategory === "All",
          })}
          onClick={() => setSelectedCategory("All")}
        >
          <MenuIcon />
          <span>All</span>
        </div>

        {CATEGORIES.map((currentCategory, index) => (
          <div
            className={classNames("category-list-item", {
              selected: selectedCategory === currentCategory.name,
            })}
            key={index}
            onClick={() => setSelectedCategory(currentCategory.name)}
          >
            <currentCategory.icon />
            <span>{currentCategory.name}</span>
          </div>
        ))}
      </div>

      <div className="categories-container">
        {CATEGORIES.map((category, index) =>
          (selectedCategory === "All" || selectedCategory === category.name) &&
          JSON.stringify(category.items).toLowerCase().includes(searchText) ? (
            <>
              {index !== 0 && selectedCategory === "All" && <hr />}
              <div className="category-container">
                <div className="category-details">
                  <img src={category.imageUrl} alt="" />
                  <h2>{category.name}</h2>
                  <div className="description">{category.description}</div>
                </div>
                <div>
                  <div className="category-items">
                    {category.items.map(
                      (item) =>
                        item.name.toLowerCase().includes(searchText) && (
                          <div className="item">
                            <h3>{item.name}</h3>
                            <div className="price-container">
                              <span className="price">
                                &#8377;{item.pricePerPiece || item.pricePerKg}
                              </span>
                              <span className="weight">
                                {item.pricePerPiece ? "/piece" : "/kg"}
                              </span>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )
        )}
      </div>
    </section>
  );
};

export default ScrapPricing;
