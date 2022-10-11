import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewRoute from "./routes/overview";
import LoginRoute from "./routes/login";
import AccountRoute from "./routes/account";
import QuestionRoute from "./routes/questions_id";
import CreateQuestionRoute from "./routes/create-question";
import { UserProvider } from "./store/useUser";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OverviewRoute />} />
          <Route path="/login" element={<LoginRoute />} />
          <Route path="/account" element={<AccountRoute />} />
          <Route path="/questions/:id" element={<QuestionRoute />} />
          <Route path="/create-question" element={<CreateQuestionRoute />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
