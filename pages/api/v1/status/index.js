function status(request, response) {
  response.status(200).json({ chave: "00000" });
}

export default status;
