import { Request, Response } from "express";

function genTriangle(req: Request, res: Response) {
  const input: any = req.query.input;

  if (Number.isNaN(input)) {
    res.status(400).send({
      status: "Failed",
      message: "Input is non a number",
    });
  }

  let tmp = [];
  const strNum = input.toString();
  for (let i = 0; i < strNum.length; i++) {
    tmp.push(`${strNum[i]}${"0".repeat(i + 1)}`)
  }

  res.status(200).send({
    status: "Success",
    data: tmp.join("</br>"),
  });
}

export default genTriangle;
