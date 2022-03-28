import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailModule,
    AuthModule,
  ],
})
export class AppModule {}
