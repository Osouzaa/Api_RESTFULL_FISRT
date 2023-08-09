import { IsEmail, IsString, MinLength, IsNotEmpty } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class CriaUsuarioDTO {

  @IsNotEmpty({ message: "O nome não pode estar vazio" })
  nome: string;

  @IsEmail(undefined, { message: "O e-mail informado é inválido" }) 
  @EmailEhUnico({ message: "Esse e-mail já foi cadastrado"})
  email: string;

  @MinLength(6, { message: " A senha precisa ter no mínimo 6 caracteres"})
  senha: string;
}
