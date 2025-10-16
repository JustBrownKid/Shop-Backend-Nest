import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EmailService } from 'src/email/email.service';
import { welcomeMail , registerMail} from 'src/email/email.templates';
import { OtpService } from 'src/otp/otp.service';


@Injectable()
export class AuthService {

  constructor(
    private readonly email: EmailService,
    private readonly prisma: PrismaService,
    private readonly otp: OtpService,
  ) { }

  async create(createAuthDto: CreateAuthDto) {
    const { name, email, password  , role} = createAuthDto;
    const hashedPassword = await bcrypt.hash(password, 10)
    await this.email.sendMail(
    email, 
    'Welcome to Our App!',
    registerMail(name) 
  );
    return this.prisma.users.create({ data: { name, email, password: hashedPassword  ,role} });
  }
  
 async login(loginData: LoginDto) {
  const { email, password } = loginData;
  const user = await this.prisma.users.findUnique({ where: { email } });
  if (!user) {
    throw new UnauthorizedException('Invalid credentials');
  }
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    throw new UnauthorizedException('Invalid credentials');
   }
  await this.otp.createOtp(email)
  return "Otp send";
}
  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({ where : { id : id}});
  }

  findByEmail(email: string) {
    return this.prisma.users.findUnique({ where: { email: email } });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return this.prisma.users.update({ where: {id : id}, data: updateAuthDto});
  }

  remove(id: number) {
    return this.prisma.users.delete({where : { id : id}});
  }
}
