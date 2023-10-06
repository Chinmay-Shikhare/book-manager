"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const transform_interceptor_1 = require("./util/interceptors/transform.interceptor");
const logger = new common_1.Logger();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = 2000;
    app.enableCors({
        origin: '*',
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Book Project')
        .setDescription("book API's")
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger-api', app, document);
    await app
        .listen(port)
        .then(() => logger.log(`Titan-be started successfully on ${port}`));
}
bootstrap();
//# sourceMappingURL=main.js.map