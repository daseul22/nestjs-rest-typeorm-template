import { Module } from '@nestjs/common'
import { EnvModule } from './third-party/env/env.module'
import { TypeORMWrapperModule } from './third-party/typeorm/typeorm-wrapper.module'

@Module({
  imports: [EnvModule, TypeORMWrapperModule]
})
export class AppModule {}
