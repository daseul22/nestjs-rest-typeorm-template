import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { ThirdPartyModule } from './third-party/third-party.module'

@Module({
  imports: [ThirdPartyModule, UserModule]
})
export class AppModule {}
