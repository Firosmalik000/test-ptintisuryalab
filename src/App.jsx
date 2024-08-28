import Color from "./component/Color";
import Rotate from "./component/Rotate";


function App() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10">
      <Color />
      <Rotate />
    </div>
  );
}

export default App;
