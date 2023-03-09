import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { IEnv } from '../env/env.interface'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService<IEnv>) => {
        const isDevelopment = config.getOrThrow('NODE_ENV') === 'development'
        return {
          type: 'mysql',
          host: config.getOrThrow('DB_HOST'),
          port: config.getOrThrow('DB_PORT'),
          username: config.getOrThrow('DB_USERNAME'),
          password: config.getOrThrow('DB_PASSWORD'),
          database: config.getOrThrow('DB_NAME'),
          entities: [],
          synchronize: isDevelopment
        }
      },
      inject: [ConfigService]
    })
  ]
})
export class TypeORMWrapperModule {}
