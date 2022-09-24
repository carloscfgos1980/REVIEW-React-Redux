## Changing Class-based components app to hooks app

1. Create the app with npx
2. Clean de app (delete unnecessary files).
3. Check the structure of the given Class-based components app:
   https://github.com/WincAcademy/solutions-exercises/tree/master/react-groceries-list

4. Container.js:
   4.1 - Change (class Container extends React.Component) for (const Container = () => {)

   4.2 Use useState extention from React by changing this:
   constructor(props) {
   super(props);
   this.state = {
   groceryItems: [
   { id: 1, title: "Eggs" },
   { id: 2, title: "Cheese" },
   { id: 3, title: "Garlic" },
   ],
   shoppingListItems: [
   { id: 4, title: "Onions", amount: 1 },
   { id: 5, title: "Leeks", amount: 2 },
   ],
   };
   }

   for this:
   const [grocery, setGrocery] = useState([
   { id: 1, title: "Eggs" },
   { id: 2, title: "Cheese" },
   { id: 3, title: "Garlic" },
   ])
   const [cart, setCart] = useState([
   { id: 1, title: "Onions", amount: 1 },
   { id: 2, title: "Leeks", amount: 2 },
   ])

   4.3 Get rid of all (this).

   - Check all functions for changes. Too many to describe

     4.4 Get rid of:
     render() {}

   * This is very important

   5. Pass the function for the event listener. This guy changed the name of the function everytime he passed to a child component which made it difficult to follow and understand what is going on. I kept the name to the last child component. Also passed the name of the function everytime so I didn't have to use (props).

   - Also check for all (this) which an element from class-bassed components and delete all of them.

   6. App.css
      Check the nth so I know how to give different background colors to the list. Ex:

ul.app-list li {
padding: 0.5em;
margin: 2px;
background-color: rgb(235, 165, 165);
}

ul.app-list li:nth-child(2n + 1) {
background-color: rgb(199, 118, 118);
}

## I hope this explanation mades sense in the future
