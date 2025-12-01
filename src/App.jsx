// --- Configuration imports ---
import { USE_MOCKS, API_URL } from "./config";

// --- Logs (executed once at startup) ---
console.log("🔥 Data mode:", USE_MOCKS ? "MOCKS" : "API");
if (!USE_MOCKS) console.log("🌍 API URL:", API_URL);

// --- Router ---
import Router from "./Router";

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;