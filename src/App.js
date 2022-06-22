import React from "react";
import "./App.scss";
import ContextMenu from "./component/ContextMenu";

function App() {
  return (
    <ul>
      <h1>This is LI!!</h1>
      {[
        'This is 1 "li"',
        'This is 2 "li"',
        'This is 3 "li"',
        'This is 4 "li"',
      ].map((li) => {
        return (
          <ContextMenu
            key={li}
            buttons={[
              { label: "შეცვლა", onClick: (e) => console.log(`შეცვლა ${li}`)},
              { label: "წაშლა", onClick: (e) => console.log(`წაშლა ${li}`) },
            ]}
          >
            <li className="li">{li}</li>
          </ContextMenu>
        );
      })}
    </ul>
  );
}

export default App;
