import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { User } from './Models/auth_model';
import { auth_repository } from './repository/auth_repository';

@Module({

  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),       // we need to specicaaly import them bec they are samll frameworks and  they can be customised do they are like more of dependencies whereas the other librrary has fixed work and can be modified therefor no need to add injectable theer
JwtModule.register({
  secret: "topsecret51",   // topsecretkey that is what your token will be signed with
  signOptions:{
    expiresIn:3600,
  }
})
  ],
  controllers: [AuthController],
  providers: [AuthService, {
     provide:"auth_repository",
    useClass:auth_repository
}, JwtStrategy],
exports:[JwtStrategy, PassportModule]    // passport module and jwtstrategy go in hand in hand as authmodule needs a strategy and auth module is part of passport module
})
export class AuthModule {}
