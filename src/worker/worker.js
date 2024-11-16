onmessage = (req) => {
  const { data } = req;
  console.log("req:" + typeof data);
  postMessage(data + 1);
};
