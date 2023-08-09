import { IsEmail, IsString, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtulizaUsuarioDTO {

  @IsNotEmpty({ message: "O nome não pode estar vazio" })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: "O e-mail informado é inválido" }) 
  @EmailEhUnico({ message: "Esse e-mail já foi cadastrado"})
  @IsOptional()
  email: string;

  @MinLength(6, { message: " A senha precisa ter no mínimo 6 caracteres"})
  @IsOptional()
  senha: string;
}
