import { text, number, email, password, tel, date } from './decorator';

export default class User {

    @text
    name: string;

    @number
    age: number;

    @email
    email: string;

    @password
    password: string;

    @tel
    phone: string;

    @date
    datebirth: string;

}