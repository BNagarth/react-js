import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./timing";
import items from "./data";


const allCategories = ["all", ...new Set(items.map((item) => item.timing))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activetiming, setActivetiming] = useState("");
  const [] = useState(allTimings)
  const filterItems = (timing) => {
    setActivetiming(timing);
    if (timing === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.timing === timing);
    setMenuItems(newItems);
  };
  return (
    <main>
     
        <timings
          timings={timings}
          activetiming={activetiming}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
     
    </main>
  );
};

export default App;