import { useEffect, useState } from "react";
import { Table, Pagination } from "@mantine/core";

type DataEntity = {
  transactions: {
    id: string;
    first_name: string;
    last_name: string;
    date: string;
    price: string;
  }[];
  totalCount: number;
};

function Home() {
  const [data, setdata] = useState<DataEntity>();
  const [activePage, setPage] = useState(1);
  useEffect(() => {
    fetch(
      "http://localhost:8628/api/transactions/?" +
        new URLSearchParams({
          page: String(activePage),
          limit: "10",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      });
  }, [activePage]);

  return (
    <div>
      <h2>This is "Home" page</h2>
      <Table mt="xl">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Row</Table.Th>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Date</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.transactions?.map((item) => (
            <Table.Tr key={item.id}>
              <Table.Td>{item.id}</Table.Td>
              <Table.Td>{item.first_name}</Table.Td>
              <Table.Td>{item.last_name}</Table.Td>
              <Table.Td>{item.price}</Table.Td>
              <Table.Td>{new Date(item.date).toLocaleDateString()}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Pagination
        total={data ? data.totalCount / 10 : 0}
        value={activePage}
        onChange={setPage}
        mt="md"
      />
    </div>
  );
}

export default Home;
