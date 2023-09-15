import "./styles.css";
import Breakfast from "./BreakfastList";
import LunchList from "./LunchList";

function Item({ name, isChecked }) {
  // return <li>{isChecked ? name + "✔" : <del> {name} </del>}</li>;
  return (
    <li>
      {name}
      {isChecked && "✔"}
    </li>
  );
}

export default function FoodList() {
  return (
    <section>
      <div className="App">
        <div className="Demo">
          <h1>Conditional Rendering</h1>
          <ul>
            <Item isChecked={true} name="Bacon, Egg & Cheese Biscuit" />
            <Item isChecked={true} name="Sausage Biscuit " />
            <Item isChecked={false} name="Hotcakes" />
          </ul>
        </div>
        <div className="Demo">
          <h1> Rendering Lists</h1>
          <Breakfast />
        </div>
        <div className="Demo">
          <h1> Filter Lists</h1>
          <LunchList />
        </div>
      </div>
    </section>
  );
}
