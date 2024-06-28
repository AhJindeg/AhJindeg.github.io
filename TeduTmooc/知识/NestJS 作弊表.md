## 特点

-   Node.js >= 12
    
-   受 Angular 启发
    
-   使用 Express 或 Fastify
    
-   支持 MVC、SSE、CORS、Swagger
    
-   支持 TypeScript 和 JavaScript
    
-   使用 Babel 编译
    
-   支持 RESTful API、RPC 和 GraphQL
    
-   遵循 SOLID 原则
    
    -   单一职责原则
    -   开放扩展封闭修改原则
    -   里式替换原则
    -   接口隔离原则
    -   依赖反转原则
-   推荐使用 joi 来校验数据
    
-   默认提供TypeORM 和 Sequelize 的集成，也支持 Mongo、Prisma 和 Knex.js
    
-   Node.js 不遵循请求/响应多线程无状态模型，而是采用单线程和事件循环模型。即 Node.js 不会为每个请求创建一个新的线程，所以单例不需要考虑竞态问题。
    
-   文档推荐的 CSRF 保护模块已经停止维护
    

## 核心概念

-   Module
-   Controller
-   依赖注入（Provider & Injectable）
-   Middleware
-   Exception Filter
-   Pipe
-   Guard

## 注意

-   class-validator 只支持 TS 不支持 JS

## 安装

bash

复制代码

`npm i -g @nestjs/cli nest new --strict project-name`

## 命令

bash

复制代码

`npm run start:dev nest g resource users # 包含模块、service、控制器、实体类、DTO、测试 nest g mo # 生成 module nest g co # 生成 controller nest g s # 生成 service`

## 装饰器

### 参数装饰器

| 装饰器 | 作用 |
| --- | --- |
| `@Request(), @Req()` | `req` |
| `@Response(), @Res()` | `res` |
| `@Next()` | `next` |
| `@Session()` | `req.session` |
| `@Param(param?: string)` | `req.params` / `req.params[param]` |
| `@Body(param?: string)` | `req.body` / `req.body[param]` |
| `@Query(param?: string)` | `req.query` / `req.query[param]` |
| `@Headers(param?: string)` | `req.headers` / `req.headers[param]` |
| `@Ip()` | `req.ip` |
| `@HostParam()` | `req.hosts` |

### 自定义装饰器

typescript

复制代码

`export const User = createParamDecorator(   (data: string, ctx: ExecutionContext) => {     const request = ctx.switchToHttp().getRequest();     const user = request.user;     return data ? user?.[data] : user;   }, );`

typescript

复制代码

``@Get() async findOne(@User('firstName') firstName: string) {   console.log(`Hello ${firstName}`); }``

typescript

复制代码

`import { applyDecorators } from '@nestjs/common'; export function Auth(...roles: Role[]) {   return applyDecorators(     SetMetadata('roles', roles),     UseGuards(AuthGuard, RolesGuard),     ApiBearerAuth(),     ApiUnauthorizedResponse({ description: 'Unauthorized' }),   ); }`

typescript

复制代码

`@Get('users') @Auth('admin') findAllUsers() {}`

## Controller

typescript

复制代码

``import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common'; import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto'; @Controller('cats') export class CatsController {   @Post()   create(@Body() createCatDto: CreateCatDto) {     return 'This action adds a new cat';   }   @Get()   findAll(@Query() query: ListAllEntities) {     return `This action returns all cats (limit: ${query.limit} items)`;   }   @Get(':id')   findOne(@Param('id') id: string) {     return `This action returns a #${id} cat`;   }   @Put(':id')   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {     return `This action updates a #${id} cat`;   }   @Delete(':id')   remove(@Param('id') id: string) {     return `This action removes a #${id} cat`;   } }``

## Service

typescript

复制代码

`import { Injectable } from '@nestjs/common'; import { Cat } from './interfaces/cat.interface'; @Injectable() export class CatsService {   private readonly cats: Cat[] = [];   create(cat: Cat) {     this.cats.push(cat);   }   findAll(): Cat[] {     return this.cats;   } }`

此时 Controller 需要添加构造函数参数：

typescript

复制代码

`@Controller('cats') export class CatsController {   constructor(private catsService: CatsService) {}   // --- }`

Module 需要添加 provider：

typescript

复制代码

`@Module({   controllers: [CatsController],   providers: [CatsService], }) export class AppModule {}`

## 定义中间件

typescript

复制代码

`import { Injectable, NestMiddleware } from '@nestjs/common'; import { Request, Response, NextFunction } from 'express'; @Injectable() export class LoggerMiddleware implements NestMiddleware {   use(req: Request, res: Response, next: NextFunction) {     console.log('Request...');     next();   } }`

## 使用管道 Pipe

typescript

复制代码

`@Get(':id') async findOne(@Param('id', ParseIntPipe) id: number) {   return this.catsService.findOne(id); }`

typescript

复制代码

`@Get(':id') async findOne(   @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))   id: number, ) {   return this.catsService.findOne(id); }`

