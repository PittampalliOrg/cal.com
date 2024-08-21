import { ApiKeyModule } from "@/modules/api-key/api-key.module";
import { ApiAuthGuard } from "@/modules/auth/guards/api-auth/api-auth.guard";
import { ApiAuthStrategy } from "@/modules/auth/strategies/api-auth/api-auth.strategy";
import { DeploymentsModule } from "@/modules/deployments/deployments.module";
import { MembershipsModule } from "@/modules/memberships/memberships.module";
import { OAuthFlowService } from "@/modules/oauth-clients/services/oauth-flow.service";
import { ProfilesModule } from "@/modules/profiles/profiles.module";
import { RedisModule } from "@/modules/redis/redis.module";
import { TokensModule } from "@/modules/tokens/tokens.module";
import { UsersModule } from "@/modules/users/users.module";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    PassportModule,
    RedisModule,
    ApiKeyModule,
    UsersModule,
    MembershipsModule,
    TokensModule,
    DeploymentsModule,
    ProfilesModule,
  ],
  providers: [ApiAuthGuard, ApiAuthStrategy, OAuthFlowService],
  exports: [ApiAuthGuard],
})
export class AuthModule {}
