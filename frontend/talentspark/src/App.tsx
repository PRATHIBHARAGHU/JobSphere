import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import CompanyCard from "./components/CompanyCard";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";
import ChatPanel from "./components/Chatpanel";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} from "./Services/CompanyService";

import type { Company } from "./types/company";

function App() {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [showRegister, setShowRegister] = useState(false);

  async function fetchCompanies() {
    setLoading(true);

    try {
      const data = await getCompanies();
      setCompanies(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      fetchCompanies();
    }
  }, [token]);

  async function handleAdd(company: Company) {
    await createCompany(company);
    await fetchCompanies();
  }

  async function handleEdit(company: Company) {
    await updateCompany(company.id, company);
    await fetchCompanies();
  }

  async function handleDelete(id: number) {
    await deleteCompany(id);
    await fetchCompanies();
  }

  const handleLogin = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCompanies([]);
  };

  const handleSwitchToRegister = () => {
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
  };

  if (!token) {
    return showRegister ? (
      <Register onSwitchToLogin={handleSwitchToLogin} />
    ) : (
      <Login onLogin={handleLogin} onSwitchToRegister={handleSwitchToRegister} />
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <NavBar onLogout={handleLogout} />
      <Welcome />

      <br />

      <CompanyCard
        companies={companies}
        onadd={handleAdd}
        onedit={handleEdit}
        ondelete={handleDelete}
      />

      <JobCard />

      <ChatPanel />

      <Footer />
    </>
  );
}

export default App;