const filter = new erc20.filters.Transfer();
console.log(filter)
const logs_1 = await provider.getLogs(filter);
console.log(logs_1)
provider.getLogs(filter).then((logs) => {
  logs.forEach((log) => {
    provider.getTransaction(log.transactionHash).then((transaction) => {
      const transactionHash = transaction.hash;
      const from = transaction.from;
      const to = transaction.to;
      const method  = log.event;
      const transactionFee = transaction.gasUsed;
      console.log(transactionHash);
      console.log(from);
      console.log(to);
      console.log(method);
      console.log(transactionFee);
    }).catch((error) => {
      console.error(error);
    });
  })
}).catch((error) => {
  console.error(error);
});


