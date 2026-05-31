const transactions = [
  {
    title: "The Green Bistro",
    amount: "-$42.50",
    date: "24 May 2024",
  },
  {
    title: "Apple Store",
    amount: "-$1,299",
    date: "22 May 2024",
  },
  {
    title: "Monthly Rent",
    amount: "-$2,100",
    date: "20 May 2024",
  },
  {
    title: "Salary Deposit",
    amount: "+$4,500",
    date: "15 May 2024",
  },
];

export default function TransactionList() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h3 className="font-semibold mb-6">
        Recent Transactions
      </h3>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.title}
            className="flex justify-between"
          >
            <div>
              <p>{tx.title}</p>
              <p className="text-sm text-zinc-500">
                {tx.date}
              </p>
            </div>

            <p>{tx.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}