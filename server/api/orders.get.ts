export default defineEventHandler(async (event) => {
  // Simulate fetching orders from a database or external API
  const orders = [
    {
      id: "1",
      customer: "John Doe",
      total: 100,
      status: "PENDING",
    },
    {
      id: "2",
      customer: "Jane Smith",
      total: 200,
      status: "COMPLETED",
    },
  ];
  return orders;
});
