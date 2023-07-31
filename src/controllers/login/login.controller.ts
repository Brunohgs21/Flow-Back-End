import { Response, Request } from "express";
import { createTokenService } from "../../services/login/createToken.service";

const createTokenController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const data = await createTokenService({ email, password });

  return res.json(data);
};

export { createTokenController };
