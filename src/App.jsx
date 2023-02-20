import { LinkOutlined } from "@ant-design/icons";
import { Button, Tabs, Space, Table, Tag } from "antd";
import "./App.css";

function App() {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Assets`,
      children: <Box label="Assets" />,
    },
    {
      key: "2",
      label: `Earnings`,
      children: <Box label="Earnings" />,
    },
  ];

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Account Linked",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Date Linked",
      dataIndex: "date_linked",
      key: "date_linked",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            {record.account !== "Risevest" && (
              <Tag
                color="geekblue"
                key={record.account}
                style={{ cursor: "pointer" }}
              >
                {"Set as active".toUpperCase()}
              </Tag>
            )}
            <Tag
              color="volcano"
              key={record.account}
              style={{ cursor: "pointer" }}
            >
              {"Unlink Account".toUpperCase()}
            </Tag>
          </Space>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "Nsiegbunam Jane",
      account: "Risevest",
      date_linked: "February 17, 2023",
      tags: ["active"],
    },
    {
      key: "2",
      name: "Nsiegbunam Jane",
      account: "Bamboo",
      date_linked: "February 09, 2023",
      tags: ["not active"],
    },
    {
      key: "3",
      name: "Nsiegbunam Jane",
      account: "Trove",
      date_linked: "January 14, 2023",
      tags: ["not active"],
    },
  ];

  return (
    <div className="container mt-100">
      <h1>MoneyTrack.</h1>
      <hr />
      <div className="row">
        <div className="left">
          <p>
            Our Assets API Endpoint provides all assets that a connected
            customer currently holds in their various investment accounts.
            Information such as the name of the asset, the type e.g stock, the
            cost, the returns currency, symbol, price etc are all returned.
          </p>
          <Button
            type="primary"
            icon={<LinkOutlined />}
            size="large"
            className="btn"
          >
            Link Account with Mono
          </Button>
        </div>
        <div className="right">
          <div className="card">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
        </div>
      </div>
      <div className="bottom">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

const Box = ({ label }) => {
  return (
    <div className="box">
      <li>
        <span>Name: </span>Nabors Industries Ltd
      </li>
      <li>
        <span>Type: </span>stock
      </li>
      <li>
        <span>Cost: </span>272
      </li>
      <li>
        <span>Return: </span>686
      </li>
      <li>
        <span>Quantity: </span>0.09012637
      </li>
      <li>
        <span>Currency: </span>USD
      </li>
      <div className="details">
        <li>
          <span>Symbol: </span>NBR
        </li>
        <li>
          <span>Price: </span>10,630
        </li>
        <li>
          <span>Current Balance: </span>484
        </li>
      </div>
    </div>
  );
};

export default App;
