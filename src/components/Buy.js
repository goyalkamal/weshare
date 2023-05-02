import React from "react";
import Cards from "./Cards";
import "../styles/cards.css";

function Buy() {
  return (
    <>
      <div className="container1">
        <Cards
          image="https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
          name="Books"
        />
        <Cards
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          name="Shoes"
        />
        <Cards
          image="https://www.ulcdn.net/images/products/312897/original/Arabia_Dining_Table_TK_3.jpg?1609230339"
          name="Furniture"
        />
        <Cards
          image="https://us.123rf.com/450wm/bytedust/bytedust1109/bytedust110900001/10698581-clothing-symbol-set-with-bold-outlines-.jpg?ver=6"
          name="Clothes"
        />
      </div>
      <div className="container1">
        <Cards
          image="https://images.unsplash.com/photo-1518291344630-4857135fb581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMHV0ZW5zaWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          name="Utensils"
        />
        <Cards
          image="https://www.valueresearchonline.com/content-assets/images/48141_goals-and-buckets__w660__.jpg"
          name="Buckets"
        />
        <Cards
          image="https://www.wikihow.com/images/thumb/f/f5/Take-Better-Notes-Step-9-Version-2.jpg/v4-460px-Take-Better-Notes-Step-9-Version-2.jpg.webp"
          name="Notes"
        />
        <Cards
          image="https://t4.ftcdn.net/jpg/01/42/34/87/360_F_142348781_I6OPT1NpR1a4Kpyx1CFvzA3hEUUXNhtW.jpg"
          name="Accessories"
        />
      </div>
      <div className="container1">
        <Cards
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0F1B8tu4z8rMGjq4eOudy5pW00T6Lqwxrw&usqp=CAU"
          name="Mirror"
        />
        <Cards
          image="https://3.imimg.com/data3/KR/TG/MY-8834646/school-uniform-500x500.jpg"
          name="Uniforms"
        />
        <Cards
          image="https://contents.mediadecathlon.com/p2245855/k$fda466dafee1c2e7846d53bb7d69de7f/football-duffle-bag-20l-blue-red.jpg?format=auto&quality=70&f=300x0"
          name="Bags"
        />
        <Cards
          image="data:image/jpeg;base64,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"
          name="Other Items"
        />
      </div>
      {/* <div className="container1">
            <Cards image="" name="books"/>
            <Cards image="" name="books"/>
            <Cards image="" name="books"/> 
            <Cards image="" name="books"/> 
        </div> */}
    </>
  );
}
export default Buy;
