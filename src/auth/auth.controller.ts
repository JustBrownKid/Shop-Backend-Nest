import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { OtpService } from 'src/otp/otp.service';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ResendOtpDto } from './dto/resend-otp.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly otpService: OtpService 
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateAuthDto })
  @ApiResponse({ status: 201, description: 'User successfully created.' })
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'User successfully logged in.' })
  login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData);
  }

  @Post('resend-otp')
  @ApiOperation({ summary: 'Resend OTP to user email' })
  @ApiBody({ type: ResendOtpDto })
  @ApiResponse({ status: 200, description: 'OTP has been sent to user email.' })
  async resendOtp(@Body() resendData: ResendOtpDto) {
    const { email } = resendData;
    await this.otpService.createOtp(email); 
    
    return { 
      success: true,
      message: 'A new OTP has been sent to your email address.', 
    };
  }

  @Post('verifyOtp')
  @ApiOperation({ summary: 'Verify user OTP' })
  @ApiBody({ type: VerifyOtpDto })
  @ApiResponse({ status: 200, description: 'OTP verification result.' })
  async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    const { email, otp } = verifyOtpDto;
    return await this.otpService.verifyOtp(email, otp); 
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of users.' })
  findAll() {
    return this.authService.findAll();
  }

  @Get('email/:email') 
  @ApiOperation({ summary: 'Get user by email' })
  @ApiParam({ name: 'email', description: 'User email address' })
  @ApiResponse({ status: 200, description: 'User info found by email.' })
  findByEmail(@Param('email') email: string) {
    return this.authService.findByEmail(email);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User info found by id.' })
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by id' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiBody({ type: UpdateAuthDto })
  @ApiResponse({ status: 200, description: 'User info updated successfully.' })
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User deleted successfully.' })
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
