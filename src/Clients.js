function Clients({ data }) {
  const { first, last, email, address, balance, created } = data;

  return (
    <tr>
      <td>{first}</td>
      <td>{last}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{balance}</td>
      <td>{created}</td>
    </tr>
  );
}

export default Clients;
