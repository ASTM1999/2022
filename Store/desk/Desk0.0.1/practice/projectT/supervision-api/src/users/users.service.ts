import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './users.interface';
import { CreateUsersDto } from './create-users.dto';
@Injectable()
export class UsersService {
    constructor(@InjectModel('users') private readonly usersModel: Model<any>) { }

    async create(createVideoDto: CreateUsersDto): Promise<Users> {
        const created = new this.usersModel(createVideoDto);
        return await created.save();
    }
    async findAll() {
        return await this.usersModel.find({}).sort({ score: 'desc' }).exec();
    }

    async put(item) {

        await this.usersModel.update(
            { _id: item._id },
            { ...item }
        ).exec();

    }

    async login(item) {
        return await this.usersModel.find({ email: item.email, password: item.password }).exec();
    }

    async approve(item) {

        await this.usersModel.update(
            { _id: item._id },
            { status: 1 }
        ).exec();

    }

    async findById(id) {
        return await this.usersModel.find({ _id: id }).exec();
    }

    async findByEmail(item) {
        return await this.usersModel.find({ email: item.email }).exec();
    }

    async removeById(id) {
        this.usersModel.remove({ _id: id }).exec();
        return true;
    }
}
