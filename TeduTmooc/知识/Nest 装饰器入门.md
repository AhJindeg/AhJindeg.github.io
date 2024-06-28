# Nest 装饰器入门

Nest.js 是一个基于 Node.js 构建的 Web 应用程序框架，它采用了许多 TypeScript 和 ES6+ 的新特性，包括装饰器。装饰器是一种特殊类型的声明，可以为类、属性、方法和参数等添加元数据。

## 装饰器的基本语法

在 Nest.js 中，您可以使用 `@` 符号将装饰器应用于类、方法和属性等。例如，您可以使用 `@Controller()` 装饰器来指定一个控制器类，使用 `@Get()` 或 `@Post()` 装饰器来指定路由方法，并使用 `@Injectable()` 装饰器来标识可注入的服务类。

typescript

复制代码

`@Controller('users') export class UsersController {   constructor(private readonly usersService: UsersService) {}   @Get()   findAll(): User[] {     return this.usersService.findAll();   }   @Get(':id')   findOne(@Param('id') id: string): User {     return this.usersService.findOne(id);   }   @Post()   create(@Body() user: CreateUserDto): void {     this.usersService.create(user);   } } @Injectable() export class UsersService {   private readonly users: User[] = [];   findAll(): User[] {     return this.users;   }   findOne(id: string): User {     return this.users.find(user => user.id === id);   }   create(user: CreateUserDto): void {     this.users.push(user);   } }`

上述示例演示了如何使用装饰器创建一个带有路由的控制器和一个可注入的服务类。在这个例子中，我们使用 `@Controller('users')` 装饰器来指定控制器路径，使用 `@Get()` 和 `@Post()` 装饰器来指定路由方法，以及使用 `@Injectable()` 装饰器来标识可注入的服务类。

## 定义自定义装饰器

您还可以定义自己的装饰器，并将其应用于类、属性、方法和参数等。例如，您可以定义一个 `@Log()` 装饰器，用于记录方法调用。

typescript

复制代码

``function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {   const originalMethod = descriptor.value;   descriptor.value = function(...args: any[]) {     console.log(`(${new Date().toISOString()}) Calling ${propertyKey} with arguments: `, args);     const result = originalMethod.apply(this, args);     console.log(`(${new Date().toISOString()}) ${propertyKey} returned: `, result);     return result;   };   return descriptor; } class MyService {   @Log()   myMethod(param1: string, param2: number): boolean {     // ...     return true;   } }``

在上面的示例中，我们定义了一个 `@Log()` 装饰器，它将在方法调用前后记录日志。我们可以将其应用于 `MyService` 类中的任何方法上，例如 `myMethod()`。

## 使用 Nest 装饰器进行元数据注入

Nest.js 还提供了一些内置的装饰器，用于元数据注入和依赖注入。其中最常用的是 `@Inject()` 装饰器，它用于依赖注入一个服务。

typescript

复制代码

`@Injectable() class MyService {   getData() {     // ...   } } @Controller('my') class MyController {   constructor(private readonly myService: MyService) {}   @Get()   getMyData(): any {     return this.myService.getData();   } }`

在上面的示例中，我们使用 `@Injectable()` 装饰器指定了一个可注入的服务类 `MyService`。在 `MyController` 类中，我们使用 `@Controller('my')` 装饰器指定控制器路径，并在构造函数中使用 `private readonly myService: MyService` 参数注入 `MyService` 的实例。这样，我们可以在控制器中轻松地调用 `MyService` 中的方法。

## 总结

装饰器是 TypeScript 和 ES6+ 中非常有用的特性，可以向类、属性、方法和参数等添加元数据。在 Nest.js 中，您可以使用内置的装饰器来简化元数据注入和依赖注入，还可以定义自己的装饰器来扩展框架的功能。希望这篇文章对于您理解 Nest 装饰器有所帮助。