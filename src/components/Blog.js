import React from "react";
// import { ReactDOM } from "react";
import "../styles/blog.css";
import Div from "./Div";
function Blog() {
  return (
    <div className="main">
      <h1 className="phead mainhead">Our Initiatives</h1>
      <p className="smallp phead">Small steps towards sustainability</p>

      <div className="slider-container">
        <div className=" phead parent">
          <Div
            img="https://www.thekabadiwala.com/images/landing/our-initiative/tetra-pak-initiative.webp"
            heading="Tetra Pak Initiative"
            para="The Kabadiwala collaborated with TetraPak India (World’s Leading Beverage Carton Manufacturer) to increase the collection of used beverage cartons (UBC’s) for recycling and diverting them from landfills."
          />
          <Div
            img="https://www.thekabadiwala.com/images/landing/our-initiative/mattress-circular-economy.webp"
            heading="Mattress Circular Journey"
            para="ISPF, IPUA and The Kabadiwala came together to initiate India’s first mattress recycling campaign which is named as ‘Feko Nahi Recycle Karo’. The objective is to encourage the community to practise sustainable disposal of Mattress."
          />
          <Div
            img="https://www.thekabadiwala.com/images/landing/our-initiative/tree-plantation-initiative.webp"
            heading="Tree Plantation Initiative"
            para="Since the last two years, The Kabadiwala has been following a tradition of planting trees on the occasion of Mahatma Gandhi's Birthday. In which, our customers also take part in our mission to turn Bhopal greener."
          />
          <Div
            img="https://www.thekabadiwala.com/images/landing/our-initiative/kitab-ghar.webp"
            heading="Kitab Ghar"
            para="Kitab Ghar initiative is a combined effort of The Kabadiwala & Bhopal Municipal Corporation that aims at providing second hand books to the underprivileged children by acquiring them from the people who no longer need them."
          />
          <Div
            img="https://www.thekabadiwala.com/images/landing/our-initiative/plastic-wall-experiment.webp"
            heading="Plastic Wall Experiment"
            para="On International Plastic Bag Free day, The Kabadiwala placed a wall made up of polythene bags, wrappers, and plastic packing material, in a busy market area to block people’s way. Click below to learn why we did this."
          />
        </div>
      </div>
    </div>
  );
}
export default Blog;
