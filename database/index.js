import { Database } from '@vuex-orm/core'
import Task from '@/models/Task'
import tasks from '@/database/modules/tasks'
import User from '@/models/User'
import users from '@/database/modules/users'

const database = new Database()

database.register(Task, tasks)
database.register(User, users)

export default database
