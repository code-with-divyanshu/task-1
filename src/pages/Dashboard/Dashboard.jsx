import Topbar from "../../components/Topbar/Topbar";
import IncomeCard from "../../components/IncomeCard/IncomeCard";
import Schedule from "../../components/Schedule/Schedule";
import ClientsActivity from "../../components/ClientsActivity/ClientsActivity";
import TaskCompletion from "../../components/TaskCompletion/TaskCompletion";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="dashboard-content">
        <div className="income-section">
          <IncomeCard
            title="Revenue"
            amount="$876,00"
            sub="$645,00 + $231,00"
            highlight="+17%"
            color="yellow"
          />
          <IncomeCard
            title="Service revenue"
            amount="$435,00"
            sub="$355,00 + $80,00"
            highlight="+7%"
          />
          <IncomeCard
            title="Earned today"
            amount="$344,00"
            sub="$208,00 + $136,00"
            highlight="+27%"
          />
        </div>

        <div className="main-section">
          <Schedule />
          <div className="right-section">
            <ClientsActivity />
            <TaskCompletion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
