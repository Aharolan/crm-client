import SafeRouting from "../../components/safeRouting";
import CustomersTable from "../../components/graduates/CustomersTable";
import React from "react";

const Home = () => {
  return (
    <div>
      <SafeRouting>
        <CustomersTable />
      </SafeRouting>
    </div>
  );
};

export default Home;