typescript

复制代码

`@Get(':uuid') async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {   return this.catsService.findOne(uuid); }`

typescript

复制代码

`@Post() @UsePipes(new JoiValidationPipe(createCatSchema)) async create(@Body() createCatDto: CreateCatDto) {   this.catsService.create(createCatDto); }`

## 自定义管道

typescript

复制代码

`@Injectable() export class JoiValidationPipe implements PipeTransform {   constructor(private schema: ObjectSchema) {}   transform(value: any, metadata: ArgumentMetadata) {     const { error } = this.schema.validate(value);     if (error) {       throw new BadRequestException('Validation failed');     }     return value;   } }`

## 类验证器 class-validator

typescript

复制代码

`import { IsString, IsInt } from 'class-validator'; export class CreateCatDto {   @IsString()   name: string;   @IsInt()   age: number;   @IsString()   breed: string; }`

## ValidationPipe

typescript

复制代码

`@Injectable() export class ValidationPipe implements PipeTransform<any> {   async transform(value: any, { metatype }: ArgumentMetadata) {     if (!metatype || !this.toValidate(metatype)) {       return value;     }     const object = plainToInstance(metatype, value);     const errors = await validate(object);     if (errors.length > 0) {       throw new BadRequestException('Validation failed');     }     return value;   }   private toValidate(metatype: Function): boolean {     const types: Function[] = [String, Boolean, Number, Array, Object];     return !types.includes(metatype);   } }`

typescript

复制代码

`@Post() async create(   @Body(new ValidationPipe()) createCatDto: CreateCatDto, ) {   this.catsService.create(createCatDto); }`

## 默认值

typescript

复制代码

`@Get() async findAll(   @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe) activeOnly: boolean,   @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number, ) {   return this.catsService.findAll({ activeOnly, page }); }`

## 使用中间件

typescript

复制代码

`import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'; import { LoggerMiddleware } from './common/middleware/logger.middleware'; import { CatsModule } from './cats/cats.module'; @Module({   imports: [CatsModule], }) export class AppModule implements NestModule {   configure(consumer: MiddlewareConsumer) {     consumer       .apply(LoggerMiddleware, cors(), helmet(), logger)       .exclude(         { path: 'cats', method: RequestMethod.GET },         { path: 'cats', method: RequestMethod.POST },         'cats/(.*)',       )       .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });       // .forRoutes(CatsController);   } }`

## 抛出异常

typescript

复制代码

`@Get() async findAll() {   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); }`

## 抛出多个异常

typescript

复制代码

`@Get() async findAll() {   try {     await this.service.findAll()   } catch (error) {      throw new HttpException({       status: HttpStatus.FORBIDDEN,       error: 'This is a custom message',     }, HttpStatus.FORBIDDEN, {       cause: error     });   } }`

## 自定义异常

typescript

复制代码

`export class ForbiddenException extends HttpException {   constructor() {     super('Forbidden', HttpStatus.FORBIDDEN);   } }`

## 异常过滤器

typescript

复制代码

`@Catch(HttpException) export class HttpExceptionFilter implements ExceptionFilter {   catch(exception: HttpException, host: ArgumentsHost) {     const ctx = host.switchToHttp();     const response = ctx.getResponse<Response>();     const request = ctx.getRequest<Request>();     const status = exception.getStatus();     response       .status(status)       .json({         statusCode: status,         timestamp: new Date().toISOString(),         path: request.url,       });   } }`

## 绑定异常过滤器

typescript

复制代码

`@Post() @UseFilters(HttpExceptionFilter) async create(@Body() createCatDto: CreateCatDto) {   throw new ForbiddenException(); }`

typescript

复制代码

`@UseFilters(new HttpExceptionFilter()) export class CatsController {}`

typescript

复制代码

`app.useGlobalFilters(new HttpExceptionFilter());`

typescript

复制代码

`@Module({   providers: [     {       provide: APP_FILTER,       useClass: HttpExceptionFilter,     },   ], }) export class AppModule {}`

## 定义守卫

typescript

复制代码

`import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'; import { Reflector } from '@nestjs/core'; @Injectable() export class RolesGuard implements CanActivate {   constructor(private reflector: Reflector) {}   canActivate(context: ExecutionContext): boolean {     const roles = this.reflector.get<string[]>('roles', context.getHandler());     if (!roles) {       return true;     }     const request = context.switchToHttp().getRequest();     const user = request.user;     return matchRoles(roles, user.roles);   } }`

## 使用守卫

typescript

复制代码

`@Controller('cats') @UseGuards(RolesGuard) export class CatsController {     @Post()     @Roles('admin')     async create(@Body() createCatDto: CreateCatDto) {       this.catsService.create(createCatDto);     } }`

## 拦截器 Interceptor

typescript

复制代码

``@Injectable() export class LoggingInterceptor implements NestInterceptor {   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {     console.log('Before...');     const now = Date.now();     return next       .handle()       .pipe(         tap(() => console.log(`After... ${Date.now() - now}ms`)),       );   } }``