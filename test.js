// 1. Define the domain model
class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  
  // 2. Create the Repository interface
  class UserRepository {
    async save(user) {}
    async findById(id) {}
    async findAll() {}
    async deleteById(id) {}
  }
  
  // 3. Implement the Repository
  class MongoDBUserRepository extends UserRepository {
    async save(user) {
      // code to save user to MongoDB
    }
  
    async findById(id) {
      // code to find user by id in MongoDB
    }
  
    async findAll() {
      // code to find all users in MongoDB
      const users = await db.collection('users').find().toArray();
      return users.map((user) => new User(user._id, user.name, user.email));
    }
  
    async deleteById(id) {
      // code to delete user by id in MongoDB
    }
  }
  
  // 4. Define the Service interface
  class UserService {
    async getAllUsers() {}
  }
  
  // 5. Implement the Service
  class DefaultUserService extends UserService {
    constructor(userRepository) {
      super();
      this.userRepository = userRepository;
    }
  
    async getAllUsers() {
      return await this.userRepository.findAll();
    }
  }
  
  // 6. Define the Controllers
  class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async getAllUsers(req, res) {
      const users = await this.userService.getAllUsers();
      res.send(users);
    }
  }
  
  // 7. Implement the Controllers
  const userRepository = new MongoDBUserRepository();
  const userService = new DefaultUserService(userRepository);
  const userController = new UserController(userService);
  
  app.get('/users', userController.getAllUsers.bind(userController));
  